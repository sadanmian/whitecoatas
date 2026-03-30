"use client";

import { cn } from "@/lib/utils";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

export default function StatGrid({ stats, variant = "default" }) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden",
        variant === "default" && "bg-primary text-primary-foreground",
        variant === "dark" && "bg-foreground text-background"
      )}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={cn(
            "flex flex-col items-center justify-center text-center px-4 py-8 md:py-10",
            variant === "default" && "bg-primary",
            variant === "dark" && "bg-foreground"
          )}
        >
          <AnimatedCounter
            target={stat.number}
            suffix={stat.suffix}
            className={cn(
              "text-3xl md:text-4xl lg:text-5xl",
              variant === "default" && "text-primary-foreground",
              variant === "dark" && "text-background"
            )}
          />
          <span className="mt-2 text-sm md:text-base font-heading font-semibold opacity-90">
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
  );
}
