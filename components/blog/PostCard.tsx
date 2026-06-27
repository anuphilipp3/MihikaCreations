import Link from "next/link";
import Image from "next/image";
import { formatPostDate, readingMinutes, type Post } from "@/lib/posts";

export function PostCard({ post, priority = false }: { post: Post; priority?: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="relative aspect-[3/2] overflow-hidden bg-cream">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-sage">
        {formatPostDate(post.date)} · {readingMinutes(post.body)} min read
      </p>
      <h3 className="mt-2 font-display text-2xl leading-tight text-ink transition-colors group-hover:text-rose">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
    </Link>
  );
}
