import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { StatCounters, type Stat } from "@/components/sections/StatCounters";

// TODO: replace placeholder values with real figures before launch.
const stats: Stat[] = [
  {
    id: "experience",
    value: 75, // TODO: combined years of team experience
    suffix: "+",
    label: "Years Combined Team Experience",
  },
  {
    id: "satisfaction",
    value: 98, // TODO: real client satisfaction rate
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    id: "response",
    value: 30, // TODO: real average response time, in minutes
    suffix: " Min",
    label: "Average Response Time",
  },
];

export function OurApproach() {
  return (
    <section
      id="approach"
      className="relative flex min-h-screen w-full items-center overflow-hidden"
    >
      <Image
        src="/images/trinity-silhouette.png"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-onyx-base/85 via-onyx-base/70 to-onyx-base/90" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-32 md:px-10 lg:px-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-hairline px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <span className="font-display text-[11px] uppercase tracking-[0.2em] text-platinum">
            {/* TODO: replace [YEAR] with actual founding year */}
            Trusted IT Partner Since [YEAR]
          </span>
        </div>

        <h2 className="mt-8 max-w-3xl font-display text-4xl font-light leading-[1.1] text-ink-primary sm:text-5xl md:text-6xl">
          One Trusted Partner For Every IT Need.
        </h2>
        <p className="mt-6 max-w-xl font-body text-lg text-platinum">
          From custom software to everyday support, our team works as a true
          extension of yours — nothing outsourced, nothing handed off.
        </p>
        <Button href="#contact" className="mt-10">
          Book a Consultation
        </Button>

        <SectionDivider className="mt-16 max-w-md" />

        <div className="mt-12">
          <StatCounters stats={stats} />
        </div>
      </div>
    </section>
  );
}
