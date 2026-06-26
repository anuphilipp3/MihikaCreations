"use client";

import { useState } from "react";
import { WhatsappLogo, Ruler, CaretDown } from "@phosphor-icons/react";
import { formatINR, OCCASION_LABELS, type Product } from "@/lib/products";
import { waLink } from "@/lib/whatsapp";

const SLEEVE_OPTIONS = ["As shown", "Add sleeves", "Sleeveless"] as const;
type Sleeve = (typeof SLEEVE_OPTIONS)[number];

type Measure = { bust: string; waist: string; hip: string; length: string; height: string };
const EMPTY_MEASURE: Measure = { bust: "", waist: "", hip: "", length: "", height: "" };

export function OrderPanel({ product }: { product: Product }) {
  const [size, setSize] = useState<string>(product.sizes[1] ?? product.sizes[0]);
  const [colour, setColour] = useState<string>(product.colours[0] ?? "As shown");
  const [sleeve, setSleeve] = useState<Sleeve>("As shown");
  const [occasion, setOccasion] = useState<string>("");
  const [showMeasure, setShowMeasure] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [notSure, setNotSure] = useState(false);
  const [measure, setMeasure] = useState<Measure>(EMPTY_MEASURE);
  const [notes, setNotes] = useState("");

  const setM = (k: keyof Measure, v: string) =>
    setMeasure((prev) => ({ ...prev, [k]: v }));

  const message = buildMessage({
    product,
    size,
    colour,
    sleeve,
    occasion,
    notSure,
    measure,
    notes,
  });

  return (
    <div className="flex flex-col gap-7">
      {/* Colour */}
      {product.colours.length > 0 && (
        <Field label="Colour">
          <div className="flex flex-wrap gap-2">
            {product.colours.map((c) => (
              <Pill key={c} active={colour === c} onClick={() => setColour(c)}>
                {c}
              </Pill>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted">
            Want a different shade? Choose any colour with us on WhatsApp.
          </p>
        </Field>
      )}

      {/* Size */}
      <Field label="Size">
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <Pill key={s} active={size === s} onClick={() => setSize(s)}>
              {s}
            </Pill>
          ))}
          <Pill active={size === "Custom"} onClick={() => setSize("Custom")}>
            Custom fit
          </Pill>
        </div>
      </Field>

      {/* Sleeves */}
      <Field label="Sleeves">
        <div className="flex flex-wrap gap-2">
          {SLEEVE_OPTIONS.map((s) => (
            <Pill key={s} active={sleeve === s} onClick={() => setSleeve(s)}>
              {s}
            </Pill>
          ))}
        </div>
      </Field>

      {/* Measurement capture */}
      <div className="border-t border-line pt-6">
        <button
          onClick={() => setShowMeasure((v) => !v)}
          className="flex w-full items-center justify-between text-left"
          aria-expanded={showMeasure}
        >
          <span className="flex items-center gap-2 text-sm text-ink">
            <Ruler size={18} aria-hidden="true" />
            Add your measurements
            <span className="text-muted">(optional)</span>
          </span>
          <CaretDown
            size={18}
            className={"transition-transform " + (showMeasure ? "rotate-180" : "")}
            aria-hidden="true"
          />
        </button>

        {showMeasure && (
          <div className="mt-5 flex flex-col gap-5">
            <label className="flex items-start gap-3 text-sm text-muted">
              <input
                type="checkbox"
                checked={notSure}
                onChange={(e) => setNotSure(e.target.checked)}
                className="mt-1 h-4 w-4 accent-[#9e4861]"
              />
              I'm not sure of my measurements, please help me over WhatsApp.
            </label>

            {!notSure && (
              <>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <MeasureInput label="Bust" value={measure.bust} onChange={(v) => setM("bust", v)} />
                  <MeasureInput label="Waist" value={measure.waist} onChange={(v) => setM("waist", v)} />
                  <MeasureInput label="Hip" value={measure.hip} onChange={(v) => setM("hip", v)} />
                  <MeasureInput label="Full length" value={measure.length} onChange={(v) => setM("length", v)} />
                  <MeasureInput label="Height" value={measure.height} onChange={(v) => setM("height", v)} />
                </div>

                <button
                  onClick={() => setShowGuide((v) => !v)}
                  className="self-start text-xs uppercase tracking-[0.12em] text-rose underline-offset-4 hover:underline"
                  aria-expanded={showGuide}
                >
                  How to measure
                </button>

                {showGuide && (
                  <ul className="flex flex-col gap-2 border-l-2 border-rose-soft pl-4 text-sm leading-relaxed text-muted">
                    <li>Measure over fitted clothing, with the tape snug, not tight.</li>
                    <li><b className="font-medium text-ink">Bust</b> across the fullest part, tape level.</li>
                    <li><b className="font-medium text-ink">Waist</b> at the narrowest point, above the navel.</li>
                    <li><b className="font-medium text-ink">Hip</b> across the fullest part of the hips.</li>
                    <li><b className="font-medium text-ink">Full length</b> from shoulder to where you want the hem.</li>
                    <li>All in inches. We confirm the finer details on WhatsApp.</li>
                  </ul>
                )}
              </>
            )}
          </div>
        )}
      </div>

      {/* Notes */}
      <Field label="Anything else (optional)">
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={2}
          placeholder="Occasion, deadline, a reference you love..."
          className="w-full resize-none rounded-xs border border-line bg-cream px-3.5 py-3 text-sm text-ink outline-none placeholder:text-muted/70 focus:border-forest"
        />
      </Field>

      {/* CTA */}
      <a
        href={waLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 rounded-xs bg-rose px-6 py-4 text-sm uppercase tracking-[0.16em] text-cream transition-transform hover:-translate-y-px active:translate-y-0"
      >
        <WhatsappLogo size={20} weight="fill" aria-hidden="true" />
        Order on WhatsApp
      </a>
      <p className="-mt-3 text-center text-xs text-muted">
        Opens WhatsApp with your choices ready. We reply with the exact price and
        confirm your fit, no payment now.
      </p>
    </div>
  );
}

function buildMessage(o: {
  product: Product;
  size: string;
  colour: string;
  sleeve: Sleeve;
  occasion: string;
  notSure: boolean;
  measure: Measure;
  notes: string;
}): string {
  const lines = [
    `Hi Mahika! I'd like to order this piece from the website:`,
    ``,
    `▸ ${o.product.name} (${o.product.fabric} ${o.product.silhouette})`,
    `▸ Price from ${formatINR(o.product.price)}`,
    `▸ Size: ${o.size}`,
    `▸ Colour: ${o.colour}`,
    `▸ Sleeves: ${o.sleeve}`,
  ];

  const m = o.measure;
  const hasMeasure = !o.notSure && (m.bust || m.waist || m.hip || m.length || m.height);
  if (hasMeasure) {
    lines.push(``, `Measurements (inches):`);
    if (m.bust) lines.push(`- Bust: ${m.bust}`);
    if (m.waist) lines.push(`- Waist: ${m.waist}`);
    if (m.hip) lines.push(`- Hip: ${m.hip}`);
    if (m.length) lines.push(`- Full length: ${m.length}`);
    if (m.height) lines.push(`- Height: ${m.height}`);
  }
  if (o.notSure) {
    lines.push(``, `I'm not sure of my measurements, please help me work them out.`);
  }
  if (o.notes.trim()) {
    lines.push(``, `Notes: ${o.notes.trim()}`);
  }
  return lines.join("\n");
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2.5">
      <span className="text-[11px] uppercase tracking-[0.2em] text-sage">{label}</span>
      {children}
    </div>
  );
}

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={
        "min-w-[3rem] rounded-xs border px-4 py-2 text-sm transition-colors " +
        (active
          ? "border-forest bg-forest text-cream"
          : "border-line text-ink hover:border-forest")
      }
    >
      {children}
    </button>
  );
}

function MeasureInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs text-muted">{label}</span>
      <input
        inputMode="decimal"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="in"
        className="w-full rounded-xs border border-line bg-cream px-3 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-forest"
      />
    </label>
  );
}
