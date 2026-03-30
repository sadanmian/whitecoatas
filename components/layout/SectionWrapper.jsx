"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function SectionWrapper({
  children,
  className,
  id,
  animate = true,
}) {
  if (!animate) {
    return (
      <section id={id} className={cn("py-20 md:py-28 lg:py-36", className)}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={cn("py-20 md:py-28 lg:py-36", className)}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.section>
  );
}
