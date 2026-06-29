"use client";

import { BarChart2, Brain, Code2, RefreshCw, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";

import { usePillarsLayout } from "@/components/dev/PillarsLayoutContext";
import { pillarsLayoutVariants } from "@/components/dev/pillarsLayoutVariants";

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

const cardClass =
  "group relative border-l-2 border-gold/40 bg-onyx-raised/80 py-4 pl-6 backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-onyx-raised hover:shadow-[0_0_20px_rgba(180,150,110,0.12)]";

function ServiceCard({ service }: { service: Pillar }) {
  const Icon = service.icon;
  return (
    <div className={cardClass}>
      <Icon size={24} strokeWidth={1.5} className="text-gold" />
      <h3 className="mt-4 font-display text-sm font-medium uppercase tracking-[0.08em] text-ink-primary">
        {service.title}
      </h3>
      <p className="mt-2 font-body text-sm text-platinum">
        {service.description}
      </p>
    </div>
  );
}

export function Pillars() {
  const { variant } = usePillarsLayout();
  const v = pillarsLayoutVariants[variant];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-onyx-base pt-16 pb-28 md:pt-20 md:pb-36 scroll-mt-[60px]"
    >
      {/* Source is 1536×1024 (3:2). The section is taller than this ratio, so
          object-cover crops top/bottom. object-center keeps the composition
          balanced — this variant's focal detail is horizontally centered
          rather than right-weighted, so center avoids an off-balance crop. */}
      <Image
        src="/images/Website_Services_B.png"
        alt=""
        fill
        className="object-cover object-right"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-onyx-base/85 via-onyx-base/70 to-onyx-base/90" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
        <p className="font-display text-xs uppercase tracking-[0.2em] text-gold-light">
          What We Do
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-light text-ink-primary sm:text-4xl">
          Everything Your Business Needs, Under One Roof.
        </h2>

        {v.layout === "default" && (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        )}

        {v.layout === "centred" && (
          <div className="mt-14 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 3).map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-[calc(66.666%+0.75rem)] lg:mx-auto">
              {services.slice(3).map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
        )}

        {v.layout === "right" && (
          <div className="mt-14 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 3).map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div />
              {services.slice(3).map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
