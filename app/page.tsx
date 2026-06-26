import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { OccasionStrip } from "@/components/home/OccasionStrip";
import { MadeToMeasure } from "@/components/home/MadeToMeasure";
import { Manifesto } from "@/components/home/Manifesto";
import { VisitTeaser } from "@/components/home/VisitTeaser";
import { ProductCard } from "@/components/product/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { getAllProducts } from "@/lib/catalog";

export const revalidate = 60;

export default async function HomePage() {
  const products = await getAllProducts();
  const featured = products.filter((p) => p.bestSeller || p.isNew).slice(0, 8);

  return (
    <>
      <Hero />
      <OccasionStrip />

      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl text-ink md:text-4xl">New and loved</h2>
          <Link
            href="/collection"
            className="text-[12px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 0.06}>
              <ProductCard product={p} priority={i < 4} />
            </Reveal>
          ))}
        </div>
      </section>

      <MadeToMeasure />
      <Manifesto />
      <VisitTeaser />
    </>
  );
}
