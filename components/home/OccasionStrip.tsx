import Link from "next/link";

const OCCASIONS = [
  { key: "church", label: "Church", note: "Easter & Sunday" },
  { key: "festive", label: "Festive", note: "Eid & celebrations" },
  { key: "baptism", label: "Baptism", note: "Family days" },
  { key: "wedding-guest", label: "Wedding guest", note: "Dressed up" },
  { key: "office", label: "Office", note: "Quiet polish" },
  { key: "everyday", label: "Everyday", note: "Comfort first" },
];

export function OccasionStrip() {
  return (
    <section aria-label="Shop by occasion" className="border-y border-line bg-cream">
      <div className="mx-auto max-w-[1400px] px-5 py-10 md:px-8">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-2xl text-ink md:text-3xl">
            Dressed for the moment
          </h2>
          <Link
            href="/collection"
            className="hidden text-[12px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink md:block"
          >
            See all
          </Link>
        </div>
        <div className="-mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-6 md:gap-4 md:overflow-visible md:px-0">
          {OCCASIONS.map((o) => (
            <Link
              key={o.key}
              href={`/collection?occasion=${o.key}`}
              className="group flex min-w-[42vw] shrink-0 snap-start flex-col justify-between border border-line bg-ivory p-4 transition-colors hover:border-forest md:min-w-0"
            >
              <span className="font-display text-xl text-ink">{o.label}</span>
              <span className="mt-8 text-[11px] uppercase tracking-[0.14em] text-muted transition-colors group-hover:text-rose">
                {o.note}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
