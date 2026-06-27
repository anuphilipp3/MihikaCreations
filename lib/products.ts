// ───────────────────────────────────────────────────────────────────────────
// Mahika catalog — seeded from the live @mahika.creations Instagram (June 2026).
//
// ⚠️  PRICES ARE PLACEHOLDERS. Only `modal-silk-jewel-neck` (₹2,460) is a real
//     price the brand has published. Every other `price` below is a realistic
//     made-to-measure estimate for layout purposes and MUST be confirmed by the
//     owner before launch. Edit the `price` field on each product.
//
// This file is the single source of truth for the catalog today. When the
// no-code admin (Sanity) is wired up, this same shape is what it will feed.
// ───────────────────────────────────────────────────────────────────────────

export type Size = "S" | "M" | "L" | "XL" | "XXL";

export type Occasion =
  | "everyday"
  | "office"
  | "church"
  | "festive"
  | "baptism"
  | "wedding-guest"
  | "brunch";

export type Fabric =
  | "Chanderi"
  | "Mulchanderi"
  | "Cotton"
  | "Crushed Cotton"
  | "Linen"
  | "Muslin"
  | "Modal"
  | "Organza";

export type Product = {
  slug: string;
  name: string;
  silhouette: string;
  fabric: Fabric;
  colours: string[];
  sizes: Size[];
  /** "From" base price in INR — placeholder unless noted. */
  price: number;
  occasions: Occasion[];
  /** One-line card blurb. */
  blurb: string;
  /** Product-page description, in brand voice. */
  description: string;
  image: string;
  bestSeller?: boolean;
  isNew?: boolean;
  /** Pieces available for ready-to-wear. Omit for made-to-order (always available); 0 = out of stock. */
  stock?: number;
};

export const LOW_STOCK_THRESHOLD = 5;

export type StockBadge = { label: string; tone: "out" | "low" };

/** Returns a stock badge for ready-to-wear pieces, or null for made-to-order. */
export function stockBadge(stock: number | undefined | null): StockBadge | null {
  if (stock === undefined || stock === null) return null;
  if (stock <= 0) return { label: "Out of stock", tone: "out" };
  if (stock <= LOW_STOCK_THRESHOLD) return { label: `Only ${stock} left`, tone: "low" };
  return null;
}

export const OCCASION_LABELS: Record<Occasion, string> = {
  everyday: "Everyday",
  office: "Office",
  church: "Church",
  festive: "Festive",
  baptism: "Baptism",
  "wedding-guest": "Wedding guest",
  brunch: "Brunch",
};

