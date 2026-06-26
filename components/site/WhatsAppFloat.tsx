"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import { waEnquiry } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={waEnquiry()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Mahika on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-cream shadow-lg shadow-forest/20 transition-transform hover:scale-105 active:scale-95 md:bottom-7 md:right-7"
    >
      <WhatsappLogo size={28} weight="fill" aria-hidden="true" />
    </a>
  );
}
