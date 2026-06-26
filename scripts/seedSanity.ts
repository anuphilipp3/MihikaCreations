// One-time seed: pushes the local catalog (lib/products.ts) + images into Sanity.
//
// Run AFTER you have a Sanity project and a write token:
//   SANITY_PROJECT_ID=xxxx SANITY_WRITE_TOKEN=yyyy npx tsx scripts/seedSanity.ts
//
// Idempotent: re-running overwrites the same docs (createOrReplace).

import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { PRODUCTS } from "../lib/products";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || "production";
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "Missing env. Set SANITY_PROJECT_ID and SANITY_WRITE_TOKEN (Editor token from sanity.io/manage).",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-10-01",
  token,
  useCdn: false,
});

async function run() {
  for (const p of PRODUCTS) {
    const imagePath = join(process.cwd(), "public", p.image);
    const asset = await client.assets.upload("image", readFileSync(imagePath), {
      filename: `${p.slug}.jpg`,
    });

    await client.createOrReplace({
      _id: `product-${p.slug}`,
      _type: "product",
      name: p.name,
      slug: { _type: "slug", current: p.slug },
      silhouette: p.silhouette,
      fabric: p.fabric,
      colours: p.colours,
      sizes: p.sizes,
      price: p.price,
      occasions: p.occasions,
      blurb: p.blurb,
      description: p.description,
      bestSeller: Boolean(p.bestSeller),
      isNew: Boolean(p.isNew),
      image: {
        _type: "image",
        asset: { _type: "reference", _ref: asset._id },
      },
    });

    console.log("seeded", p.slug);
  }
  console.log(`\nDone. ${PRODUCTS.length} products in Sanity.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
