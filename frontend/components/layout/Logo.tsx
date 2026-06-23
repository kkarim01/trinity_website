import Link from "next/link";

import { TriquetraMark } from "@/components/icons/TriquetraMark";
import { SectionDivider } from "@/components/ui/SectionDivider";
import type { HeaderTextVariant } from "@/components/dev/HeaderTextVariantContext";
import {
  getWordmarkPrimaryClasses,
  getWordmarkSecondaryClasses,
  getWordmarkWrapperClasses,
} from "@/components/dev/headerTextVariantStyles";

// `variant` is a TEMP preview prop (see HeaderTextVariantContext.tsx) —
// defaults to "default" so other callers (e.g. Footer) are unaffected.
export function Logo({ variant = "default" as HeaderTextVariant }: { variant?: HeaderTextVariant }) {
  return (
    <Link
      href="#top"
      className="flex items-center gap-4 focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-gold focus-visible:rounded-sm"
    >
      <TriquetraMark className="h-8 w-8 text-gold-light shrink-0" />
      <div className="h-8">
        <SectionDivider orientation="vertical" />
      </div>
      <span
        className={`flex flex-col leading-none ${getWordmarkWrapperClasses(variant)}`}
      >
        <span
          className={`font-display font-light text-base tracking-[0.25em] ${getWordmarkPrimaryClasses(variant)}`}
        >
          TRINITY
        </span>
        <span
          className={`font-display font-light text-[10px] tracking-[0.3em] mt-1.5 ${getWordmarkSecondaryClasses(variant)}`}
        >
          PROCESS SOLUTIONS
        </span>
      </span>
    </Link>
  );
}
