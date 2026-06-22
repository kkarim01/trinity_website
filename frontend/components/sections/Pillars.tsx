import { Cloud, Code2, RefreshCw, ShieldCheck, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Card } from "@/components/ui/Card";

type Pillar = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

// The 3 genuine services from the brand banner — get full cards.
const services: Pillar[] = [
  {
    id: "custom-development",
    icon: Code2,
    title: "Custom Development",
    description:
      "Software built around how your business actually works, not the other way around.",
  },
  {
    id: "business-process-automation",
    icon: RefreshCw,
    title: "Business Process Automation",
    description:
      "We streamline the repetitive work so your team can focus on what matters.",
  },
  {
    id: "cloud-services",
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Secure, scalable infrastructure managed end-to-end, with no guesswork.",
  },
];

// The remaining 2 banner items are positioning, not services — a leaner
// badge strip rather than cards identical to the services above.
const differentiators: Pillar[] = [
  {
    id: "client-centric",
    icon: Users,
    title: "Client-Centric",
    description:
      "Every engagement is built around your priorities, not a one-size-fits-all package.",
  },
  {
    id: "no-outsourcing",
    icon: ShieldCheck,
    title: "No Outsourcing",
    description: "Your project stays with our in-house team, start to finish.",
  },
];

export function Pillars() {
  return (
    <section id="services" className="bg-onyx-base py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
        <p className="font-display text-xs uppercase tracking-[0.2em] text-gold-light">
          What We Do
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-light text-ink-primary sm:text-4xl">
          Everything Your IT Needs, Under One Roof.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id} className="group">
              <service.icon
                strokeWidth={1.5}
                className="h-8 w-8 text-gold transition-colors duration-300 group-hover:text-gold-light"
              />
              <h3 className="mt-6 font-display text-lg font-medium uppercase tracking-[0.08em] text-ink-primary">
                {service.title}
              </h3>
              <p className="mt-3 font-body text-sm text-platinum">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          {differentiators.map((item) => (
            <div
              key={item.id}
              className="group flex flex-1 items-start gap-4 rounded-sm border border-hairline bg-onyx-raised/60 px-6 py-5"
            >
              <item.icon
                strokeWidth={1.5}
                className="h-6 w-6 shrink-0 text-gold transition-colors duration-300 group-hover:text-gold-light"
              />
              <div>
                <p className="font-display text-sm font-medium uppercase tracking-[0.1em] text-ink-primary">
                  {item.title}
                </p>
                <p className="mt-1.5 font-body text-sm text-platinum">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
