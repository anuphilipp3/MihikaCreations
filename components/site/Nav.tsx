"use client";

import Link from "next/link";
import { useState } from "react";
import { List, X, WhatsappLogo } from "@phosphor-icons/react";
import { BRAND } from "@/lib/brand";
import { waEnquiry } from "@/lib/whatsapp";
import { Wordmark } from "./Wordmark";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Collection" },
  { href: "/visit", label: "Visit us" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ivory/85 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-8"
      >
        <Link href="/" className="flex flex-col gap-1.5 leading-none" onClick={() => setOpen(false)}>
          <Wordmark className="h-6 w-[84px] text-ink" />
          <span className="text-[10px] uppercase tracking-[0.28em] text-muted">
            Made-to-measure
          </span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={waEnquiry()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xs bg-forest px-4 py-2.5 text-[12px] uppercase tracking-[0.14em] text-cream transition-colors hover:bg-ink"
          >
            <WhatsappLogo size={16} weight="fill" aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ivory px-5 pb-6 pt-2 md:hidden">
          <div className="flex flex-col">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 font-display text-xl text-ink"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={waEnquiry()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-2 rounded-xs bg-forest px-4 py-3.5 text-sm uppercase tracking-[0.14em] text-cream"
            >
              <WhatsappLogo size={18} weight="fill" aria-hidden="true" />
              Order on WhatsApp
            </a>
            <p className="mt-3 text-center text-xs text-muted">{BRAND.phoneDisplay}</p>
          </div>
        </div>
      )}
    </header>
  );
}
