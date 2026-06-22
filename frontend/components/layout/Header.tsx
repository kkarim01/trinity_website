"use client";

import { useEffect, useState } from "react";

import { Logo } from "@/components/layout/Logo";
import { NavLinks } from "@/components/layout/NavLinks";
import { SectionDivider } from "@/components/ui/SectionDivider";

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
          ? "bg-onyx-raised/95 backdrop-blur-sm border-hairline shadow-lg shadow-black/30"
          : "bg-transparent border-transparent shadow-none",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <div className="flex items-center gap-6 md:gap-8">
          <Logo />
          <div className="hidden h-8 md:block">
            <SectionDivider orientation="vertical" />
          </div>
        </div>
        <NavLinks />
      </div>
    </header>
  );
}
