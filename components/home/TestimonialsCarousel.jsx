"use client";

import { testimonials } from "@/lib/data/testimonials";
import TestimonialCard from "@/components/shared/TestimonialCard";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Container from "@/components/layout/Container";

export default function TestimonialsCarousel() {
  const featured = testimonials.slice(0, 3);

  return (
    <SectionWrapper>
      <Container>
        <div className="bg-card rounded-2xl px-6 py-12 md:px-10 md:py-16">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              What Our Students Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
