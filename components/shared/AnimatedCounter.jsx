"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
  className,
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          observer.disconnect();

          const start = performance.now();
          function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span
      ref={ref}
      className={cn(
        "font-mono text-4xl md:text-5xl lg:text-6xl font-bold tabular-nums",
        className
      )}
    >
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
