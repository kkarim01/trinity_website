import Link from "next/link";

import { TriquetraMark } from "@/components/icons/TriquetraMark";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function Logo() {
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
      <span className="flex flex-col leading-none">
        <span className="font-display font-light text-base tracking-[0.25em] text-ink-primary">
          TRINITY
        </span>
        <span className="font-display font-light text-[10px] tracking-[0.3em] text-platinum mt-1.5">
          PROCESS SOLUTIONS
        </span>
      </span>
    </Link>
  );
}
