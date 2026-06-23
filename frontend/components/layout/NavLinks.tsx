import type { HeaderTextVariant } from "@/components/dev/HeaderTextVariantContext";
import { getNavLinkClasses } from "@/components/dev/headerTextVariantStyles";

// `id` doubles as the future route slug (e.g. /approach) once a section is
// lifted out of the single-page layout; `href` stays anchor-based for now.
export const navItems = [
  { id: "approach", label: "Our Approach", href: "#approach" },
  { id: "services", label: "Services", href: "#services" },
  { id: "contact", label: "Contact", href: "#contact" },
] as const;

// `variant` is a TEMP preview prop (see HeaderTextVariantContext.tsx) —
// defaults to "default" so any other caller is unaffected.
export function NavLinks({ variant = "default" as HeaderTextVariant }: { variant?: HeaderTextVariant }) {
  return (
    <ul className="flex items-center gap-9 md:gap-11">
      {navItems.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            className={`font-display text-xs uppercase tracking-[0.18em]
              transition-colors duration-300 ease-out
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold
              focus-visible:rounded-sm ${getNavLinkClasses(variant)}`}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
