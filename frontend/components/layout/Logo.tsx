import Link from "next/link";

import { TriquetraMark } from "@/components/icons/TriquetraMark";

export function Logo() {
  return (
    <Link
      href="#top"
      className="flex items-center gap-1 focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-gold focus-visible:rounded-sm"
    >
      <TriquetraMark className="h-20 w-20 shrink-0" />
      <span className="flex flex-col items-center text-center leading-none">
        <span className="font-display font-normal text-base tracking-[0.25em] text-[#D4CFC8]">
          TRINITY
        </span>
        <span className="font-display font-normal text-[10px] tracking-[0.3em] mt-1.5 text-[#D4CFC8]">
          PROCESS SOLUTIONS
        </span>
      </span>
    </Link>
  );
}
