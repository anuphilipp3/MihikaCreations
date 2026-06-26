import Link from "next/link";
import Image from "next/image";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { waEnquiry } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto grid max-w-[1400px] items-center gap-8 px-5 pb-10 pt-8 md:min-h-[76dvh] md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:px-8 md:pt-8"
    >
      <div className="order-2 md:order-1">
        <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-rose">
          Kerala · Made to measure
        </p>
        <h1
          id="hero-heading"
          className="font-display text-5xl leading-[1.02] text-ink md:text-7xl"
        >
          Dresses made
          <br />
          to fit{" "}
          <span className="italic leading-[1.1] text-rose">you</span>.
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
          Chanderi, linen and organza, tailored to your size, your colour, your
          sleeve. Stitched in Kerala, delivered to your door.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link
            href="/collection"
            className="rounded-xs bg-ink px-7 py-3.5 text-[13px] uppercase tracking-[0.16em] text-cream transition-transform hover:-translate-y-px"
          >
            Browse the collection
          </Link>
          <a
            href={waEnquiry()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xs border border-forest px-6 py-3.5 text-[13px] uppercase tracking-[0.14em] text-forest transition-colors hover:bg-forest hover:text-cream"
          >
            <WhatsappLogo size={17} weight="fill" aria-hidden="true" />
            Order on WhatsApp
          </a>
        </div>
      </div>

      <div className="relative order-1 md:order-2">
        <div className="relative aspect-[4/5] overflow-hidden bg-cream md:aspect-[3/4]">
          <Image
            src="/products/onion-pink-chanderi.jpg"
            alt="A Mahika onion-pink Chanderi A-line dress with organza sleeves"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
        <div className="absolute -bottom-4 left-4 bg-cream px-4 py-3 shadow-sm md:-left-6">
          <p className="font-display text-lg text-ink">Onion Pink Chanderi</p>
          <p className="text-xs uppercase tracking-[0.12em] text-rose">
            From ₹2,400 · customisable
          </p>
        </div>
      </div>
    </section>
  );
}
