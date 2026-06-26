# Mahika — Designer Made-to-Measure E-Commerce Site

> Requirements-phase artifact. Captures *what* must be true for success and *why*. Stops before *how* (architecture, files, libraries, tasks) — that is delegated to `/plan`.

## Problem

Mahika ("Mahika Designs" / @mahika.creations) is a Kerala-based women's designer-wear label whose entire commerce runs through Instagram DMs and WhatsApp. There is **no website, no browsable catalog, no visible pricing, and delivery is Kerala-only**. Every sale begins with a "DM for price" round-trip, inventory is buried in a reverse-chronological feed, and the brand's core differentiator — **made-to-measure custom fit and hand craft** — cannot be discovered, browsed, or ordered self-serve. Having just opened a physical shop (grand opening June 16–18, 2026), the label has momentum but no digital storefront to convert reach into orders or to sell beyond Kerala. The cost of leaving this unsolved: continued manual-labor bottleneck on every order, a hard ceiling on geographic growth, and a premium craft product presented with no premium brand presence.

## Evidence

Grounded in a scrape of the live @mahika.creations account (profile + 30 most recent posts), June 2026:

- **Bio confirms the model**: *"Designer dresses with custom sizing options. Style inspired. Comfort ensured. All Kerala Delivery. DM for enquiries | Order via WhatsApp."* The only external link is a `wa.me` WhatsApp link — no website.
- **Price opacity is systemic**: captions repeatedly read *"DM for price details" / "DM to make it yours"* — pricing is never shown publicly.
- **Made-to-measure is the recurring promise**: *"sizes can be customisable," "Customisation available in any color of your choice," "Customizable Design"* appear across most posts.
- **Craft + premium fabric is the story**: Chanderi, Mulchanderi, cotton, linen, muslin, organza, modal; *"hand-worked embroidery," "thread work," "appliqué," "delicate threadworks."*
- **Occasion-led demand**, especially Christian-calendar moments: *"easterspecialdress," "chruchwear," "baptismcollection,"* plus festive/Eid, office, brunch, wedding-guest.
- **Small but warm audience**: 584 followers, 52 posts; post likes 13–99, video views up to ~2k (one reel ~4.7k plays). No analytics platform exists — engagement is the only available signal.
- **Physical retail just launched**: three most recent posts are grand-opening content (*"New space, same passion. Welcome to Mahika,"* location Koothattukulam).
- **Brand identity is unsettled**: name appears as both "Mahika Creations" (handle) and "Mahika Designs" (profile name); no logo system, palette, or voice is codified.

> ⚠️ **No baseline web/sales metrics exist.** All target numbers in Success Metrics are **assumptions — needs validation via analytics instrumented at launch + first 90 days of order data.**

## Users

- **Primary — "The Occasion Dresser" (Kerala women, ~22–45)**: shops for everyday elegance *and* specific moments (church/Easter/baptism, festive/Eid, office, wedding-guest, brunch). Values comfort, modest-elegant silhouettes, natural fabrics, and the assurance of a fit made for her body. Today she discovers Mahika on Instagram and is forced into a DM to learn price and order.
- **Secondary — "The Distance Buyer" (pan-India / displaced Malayali)**: wants Kerala boutique craft and custom fit but cannot visit the shop. Unlocked by the phased pan-India milestone.
- **Operator — Mahika's owner/team**: must run catalog, pricing, custom-fit requests, and orders without a heavier workload than today's WhatsApp flow.
- **Not for**: fast-fashion bargain hunters; buyers wanting instant same-day generic-size dispatch with zero personalization; wholesale/bulk B2B buyers (out of scope at launch).

## Hypothesis

We believe a **browsable, transparently-priced catalog with an on-site made-to-measure flow that completes the order over WhatsApp** will **remove the discovery/pricing/sizing friction that currently bottlenecks every sale and caps the brand at Kerala** for **occasion-dressing women who want custom-fit Kerala designer wear**.

