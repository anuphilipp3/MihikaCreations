# Mahika — storefront

Made-to-measure designer-wear storefront. Browse a beautiful catalog, order over
WhatsApp. No payment, no cart — the order completes as a pre-filled WhatsApp message.

Built with Next.js 15 (App Router), Tailwind v4, and Motion. Catalog is seeded from
the live @mahika.creations Instagram.

## Run it

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
```

## How it works

- **Catalog** lives in [`lib/products.ts`](lib/products.ts) — one typed array. Edit there
  to add/change products, prices, sizes, colours, occasions.
- **Product images** are in `public/products/` (the real Instagram photos).
- **Ordering** builds a `wa.me` deep link to the brand number — see
  [`lib/whatsapp.ts`](lib/whatsapp.ts) and [`components/product/OrderPanel.tsx`](components/product/OrderPanel.tsx).
  The WhatsApp number and brand details are in [`lib/brand.ts`](lib/brand.ts).

## ⚠️ Before launch — owner to-dos

1. **Set real prices.** Every `price` in `lib/products.ts` is a PLACEHOLDER except the
   Modal Silk dress (₹2,460, the one real published price). Confirm each one.
2. **Exact store address + map pin** for the Visit page — search for `TODO(owner)` in
   [`app/visit/page.tsx`](app/visit/page.tsx).
3. **A proper photo shoot** eventually — the Instagram photos are great to launch with,
   but a craft/fabric shoot will lift it to the light-luxury bar.
4. **Domain**: `mahikacreations.in` is assumed in metadata; register and point it.

## No-code admin (Sanity Studio)

The storefront reads through [`lib/catalog.ts`](lib/catalog.ts): if Sanity is configured it
serves from there, otherwise it falls back to `lib/products.ts`. So **the site works today**,
and connecting Sanity is a no-code switch — no page changes.

The admin lives in [`studio/`](studio/) as a standalone Sanity Studio (deploys to its own
`*.sanity.studio` URL — friendlier for the team than an embedded route, and it avoids
version-locking the site to Sanity).

**Connect it (one-time, ~10 min):**

```bash
cd studio
npm install
npx sanity login                 # create / sign in to a free Sanity account
npx sanity init --reconfigure    # creates the project, prints your PROJECT ID
```

1. Put the project id in the site env: copy `.env.local.example` to `.env.local` and set
   `NEXT_PUBLIC_SANITY_PROJECT_ID`.
2. Seed the 20 products + images into Sanity (one time):
   ```bash
   SANITY_PROJECT_ID=xxxx SANITY_WRITE_TOKEN=yyyy npx tsx scripts/seedSanity.ts
   ```
   (Write token: sanity.io/manage → your project → API → Tokens → Editor.)
3. Publish the admin so the team can use it from anywhere:
   ```bash
   cd studio && npx sanity deploy     # → https://mahika.sanity.studio
   ```

After that, editing a product in the Studio updates the live site within ~60s (ISR). The
product schema is in [`studio/schemaTypes/product.ts`](studio/schemaTypes/product.ts) and
matches the fields in `lib/products.ts` one-to-one.

## Deferred (next phase)

- Analytics, occasion landing copy, Instagram feed embed.
- Vercel deploy (push to GitHub, import, set the same env vars).

## Deploy

Push to GitHub, import into Vercel, deploy. Static catalog + image optimization run on the
free tier. Running cost ≈ the domain only.
