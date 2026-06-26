"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface for debugging; swap for real error reporting later.
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[72vh] max-w-xl flex-col items-center justify-center px-5 text-center">
      <p className="text-[11px] uppercase tracking-[0.3em] text-rose">A small snag</p>
      <h1 className="mt-5 font-display text-5xl leading-tight text-ink md:text-6xl">
        Something went wrong
      </h1>
      <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
        We hit a snag loading this page. Try again, or head back to the
        collection. You can always reach us on WhatsApp.
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={reset}
          className="rounded-xs bg-ink px-7 py-3.5 text-[13px] uppercase tracking-[0.16em] text-cream transition-transform hover:-translate-y-px"
        >
          Try again
        </button>
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
