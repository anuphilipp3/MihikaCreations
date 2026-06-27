import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { PostContent } from "@/components/blog/PostContent";
import {
  getAllPosts,
  getPostBySlug,
  getPostSlugs,
  formatPostDate,
  readingMinutes,
} from "@/lib/posts";
import { PostCard } from "@/components/blog/PostCard";
import { waEnquiry } from "@/lib/whatsapp";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Not found — Mahika" };
  return {
    title: `${post.title} — Mahika Journal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
      type: "article",
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const more = (await getAllPosts()).filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-[1400px] px-5 py-8 md:px-8 md:py-12">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft size={15} aria-hidden="true" />
        The Journal
      </Link>

      <header className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] uppercase tracking-[0.2em] text-sage">
          {formatPostDate(post.date)} · {readingMinutes(post.body)} min read
        </p>
        <h1 className="mt-4 font-display text-4xl leading-[1.1] text-ink md:text-6xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">{post.excerpt}</p>
      </header>

      {post.coverImage && (
        <div className="relative mx-auto mt-10 aspect-[16/10] max-w-4xl overflow-hidden bg-cream">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 56rem"
            className="object-cover"
          />
        </div>
      )}

      <div className="mx-auto mt-14 max-w-[42rem]">
        <PostContent value={post.body} />

        <div className="mt-14 border-t border-line pt-10 text-center">
          <p className="font-display text-2xl text-ink">Found something you love?</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted">
            Every piece is made to your size, your colour, your sleeve. Browse the
            collection, or message us on WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/collection"
              className="rounded-xs bg-ink px-7 py-3.5 text-[13px] uppercase tracking-[0.16em] text-cream transition-transform hover:-translate-y-px"
            >
              Browse the collection
            </Link>
            <a
              href={waEnquiry()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xs border border-forest px-6 py-3.5 text-[13px] uppercase tracking-[0.14em] text-forest transition-colors hover:bg-forest hover:text-cream"
            >
              <WhatsappLogo size={17} weight="fill" aria-hidden="true" />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {more.length > 0 && (
        <section className="mt-24 border-t border-line pt-14">
          <h2 className="mb-10 font-display text-3xl text-ink">More from the Journal</h2>
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
            {more.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
