// Catalog data access. Reads from Sanity when configured, otherwise falls back
// to the local seed in lib/products.ts. Pages import from here, never from the
// raw PRODUCTS array, so connecting Sanity is a zero-code switch.

import { sanityClient } from "@/sanity/client";
import { sanityEnabled } from "@/sanity/env";
import { PRODUCTS, type Product } from "@/lib/products";

const PROJECTION = `{
  "slug": slug.current,
  name,
  silhouette,
  fabric,
  "colours": coalesce(colours, []),
  "sizes": coalesce(sizes, []),
  price,
  "occasions": coalesce(occasions, []),
  "blurb": coalesce(blurb, ""),
  "description": coalesce(description, ""),
  "image": coalesce(image.asset->url, ""),
  "bestSeller": coalesce(bestSeller, false),
  "isNew": coalesce(isNew, false)
}`;

export async function getAllProducts(): Promise<Product[]> {
  if (!sanityEnabled || !sanityClient) return PRODUCTS;
  try {
    const query = `*[_type == "product" && defined(slug.current)] | order(coalesce(displayOrder, 9999) asc, _createdAt desc) ${PROJECTION}`;
    const data = await sanityClient.fetch<Product[]>(query);
    return data.length > 0 ? data : PRODUCTS;
  } catch {
    return PRODUCTS;
  }
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  if (!sanityEnabled || !sanityClient) {
    return PRODUCTS.find((p) => p.slug === slug);
  }
  try {
    const query = `*[_type == "product" && slug.current == $slug][0] ${PROJECTION}`;
    const data = await sanityClient.fetch<Product | null>(query, { slug });
    return data ?? PRODUCTS.find((p) => p.slug === slug);
  } catch {
    return PRODUCTS.find((p) => p.slug === slug);
  }
}

export async function getProductSlugs(): Promise<string[]> {
  const all = await getAllProducts();
  return all.map((p) => p.slug);
}