We'll know we're right when **a meaningful share of orders originate from catalog-driven, pre-qualified WhatsApp conversations (customer already knows the product, price, and has submitted measurements) rather than cold "DM for price" inquiries — and the first verified pan-India order ships.**

## Success Metrics

| Metric | Target (first 90 days post-launch) | How measured | Confidence |
|---|---|---|---|
| Catalog-originated WhatsApp orders | ≥ 50% of total orders start from a site "Order on WhatsApp" / measurement submission | Pre-filled WhatsApp message tag + operator log | Assumption — validate |
| "DM for price" cold inquiries | Reduced vs. pre-launch baseline | Operator comparison; IG/WhatsApp inquiry type | Assumption — needs baseline capture before launch |
| Made-to-measure submissions | ≥ 30% of product detail views that proceed submit a fit/customisation request | On-site funnel analytics | Assumption — validate |
| First pan-India order | ≥ 1 verified order shipped outside Kerala within the pan-India milestone window | Order/shipping record | Binary milestone |
| Brand presence | Single consistent brand name, logo, and identity live across site + IG bio + WhatsApp | Manual audit | Deterministic |
| Site → WhatsApp handoff completion | ≥ 70% of started WhatsApp handoffs arrive with product + size context intact | Pre-filled message integrity check | Assumption — validate |

## Scope

**Commerce model (decided):** Catalog → WhatsApp checkout. The site is a full, transparently-priced, browsable catalog; the **order completes over WhatsApp** with product, price, size/measurements, and customisation context pre-attached. No on-site payment or cart at launch.

**Market (decided):** **Kerala-first at launch, pan-India as an explicit fast-follow milestone.**

**Custom sizing (decided):** **Full made-to-measure flow** is a first-class, on-site experience (standard sizes + guided measurement capture + customisation options), feeding a structured WhatsApp handoff. Measurement scope is tiered (see *Made-to-Measure Specification* below): essentials captured on-site, fine detail confirmed over WhatsApp.

**Pricing (decided — default):** **Prices are published openly** on every product (base price + explicit additive customisation pricing). A narrow *"Price on request"* lane is reserved only for bridal/heavy-bespoke pieces. This is the central friction fix; hiding prices would recreate the "DM for price" bottleneck. *Owner sign-off on open pricing is the one item still pending (see Open Questions).*

**Brand name (decided):** Primary name **"Mahika"**; descriptor *made-to-measure designer wear · Kerala*. "Creations"/"Designs" drop from the logo lockup. IG handle `@mahika.creations` retained to preserve follower equity unless a cleaner handle is secured. *Pending: a trademark/availability check on "Mahika" in apparel before printing labels.*

**Goals (decided): all four** — sell beyond Kerala, kill the DM bottleneck, build the brand, and showcase product / drive footfall. The MVP is sequenced so each milestone advances these without overbuilding.

**MVP — the minimum to test the hypothesis**
- A branded, mobile-first storefront (most traffic arrives from Instagram on mobile).
- Browsable product catalog with **visible prices**, filterable/groupable by occasion, fabric, colour, and size.
- Product detail pages with rich craft/fabric imagery, fabric & care info, available sizes, and customisation options.
- **Made-to-measure flow**: standard size selection + guided measurement capture + colour/customisation choices.
- **WhatsApp handoff**: a single action that opens WhatsApp pre-filled with the selected product, price, size/measurements, and customisations.
- A coherent **brand identity** (resolved name, logo, palette, type, voice) applied consistently.
- "Visit us" presence for the physical shop (location, hours, footfall driver).
- Lightweight analytics to capture the baseline the Success Metrics depend on.

