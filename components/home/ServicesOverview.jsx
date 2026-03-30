import Link from "next/link";
import { services } from "@/lib/data/services";
import ServiceCard from "@/components/shared/ServiceCard";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Container from "@/components/layout/Container";
import { ArrowRight } from "lucide-react";

export default function ServicesOverview() {
  const featured = services.slice(0, 3);

  return (
    <SectionWrapper>
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            How We Help
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-primary font-semibold hover:gap-2.5 transition-all"
          >
            See All Services
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </SectionWrapper>
  );
}
