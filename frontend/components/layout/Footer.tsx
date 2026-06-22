import { Logo } from "@/components/layout/Logo";
import { navItems } from "@/components/layout/NavLinks";
import { SectionDivider } from "@/components/ui/SectionDivider";

const footerHeadingClasses =
  "font-display text-xs uppercase tracking-[0.18em] text-gold-light";

const footerLinkClasses =
  "font-body text-sm text-platinum transition-colors duration-300 hover:text-gold-light";

// Mirrors the 3 genuine services from the brand banner (Pillars.tsx) —
// kept as a static list here since there are no per-service routes yet.
const services = [
  "Custom Development",
  "Business Process Automation",
  "Cloud Services",
];

export function Footer() {
  return (
    <footer className="bg-onyx-sunken">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-0">
          <div className="lg:pr-12">
            <Logo />
          </div>

          <SectionDivider orientation="vertical" className="hidden lg:block" />

          <div className="flex flex-col gap-10 sm:flex-row lg:flex-1 lg:items-stretch">
            <div className="sm:flex-1 lg:px-12">
              <h3 className={footerHeadingClasses}>Sitemap</h3>
              <ul className="mt-5 space-y-3">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a href={item.href} className={footerLinkClasses}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <SectionDivider orientation="vertical" className="hidden sm:block" />

            <div className="sm:flex-1 lg:px-12">
              <h3 className={footerHeadingClasses}>Services</h3>
              <ul className="mt-5 space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a href="#services" className={footerLinkClasses}>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <SectionDivider orientation="vertical" className="hidden sm:block" />

            <div className="sm:flex-1 lg:px-12">
              <h3 className={footerHeadingClasses}>Contact</h3>
              <ul className="mt-5 space-y-3">
                <li>
                  {/* TODO: replace with the real contact email (mailto:) */}
                  <a href="#" className={footerLinkClasses}>
                    [Contact Email]
                  </a>
                </li>
                <li>
                  {/* TODO: replace with the real phone number (tel:) */}
                  <a href="#" className={footerLinkClasses}>
                    [Phone Number]
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <SectionDivider className="mt-16" />

        <p className="mt-8 text-center font-body text-xs text-platinum">
          Boutique Solutions. Built For Your Business. Everything You Need.{" "}
          <span className="text-gold-light">One Trusted Partner.</span>
        </p>
      </div>
    </footer>
  );
}
