import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { BRAND } from "@/lib/brand";

export function VisitTeaser() {
  return (
    <section className="border-t border-line bg-cream">
      <div className="mx-auto grid max-w-[1400px] items-stretch gap-0 md:grid-cols-2">
        <div className="relative min-h-[60vw] md:min-h-[34rem]">
          <Image
            src="/products/muslin-blue-applique.jpg"
            alt="Inside the Mahika store, a muslin appliqué three-piece on display"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-5 px-5 py-14 md:px-14">
          <h2 className="font-display text-3xl leading-tight text-ink md:text-5xl">
            Now open in Koothattukulam
          </h2>
          <p className="max-w-md text-base leading-relaxed text-muted">
            New space, same hands. Come see the fabrics in person, talk through a
            custom piece, and find the fit that is yours.
          </p>
          <p className="text-sm text-muted">{BRAND.hours}</p>
          <Link
            href="/visit"
            className="group mt-2 inline-flex items-center gap-2 self-start text-[13px] uppercase tracking-[0.16em] text-forest"
          >
            Plan your visit
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