**Out of scope (at launch)**
- On-site payment / cart / checkout — *deferred; WhatsApp completion is the decided model. Revisit only if WhatsApp handoff proves to be the conversion bottleneck.*
- International / NRI shipping — *deferred; not selected in market scope.*
- Customer accounts, wishlists, loyalty — *deferred; no evidence of need at current scale.*
- Inventory/stock-sync automation, ERP — *deferred; manual catalog management acceptable at current SKU count.*
- Bulk/wholesale B2B — *out of audience.*
- Blog/editorial content engine beyond launch storytelling — *deferred to content-strategy milestone if justified.*

## Brand & Creative Direction
<!-- Requirements-level brand intent the user explicitly requested. Direction and principles only — no implementation (no fonts-as-files, libraries, or code). -->

**Positioning (draft for sign-off):** *Mahika — made-to-measure designer wear from Kerala, crafted for women who dress for real life and real occasions.* Boutique intimacy (custom fit, hand craft, personal service) made browsable and orderable from anywhere, without losing the human touch.

**Brand name (decided):** Primary name **"Mahika"** — the equity customers already use, tag, and search; "Creations"/"Designs" are generic filler that dilute a premium read. Logo lockup:

> **MAHIKA**
> *made-to-measure · Kerala*

Rationale: single-word naming is the norm for credible Indian labels (Suta, Okhai, Raw Mango); it ends the current "Creations" vs "Designs" split that signals "not yet established." IG handle stays `@mahika.creations` to preserve the 584-follower tag history (brand ≠ handle). Pending only: a trademark/availability check on "Mahika" in apparel.

**Visual direction — light luxury / editorial boutique:**
- **Palette** drawn from their own garments: warm ivory/cream base, soft pastels (blush, onion-pink, aquatic green, royal blue accents), deep-green and muted neutrals for grounding. Premium-warm, not loud.
- **Typography**: a refined high-contrast serif for display + a clean humanist sans for UI/body — character and pairing strategy, not a default stack.
- **Imagery**: fabric and craft macro photography (thread work, weave, drape) used as hero texture; product on body for silhouette; generous whitespace and editorial rhythm over uniform card grids.
- **Layering & hierarchy**: scale contrast, intentional spacing rhythm, surface/overlap depth — must not read as a default template store.

**Motion direction** (clarity over spectacle, compositor-friendly only):
- Slow, soft reveals evoking fabric drape (fades, gentle rise, subtle parallax on hero/craft imagery).
- Restraint as a luxury signal — no aggressive carousels or bouncy UI.
- Honor reduced-motion preferences; motion never blocks browsing or the WhatsApp handoff.

**Content strategy & voice:**
- **Voice**: warm, graceful, confident, lightly poetic — extend their existing caption tone (*"effortless," "breezy," "timelessly classy," "wrapped in comfort and confidence"*) into product copy, fit guidance, and microcopy.
- **Product storytelling**: every product leads with craft + fabric + occasion + fit assurance, not just a name.
- **Occasion-led merchandising**: organize and seasonally feature around real demand moments (Easter/church, baptism, festive/Eid, wedding-guest, office, everyday).
- **Trust & craft proof**: surface hand-work, fabric provenance, customisation, and customer gratitude (their own "behind every order is a story" sentiment).
- **Channel coherence**: site, Instagram bio, and WhatsApp speak as one brand; Instagram remains top-of-funnel driving to the catalog.

## Made-to-Measure Specification
<!-- Requirements-level: what to capture and where. No form-field implementation detail. -->

Principle: **capture the minimum on-site to make a confident garment; confirm fine detail over WhatsApp.** Over-asking kills conversion; under-asking ruins fit.

**Tier A — on-site, required for every made-to-measure order:** bust/chest, waist, hip, full length (shoulder→hem), height, and a standard size (S–XXL) as the anchor/sanity-check.

**Tier B — on-site, optional / occasion-dependent:** shoulder width, sleeve length & type, neckline preference, top/blouse length (for 3-piece sets).

