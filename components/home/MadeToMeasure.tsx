const STEPS = [
  {
    n: "01",
    title: "Browse the collection",
    body: "Find a design you love. Every piece is a starting point, not a fixed size on a rack.",
  },
  {
    n: "02",
    title: "Choose your fit",
    body: "Pick your size or send your measurements, your colour, your sleeves. Unsure? We help over WhatsApp.",
  },
  {
    n: "03",
    title: "We tailor and deliver",
    body: "We stitch it to your numbers and deliver across Kerala. One free fit alteration, always.",
  },
];

export function MadeToMeasure() {
  return (
    <section
      aria-labelledby="mtm-heading"
      className="bg-forest text-cream"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-2xl">
          <h2 id="mtm-heading" className="font-display text-3xl leading-tight md:text-5xl">
            Made to your measurements, not a guess
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/70">
            The whole point of Mahika. You stay on WhatsApp with a real person,
            the site just does the back-and-forth for you.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-cream/15 bg-cream/15 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="flex flex-col gap-3 bg-forest p-7 md:p-9">
              <span className="font-display text-4xl text-cream/40">{s.n}</span>
              <h3 className="font-display text-2xl">{s.title}</h3>
              <p className="text-sm leading-relaxed text-cream/70">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
