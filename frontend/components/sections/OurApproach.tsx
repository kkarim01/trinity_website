import Image from "next/image";
import { Gem, Heart, MapPin, ShieldCheck, UserCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/Button";

type CardDef = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const cards: CardDef[] = [
  {
    icon: Gem,
    title: "Boutique by Design",
    description:
      "A small, focused team means every client gets direct senior attention. No handoffs, no account layers.",
  },
  {
    icon: MapPin,
    title: "Australia-Based",
    description:
      "Fully operated in Australia with no offshoring. Your data and your project never leave the country.",
  },
  {
    icon: UserCheck,
    title: "Senior-Led",
    description:
      "Every engagement is led by senior practitioners from day one. The person you meet is the person who does the work.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description:
      "Every decision we make is guided by what's best for your business, not what's easiest for us.",
  },
  {
    icon: ShieldCheck,
    title: "No Outsourcing",
    description:
      "Your project is handled entirely by our in-house team. We never subcontract or send work offshore.",
  },
];

const cardBase =
  "group flex flex-row items-start gap-4 rounded-sm border border-hairline bg-onyx-raised/80 backdrop-blur-sm transition-all duration-300 ease-out hover:border-gold hover:bg-onyx-raised hover:shadow-[0_0_20px_rgba(180,150,110,0.15)]";

function CardCompact({ card }: { card: CardDef }) {
  const Icon = card.icon;
  return (
    <div className={`${cardBase} px-4 py-3`}>
      <Icon size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
      <div>
        <p className="font-display text-[10px] uppercase tracking-[0.2em] text-platinum">
          {card.title}
        </p>
        <p className="mt-1 font-body text-xs leading-relaxed text-platinum/60">
          {card.description}
        </p>
      </div>
    </div>
  );
}

export function OurApproach() {
  return (
    <section
      id="approach"
      className="relative flex min-h-screen w-full items-center overflow-hidden"
    >
      {/* object-top: 1672×941 landscape — anchors the skyline/figure detail at the top
          so it stays visible when the section is taller than the image's native ratio. */}
      <Image
        src="/images/Website_Silhouette_C.png"
        alt=""
        fill
        className="object-cover object-top"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-onyx-base/85 via-onyx-base/70 to-onyx-base/90" />

      <div
        className="relative z-10 mx-auto w-full px-6 py-24 md:px-10 lg:px-16"
        style={{ maxWidth: "1260px" }}
      >
        <div className="flex items-center justify-between">
          {/* Left column — width variable for dev toggle, default 520px */}
          <div
            className="flex shrink-0 flex-col"
            style={{ width: "var(--text-col-width, 520px)" }}
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-hairline px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="font-display text-[11px] uppercase tracking-[0.2em] text-platinum">
                Trusted IT Partner Since 2025
              </span>
            </div>
            <h2
              className="mt-8 font-display font-light uppercase leading-[1.1] text-ink-primary"
              style={{ fontSize: "clamp(1.75rem, 2.8vw, 3.5rem)" }}
            >
              Built to Grow With Your Business.
            </h2>
            <p className="mt-6 max-w-xl font-body text-lg text-platinum">
              Custom development, process automation, and strategic consulting.{" "}
              All handled in-house by a team that works as an extension of
              yours.
            </p>
            <Button href="#contact" className="mt-10 self-start">
              Request Call
            </Button>
          </div>

          {/* Right column — fixed 560px */}
          <div
            className="flex shrink-0 flex-col gap-3"
            style={{ width: "560px" }}
          >
            {cards.map((c) => (
              <CardCompact key={c.title} card={c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
