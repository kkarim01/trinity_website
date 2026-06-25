// `id` doubles as the future route slug (e.g. /approach) once a section is
// lifted out of the single-page layout; `href` stays anchor-based for now.
export const navItems = [
  { id: "approach", label: "Our Approach", href: "#approach" },
  { id: "services", label: "Services", href: "#services" },
  { id: "contact", label: "Contact", href: "#contact" },
] as const;

export function NavLinks() {
  return (
    <ul className="flex items-center gap-9 md:gap-11">
      {navItems.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            className="inline-block border-b border-transparent pb-1.5
              font-display text-xs font-medium uppercase tracking-[0.18em]
              text-[#D4CFC8] transition-colors duration-300 ease-out
              hover:border-gold-light hover:text-gold-light
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold
              focus-visible:rounded-sm"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