export const PRODUCTS: Product[] = [
  {
    slug: "onion-pink-chanderi",
    name: "Onion Pink Chanderi A-line",
    silhouette: "A-line dress",
    fabric: "Chanderi",
    colours: ["Onion pink"],
    sizes: ["S", "M", "L", "XL"],
    price: 2400,
    occasions: ["everyday", "festive"],
    blurb: "Threadwork bodice, organza sleeve detail.",
    description:
      "Our signature onion-pink Chanderi, cut as an easy A-line with gathered fullness and delicate thread work. Sheer organza sleeves keep it light enough for a long Kerala afternoon.",
    image: "/products/onion-pink-chanderi.jpg",
    bestSeller: true,
  },
  {
    slug: "royal-blue-organza",
    name: "Royal Blue Organza A-line",
    silhouette: "A-line dress",
    fabric: "Organza",
    colours: ["Royal blue"],
    sizes: ["S", "M", "L"],
    price: 3200,
    occasions: ["festive", "wedding-guest"],
    blurb: "Back-keyhole detail, hand-worked pin tucks.",
    description:
      "A vivid royal-blue organza with a chic back keyhole and hand-worked pin tucks. It moves beautifully and photographs even better, made for the occasions you want to be remembered at.",
    image: "/products/royal-blue-organza.jpg",
    bestSeller: true,
  },
  {
    slug: "linen-hand-embroidered",
    name: "Hand-Embroidered Linen A-line",
    silhouette: "A-line dress",
    fabric: "Linen",
    colours: ["Natural"],
    sizes: ["S", "M", "L"],
    price: 2900,
    occasions: ["everyday", "office"],
    blurb: "Breathable linen with hand embroidery.",
    description:
      "Pure linen with hand-worked embroidery, the kind of piece that becomes a wardrobe staple. Breathable, structured, and quietly elegant from the desk to dinner.",
    image: "/products/linen-hand-embroidered.jpg",
    bestSeller: true,
  },
  {
    slug: "aquatic-green-mulchanderi",
    name: "Aquatic Green Mulchanderi A-line",
    silhouette: "A-line top with bottom",
    fabric: "Mulchanderi",
    colours: ["Aquatic green"],
    sizes: ["S", "M", "L"],
    price: 2460,
    occasions: ["festive", "church"],
    blurb: "Breezy mulchanderi, deep aquatic green.",
    description:
      "Deep aquatic green in airy mulchanderi, an A-line long top paired with a bottom. Breezy and elegant, equally at home at a festive lunch or a Sunday service.",
    image: "/products/aquatic-green-mulchanderi.jpg",
    bestSeller: true,
  },
  {
    slug: "modal-silk-jewel-neck",
    name: "Modal Silk Jewel-Neck Dress",
    silhouette: "A-line dress",
    fabric: "Modal",
    colours: ["Blue", "Pink"],
    sizes: ["S", "M", "L", "XL"],
    price: 2460, // real published price
    occasions: ["everyday", "brunch"],
    blurb: "Jewel neck, lace styling, soft gathers.",
    description:
      "Soft modal silk with a jewel neck and a small V, finished with dainty lace and gentle gathers that give it flow. Customisable sleeves let you make it your own.",
    image: "/products/modal-silk-jewel-neck.jpg",
    isNew: true,
  },
  {
    slug: "turkish-organza-two-piece",
    name: "Turkish Organza Two-Piece",
    silhouette: "Two-piece set",
    fabric: "Organza",
    colours: ["Black", "One more shade"],
    sizes: ["S", "M", "L"],
    price: 2800,
    occasions: ["festive", "wedding-guest"],
    blurb: "Premium Turkish organza and georgette.",
    description:
      "Two considered designs in one timeless colour, blending premium Turkish organza with flowy georgette for an effortless, classy line. Sleeves can be added on request.",
    image: "/products/turkish-organza-two-piece.jpg",
    isNew: true,
  },
  {
    slug: "embroidered-three-piece",
    name: "Embroidered Three-Piece Set",
    silhouette: "Three-piece set",
    fabric: "Chanderi",
    colours: ["Soft pink"],
    sizes: ["M", "L", "XL", "XXL"],
    price: 3800,
    occasions: ["festive", "baptism"],
    blurb: "Delicate embroidery, flowing silhouette.",
    description:
      "A gracefully crafted three-piece with delicate embroidery and a flowing silhouette, made for festive gatherings and daytime celebrations alike.",
    image: "/products/embroidered-three-piece.jpg",
    isNew: true,
  },
  {
    slug: "muslin-blue-applique",
    name: "Muslin Blue Appliqué Three-Piece",
    silhouette: "Three-piece set",
    fabric: "Muslin",
    colours: ["White", "Blue appliqué"],
    sizes: ["S", "M", "L", "XL"],
    price: 4200,
    occasions: ["baptism", "church", "wedding-guest"],
    blurb: "Blue appliqué, sequins, scalloped dupatta.",
    description:
      "Premium muslin with intricate blue appliqué, sequins and thread detailing, finished with a statement dupatta with scalloped edges. From an Easter brunch to a baptism, it carries the moment.",
    image: "/products/muslin-blue-applique.jpg",
  },
  {
    slug: "printed-three-piece",
    name: "Printed Three-Piece Set",
    silhouette: "Three-piece set",
    fabric: "Cotton",
    colours: ["Multi print"],
    sizes: ["M", "L", "XL", "XXL"],
    price: 3600,
    occasions: ["everyday", "festive"],
    blurb: "Intricate prints, effortless charm.",
    description:
      "An elegant three-piece in intricate prints, easy enough for everyday grace and dressed-up enough for the special moments in between.",
    image: "/products/printed-three-piece.jpg",
  },
  {
    slug: "trending-two-piece-pockets",
    name: "Two-Piece Set with Pockets",
    silhouette: "Two-piece set",
    fabric: "Cotton",
    colours: ["Your choice"],
    sizes: ["S", "M", "L", "XL"],
    price: 2700,
    occasions: ["everyday", "brunch"],
    blurb: "Breathable, loose-fit, real side pockets.",
    description:
      "A breathable, loose-fit two-piece for warm weather, with the side pockets you actually want. Fully customisable in any colour, with lining and sleeve options to your preference.",
    image: "/products/trending-two-piece-pockets.jpg",
    isNew: true,
  },
  {
    slug: "deep-green-aline",
    name: "Deep Green A-line",
    silhouette: "A-line dress",
    fabric: "Chanderi",
    colours: ["Deep green"],
    sizes: ["S", "M", "L"],
    price: 2200,
    occasions: ["office", "everyday"],
    blurb: "Clean lines, sophisticated silhouette.",
    description:
      "Deep greens and clean lines. A sophisticated A-line that lifts your daily wear, airy and timelessly classy for the office or a casual day out.",
    image: "/products/deep-green-aline.jpg",
  },
  {
    slug: "yellow-festive-dress",
    name: "Lemon Festive Dress",
    silhouette: "A-line dress",
    fabric: "Chanderi",
    colours: ["Lemon yellow"],
    sizes: ["S", "M", "L", "XL"],
    price: 2400,
    occasions: ["festive", "church", "brunch"],
    blurb: "Soft fabric, graceful fit, subtle detailing.",
    description:
      "A confident, effortlessly stylish piece in soft fabric with a graceful fit, made for festive gatherings, brunch, and the special-occasion days.",
    image: "/products/yellow-festive-dress.jpg",
  },
  {
    slug: "easter-chanderi",
    name: "Easter Chanderi Dress",
    silhouette: "A-line dress",
    fabric: "Chanderi",
    colours: ["Soft hue"],
    sizes: ["S", "M", "L", "XL"],
    price: 2300,
    occasions: ["church", "festive"],
    blurb: "Soft hues, delicate detail, serene line.",
    description:
      "From the Easter collection, a piece of soft hues and delicate detail with a fresh, serene line, sleeves and sizing fully customisable to you.",
    image: "/products/easter-chanderi.jpg",
  },
  {
    slug: "lemon-chanderi-smocking",
    name: "Lemon Chanderi with Smocking",
    silhouette: "A-line dress",
    fabric: "Chanderi",
    colours: ["Lemon yellow"],
    sizes: ["S", "M", "L", "XL"],
    price: 2400,
    occasions: ["church", "everyday"],
    blurb: "Textured smocking, floral-threaded sleeves.",
    description:
      "Effortless elegance for everyday, from the textured smocking to the floral-threaded sleeves. A versatile silhouette you will reach for again and again.",
    image: "/products/lemon-chanderi-smocking.jpg",
  },
  {
    slug: "modal-kaftan",
    name: "Modal Kaftan",
    silhouette: "Kaftan",
    fabric: "Modal",
    colours: ["Black", "Your choice"],
    sizes: ["S", "M", "L", "XL"],
    price: 2400,
    occasions: ["everyday", "brunch"],
    blurb: "Comfort wrapped in quiet sophistication.",
    description:
      "Wearing a kaftan feels like wrapping yourself in comfort while still carrying real class and charm. In soft modal, also available in elegant black. Customisation available.",
    image: "/products/modal-kaftan.jpg",
    stock: 4, // demo: shows "Only 4 left" — edit/remove in Sanity
  },
  {
    slug: "chanderi-aline",
    name: "Chanderi A-line Dress",
    silhouette: "A-line dress",
    fabric: "Chanderi",
    colours: ["Your choice"],
    sizes: ["S", "M", "L", "XL"],
    price: 2200,
    occasions: ["everyday", "festive"],
    blurb: "An everyday Chanderi, made to your size.",
    description:
      "A clean, customisable Chanderi A-line, the easy answer to most days. Choose your colour and your fit, and we tailor it to you.",
    image: "/products/chanderi-aline.jpg",
  },
  {
    slug: "white-chanderi-threadwork",
    name: "White Chanderi with Threadwork",
    silhouette: "A-line dress",
    fabric: "Mulchanderi",
    colours: ["White"],
    sizes: ["S", "M", "L"],
    price: 2300,
    occasions: ["church", "everyday"],
    blurb: "White on white, delicate threadwork.",
    description:
      "Classic white mulchanderi with delicate thread work, an A-line that is light, airy and effortlessly beautiful. White on white, done right.",
    image: "/products/white-chanderi-threadwork.jpg",
  },
  {
    slug: "crushed-cotton-midi",
    name: "Crushed Cotton Midi",
    silhouette: "Midi dress",
    fabric: "Crushed Cotton",
    colours: ["White"],
    sizes: ["S", "M", "L"],
    price: 2600,
    occasions: ["church", "brunch"],
    blurb: "Floral collar embroidery, hand-placed sequins.",
    description:
      "From the Easter collection, a crushed-cotton midi that is all about the little things, delicate floral embroidery on the flap collar and the subtle shimmer of hand-placed sequins.",
    image: "/products/crushed-cotton-midi.jpg",
  },
  {
    slug: "cotton-umbrella-aline",
    name: "Cotton Umbrella-Cut A-line",
    silhouette: "Umbrella-cut dress",
    fabric: "Cotton",
    colours: ["White", "Light green"],
    sizes: ["S", "M", "L"],
    price: 1950,
    occasions: ["everyday"],
    blurb: "Loose umbrella cut, detachable lining.",
    description:
      "A light, breezy cotton A-line with a loose umbrella cut and detachable lining, the dress that saves your sunniest, busiest days.",
    image: "/products/cotton-umbrella-aline.jpg",
    stock: 0, // demo: shows "Out of stock" — edit/remove in Sanity
  },
  {
    slug: "cotton-aline-frock",
    name: "Cotton A-line Frock",
    silhouette: "A-line frock",
    fabric: "Cotton",
    colours: ["Your choice"],
    sizes: ["S", "M", "L", "XL"],
    price: 1850,
    occasions: ["everyday"],
    blurb: "100% cotton, easy everyday frock.",
    description:
      "A 100% cotton A-line frock, simple and comfortable, customisable in the colour you want. Delivered across Kerala.",
    image: "/products/cotton-aline-frock.jpg",
  },
];

export function formatINR(n: number): string {
  return "₹" + n.toLocaleString("en-IN");
}

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function allFabrics(): Fabric[] {
  return Array.from(new Set(PRODUCTS.map((p) => p.fabric))).sort();
}

export const ALL_OCCASIONS: Occasion[] = [
  "everyday",
  "office",
  "church",
  "festive",
  "baptism",
  "wedding-guest",
  "brunch",
];
