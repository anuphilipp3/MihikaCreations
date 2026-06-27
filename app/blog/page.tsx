import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PostCard } from "@/components/blog/PostCard";
import { Reveal } from "@/components/ui/Reveal";
import { getAllPosts, formatPostDate, readingMinutes } from "@/lib/posts";

export const metadata: Metadata = {
  title: "The Journal — Mahika",
  description:
    "Notes on fabric, fit and dressing for life in Kerala — from the Mahika studio. Guides to Chanderi, linen and organza, occasion dressing, and made-to-measure.",
};

export const revalidate = 60;

export default async function JournalPage() {
  const posts = await getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 md:py-16">
      <header className="mb-12 max-w-2xl">
        <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-rose">The Journal</p>
        <h1 className="font-display text-4xl leading-tight text-ink md:text-6xl">
          Notes on cloth, fit and dressing well
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted">
          Small, useful reads from the studio — on the fabrics we love, the
          occasions we dress for, and the quiet luxury of a piece made for you.
        </p>
      </header>

      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group mb-16 grid items-center gap-8 md:grid-cols-2 md:gap-12"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-cream">
            <Image
              src={featured.coverImage}
              alt={featured.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-sage">
              Latest · {formatPostDate(featured.date)} · {readingMinutes(featured.body)} min read
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-5xl">
              {featured.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              {featured.excerpt}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.16em] text-forest">
              Read the story
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </div>
        </Link>
      )}

      {rest.length > 0 && (
        <div className="grid gap-x-8 gap-y-12 border-t border-line pt-14 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.06}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
