"use client";

import { usePillarsLayout } from "./PillarsLayoutContext";
import { pillarsLayoutVariants } from "./pillarsLayoutVariants";

export function PillarsLayoutToggle() {
  const { variant, cycle } = usePillarsLayout();
  return (
    <button
      onClick={cycle}
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-gold/30 bg-onyx-base/90 px-5 py-2.5 font-display text-[11px] uppercase tracking-[0.15em] text-platinum backdrop-blur-sm transition-colors hover:border-gold/60"
    >
      Layout {variant + 1}/3 · {pillarsLayoutVariants[variant].label} · Press V
    </button>
  );
}
