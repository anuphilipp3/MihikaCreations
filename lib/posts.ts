// Blog ("Journal") access. Reads from Sanity when posts exist there, otherwise
// serves the local posts from postsData — so the journal is live immediately and
// the team can author more from the Sanity Studio later (same Portable Text shape).

import { sanityClient } from "@/sanity/client";
import { sanityEnabled } from "@/sanity/env";
import { LOCAL_POSTS, type Post } from "./postsData";

export type { Post } from "./postsData";
export { readingMinutes, formatPostDate } from "./postsData";

const POST_PROJECTION = `{
  "slug": slug.current,
  title,
  excerpt,
  "coverImage": coalesce(coverImage.asset->url, ""),
  "date": publishedAt,
  "author": coalesce(author, "Maya Philip"),
  body
}`;

export async function getAllPosts(): Promise<Post[]> {
  if (sanityEnabled && sanityClient) {
    try {
      const data = await sanityClient.fetch<Post[]>(
        `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) ${POST_PROJECTION}`,
      );
      if (data.length > 0) return data;
    } catch {
      // fall through to local
    }
  }
  return LOCAL_POSTS;
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  if (sanityEnabled && sanityClient) {
    try {
      const data = await sanityClient.fetch<Post | null>(
        `*[_type == "post" && slug.current == $slug][0] ${POST_PROJECTION}`,
        { slug },
      );
      if (data) return data;
    } catch {
      // fall through to local
    }
  }
  return LOCAL_POSTS.find((post) => post.slug === slug);
}

export async function getPostSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((post) => post.slug);
}
