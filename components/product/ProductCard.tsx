import Link from "next/link";
import Image from "next/image";
import { formatINR, stockBadge, type Product } from "@/lib/products";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const stock = stockBadge(product.stock);
  const outOfStock = stock?.tone === "out";

  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        <Image
          src={product.image}
          alt={`${product.name} — ${product.fabric} ${product.silhouette}`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          priority={priority}
          className={
            "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] " +
            (outOfStock ? "opacity-55" : "")
          }
        />
        {stock ? (
          <span
            className={
              "absolute left-3 top-3 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] " +
              (outOfStock ? "bg-ink/85 text-cream" : "bg-rose text-cream")
            }
          >
            {stock.label}
          </span>
        ) : product.bestSeller || product.isNew ? (
          <span className="absolute left-3 top-3 bg-cream/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-forest">
            {product.isNew ? "New in" : "Loved"}
          </span>
        ) : null}
      </div>
      <div className="mt-3">
        <h3 className="font-display text-[15px] leading-snug text-ink sm:text-lg">
          {product.name}
        </h3>
        <div className="mt-1.5 flex items-center justify-between gap-2">
          <span className="text-[10px] uppercase tracking-[0.12em] text-muted sm:text-[11px]">
            {product.fabric}
          </span>
          <span className="whitespace-nowrap text-sm text-ink">
            <span className="text-muted">from </span>
            {formatINR(product.price)}
          </span>
        </div>
      </div>
    </Link>
  );
}
