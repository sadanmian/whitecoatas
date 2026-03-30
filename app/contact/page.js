"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { contactInfo } from "@/lib/data/contact";
import { universities } from "@/lib/data/universities";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ScrollReveal from "@/components/shared/ScrollReveal";
import ContactInfoCard from "@/components/shared/ContactInfoCard";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const countryOptions = ["Not Sure", ...Array.from(new Set(universities.map((u) => u.country)))];

const contactCards = [
  {
    icon: Phone,
    title: "Phone",
    description: "Call us for immediate assistance",
    details: [contactInfo.phone],
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us your queries anytime",
    details: [contactInfo.email],
  },
  {
    icon: MapPin,
    title: "Office Address",
    description: "Visit us for in-person counseling",
    details: [contactInfo.address.line1, contactInfo.address.line2],
  },
  {
    icon: Clock,
    title: "Working Hours",
    description: "We are available during these hours",
    details: [contactInfo.hours.weekday, contactInfo.hours.weekend],
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", country: "", message: "" });
    }, 1200);
  }

  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(
    contactInfo.whatsapp.message
  )}`;

  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="Have questions about studying MBBS abroad? We are here to help you every step of the way."
        breadcrumbs={[{ label: "Contact" }]}
      />

      {/* Contact Info + Form */}
      <SectionWrapper>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Left: Contact Info Cards */}
            <div>
              <ScrollReveal>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactCards.map((card, i) => (
                  <ScrollReveal key={card.title} delay={i * 0.08}>
                    <ContactInfoCard
                      icon={card.icon}
                      title={card.title}
                      description={card.description}
                      details={card.details}
                    />
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <ScrollReveal delay={0.1}>
                <Card className="border-border/60">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-sm text-muted-foreground mb-6">
                      Fill out the form below and our counselors will get back to you within 24 hours.
                    </p>

                    {submitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <div className="flex items-center justify-center size-16 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                          <Send className="size-7" />
                        </div>
                        <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                          Message Sent!
                        </h3>
                        <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                          Thank you for reaching out. Our team will contact you shortly.
                        </p>
                        <Button
                          variant="outline"
                          className="mt-6"
                          onClick={() => setSubmitted(false)}
                        >
                          Send Another Message
                        </Button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                            Full Name <span className="text-destructive">*</span>
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                              Email Address <span className="text-destructive">*</span>
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="your@email.com"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                              Phone Number
                            </label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="+91 XXXXX XXXXX"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="country" className="block text-sm font-medium text-foreground mb-1.5">
                            Preferred Country
                          </label>
                          <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          >
                            <option value="">Select a country</option>
                            {countryOptions.map((c) => (
                              <option key={c} value={c}>
                                {c}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                            Message <span className="text-destructive">*</span>
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your requirements, questions, or anything else..."
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          variant="cta"
                          size="cta"
                          className="w-full"
                          disabled={submitting}
                        >
                          {submitting ? (
                            <span className="flex items-center gap-2">
                              <span className="size-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              <Send className="size-4" />
                              Send Message
                            </span>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Google Maps */}
      <SectionWrapper className="!pt-0">
        <Container>
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Find Us
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl overflow-hidden border border-border/60 aspect-[16/7]">
              <iframe
                title="WhiteCoatAs Office Location"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
                  contactInfo.address.full
                )}`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 300 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </Container>
      </SectionWrapper>

      {/* Quick Contact Banner */}
      <section className="bg-primary text-primary-foreground py-12">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold">
                Need Immediate Assistance?
              </h2>
              <p className="mt-2 text-primary-foreground/80 max-w-lg">
                Our counselors are ready to help you right now. Call or WhatsApp us for instant support.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="min-w-[160px] font-semibold"
              >
                <a href={`tel:${contactInfo.phone}`}>
                  <Phone className="size-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="min-w-[160px] font-semibold border-2 bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
