"use client";

import { useEffect, useState } from "react";

import { Logo } from "@/components/layout/Logo";
import { NavLinks } from "@/components/layout/NavLinks";

// Header solidifies once the page has scrolled roughly past a full-height
// hero. Revisit if the hero's actual height ends up shorter/taller than ~1vh.
const SCROLL_THRESHOLD_VH = 0.9;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > window.innerHeight * SCROLL_THRESHOLD_VH);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 z-50 w-full border-b",
        "transition-all duration-[350ms] ease-out motion-reduce:transition-none",
        isScrolled
          ? "bg-onyx-raised/95 border-hairline shadow-lg shadow-black/30 backdrop-blur-sm"
          : "bg-gradient-to-b from-onyx-base/75 via-onyx-base/35 to-transparent border-transparent shadow-none backdrop-blur-sm",
      ].join(" ")}
    >
      {/* Fixed height (the original py-5 + content row size) keeps the bar
          from growing with the 80px mark; overflow is left at its default
          (visible) so the mark bleeds slightly past the bar instead of
          being clipped — reads as intentional rather than a layout bug. */}
      <div className="flex h-[72px] w-full items-center justify-between pl-10 pr-6 md:pl-14 md:pr-10">
        <Logo />
        <NavLinks />
      </div>
    </header>
  );
}
