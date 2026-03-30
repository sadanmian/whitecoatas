"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const directionOffset = {
  up: { x: 0, y: 24 },
  left: { x: -24, y: 0 },
  right: { x: 24, y: 0 },
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}) {
  const offset = directionOffset[direction] || directionOffset.up;

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}