**Customisation (structured choices, not free-text only):** colour change, fabric note (Chanderi/cotton/linen/muslin/organza/modal), sleeve/neckline/length adjustments, occasion tag (Easter-church / baptism / festive / wedding-guest / office / everyday — also powers merchandising), plus an "anything else" box.

**Tier C — confirmed over WhatsApp (deliberately not on-site):** embroidery placement/density, lining & finishing, final measurement verification, delivery date, bridal/heavy-bespoke specifics.

**Required companion — "How to measure" helper:** illustrated self-measurement guide ("measure over fitted clothing, tape snug not tight"). Self-measurement error is the top risk in remote made-to-measure; this guide is what makes the pan-India milestone viable — it is not optional.

**Returns/alterations stance:** made-to-measure items are crafted to the customer's numbers and are non-returnable, but **one free fit alteration** is offered. Stating this plainly makes the measurement step feel safe rather than risky.

## Delivery Milestones
<!-- Business outcomes, not engineering tasks. /plan turns each into a plan. -->
<!-- Status: pending | in-progress | complete -->

| # | Milestone | Outcome | Status | Plan |
|---|---|---|---|---|
| 1 | Brand foundation | One resolved brand name, logo, palette, type, and voice — the identity system every surface uses | pending | — |
| 2 | Catalog storefront (Kerala) | Mobile-first, transparently-priced, browsable catalog live; customers can discover and filter product without DMing for price | pending | — |
| 3 | Made-to-measure flow | On-site standard-size + guided measurement + customisation capture working end-to-end | pending | — |
| 4 | WhatsApp handoff | One action opens WhatsApp pre-filled with product, price, size/measurements, customisations | pending | — |
| 5 | Launch + measurement | Site live, analytics capturing baseline, physical-shop "visit us" presence, Instagram bio pointing to site | pending | — |
| 6 | Pan-India fast-follow | Delivery, pricing, and messaging extended beyond Kerala; first verified out-of-state order ships | pending | — |

## Open Questions

- [ ] **Owner sign-off on open pricing** — the one decision genuinely outside the planning call. Default is visible prices; confirm the owner is comfortable, and identify any bridal tier that stays "price on request."
- [ ] **Trademark/availability check on "Mahika"** in apparel before printing labels / finalizing logo.
- [ ] **Catalog size & cadence**: how many SKUs at launch, and who maintains the catalog / how often does it change?
- [ ] **Pan-India logistics**: courier, shipping cost model, and lead-time expectations for the fast-follow milestone.
- [ ] **Pre-launch baseline**: record current weekly inquiry/order counts *before* launch so the "reduced DM cold inquiries" metric has a baseline.
- [ ] **Asset readiness**: availability of high-quality product/craft photography (current IG imagery may not meet light-luxury bar) — likely a focused shoot in Milestone 1.

## Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| WhatsApp handoff adds friction vs. true one-click checkout, capping conversion | Medium | High | Make handoff one tap with full context pre-filled; instrument completion rate; keep on-site checkout as a revisit option if it's the bottleneck |
| Owner reluctant to publish prices openly | Medium | High | Frame transparency as the central friction fix; allow a narrow "price on request" for bespoke pieces while defaulting to visible pricing |
| Made-to-measure flow too complex → drop-off | Medium | Medium | Keep launch measurement capture minimal; confirm finer details over WhatsApp; standard sizes always available as the easy path |
| Imagery quality below light-luxury bar | High | Medium | Plan a focused craft/fabric photo shoot in Brand foundation milestone; use macro/texture shots to elevate |
| Catalog goes stale (manual upkeep) | Medium | Medium | Keep catalog management lightweight; define an owner + cadence (Open Question) |
| Targets are unvalidated (no baseline) | High | Medium | Capture pre-launch baseline; treat 90-day numbers as hypotheses to refine, not commitments |
| Pan-India logistics underestimated | Medium | Medium | Scope logistics as its own milestone (6), Kerala-proven ops first |

---
*Status: DRAFT — requirements only. Implementation planning pending via /plan.*
