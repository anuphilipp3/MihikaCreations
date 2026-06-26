// Renders the Mahika wordmark using the logo's alpha as a CSS mask, so it can be
// tinted to any surface via text color (bg-current). The native gold stays a brand
// token (--color-gold) for dark surfaces; on light surfaces we tint to ink.

const MASK = {
  WebkitMaskImage: "url(/mahika-wordmark.png)",
  maskImage: "url(/mahika-wordmark.png)",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskSize: "contain",
  maskSize: "contain",
  WebkitMaskPosition: "left center",
  maskPosition: "left center",
} as const;

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Mahika"
      className={`block bg-current ${className}`}
      style={MASK}
    />
  );
}
