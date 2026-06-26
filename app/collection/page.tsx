import type { Metadata } from "next";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getAllProducts } from "@/lib/catalog";
import { ALL_OCCASIONS, type Occasion } from "@/lib/products";

export const metadata: Metadata = {
  title: "The Collection — Mahika",
  description:
    "Browse Mahika's made-to-measure dresses: Chanderi, linen, organza and more. Filter by occasion and fabric, order over WhatsApp.",
};

export const revalidate = 60;

function isOccasion(v: string | undefined): v is Occasion {
  return !!v && (ALL_OCCASIONS as string[]).includes(v);
}

export default async function CollectionPage({
  searchParams,
}: {
  searchParams: Promise<{ occasion?: string }>;
}) {
  const { occasion } = await searchParams;
  const initial = isOccasion(occasion) ? occasion : "all";
  const products = await getAllProducts();

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 md:py-16">
      <header className="mb-10 max-w-2xl">
        <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-rose">
          Made to measure
        </p>
        <h1 className="font-display text-4xl leading-tight text-ink md:text-6xl">
          The Collection
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted">
          Every piece is customisable, your size, your colour, your sleeve. Find
          one you love, then order it over WhatsApp.
        </p>
      </header>

      <ProductGrid products={products} initialOccasion={initial} />
    </div>
  );
}
