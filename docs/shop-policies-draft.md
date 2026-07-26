# Shop policy copy — DRAFTS

Working drafts for the `/shop` page. **Nothing here is on the site yet.** Once
you've corrected these, they get pasted into `SHOP_POLICIES` and
`SHOP_ALLERGENS` in `src/App.jsx` and they'll render automatically.

Anything in `[BRACKETS]` is a decision only you can make — I've left it blank
rather than guess, because a policy that's wrong is worse than one that's
missing. Each section says why the blank matters.

---

## 1. Refunds & returns

> **Draft.** Because everything we ship is perishable, we don't take general
> returns. What we do take seriously: if your order shows up damaged, melted,
> crushed, or just not right, send us a photo within `[WINDOW]` of delivery and
> we'll `[REMEDY]`. No forms, no runaround — just email us and we'll sort it.
>
> If a package is lost or badly delayed in transit, tell us and we'll `[LOST]`.

**Decisions needed:**

- `[WINDOW]` — how long after delivery can someone report a problem? *48 hours*
  is the norm for perishables and it's easy to defend. Longer is friendlier but
  harder to distinguish "arrived damaged" from "sat on the counter for a week."
- `[REMEDY]` — replace it, refund it, or your choice? Suggested wording:
  *"replace it on the next shipping day or refund you in full — your pick."*
  Giving the customer the choice costs little at your volume and reads generous.
- `[LOST]` — carriers lose packages and it is never the customer's fault. Most
  small shippers reship once at their own cost. Decide now so you're not
  deciding it while upset.

**Why it matters:** Stripe lets a customer dispute a charge with their bank for
120 days. A written, visible policy is the single most useful thing you can
show if that ever happens. It also stops you having to invent an answer under
pressure.

---

## 2. Shipping

> **Draft.** We ship Monday through Thursday so nothing sits in a truck over
> the weekend. Orders placed after `[CUTOFF]` go out on the next shipping day.
> Everything travels via `[CARRIER]`, and most orders arrive in
> `[TRANSIT]` days. We ship within the `[AREA]` only for now.
>
> Shipping is calculated at checkout and shown before you pay. In Austin?
> Skip shipping entirely — message us about local pickup or delivery.

**Decisions needed:**

- `[CUTOFF]` — the daily order cutoff, e.g. *"noon CT"*. Set it earlier than
  feels necessary; you'll want the buffer.
- `[CARRIER]` and `[TRANSIT]` — fill in after you've priced a few real boxes.
- `[AREA]` — the code currently restricts checkout to **US addresses only**.
  If you want Texas-only or a shorter radius to start, say so and I'll narrow
  it. Shipping cookies cross-country in July is a different problem than
  shipping them to Dallas; the dry kits travel fine anywhere.

**Why it matters:** the two shipping lines you gave me are already on the page.
This section is the fuller version for people who want detail before ordering.

### Packed weights (Branden, 26 Jul — estimates)

Cookies are ~90 g each, shipped in a cardboard box with no cooling material.

| SKU | Cookies | Packed weight |
|---|---|---|
| 4-pack | ~360 g | ~1 lb |
| 6-pack | ~540 g | ~1.5 lb |
| 12-pack | ~1,080 g | ~2.75–3 lb |
| Kit, 5 ball | — | pending |
| Kit, 10 ball | — | pending |
| Kit, 20 ball | — | pending |

