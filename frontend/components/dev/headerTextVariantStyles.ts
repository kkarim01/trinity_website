// TEMP, preview-only — see HeaderTextVariantContext.tsx for removal notes.
//
// A–C tried text-level effects (stroke / border / gradient fill). D–N each
// try a genuinely different lever — header-surface strength, raw text
// color, shadow, background capsules, hierarchy through opacity — to find
// which one actually solves legibility against the video without reading
// as a "SaaS navbar" effect. Gold is used as the accent for A/B because a
// dark/black stroke or border has no contrast against this near-black
// header to begin with.

import type { HeaderTextVariant } from "@/components/dev/HeaderTextVariantContext";

const GOLD_GRADIENT =
  "bg-gradient-to-r from-gold-300 via-gold-light to-gold-600 bg-clip-text text-transparent";

// E/K share this brighter, slightly warm near-white.
const BRIGHT_PLATINUM = "text-[#D4CFC8]";
// L/N's nav color — a distinct, cooler bright platinum so the two-tone
// hierarchy (gold brand mark vs. platinum nav) reads clearly.
const COOL_BRIGHT_PLATINUM = "text-[#C8C3BB]";

// A tuned directional shadow — small offset, tight blur, dark enough to
// separate the glyph from a bright patch of video without ever reading as
// a "glow" or a drop-shadow effect in its own right.
const SUBTLE_LIFT_SHADOW = "[text-shadow:0_1px_3px_rgba(0,0,0,0.85)]";

// Header surface (background/blur/border) for the *unscrolled* state only —
// once scrolled, Header.tsx already solidifies identically for everyone.
export function getHeaderSurfaceClasses(variant: HeaderTextVariant): string {
  switch (variant) {
    case "D":
    case "N":
      // Stronger backdrop: the surface itself supplies the contrast.
      return "bg-onyx-base/88 backdrop-blur-md border-transparent shadow-none";
    case "H":
      // Frosted glass band, thin gold hairline only at the bottom edge.
      return "bg-onyx-base/40 backdrop-blur-md border-gold/40 shadow-none";
    default:
      return "bg-gradient-to-b from-onyx-base/75 via-onyx-base/35 to-transparent border-transparent shadow-none backdrop-blur-sm";
  }
}

export function getNavLinkClasses(variant: HeaderTextVariant): string {
  switch (variant) {
    case "A":
      return "text-ink-primary/90 hover:text-gold-light [-webkit-text-stroke:0.5px_#8A7255] [text-stroke:0.5px_#8A7255]";
    case "B":
      return "inline-block border-b border-gold/70 pb-1.5 text-ink-primary/90 hover:border-gold-light hover:text-gold-light";
    case "C":
      return `${GOLD_GRADIENT} transition-opacity hover:opacity-75`;
    case "E":
      return `${BRIGHT_PLATINUM} hover:text-gold-light`;
    case "F":
      return `text-ink-primary/90 hover:text-gold-light ${SUBTLE_LIFT_SHADOW}`;
    case "G":
      return "inline-block rounded-full bg-onyx-base/70 px-4 py-1.5 text-ink-primary/90 hover:bg-onyx-base/85 hover:text-gold-light";
    case "I":
      return "text-gold-light transition-opacity hover:opacity-75";
    case "J":
      return "text-platinum hover:text-gold-light";
    case "K":
      return `inline-block border-b border-transparent pb-1.5 ${BRIGHT_PLATINUM} hover:border-gold-light hover:text-gold-light`;
    case "L":
    case "N":
      return `${COOL_BRIGHT_PLATINUM} hover:text-ink-primary`;
    default:
      // D, H, M (and "default") deliberately leave nav text untouched.
      return "text-ink-primary/90 hover:text-gold-light";
  }
}

export function getWordmarkPrimaryClasses(variant: HeaderTextVariant): string {
  switch (variant) {
    case "A":
      return "text-ink-primary [-webkit-text-stroke:0.6px_#8A7255] [text-stroke:0.6px_#8A7255]";
    case "C":
      return GOLD_GRADIENT;
    case "E":
    case "K":
      return BRIGHT_PLATINUM;
    case "F":
      return `text-ink-primary ${SUBTLE_LIFT_SHADOW}`;
    case "I":
      return "text-gold-light";
    case "L":
    case "N":
      return "text-gold";
    default:
      // B, D, G, H, J, M (and "default") keep the wordmark's base color —
      // their treatment lives in the wrapper, the header surface, or the
      // secondary line instead.
      return "text-ink-primary";
  }
}

export function getWordmarkSecondaryClasses(variant: HeaderTextVariant): string {
  switch (variant) {
    case "A":
      return "text-platinum [-webkit-text-stroke:0.4px_#8A7255] [text-stroke:0.4px_#8A7255]";
    case "C":
      return GOLD_GRADIENT;
    case "E":
    case "K":
      return BRIGHT_PLATINUM;
    case "F":
      return `text-platinum ${SUBTLE_LIFT_SHADOW}`;
    case "I":
      return "text-gold-light";
    case "J":
      // The deliberately dimmed half of J's brightness hierarchy.
      return "text-ink-primary/60";
    case "L":
    case "N":
      return "text-gold";
    default:
      return "text-platinum";
  }
}

export function getWordmarkWrapperClasses(variant: HeaderTextVariant): string {
  switch (variant) {
    case "B":
      return "border border-gold/50 rounded-sm px-3 py-1.5";
    case "G":
      return "rounded-full bg-onyx-base/70 px-4 py-2";
    case "M":
      // A nameplate behind the brand mark only — nav stays floating.
      return "rounded-sm bg-onyx-base/55 backdrop-blur-sm px-4 py-2";
    default:
      return "";
  }
}
