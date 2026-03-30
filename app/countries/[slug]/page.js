import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Clock,
  GraduationCap,
  Wallet,
  Building2,
  CloudSun,
  Landmark,
  UtensilsCrossed,
  ShieldCheck,
  MapPin,
  CalendarDays,
  Star,
  BadgeCheck,
} from "lucide-react";
import { countries, getCountryBySlug, getAllCountrySlugs } from "@/lib/data/countries";
import {
  getUniversitiesByCountry,
  russiaImages,
} from "@/lib/data/universities";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ScrollReveal from "@/components/shared/ScrollReveal";
import CTABanner from "@/components/shared/CTABanner";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return getAllCountrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    return { title: "Country Not Found" };
  }

  return {
    title: `MBBS in ${country.name}`,
    description: country.metaDescription,
  };
}

const lifestyleIcons = {
  climate: CloudSun,
  culture: Landmark,
  food: UtensilsCrossed,
  safety: ShieldCheck,
};

const lifestyleLabels = {
  climate: "Climate",
  culture: "Culture",
  food: "Food & Dining",
  safety: "Safety",
};

const costLabels = {
  tuitionPerYear: "Tuition Fee (per year)",
  hostelPerYear: "Hostel / Accommodation (per year)",
  foodPerMonth: "Food (per month)",
  insurancePerYear: "Health Insurance (per year)",
  miscPerYear: "Miscellaneous (per year)",
  totalEstimate: "Total Estimated Cost",
};

