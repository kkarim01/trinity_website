import { BarChart2, Brain, Code2, RefreshCw, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Card } from "@/components/ui/Card";

type Pillar = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

// The 5 genuine services from the brand banner (Email_Banner_C.png).
// Client-Centric and No Outsourcing are positioning statements, not
// services, and are excluded from this version of the site.
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
    title: "Business Process Automation & Integration",
    description:
      "We streamline repetitive work and connect your existing systems, so your team can focus on what matters.",
  },
  {
    id: "ai-integration-automation",
    icon: Brain,
    title: "AI Integration & Automation",
    description:
      "We embed practical AI into your existing workflows, not bolted-on chatbots.",
  },
  {
    id: "mvp-rapid-prototyping",
    icon: Rocket,
    title: "MVP & Rapid Prototyping",
    description:
      "Go from idea to a working product fast, without cutting corners on quality.",
  },
  {
    id: "digital-process-consulting",
    icon: BarChart2,
    title: "Digital Process Consulting",
    description:
      "We map how your business runs today and design a clearer, faster way to run it tomorrow.",
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </section>
  );
}
