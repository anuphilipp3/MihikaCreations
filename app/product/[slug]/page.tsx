import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { OrderPanel } from "@/components/product/OrderPanel";
import { ProductCard } from "@/components/product/ProductCard";
import { getAllProducts, getProductBySlug, getProductSlugs } from "@/lib/catalog";
import { formatINR, OCCASION_LABELS, stockBadge } from "@/lib/products";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: "Not found — Mahika" };
  return {
    title: `${product.name} — Mahika`,
    description: product.blurb,
    openGraph: { images: [product.image] },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const all = await getAllProducts();
  const related = all
    .filter(
      (p) =>
        p.slug !== product.slug &&
        p.occasions.some((o) => product.occasions.includes(o)),
    )
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-8 md:px-8 md:py-12">
      <Link
        href="/collection"
        className="mb-6 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft size={15} aria-hidden="true" />
        Collection
      </Link>

      <div className="grid gap-8 md:grid-cols-2 md:gap-14">
        <div className="relative aspect-[4/5] overflow-hidden bg-cream">
          <Image
            src={product.image}
            alt={`${product.name} — ${product.fabric} ${product.silhouette}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="md:py-2">
          <div className="flex flex-wrap items-center gap-2">
            {product.occasions.map((o) => (
              <span
                key={o}
                className="border border-line px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-sage"
              >
                {OCCASION_LABELS[o]}
              </span>
            ))}
          </div>

          <h1 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
            {product.name}
          </h1>
          <p className="mt-2 text-sm uppercase tracking-[0.14em] text-muted">
            {product.fabric} · {product.silhouette}
          </p>

          <div className="mt-5 flex items-baseline gap-4">
            <p className="text-2xl text-ink">
              <span className="text-base text-muted">from </span>
              {formatINR(product.price)}
            </p>
            {(() => {
              const stock = stockBadge(product.stock);
              if (!stock) return null;
              return (
                <span
                  className={
                    "text-[11px] uppercase tracking-[0.16em] " +
                    (stock.tone === "out" ? "text-muted" : "text-rose")
                  }
                >
                  {stock.label}
                </span>
              );
            })()}
          </div>

          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            {product.description}
          </p>

          <div className="mt-9">
            <OrderPanel product={product} />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="mb-8 font-display text-3xl text-ink">You may also like</h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
