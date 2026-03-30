"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQAccordion({ faqs, initialOpen = null, className }) {
  const [openId, setOpenId] = useState(initialOpen);

  function toggle(id) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <div className={cn("divide-y divide-border rounded-xl border border-border overflow-hidden", className)}>
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;

        return (
          <div key={faq.id} className={cn("transition-colors", isOpen && "bg-muted/40")}>
            <button
              type="button"
              onClick={() => toggle(faq.id)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-muted/30"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${faq.id}`}
            >
              <span className="font-heading font-semibold text-sm md:text-base text-foreground pr-2">
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="shrink-0"
              >
                <ChevronDown className="size-5 text-muted-foreground" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-4 pt-0 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
