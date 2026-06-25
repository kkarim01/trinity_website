import { Logo } from "@/components/layout/Logo";

const legalLinkClasses =
  "font-display text-[11px] uppercase tracking-[0.18em] text-platinum transition-colors duration-300 hover:text-gold-light";

export function Footer() {
  return (
    <footer className="bg-onyx-sunken">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10 md:py-10 lg:px-8">
        <Logo />

        <div className="text-center font-body text-xs text-platinum/70">
          <p>© 2026 Trinity Process Solutions Pty Ltd. All rights reserved.</p>
          {/* TODO: replace with the real ABN */}
          <p>ABN: [ABN NUMBER]</p>
        </div>

        {/* TODO: point these at /about and /privacy once those routes exist */}
        <nav className="flex flex-wrap items-center justify-center gap-6 md:justify-end">
          <a href="#" className={legalLinkClasses}>
            About
          </a>
          <a href="#" className={legalLinkClasses}>
            Privacy Policy
          </a>
          <a href="#contact" className={legalLinkClasses}>
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
