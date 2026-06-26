import type { Metadata } from "next";
import Image from "next/image";
import {
  WhatsappLogo,
  InstagramLogo,
  MapPin,
  Clock,
  Phone,
} from "@phosphor-icons/react/dist/ssr";
import { BRAND } from "@/lib/brand";
import { waEnquiry } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Visit us — Mahika",
  description:
    "Visit the Mahika store in Koothattukulam, Kerala. See the fabrics in person and talk through a custom piece. Open Mon–Sat.",
};

// TODO(owner): replace with the exact store address + Google Maps place link.
const DIRECTIONS = "https://www.google.com/maps/search/Mahika+Koothattukulam+Kerala";

export default function VisitPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 md:py-16">
      <header className="max-w-2xl">
        <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-rose">
          Now open
        </p>
        <h1 className="font-display text-4xl leading-tight text-ink md:text-6xl">
          Come find your fit in person
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted">
          New space, same hands. Feel the Chanderi and linen, see the colours in
          daylight, and talk through a custom piece with us at the Mahika store.
        </p>
      </header>

      <div className="mt-12 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
        <div className="relative aspect-[4/3] overflow-hidden bg-cream">
          <Image
            src="/products/embroidered-three-piece.jpg"
            alt="A Mahika embroidered three-piece set"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-7">
          <Detail icon={<MapPin size={20} aria-hidden="true" />} label="Where">
            {BRAND.location}
            <a
              href={DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-sm text-rose underline-offset-4 hover:underline"
            >
              Get directions
            </a>
          </Detail>

          <Detail icon={<Clock size={20} aria-hidden="true" />} label="When">
            {BRAND.hours}
          </Detail>

          <Detail icon={<Phone size={20} aria-hidden="true" />} label="Call or message">
            {BRAND.phoneDisplay}
          </Detail>

          <div className="mt-1 flex flex-col gap-3">
            <a
              href={waEnquiry()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-xs bg-rose px-6 py-4 text-sm uppercase tracking-[0.16em] text-cream transition-transform hover:-translate-y-px"
            >
              <WhatsappLogo size={20} weight="fill" aria-hidden="true" />
              Message us on WhatsApp
            </a>
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-xs border border-forest px-6 py-4 text-sm uppercase tracking-[0.14em] text-forest transition-colors hover:bg-forest hover:text-cream"
            >
              <InstagramLogo size={20} aria-hidden="true" />
              {BRAND.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Detail({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 border-b border-line pb-6">
      <span className="mt-0.5 text-forest">{icon}</span>
      <div>
        <p className="text-[11px] uppercase tracking-[0.2em] text-sage">{label}</p>
        <div className="mt-1 text-lg text-ink">{children}</div>
      </div>
    </div>
  );
}
