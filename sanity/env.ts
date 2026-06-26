// Sanity connection, read from env. When unset, the storefront falls back to the
// local catalog in lib/products.ts, so the site works before Sanity is connected.

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-10-01";

/** True only when a real project id has been configured. */
export const sanityEnabled =
  projectId.length > 0 && projectId !== "your-project-id";
