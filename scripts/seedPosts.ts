// One-time seed: pushes the local Journal posts (lib/postsData.ts) + cover images
// into Sanity, so they're editable in the Studio.
//
// Run after you have a Sanity project + an Editor write token:
//   SANITY_PROJECT_ID=ifj10nrx SANITY_WRITE_TOKEN=yyyy npx tsx scripts/seedPosts.ts
//
// Idempotent: re-running overwrites the same docs (createOrReplace).

import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { LOCAL_POSTS } from "../lib/postsData";

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
  for (const post of LOCAL_POSTS) {
    const imagePath = join(process.cwd(), "public", post.coverImage);
    const asset = await client.assets.upload("image", readFileSync(imagePath), {
      filename: `${post.slug}.jpg`,
    });

    await client.createOrReplace({
      _id: `post-${post.slug}`,
      _type: "post",
      title: post.title,
      slug: { _type: "slug", current: post.slug },
      excerpt: post.excerpt,
      publishedAt: new Date(post.date).toISOString(),
      author: post.author,
      coverImage: {
        _type: "image",
        asset: { _type: "reference", _ref: asset._id },
      },
      body: post.body,
    });

    console.log("seeded", post.slug);
  }
  console.log(`\nDone. ${LOCAL_POSTS.length} journal posts in Sanity.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
