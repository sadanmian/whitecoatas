import {
  FileText,
  GraduationCap,
  Plane,
  Home,
  CreditCard,
  Headphones,
  Users,
  CheckCircle,
  Check,
  Briefcase,
  Shield,
  Heart,
  Globe,
  BookOpen,
  Stethoscope,
  Award,
} from "lucide-react";
import { services, processSteps } from "@/lib/data/services";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ScrollReveal from "@/components/shared/ScrollReveal";
import ServiceCard from "@/components/shared/ServiceCard";
import CTABanner from "@/components/shared/CTABanner";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Our Services",
  description:
    "End-to-end support for your MBBS abroad journey — from university selection and documentation to visa processing, accommodation, and 24/7 student support.",
};

const iconMap = {
  FileText,
  GraduationCap,
  Plane,
  Home,
  CreditCard,
  Headphones,
  Users,
  CheckCircle,
  Check,
  Briefcase,
  Shield,
  Heart,
  Globe,
  BookOpen,
  Stethoscope,
  Award,
};

const includedItems = [
  "Personalized career counseling sessions",
  "University shortlisting and comparison reports",
  "Complete application form filling and review",
  "Document verification and attestation support",
  "Invitation letter processing from universities",
  "Visa application filing and interview preparation",
  "Pre-departure orientation and travel guidance",
  "Airport pickup and local reception at destination",
  "Hostel or apartment accommodation arrangements",
  "Education loan and forex assistance",
  "Medical insurance arrangement",
  "SIM card and local bank account setup",
  "Regular academic progress updates to parents",
  "24/7 emergency helpline for students abroad",
  "FMGE/NExT preparation guidance after return",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive support at every stage of your MBBS abroad journey."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Services Grid */}
      <SectionWrapper>
        <Container>
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                What We Offer
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                From your first consultation to settling into your university abroad,
                we handle everything so you can focus on your studies.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.08}>
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Process Timeline */}
      <SectionWrapper className="bg-secondary/30">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Our 5-Step Process
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                A proven process that has helped 5,000+ students achieve their dream of studying medicine abroad.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative max-w-2xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true" />

            <div className="space-y-10">
              {processSteps.map((step, i) => {
                const Icon = iconMap[step.icon] || Briefcase;
                return (
                  <ScrollReveal key={step.step} delay={i * 0.1}>
                    <div className="relative flex gap-5 md:gap-7">
                      {/* Number circle */}
                      <div className="relative z-10 flex items-center justify-center size-12 md:size-16 rounded-full bg-primary text-primary-foreground font-heading font-bold text-lg md:text-xl shrink-0 shadow-md">
                        {step.step}
                      </div>

                      {/* Content */}
                      <Card className="flex-1 border-border/60">
                        <CardContent className="p-5">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="flex items-center justify-center size-9 rounded-lg bg-accent/15 text-accent shrink-0">
                              <Icon className="size-4" />
                            </div>
                            <h3 className="font-heading text-lg font-bold text-foreground">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* What's Included */}
      <SectionWrapper>
        <Container>
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                What&apos;s Included
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                A comprehensive list of everything WhiteCoatAs handles for you, from start to finish.
              </p>
            </div>
          </ScrollReveal>

          <Card className="max-w-3xl mx-auto border-border/60">
            <CardContent className="p-6 md:p-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {includedItems.map((item, i) => (
                  <ScrollReveal key={item} delay={i * 0.03}>
                    <li className="flex items-start gap-3 text-sm">
                      <Check className="size-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Container>
      </SectionWrapper>

      <CTABanner
        title="Start Your MBBS Abroad Journey Today"
        subtitle="Get expert guidance from our team of experienced counselors."
        primaryAction={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryAction={{ label: "Download Brochure", href: "/brochure.pdf", target: "_blank" }}
      />
    </>
  );
}
