"use client";

import { processSteps } from "@/lib/data/services";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/shared/ScrollReveal";
import {
  Users,
  GraduationCap,
  FileText,
  Plane,
  CheckCircle,
} from "lucide-react";

const iconMap = {
  Users,
  GraduationCap,
  FileText,
  Plane,
  CheckCircle,
};

export default function ProcessTimeline() {
  return (
    <SectionWrapper>
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Your Journey to MBBS Abroad
          </h2>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting line */}
            <div
              className="absolute top-8 left-0 right-0 h-0.5 bg-border"
              aria-hidden="true"
            />

            <div className="grid grid-cols-5 gap-4">
              {processSteps.map((step, index) => {
                const Icon = iconMap[step.icon] || CheckCircle;
                return (
                  <ScrollReveal key={step.step} delay={index * 0.15}>
                    <div className="relative flex flex-col items-center text-center">
                      {/* Numbered circle with icon */}
                      <div className="relative z-10 flex items-center justify-center size-16 rounded-full bg-primary text-primary-foreground shadow-md">
                        <Icon className="size-6" />
                      </div>
                      <span className="mt-1 text-xs font-mono font-bold text-primary">
                        Step {step.step}
                      </span>
                      <h3 className="mt-3 font-heading text-base font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden">
          <div className="relative pl-10">
            {/* Vertical connecting line */}
            <div
              className="absolute top-0 bottom-0 left-[19px] w-0.5 bg-border"
              aria-hidden="true"
            />

            <div className="space-y-10">
              {processSteps.map((step, index) => {
                const Icon = iconMap[step.icon] || CheckCircle;
                return (
                  <ScrollReveal key={step.step} delay={index * 0.1}>
                    <div className="relative flex items-start gap-4">
                      {/* Circle on the line */}
                      <div className="absolute -left-10 flex items-center justify-center size-10 rounded-full bg-primary text-primary-foreground shadow-md">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-primary">
                          Step {step.step}
                        </span>
                        <h3 className="mt-1 font-heading text-base font-bold text-foreground">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
