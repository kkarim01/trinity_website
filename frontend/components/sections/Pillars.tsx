import { BarChart2, Brain, Code2, RefreshCw, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";

type Pillar = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

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
  "group relative border-l-2 border-gold/40 bg-onyx-raised/80 py-4 pl-6 backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-onyx-raised hover:shadow-[0_0_20px_rgba(180,150,110,0.12)] h-full w-full";

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
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-onyx-base pt-16 pb-28 md:pt-20 md:pb-36 scroll-mt-[40px]"
    >
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

        <div className="mt-14 grid grid-cols-6 gap-6">
          <div className="col-span-2 flex">
            <ServiceCard service={services[0]} />
          </div>
          <div className="col-span-2 flex">
            <ServiceCard service={services[1]} />
          </div>
          <div className="col-span-2 flex">
            <ServiceCard service={services[2]} />
          </div>
          <div className="col-span-2 col-start-2 flex">
            <ServiceCard service={services[3]} />
          </div>
          <div className="col-span-2 flex">
            <ServiceCard service={services[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}
