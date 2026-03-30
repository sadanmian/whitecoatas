"use client";

import { stats } from "@/lib/data/stats";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

export default function SocialProofBar() {
  return (
    <section className="bg-primary text-primary-foreground py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              <AnimatedCounter
                target={stat.number}
                suffix={stat.suffix}
                className="text-3xl md:text-4xl lg:text-5xl text-primary-foreground"
              />
              <span className="mt-1.5 text-sm md:text-base font-heading font-semibold opacity-90">
                {stat.label}
              </span>
              {stat.sublabel && (
                <span className="mt-0.5 text-xs md:text-sm opacity-60">
                  {stat.sublabel}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
