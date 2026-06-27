import { defineType, defineField } from "sanity";

const FABRICS = [
  "Chanderi",
  "Mulchanderi",
  "Cotton",
  "Crushed Cotton",
  "Linen",
  "Muslin",
  "Modal",
  "Organza",
];

const OCCASIONS = [
  { title: "Everyday", value: "everyday" },
  { title: "Office", value: "office" },
  { title: "Church", value: "church" },
  { title: "Festive", value: "festive" },
  { title: "Baptism", value: "baptism" },
  { title: "Wedding guest", value: "wedding-guest" },
  { title: "Brunch", value: "brunch" },
];

const SIZES = ["S", "M", "L", "XL", "XXL"];

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "The web address for this piece. Click Generate.",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "price",
      title: "Price (₹, shown as 'from')",
      type: "number",
      validation: (r) => r.required().positive(),
    }),
    defineField({
      name: "silhouette",
      title: "Silhouette",
      type: "string",
      description: "e.g. A-line dress, Three-piece set, Kaftan, Midi dress",
    }),
    defineField({
      name: "fabric",
      title: "Fabric",
      type: "string",
      options: { list: FABRICS },
    }),
    defineField({
      name: "colours",
      title: "Colours",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      description: "Add a colour and press Enter.",
    }),
    defineField({
      name: "sizes",
      title: "Sizes available",
      type: "array",
      of: [{ type: "string" }],
      options: { list: SIZES, layout: "grid" },
    }),
    defineField({
      name: "occasions",
      title: "Occasions",
      type: "array",
      of: [{ type: "string" }],
      options: { list: OCCASIONS },
    }),
    defineField({
      name: "blurb",
      title: "Card blurb",
      type: "string",
      description: "One short line shown on the product card.",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "bestSeller",
      title: "Best seller (show 'Loved' badge)",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isNew",
      title: "New in (show 'New in' badge)",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "stock",
      title: "Pieces available",
      type: "number",
      description:
        "Leave blank for made-to-order (always available). Set a number for ready-to-wear pieces — 5 or fewer shows 'Only N left', and 0 shows 'Out of stock'.",
      validation: (r) => r.min(0).integer(),
    }),
    defineField({
      name: "displayOrder",
      title: "Display order",
      type: "number",
      description: "Lower numbers show first. Leave blank for newest-first.",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "fabric", media: "image" },
  },
});
