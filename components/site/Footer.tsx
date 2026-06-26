import Link from "next/link";
import { InstagramLogo, WhatsappLogo, MapPin } from "@phosphor-icons/react/dist/ssr";
import { BRAND } from "@/lib/brand";
import { waEnquiry } from "@/lib/whatsapp";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-cream">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <Wordmark className="h-9 w-[124px] text-ink" />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Made-to-measure designer wear from Kerala, crafted for women who
            dress for real life and real occasions.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3 text-sm">
          <p className="mb-1 text-[11px] uppercase tracking-[0.2em] text-sage">Explore</p>
          <Link href="/collection" className="text-muted transition-colors hover:text-ink">
            The collection
          </Link>
          <Link href="/visit" className="text-muted transition-colors hover:text-ink">
            Visit the store
          </Link>
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-ink"
          >
            Instagram
          </a>
        </nav>

        <div className="flex flex-col gap-3 text-sm">
          <p className="mb-1 text-[11px] uppercase tracking-[0.2em] text-sage">Reach us</p>
          <a
            href={waEnquiry()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted transition-colors hover:text-ink"
          >
            <WhatsappLogo size={16} weight="fill" aria-hidden="true" />
            {BRAND.phoneDisplay}
          </a>
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted transition-colors hover:text-ink"
          >
            <InstagramLogo size={16} aria-hidden="true" />
            {BRAND.instagramHandle}
          </a>
          <p className="flex items-center gap-2 text-muted">
            <MapPin size={16} aria-hidden="true" />
            {BRAND.location}
          </p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-1 px-5 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Mahika. All Kerala delivery.</p>
          <p>Browse the collection, order over WhatsApp.</p>
        </div>
      </div>
    </footer>
  );
}