export default async function CountryDetailPage({ params }) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    notFound();
  }

  const universityList = getUniversitiesByCountry(slug);
  const showRussiaImages = slug === "russia";

  return (
    <>
      {/* Hero */}
      <PageHero
        title={
          <span className="flex items-center gap-4 flex-wrap">
            <span className="text-5xl md:text-6xl" role="img" aria-label={`${country.name} flag`}>
              {country.flag}
            </span>
            <span>MBBS in {country.name}</span>
          </span>
        }
        subtitle={country.description}
        breadcrumbs={[
          { label: "Countries", href: "/countries" },
          { label: country.name },
        ]}
      />

      {/* Key Stats Bar */}
      <section className="border-b border-border/60 bg-muted/30">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 md:py-10">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary shrink-0">
                <Clock className="size-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                  Duration
                </p>
                <p className="text-sm md:text-base font-bold text-foreground">
                  {country.duration}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary shrink-0">
                <GraduationCap className="size-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                  Tuition Range
                </p>
                <p className="text-sm md:text-base font-bold text-foreground">
                  {country.tuitionFee}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary shrink-0">
                <Wallet className="size-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                  Living Cost
                </p>
                <p className="text-sm md:text-base font-bold text-foreground">
                  {country.livingCost}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary shrink-0">
                <Building2 className="size-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                  Universities
                </p>
                <p className="text-sm md:text-base font-bold text-foreground">
                  {country.universities}+
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <SectionWrapper>
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Overview
              </h2>
              <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
                {country.overview}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {country.highlights.map((highlight) => (
                  <Badge key={highlight} variant="secondary" className="text-sm">
                    {highlight}
                  </Badge>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </SectionWrapper>

      {/* Universities */}
      {universityList.length > 0 && (
        <SectionWrapper className="bg-muted/30">
          <Container>
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
                <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                  Top Universities in {country.name}
                </h2>
                <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                  NMC and WHO approved medical universities offering world-class
                  education.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {universityList.map((university, index) => (
                <ScrollReveal key={university.id} delay={index * 0.1}>
                  <Card className="h-full border-border/60 hover:shadow-lg transition-shadow duration-300">
                    {university.image && (
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <Image
                          src={university.image}
                          alt={university.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    <CardHeader className={university.image ? "pt-4 pb-2" : "pb-2"}>
                      <h3 className="font-heading text-lg font-bold text-foreground leading-snug">
                        {university.name}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="size-3.5" />
                          {university.city}
                        </span>
                        <span className="flex items-center gap-1">
                          <CalendarDays className="size-3.5" />
                          Est. {university.established}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-muted-foreground text-xs uppercase tracking-wider">
                            Tuition
                          </p>
                          <p className="font-semibold text-foreground">
                            {university.tuitionFee}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs uppercase tracking-wider">
                            Ranking
                          </p>
                          <p className="font-semibold text-foreground flex items-center gap-1">
                            <Star className="size-3.5 text-accent fill-accent" />
                            {university.ranking}
                          </p>
                        </div>
                      </div>

                      {/* Accreditation badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {university.accreditation.map((acc) => (
                          <Badge
                            key={acc}
                            variant="default"
                            className="text-xs flex items-center gap-1"
                          >
                            <BadgeCheck className="size-3" />
                            {acc}
                          </Badge>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {university.highlights.map((h) => (
                          <Badge
                            key={h}
                            variant="secondary"
                            className="text-xs font-normal"
                          >
                            {h}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            {/* Russia university images grid */}
            {showRussiaImages && (
              <ScrollReveal className="mt-12 md:mt-16">
                <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-foreground text-center mb-8">
                  Our Partner Universities in Russia
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {russiaImages.map((src, index) => {
                    const name = src
                      .split("/")
                      .pop()
                      .replace(".jpeg", "")
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase());
                    return (
                      <div
                        key={src}
                        className="relative aspect-[4/3] rounded-xl overflow-hidden group"
                      >
                        <Image
                          src={src}
                          alt={name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <p className="absolute bottom-2 left-2 right-2 text-white text-xs md:text-sm font-medium leading-tight">
                          {name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </ScrollReveal>
            )}
          </Container>
        </SectionWrapper>
      )}

      {/* Cost Breakdown */}
      <SectionWrapper>
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center mb-8 md:mb-12">
                Cost Breakdown
              </h2>

              <div className="overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/60 bg-muted/50">
                      <th className="px-6 py-4 text-left font-heading font-bold text-foreground">
                        Expense
                      </th>
                      <th className="px-6 py-4 text-right font-heading font-bold text-foreground">
                        Estimated Cost
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {Object.entries(country.costBreakdown).map(
                      ([key, value]) => (
                        <tr
                          key={key}
                          className={
                            key === "totalEstimate"
                              ? "bg-primary/5 font-bold"
                              : "hover:bg-muted/30 transition-colors"
                          }
                        >
                          <td className="px-6 py-4 text-foreground">
                            {costLabels[key] || key}
                          </td>
                          <td className="px-6 py-4 text-right text-foreground">
                            {value}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </SectionWrapper>

      {/* Student Life */}
      <SectionWrapper className="bg-muted/30">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Student Life in {country.name}
              </h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                Everything you need to know about living and studying in{" "}
                {country.name}.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {Object.entries(country.lifestyle).map(([key, value], index) => {
              const Icon = lifestyleIcons[key] || CloudSun;
              const label = lifestyleLabels[key] || key;

              return (
                <ScrollReveal key={key} delay={index * 0.1}>
                  <Card className="h-full border-border/60 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 flex flex-col gap-4">
                      <div className="flex items-center justify-center size-11 rounded-xl bg-primary/10 text-primary shrink-0">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-foreground">
                        {label}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </SectionWrapper>

      {/* Admission Process */}
      <SectionWrapper>
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center mb-8 md:mb-12">
                Admission Process
              </h2>

              <div className="space-y-0">
                {country.admissionSteps.map((step, index) => (
                  <div key={index} className="relative flex gap-4 md:gap-6">
                    {/* Timeline line */}
                    {index < country.admissionSteps.length - 1 && (
                      <div className="absolute left-5 md:left-6 top-12 bottom-0 w-px bg-border" />
                    )}

                    {/* Step number */}
                    <div className="flex items-center justify-center size-10 md:size-12 rounded-full bg-primary text-primary-foreground font-heading font-bold text-sm md:text-base shrink-0 relative z-10">
                      {index + 1}
                    </div>

                    {/* Step content */}
                    <div className="pb-8 md:pb-10 pt-2 md:pt-2.5">
                      <p className="text-foreground font-medium text-base md:text-lg leading-relaxed">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </SectionWrapper>

      {/* CTA */}
      <CTABanner
        title={`Apply for MBBS in ${country.name}`}
        subtitle={`Take the first step towards your medical career in ${country.name}. Our team will guide you through the entire process.`}
        primaryAction={{ label: "Apply Now", href: "/contact" }}
        secondaryAction={{ label: "Call Us", href: "tel:+919456695915" }}
      />
    </>
  );
}
