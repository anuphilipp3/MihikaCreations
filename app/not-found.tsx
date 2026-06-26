import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[72vh] max-w-xl flex-col items-center justify-center px-5 text-center">
      <p className="text-[11px] uppercase tracking-[0.3em] text-rose">Page not found</p>
      <h1 className="mt-5 font-display text-5xl leading-tight text-ink md:text-6xl">
        This piece isn&rsquo;t here
      </h1>
      <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
        The page you&rsquo;re looking for may have moved or been taken in. Let us
        find you something you&rsquo;ll love instead.
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/collection"
          className="rounded-xs bg-ink px-7 py-3.5 text-[13px] uppercase tracking-[0.16em] text-cream transition-transform hover:-translate-y-px"
        >
          Browse the collection
        </Link>
        <Link
          href="/"
          className="rounded-xs border border-forest px-6 py-3.5 text-[13px] uppercase tracking-[0.14em] text-forest transition-colors hover:bg-forest hover:text-cream"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
