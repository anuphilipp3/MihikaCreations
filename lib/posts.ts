// Blog ("Journal") content. Reads from Sanity when posts exist there, otherwise
// serves the local posts below — so the journal is live immediately, and the team
// can add more from the Sanity Studio later (same Portable Text shape).

import type { PortableTextBlock } from "@portabletext/types";
import { sanityClient } from "@/sanity/client";
import { sanityEnabled } from "@/sanity/env";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string; // ISO
  author: string;
  body: PortableTextBlock[];
};

// ── Portable Text authoring helpers (keep local content readable) ──
let _k = 0;
const key = () => `b${_k++}`;
const span = (text: string) => ({ _type: "span", _key: key(), text, marks: [] });
const block = (style: string, text: string): PortableTextBlock =>
  ({ _type: "block", _key: key(), style, markDefs: [], children: [span(text)] }) as PortableTextBlock;
const p = (t: string) => block("normal", t);
const h2 = (t: string) => block("h2", t);
const quote = (t: string) => block("blockquote", t);
const li = (t: string): PortableTextBlock =>
  ({ _type: "block", _key: key(), style: "normal", listItem: "bullet", level: 1, markDefs: [], children: [span(t)] }) as PortableTextBlock;

export function readingMinutes(body: PortableTextBlock[]): number {
  const words = body
    .flatMap((b) => ((b as { children?: { text?: string }[] }).children ?? []).map((c) => c.text ?? ""))
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const LOCAL_POSTS: Post[] = [
  {
    slug: "a-field-guide-to-our-fabrics",
    title: "A Field Guide to the Fabrics We Love",
    excerpt:
      "Chanderi, linen, organza, muslin — every Mahika dress begins with cloth. Here's how to tell them apart, what each one feels like, and when to reach for it.",
    coverImage: "/products/linen-hand-embroidered.jpg",
    date: "2026-06-12",
    author: "Mahika",
    body: [
      p("A dress is only ever as good as the cloth it begins with. Before a single measurement is taken, before a colour is chosen, we are choosing fabric — because in Kerala's heat and humidity, how a fabric breathes and falls matters as much as how it looks. Here is a short, honest guide to the materials you'll meet across our collection."),
      h2("Chanderi — quiet luxury"),
      p("Chanderi is a fine handloom weave with a soft sheen and a near-translucent body. It drapes beautifully without clinging, which is exactly why it photographs so well and feels so light on a long afternoon. It takes thread work and delicate embroidery gracefully, so most of our A-line pieces with hand detailing start here. Think of Chanderi as your dressed-up everyday — refined, but never stiff."),
      h2("Mulchanderi — the breezy cousin"),
      p("Mulchanderi blends the airiness of mul cotton with the elegance of Chanderi. It is a touch lighter and even more forgiving in the heat, which makes it our go-to for festive daywear and church mornings. The white-on-white threadwork pieces owe their effortless, floaty quality to this weave."),
      h2("Linen — structure that ages well"),
      p("Linen is the workhorse with a soul. It holds a clean A-line shape, breathes exceptionally, and — unlike most fabrics — actually gets better with wear, softening over time without losing its character. A hand-embroidered linen dress is the piece you'll reach for from a workday to a quiet dinner, year after year."),
      h2("Organza — the occasion fabric"),
      p("Crisp, sheer and full of light, organza is what we use when a piece needs to make an entrance. It holds volume and structure — those graceful gathers and keyhole backs only work because organza can stand on its own. It is less about everyday comfort and more about the days you want to be remembered at: weddings, festive evenings, celebrations."),
      h2("Muslin & cotton — comfort, first"),
      p("Premium muslin is soft, breathable and surprisingly elegant when it carries appliqué or sequin detailing — our three-piece sets for baptisms and family days live here. Pure cotton, meanwhile, is the honest everyday choice: a loose umbrella-cut frock that simply lets you get on with your day."),
      quote("In this climate, the right fabric isn't a luxury. It's the difference between a dress you endure and one you forget you're wearing."),
      h2("Caring for them"),
      p("Natural fabrics ask for a little gentleness in return for years of wear:"),
      li("Hand wash or use a gentle machine cycle in cool water; avoid harsh detergents."),
      li("Dry in shade, not direct sun, to keep colours true."),
      li("Iron Chanderi and organza on low heat, ideally with a thin cloth in between."),
      li("Store folded with space to breathe, away from damp."),
      p("Choose the fabric for the life you'll live in the dress, and the rest — colour, fit, the small customisations — falls into place. That's where we come in."),
    ],
  },
  {
    slug: "what-to-wear-and-when-a-kerala-occasion-guide",
    title: "What to Wear, and When: A Kerala Occasion Guide",
    excerpt:
      "From Easter Sunday to a cousin's wedding, the Kerala calendar has its own rhythm. A practical guide to dressing for each moment — gracefully, and in the heat.",
    coverImage: "/products/royal-blue-organza.jpg",
    date: "2026-05-20",
    author: "Mahika",
    body: [
      p("Kerala's year moves to its own calendar of occasions — Sunday services and Easter, festive gatherings and Eid, baptisms, weddings, the ordinary beautiful weekdays in between. Each asks for something a little different. Here's how we think about dressing for them, without ever sacrificing comfort to the climate."),
      h2("Church & Easter Sundays"),
      p("Modest, soft and graceful is the language here. Reach for gentle hues — blush, lemon, pastel blue, white-on-white — in Chanderi or mulchanderi that won't wilt by the second hymn. A clean A-line with delicate threadwork reads as considered without ever trying too hard. For Easter especially, soft florals and a little hand detailing feel right."),
      h2("Festive days & Eid"),
      p("This is where colour earns its place. Deeper, richer tones — aquatic green, royal blue, onion pink — and a little structure go a long way. A three-piece set or an organza piece with some volume holds the occasion beautifully. You want to feel dressed, not constrained, so we keep the silhouette flowing even when the fabric is grand."),
      h2("Baptisms & family days"),
      p("Soft whites, creams and pastels are the natural choice — muslin with blue appliqué, scalloped dupattas, the gentle shimmer of hand-placed sequins. These are long, warm, photo-filled days, so breathability and a forgiving cut matter as much as the detailing."),
      h2("Office & everyday"),
      p("Quiet polish is the goal: deep greens, clean lines, an A-line linen that moves from a meeting to a coffee without a second thought. Everyday dressing is where natural fabrics really pay off — you stay cool, you stay comfortable, and you still look entirely put together."),
      h2("Wedding guest"),
      p("The art of being a wedding guest is to stand out, gracefully, without ever upstaging. Jewel tones in organza, a flattering silhouette, a thoughtful detail like a back keyhole or hand-worked pin tucks. Elegant, memorable, yours."),
      quote("Dress for the moment, but dress for yourself first. The most beautiful thing you can wear to any occasion is a piece that actually fits you."),
      p("And because every piece we make is customisable — your colour, your size, your sleeve — the same design can quietly shift from a church morning to a festive evening. Find one you love, and we'll tailor it to the moment."),
    ],
  },
  {
    slug: "made-for-you-the-case-for-measured-to-fit",
    title: "Made for You: The Case for a Dress Cut to Fit",
    excerpt:
      "Off-the-rack asks you to fit the dress. Made-to-measure makes the dress fit you. Here's what that really means at Mahika — and why it changes how a dress feels.",
    coverImage: "/products/onion-pink-chanderi.jpg",
    date: "2026-04-28",
    author: "Mahika",
    body: [
      p("There's a particular feeling you get the first time you wear something made to your measurements. The shoulders sit where shoulders should. The waist falls in the right place. Nothing pulls, nothing gapes, and for once you're not quietly adjusting yourself all evening. That feeling is the whole point of what we do."),
      h2("The trouble with standard sizes"),
      p("A standard size is an average — a guess at a body that doesn't quite exist. Most of us are a small here and a medium there, longer or shorter than the size chart assumes. So an off-the-rack dress almost always asks you to compromise somewhere, and you spend the day managing the fit instead of forgetting about it."),
      h2("What made-to-measure means here"),
      p("At Mahika, a design is a starting point, not a fixed size on a rack. When you find a piece you love, we make it to your numbers — and to your taste:"),
      li("Your size, from your own measurements rather than a generic chart."),
      li("Your colour — most designs can be made in a shade of your choosing."),
      li("Your sleeves, neckline and length, adjusted to what flatters and what you'll actually wear."),
      li("Your fabric, guided by the occasion and the season."),
      h2("How it works"),
      p("It's simpler than it sounds. You browse the collection, pick a design, and choose your fit and customisations on the product page. Tap to send it to us on WhatsApp — your choices arrive with the message — and we confirm the exact price and details with a real person. Then we stitch it to you and deliver across Kerala. Every made-to-measure order comes with one free alteration, because the goal is for it to fit perfectly, not almost."),
      h2("Measuring at home, made easy"),
      p("You don't need to be precise to the millimetre — just snug, not tight, over fitted clothing:"),
      li("Bust: around the fullest part, tape level."),
      li("Waist: at the narrowest point, above the navel."),
      li("Hip: around the fullest part of the hips."),
      li("Length: from your shoulder to where you'd like the hem to fall."),
      p("Not sure? Tell us on WhatsApp and we'll talk you through it. That's rather the point of a small label — there's always a person on the other end."),
      quote("Confidence rarely comes from a label or a price. It comes from a dress that fits like it was made for you — because it was."),
      p("That's the quiet luxury we're after. Not louder, not flashier. Just yours."),
    ],
  },
];

const POST_PROJECTION = `{
  "slug": slug.current,
  title,
  excerpt,
  "coverImage": coalesce(coverImage.asset->url, ""),
  "date": publishedAt,
  "author": coalesce(author, "Mahika"),
  body
}`;

export async function getAllPosts(): Promise<Post[]> {
  if (sanityEnabled && sanityClient) {
    try {
      const data = await sanityClient.fetch<Post[]>(
        `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) ${POST_PROJECTION}`,
      );
      if (data.length > 0) return data;
    } catch {
      // fall through to local
    }
  }
  return LOCAL_POSTS;
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  if (sanityEnabled && sanityClient) {
    try {
      const data = await sanityClient.fetch<Post | null>(
        `*[_type == "post" && slug.current == $slug][0] ${POST_PROJECTION}`,
        { slug },
      );
      if (data) return data;
    } catch {
      // fall through to local
    }
  }
  return LOCAL_POSTS.find((post) => post.slug === slug);
}

export async function getPostSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((post) => post.slug);
}
