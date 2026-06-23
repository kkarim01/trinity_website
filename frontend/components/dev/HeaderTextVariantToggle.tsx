"use client";

// TEMP, preview-only — see HeaderTextVariantContext.tsx for removal notes.

import { useEffect } from "react";

import { useHeaderTextVariant, VARIANTS } from "@/components/dev/HeaderTextVariantContext";

const VARIANT_LABELS: Record<string, string> = {
  default: "Default — no treatment",
  A: "A — Text stroke",
  B: "B — Border / underline",
  C: "C — Gold gradient fill",
  D: "D — Stronger backdrop",
  E: "E — Platinum text",
  F: "F — Text shadow only",
  G: "G — Capsule per nav item",
  H: "H — Full-width frosted band",
  I: "I — Gold text",
  J: "J — Staggered opacity",
  K: "K — Underline on hover only",
  L: "L — Gold wordmark / platinum nav",
  M: "M — Nameplate panel behind logo",
  N: "N — Strong backdrop + two-tone color",
};

export function HeaderTextVariantToggle() {
  const { variant, cycleVariant } = useHeaderTextVariant();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.info(
      `[header text variant preview] ${VARIANTS.length} variants loaded: ${VARIANTS.join(", ")}`
    );
  }, []);

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      const activeTag = document.activeElement?.tagName;
      if (activeTag === "INPUT" || activeTag === "TEXTAREA") return;

      if (event.key.toLowerCase() === "v") {
        cycleVariant();
      }
    }

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [cycleVariant]);

  const currentIndex = VARIANTS.indexOf(variant) + 1;

  return (
    <button
      type="button"
      onClick={cycleVariant}
      className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 rounded-full
        border border-gold/50 bg-onyx-raised px-5 py-2.5 font-display text-xs
        uppercase tracking-[0.12em] text-platinum shadow-lg shadow-black/40
        transition-colors duration-300 hover:border-gold hover:text-gold-light"
    >
      ({currentIndex}/{VARIANTS.length}) {VARIANT_LABELS[variant]} · Press V
    </button>
  );
}
