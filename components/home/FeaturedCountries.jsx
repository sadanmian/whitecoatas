import Link from "next/link";
import { countries } from "@/lib/data/countries";
import CountryCard from "@/components/shared/CountryCard";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Container from "@/components/layout/Container";
import { ArrowRight } from "lucide-react";

export default function FeaturedCountries() {
  const featured = countries.slice(0, 3);

  return (
    <SectionWrapper>
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Popular Study Destinations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/countries"
            className="inline-flex items-center gap-1.5 text-primary font-semibold hover:gap-2.5 transition-all"
          >
            View All Destinations
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </SectionWrapper>
  );
}