Box dimensions pending — Branden is sourcing the actual boxes. Kits will be
heavier than the cookies (it's flour) and are likely the larger shipping cost
of the two, so they probably want their own rate rather than sharing one with
cookies.

**Suggested rate structure**, once dimensions land — three flat rates in the
Stripe dashboard, not live carrier rates:

1. Cookies only — priced off the 12-pack, so the light packs subsidise nothing
2. Kits only — priced off the 20-ball kit
3. Mixed order — cookies + kits

Round each one up. Under-charging shipping is the most common way a small food
business quietly loses money on every order.

---

## 3. Ingredients & allergens

This is the one I can't draft for you — it depends on your recipes and your
kitchen. Below is a checklist, not a claim. **Nothing here goes on the site
until Branden signs off line by line.**

The nine allergens US labelling treats as major: **milk, eggs, fish,
shellfish, tree nuts, peanuts, wheat, soybeans, sesame.**

### First: which flavours actually ship?

Branden flagged that the shipped cookie is chocolate chip, and he's right to —
the pistachio and coconut in my earlier draft came from the **events menu** in
`src/App.jsx`, not from anything about the shop:

- "Dubai Chocolate Chip Mini Cookie Pie" — pistachio
- "German Chocolate Mini Cookie Pie" — coconut, which the FDA classes as a tree nut
- "Classic Chocolate Chip Cookie Pie"

I carried those across to the shop packs. That was an assumption, and if the
packs are chocolate chip only, it's the wrong one — listing a tree nut that
isn't in the product is its own kind of inaccurate.

**This needs resolving either way, because the product photos have the same
problem.** The 4-pack and 6-pack cards currently use `cookie5.jpg` and
`cookie3.jpg`, and both visibly show pistachio-topped and chocolate-slab
cookies. So one of two things is true:

- **Packs are chocolate chip only** → the photos are wrong and need swapping,
  and the allergen list drops tree nuts
- **Packs are an assortment** → the photos are right, and tree nuts belong on
  the list after all

Answering that question fixes the copy and the photography together.

### Cookie packs — to confirm

| Allergen | Present? | Why it's on the list |
|---|---|---|
| Wheat | ☐ | flour |
| Milk | ☐ | butter, milk chocolate |
| Eggs | ☐ | standard cookie dough |
| Soy | ☐ | soy lecithin is in most chocolate — worth checking the bag |
| Tree nuts | ☐ | **only if** the packs include Dubai or German chocolate |
| Peanuts | ☐ | only if used, or shared equipment |
| Sesame | ☐ | only if used |

> **Draft statement, once confirmed:** Contains `[LIST]`. Baked in a kitchen
> that also handles `[SHARED]`.

### Dry dough kits — to confirm

| Allergen | Present? | Why it's on the list |
|---|---|---|
| Wheat | ☐ | flour blend |
| Milk | ☐ | only if anything dairy is in the blend |
| Soy | ☐ | only if the blend includes it |

> **Draft statement, once confirmed:** Contains `[LIST]`. Packed in a kitchen
> that also handles `[SHARED]`.

**Open question on the kits:** does the kit include a starter, or does the
customer need their own? The page currently says "pre-measured dry flour blend
and instructions" and stops there, which is safe either way — but it changes
whether we can call the kits sourdough, and it's the first thing a customer
will ask.

**Decisions needed:**

- `[LIST]` — the allergens actually in that product.
- `[SHARED]` — the "may contain" line. If cookies and pizza dough share a
  bench, a mixer, or an oven, that belongs here. This is the line that protects
  someone with a serious allergy, and it's the one small kitchens most often
  skip.

**Why it matters:** this is the only item on the whole list where getting it
wrong can hurt somebody rather than just cost money. It's also the reason I'd
want it filled in before the first real order ships, even at low volume.

If a per-flavour breakdown gets unwieldy on the page, the alternative is one
honest sentence — *"every pack may contain wheat, milk, egg, soy, and tree
nuts"* — plus an invitation to email. Less precise, but safe, and much easier
to keep accurate as flavours rotate.

---

## 4. Order questions

> **Draft.** Questions about an order, an allergy, a big batch, or a date you
> need it by? Email us at Discodoughpizzaco@outlook.com and you'll get a real
> person — usually within `[REPLY]`.
>
> Planning something bigger? Catering and events have their own page.

**Decisions needed:**

- `[REPLY]` — a response time you can actually hit on a busy week. *"a day or
  two"* is honest and unglamorous; *"24 hours"* is a promise you'll eventually
  miss.

---

## When these are ready

Send them back with the brackets filled and I'll wire them into `SHOP_POLICIES`
and `SHOP_ALLERGENS`. The page already has the slots — the policy cards and the
per-product allergen lines appear on their own as soon as the text exists, so
it's a paste, not a rebuild.
