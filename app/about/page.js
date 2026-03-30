import Image from "next/image";
import {
  CheckCircle,
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Users,
  FileCheck,
  Headphones,
} from "lucide-react";
import { stats } from "@/lib/data/stats";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ScrollReveal from "@/components/shared/ScrollReveal";
import StatGrid from "@/components/shared/StatGrid";
import CTABanner from "@/components/shared/CTABanner";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "About Us",
  description:
    "Learn about WhiteCoatAs — your trusted partner for MBBS abroad since 2014. Discover our mission, values, and why thousands of students choose us.",
};

const values = [
  {
    title: "Our Mission",
    description:
      "To provide affordable, quality medical education opportunities abroad and guide students towards a successful medical career.",
    icon: "🎯",
  },
  {
    title: "Our Vision",
    description:
      "To become the most trusted partner for students aspiring to study medicine abroad with complete transparency and support.",
    icon: "👁️",
  },
  {
    title: "Our Values",
    description:
      "Integrity, Excellence, Student-First Approach, and Commitment to Quality Education are the pillars of our service.",
    icon: "💎",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "NMC Approved Universities",
    description:
      "All our partner universities are approved by the National Medical Commission (NMC) and WHO, ensuring your degree is recognized globally.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description:
      "Our experienced counselors provide personalized guidance for your medical career abroad, from university selection to graduation.",
  },
  {
    icon: FileCheck,
    title: "Transparent Process",
    description:
      "Complete transparency in the admission process, fees, documentation requirements, and every step of your journey.",
  },
  {
    icon: Headphones,
    title: "Student Support",
    description:
      "24/7 support for students from application to graduation and beyond. Our local representatives are always available to help.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title="About WhiteCoatAs"
        subtitle="Your trusted partner for MBBS abroad since 2014"
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Story Section */}
      <SectionWrapper>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Who We Are
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-base md:text-lg">
                We are committed to making quality medical education accessible
                and affordable for Indian students. With over a decade of
                experience, we have helped thousands of students achieve their
                dreams of becoming doctors.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed text-base md:text-lg">
                We understand that choosing the right path for your medical
                education is one of the most important decisions of your life.
                That&apos;s why we&apos;re dedicated to providing you with
                comprehensive support, from university selection to graduation
                and beyond.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed text-base md:text-lg">
                Our team of experienced consultants has firsthand knowledge of
                international medical universities, enabling us to match
                students with the best institutions for their goals and budget.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/medical-team.jpg"
                  alt="WhiteCoatAs medical team and student counselors"
                  width={640}
                  height={480}
                  className="w-full h-[300px] md:h-[400px] lg:h-[480px] object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </SectionWrapper>

      {/* Mission / Vision / Values */}
      <SectionWrapper className="bg-muted/30">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                What Drives Us
              </h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                Our core principles guide every decision we make and every
                student we support.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.15}>
                <Card className="h-full border-border/60 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <span className="text-4xl" role="img" aria-label={value.title}>
                      {value.icon}
                    </span>
                    <h3 className="mt-4 font-heading text-xl font-bold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper>
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Why Choose WhiteCoatAs?
              </h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                We go above and beyond to ensure your journey to becoming a
                doctor is smooth, transparent, and successful.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <Card className="h-full border-border/60 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-start gap-4">
                    <div className="flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary">
                      <feature.icon className="size-6" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Stats */}
      <SectionWrapper className="bg-muted/30">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Our Impact in Numbers
              </h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                Building dreams, shaping futures, creating doctors worldwide.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <StatGrid stats={stats} />
          </ScrollReveal>
        </Container>
      </SectionWrapper>

      {/* CTA */}
      <CTABanner
        title="Start Your Medical Journey Today"
        subtitle="Connect with our expert counselors and take the first step towards your dream of becoming a doctor."
        primaryAction={{ label: "Get Free Counseling", href: "/contact" }}
        secondaryAction={{ label: "Explore Countries", href: "/countries" }}
      />
    </>
  );
}
