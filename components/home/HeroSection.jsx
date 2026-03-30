"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Container from "@/components/layout/Container";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-[var(--header-height)]">
      {/* Background mesh */}
      <div
        className="absolute inset-0 bg-mesh pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-sm font-medium text-foreground backdrop-blur-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-green-500" />
              </span>
              Trusted by 5,000+ Students
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="mt-8 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            Your Medical Career
            <br />
            <span className="text-accent">Starts Here</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-6 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            5,000+ Indian students trust us to guide them into NMC-approved
            medical universities across 15+ countries.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          >
            <Button asChild variant="cta" size="cta">
              <Link href="/contact">Get Free Counseling</Link>
            </Button>
            <Button asChild variant="outline-primary" size="cta">
              <Link href="/countries">Explore Countries</Link>
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
