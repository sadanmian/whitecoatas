"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { faqs, faqCategories } from "@/lib/data/faqs";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ScrollReveal from "@/components/shared/ScrollReveal";
import FAQAccordion from "@/components/shared/FAQAccordion";
import CTABanner from "@/components/shared/CTABanner";
import { Button } from "@/components/ui/button";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFaqs = useMemo(() => {
    if (activeCategory === "All") return faqs;
    return faqs.filter((faq) => faq.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about studying MBBS abroad. Can't find your answer? Contact us directly."
        breadcrumbs={[{ label: "FAQ" }]}
      />

      {/* Category Filters + FAQ List */}
      <SectionWrapper>
        <Container>
          {/* Category Chips */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {faqCategories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(cat)}
                  className="rounded-full"
                >
                  {cat}
                  {cat !== "All" && (
                    <span className="ml-1.5 text-xs opacity-70">
                      ({faqs.filter((f) => f.category === cat).length})
                    </span>
                  )}
                </Button>
              ))}
            </div>
          </ScrollReveal>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredFaqs.length > 0 ? (
                <FAQAccordion faqs={filteredFaqs} />
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No questions found in this category.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </Container>
      </SectionWrapper>

      <CTABanner
        title="Still Have Questions?"
        subtitle="Our counselors are happy to answer any questions about MBBS abroad. Reach out to us today."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "Call Now", href: "tel:+919456695915" }}
      />
    </>
  );
}
