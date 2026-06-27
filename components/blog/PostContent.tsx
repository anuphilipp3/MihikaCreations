import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 text-[1.0625rem] leading-[1.85] text-ink/85">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-12 font-display text-3xl leading-tight text-ink">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 font-display text-2xl text-ink">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-10 border-l-2 border-rose pl-6 font-display text-2xl leading-snug text-ink md:text-[1.7rem]">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 flex flex-col gap-2.5 pl-1">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex gap-3 text-[1.0625rem] leading-relaxed text-ink/85">
        <span aria-hidden="true" className="mt-3 h-1 w-1 shrink-0 rounded-full bg-rose" />
        <span>{children}</span>
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-medium text-ink">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
  },
};

export function PostContent({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
