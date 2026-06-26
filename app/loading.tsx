import { Wordmark } from "@/components/site/Wordmark";

// Shown during route transitions / data loads (e.g. navigating to a product).
export default function Loading() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6">
      <Wordmark className="h-7 w-[97px] text-ink/70" />
      <span className="block h-px w-32 overflow-hidden bg-line" aria-hidden="true">
        <span className="mahika-sweep block h-full w-1/3 bg-rose" />
      </span>
      <span className="sr-only">Loading</span>
    </div>
  );
}
