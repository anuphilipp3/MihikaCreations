import { BRAND } from "./brand";

/** Build a wa.me deep link with a pre-filled, URL-encoded message. */
export function waLink(message: string): string {
  return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Generic enquiry used by nav / footer / floating button. */
export function waEnquiry(): string {
  return waLink(
    `Hi ${BRAND.name}! I found you through the website and I'd love to know more.`,
  );
}
