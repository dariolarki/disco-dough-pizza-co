// Stripe Checkout session creator — the primary, automated order path.
//
// The browser posts a cart of { id, quantity } pairs; prices are looked up
// server-side from src/shop-catalog.js so a tampered client can't set its own
// price. Stripe then collects the shipping address, adds the shipping rate,
// shows the total before payment, and emails the receipt.
//
// Backend pass still to come (all deliberately env-driven so no code change is
// needed to turn them on):
//   STRIPE_SECRET_KEY        — required; without it the endpoint reports
//                              "not_configured" and the storefront falls back
//                              to the manual Zelle/Venmo path.
//   STRIPE_SHIPPING_RATE_IDS — comma-separated shr_… ids created in the Stripe
//                              dashboard once ship weights are settled. Until
//                              set, sessions are created with no shipping line.
//   STRIPE_AUTOMATIC_TAX     — "true" to enable Stripe Tax once sales tax is
//                              registered.
//   STRIPE_TAX_CODE          — Stripe tax code for the goods (there are
//                              separate codes for prepared vs. unprepared
//                              food); pairs with STRIPE_AUTOMATIC_TAX.
//   ORDER_NOTIFICATION_EMAIL — stamped onto session metadata for order routing.

import {
  CURRENCY,
  MAX_CART_LINES,
  MAX_QUANTITY_PER_LINE,
  productById,
} from "../src/shop-catalog.js";

const STRIPE_SESSIONS_URL = "https://api.stripe.com/v1/checkout/sessions";

function readEnvList(name) {
  return (process.env[name] || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

// Vercel parses JSON bodies for us, but be tolerant of a raw string body so
// this behaves the same under `vercel dev` and any future local runner.
function parseBody(body) {
  if (!body) return {};
  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  return typeof body === "object" ? body : {};
}

// Returns { lines } on success or { error } with a customer-safe message.
function normalizeCart(rawItems) {
  if (!Array.isArray(rawItems) || rawItems.length === 0) {
    return { error: "Your cart is empty." };
  }
  if (rawItems.length > MAX_CART_LINES) {
    return { error: "That's more line items than we can check out at once." };
  }

  const byId = new Map();
  for (const item of rawItems) {
    const product = productById(String(item?.id ?? ""));
    if (!product) return { error: "One of those items is no longer available." };

    const quantity = Number(item?.quantity);
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > MAX_QUANTITY_PER_LINE) {
      return { error: `Quantities need to be between 1 and ${MAX_QUANTITY_PER_LINE}.` };
    }

    // Fold duplicate ids into one line so a repeated id can't be used to slip
    // past the per-line quantity cap.
    const running = (byId.get(product.id)?.quantity ?? 0) + quantity;
    if (running > MAX_QUANTITY_PER_LINE) {
      return { error: `Quantities need to be between 1 and ${MAX_QUANTITY_PER_LINE}.` };
    }
    byId.set(product.id, { product, quantity: running });
  }

  return { lines: [...byId.values()] };
}

function appendLineItem(params, index, product, quantity) {
  const key = `line_items[${index}]`;
  params.append(`${key}[quantity]`, String(quantity));
  params.append(`${key}[price_data][currency]`, CURRENCY);
  params.append(`${key}[price_data][unit_amount]`, String(product.priceCents));
  // Listed prices are pre-tax, so tax is added on top rather than backed out.
  // Stripe ignores this until Stripe Tax is switched on, but it has to be set
  // before automatic_tax will accept an inline price.
  params.append(`${key}[price_data][tax_behavior]`, "exclusive");
  params.append(`${key}[price_data][product_data][name]`, product.name);
  params.append(`${key}[price_data][product_data][description]`, product.description);
  if (process.env.STRIPE_TAX_CODE) {
    params.append(`${key}[price_data][product_data][tax_code]`, process.env.STRIPE_TAX_CODE);
  }
}

function requestOrigin(req) {
  const proto = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  return `${proto}://${host}`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return res.status(503).json({
      code: "not_configured",
      error: "Card checkout isn't switched on yet.",
    });
  }

  const { items } = parseBody(req.body);
  const { lines, error } = normalizeCart(items);
  if (error) return res.status(400).json({ error });

  const params = new URLSearchParams();
  params.append("mode", "payment");
  lines.forEach(({ product, quantity }, index) => {
    appendLineItem(params, index, product, quantity);
  });

  // Stripe needs an address before it can price shipping, and the address is
  // what the customer sees the shipping line attached to on the payment page.
  params.append("shipping_address_collection[allowed_countries][0]", "US");
  params.append("billing_address_collection", "auto");

  // Empty until the ship-weight pass — Stripe simply omits the shipping line
  // rather than erroring, so the page stays usable in the meantime.
  readEnvList("STRIPE_SHIPPING_RATE_IDS").forEach((rateId, index) => {
    params.append(`shipping_options[${index}][shipping_rate]`, rateId);
  });

  if (process.env.STRIPE_AUTOMATIC_TAX === "true") {
    params.append("automatic_tax[enabled]", "true");
  }

  if (process.env.ORDER_NOTIFICATION_EMAIL) {
    params.append("metadata[order_notification_email]", process.env.ORDER_NOTIFICATION_EMAIL);
  }
  params.append("metadata[source]", "discodoughpizzaco.com/shop");

  const origin = requestOrigin(req);
  params.append("success_url", `${origin}/shop?order=success&session_id={CHECKOUT_SESSION_ID}`);
  params.append("cancel_url", `${origin}/shop?order=canceled`);

  try {
    const stripeResponse = await fetch(STRIPE_SESSIONS_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    const session = await stripeResponse.json();

    if (!stripeResponse.ok || !session?.url) {
      console.error("Stripe checkout session failed:", session?.error ?? session);
      return res.status(502).json({ error: "We couldn't start checkout. Please try again." });
    }

    return res.status(200).json({ url: session.url });
  } catch (cause) {
    console.error("Stripe checkout session threw:", cause);
    return res.status(502).json({ error: "We couldn't start checkout. Please try again." });
  }
}
