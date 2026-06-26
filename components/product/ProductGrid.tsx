"use client";

import { useMemo, useState } from "react";
import {
  ALL_OCCASIONS,
  OCCASION_LABELS,
  type Fabric,
  type Occasion,
  type Product,
} from "@/lib/products";
import { ProductCard } from "./ProductCard";

type OccasionFilter = Occasion | "all";

export function ProductGrid({
  products,
  initialOccasion = "all",
}: {
  products: Product[];
  initialOccasion?: OccasionFilter;
}) {
  const [occasion, setOccasion] = useState<OccasionFilter>(initialOccasion);
  const [fabric, setFabric] = useState<Fabric | "all">("all");
  const fabrics = useMemo(
    () => Array.from(new Set(products.map((p) => p.fabric))).sort() as Fabric[],
    [products],
  );

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (occasion === "all" || p.occasions.includes(occasion)) &&
          (fabric === "all" || p.fabric === fabric),
      ),
    [products, occasion, fabric],
  );

  return (
    <div>
      <div className="flex flex-col gap-5 border-b border-line pb-6">
        <FilterRow label="Occasion">
          <Chip active={occasion === "all"} onClick={() => setOccasion("all")}>
            All
          </Chip>
          {ALL_OCCASIONS.map((o) => (
            <Chip key={o} active={occasion === o} onClick={() => setOccasion(o)}>
              {OCCASION_LABELS[o]}
            </Chip>
          ))}
        </FilterRow>

        <FilterRow label="Fabric">
          <Chip active={fabric === "all"} onClick={() => setFabric("all")}>
            All
          </Chip>
          {fabrics.map((f) => (
            <Chip key={f} active={fabric === f} onClick={() => setFabric(f)}>
              {f}
            </Chip>
          ))}
        </FilterRow>
      </div>

      <p className="mt-6 text-sm text-muted">
        {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i < 4} />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-3 py-16 text-center">
          <p className="font-display text-2xl text-ink">Nothing in this combination yet</p>
          <p className="max-w-sm text-sm text-muted">
            Try a different occasion or fabric. We also take fully custom requests
            over WhatsApp, just tell us what you have in mind.
          </p>
          <button
            onClick={() => {
              setOccasion("all");
              setFabric("all");
            }}
            className="mt-2 rounded-xs border border-forest px-5 py-2.5 text-[12px] uppercase tracking-[0.14em] text-forest transition-colors hover:bg-forest hover:text-cream"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
      <span className="shrink-0 text-[11px] uppercase tracking-[0.2em] text-sage">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={
        "rounded-xs border px-3.5 py-1.5 text-[12px] tracking-[0.04em] transition-colors " +
        (active
          ? "border-forest bg-forest text-cream"
          : "border-line text-muted hover:border-forest hover:text-forest")
      }
    >
      {children}
    </button>
  );
}
