import { countries } from "@/lib/data/countries";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ScrollReveal from "@/components/shared/ScrollReveal";
import CTABanner from "@/components/shared/CTABanner";
import CountryCard from "@/components/shared/CountryCard";

export const metadata = {
  title: "Study Destinations",
  description:
    "Explore top countries for MBBS abroad — Russia, Georgia, Kazakhstan, Kyrgyzstan, Uzbekistan, and Ukraine. Compare tuition fees, duration, and living costs.",
};

export default function CountriesPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title="Study Destinations"
        subtitle="Explore top countries for affordable, quality medical education"
        breadcrumbs={[{ label: "Countries" }]}
      />

      {/* Countries Grid */}
      <SectionWrapper>
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Choose Your Destination
              </h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                Each country offers unique advantages for aspiring medical
                professionals. Explore the options and find your perfect fit.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {countries.map((country, index) => (
              <ScrollReveal key={country.id} delay={index * 0.1}>
                <CountryCard country={country} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Comparison Table */}
      <SectionWrapper className="bg-muted/30">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Quick Comparison
              </h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                Compare key factors across all destinations at a glance.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-x-auto rounded-xl border border-border/60 bg-card shadow-sm">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-border/60 bg-muted/50">
                    <th className="px-6 py-4 font-heading font-bold text-foreground whitespace-nowrap">
                      Country
                    </th>
                    <th className="px-6 py-4 font-heading font-bold text-foreground whitespace-nowrap">
                      Duration
                    </th>
                    <th className="px-6 py-4 font-heading font-bold text-foreground whitespace-nowrap">
                      Tuition / Year
                    </th>
                    <th className="px-6 py-4 font-heading font-bold text-foreground whitespace-nowrap">
                      Living Cost / Year
                    </th>
                    <th className="px-6 py-4 font-heading font-bold text-foreground whitespace-nowrap">
                      Universities
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {countries.map((country) => (
                    <tr
                      key={country.id}
                      className="hover:bg-muted/30 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="flex items-center gap-2">
                          <span
                            className="text-xl"
                            role="img"
                            aria-label={`${country.name} flag`}
                          >
                            {country.flag}
                          </span>
                          <span className="font-medium text-foreground">
                            {country.name}
                          </span>
                        </span>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">
                        {country.duration}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">
                        {country.tuitionFee}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">
                        {country.livingCost}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">
                        {country.universities}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </Container>
      </SectionWrapper>

      {/* CTA */}
      <CTABanner
        title="Need Help Choosing the Right Country?"
        subtitle="Our expert counselors will help you find the best destination based on your budget, preferences, and career goals."
        primaryAction={{ label: "Talk to a Counselor", href: "/contact" }}
        secondaryAction={{ label: "Call Us Now", href: "tel:+919456695915" }}
      />
    </>
  );
}
