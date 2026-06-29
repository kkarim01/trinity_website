"use client";

import { type ReactNode } from "react";

import { PillarsLayoutProvider } from "./PillarsLayoutContext";
import { PillarsLayoutToggle } from "./PillarsLayoutToggle";

export function PillarsLayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <PillarsLayoutProvider>
      {children}
      <PillarsLayoutToggle />
    </PillarsLayoutProvider>
  );
}
