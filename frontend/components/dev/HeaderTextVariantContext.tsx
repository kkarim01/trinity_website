"use client";

// TEMP, preview-only: lets the header's logo/nav text treatment be swapped
// live for visual comparison. Safe to delete this entire `components/dev`
// folder once a variant is chosen, along with the provider + toggle wiring
// in app/page.tsx, the `variant` prop on Logo/NavLinks, and the hook call
// in Header.tsx.

import { createContext, useContext, useState, type ReactNode } from "react";

export type HeaderTextVariant =
  | "default"
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N";

export const VARIANTS: HeaderTextVariant[] = [
  "default",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
];

type ContextValue = {
  variant: HeaderTextVariant;
  cycleVariant: () => void;
};

const HeaderTextVariantContext = createContext<ContextValue | null>(null);

export function HeaderTextVariantProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState<HeaderTextVariant>("default");

  function cycleVariant() {
    setVariant((current) => {
      const nextIndex = (VARIANTS.indexOf(current) + 1) % VARIANTS.length;
      return VARIANTS[nextIndex];
    });
  }

  return (
    <HeaderTextVariantContext.Provider value={{ variant, cycleVariant }}>
      {children}
    </HeaderTextVariantContext.Provider>
  );
}

export function useHeaderTextVariant(): ContextValue {
  const context = useContext(HeaderTextVariantContext);
  if (!context) {
    // No provider in the tree (e.g. already ripped out) — behave as if
    // permanently on the default treatment instead of throwing.
    return { variant: "default", cycleVariant: () => {} };
  }
  return context;
}
