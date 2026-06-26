import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { Preloader } from "@/components/site/Preloader";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mahikacreations.in"),
  title: "Mahika — Made-to-measure designer wear from Kerala",
  description:
    "Chanderi, linen and organza dresses, tailored to your size and your colour. Browse the collection and order over WhatsApp. Delivered across Kerala.",
  openGraph: {
    title: "Mahika — Made-to-measure designer wear from Kerala",
    description:
      "Dresses made to fit you. Browse the collection and order over WhatsApp.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">
        <noscript>
          <style>{`.preloader{display:none !important}`}</style>
        </noscript>
        <Preloader />
        <div className="grain" aria-hidden="true" />
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
