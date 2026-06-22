"use client";

import { useEffect, useRef, useState } from "react";

export type Stat = {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

// Slow, understated count-up — no bounce, no overshoot.
const COUNT_DURATION_MS = 2200;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function useCountUp(target: number, isActive: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }

    let frame: number;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / COUNT_DURATION_MS, 1);
      setValue(Math.round(target * easeOutCubic(progress)));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isActive, target]);

  return value;
}

function StatItem({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const value = useCountUp(stat.value, isVisible);

  return (
    <div ref={ref}>
      <p className="font-display text-4xl font-light text-gold-light md:text-5xl">
        {stat.prefix}
        {value}
        {stat.suffix}
      </p>
      <p className="mt-2 font-body text-xs uppercase tracking-[0.15em] text-platinum">
        {stat.label}
      </p>
    </div>
  );
}

export function StatCounters({ stats }: { stats: Stat[] }) {
  return (
    <div className="flex flex-wrap gap-x-16 gap-y-8">
      {stats.map((stat) => (
        <StatItem key={stat.id} stat={stat} />
      ))}
    </div>
  );
}
