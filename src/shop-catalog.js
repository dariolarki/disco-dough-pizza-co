// Shared shop catalog — imported by the storefront (src/App.jsx) and by the
// Stripe checkout function (api/checkout.js). Deliberately free of React,
// Vite, and Node-only imports so both sides can load it unchanged, and so the
// server never has to trust a price the browser sent it.
//
// Prices below are the *listed* prices and are pre-shipping. Stripe adds the
// shipping rate at checkout and shows it before the customer pays, so their
// total = item price + shipping.

export const CURRENCY = "usd";

// Guardrails for the checkout endpoint — a cart that exceeds either of these
// is rejected rather than quietly clamped.
export const MAX_QUANTITY_PER_LINE = 20;
export const MAX_CART_LINES = 12;

export const COOKIE_PACKS = [
  {
    id: "cookie-pack-4",
    category: "cookies",
    name: "Sourdough Cookie 4-Pack",
    shortName: "4-Pack",
    unitCount: 4,
    unitNoun: "cookie",
    priceCents: 1300,
    description: "Four sourdough cookies, 80–90 g each — a small box for a good night in.",
  },
  {
    id: "cookie-pack-6",
    category: "cookies",
    name: "Sourdough Cookie 6-Pack",
    shortName: "6-Pack",
    unitCount: 6,
    unitNoun: "cookie",
    priceCents: 1800,
    description: "Six sourdough cookies, 80–90 g each — enough to share, barely.",
  },
  {
    id: "cookie-pack-12",
    category: "cookies",
    name: "Sourdough Cookie 12-Pack",
    shortName: "12-Pack",
    unitCount: 12,
    unitNoun: "cookie",
    priceCents: 3200,
    description: "Twelve sourdough cookies, 80–90 g each — the box you bring to the party.",
  },
];

// Shelf-stable dry kits — a pre-measured flour blend plus instructions, not
// fermented dough. Ball counts are what a kit *makes*, which is also how it's
// priced. Nothing here is perishable, so it ships ground with no cold chain.
export const DOUGH_KITS = [
  {
    id: "dough-kit-5",
    category: "dough-kits",
    name: "Dry Dough Kit — makes 5 dough balls",
    shortName: "5 Balls",
    unitCount: 5,
    unitNoun: "ball",
    priceCents: 2200,
    description: "Pre-measured dry flour blend and instructions — enough for five dough balls.",
  },
  {
    id: "dough-kit-10",
    category: "dough-kits",
    name: "Dry Dough Kit — makes 10 dough balls",
    shortName: "10 Balls",
    unitCount: 10,
    unitNoun: "ball",
    priceCents: 3800,
    description: "Pre-measured dry flour blend and instructions — enough for ten dough balls.",
  },
  {
    id: "dough-kit-20",
    category: "dough-kits",
    name: "Dry Dough Kit — makes 20 dough balls",
    shortName: "20 Balls",
    unitCount: 20,
    unitNoun: "ball",
    priceCents: 6500,
    description: "Pre-measured dry flour blend and instructions — enough for twenty dough balls.",
  },
];

export const SHOP_PRODUCTS = [...COOKIE_PACKS, ...DOUGH_KITS];

const PRODUCTS_BY_ID = new Map(SHOP_PRODUCTS.map((product) => [product.id, product]));

export function productById(id) {
  return PRODUCTS_BY_ID.get(id) ?? null;
}

// Cost per cookie / per dough ball. Used for the value line on each card and
// to mark the best-value size, so those never drift from the prices above.
export function unitPriceCents(product) {
  return product.priceCents / product.unitCount;
}

// "$13" for whole dollars, "$13.50" otherwise — matches how the rest of the
// site writes prices on the menu.
export function formatUsd(cents) {
  const dollars = cents / 100;
  return Number.isInteger(dollars) ? `$${dollars}` : `$${dollars.toFixed(2)}`;
}

// Always two decimals — for per-unit figures, where "$3" reads like a typo
// next to "$3.25".
export function formatUsdExact(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}
