import { cn } from "@/lib/utils";
import Container from "@/components/layout/Container";
import BreadcrumbNav from "@/components/shared/BreadcrumbNav";

export default function PageHero({ title, subtitle, breadcrumbs, className }) {
  return (
    <section className={cn("relative pt-32 pb-16 overflow-hidden", className)}>
      {/* Mesh background overlay */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" aria-hidden="true" />

      <Container className="relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <BreadcrumbNav items={breadcrumbs} />
        )}

        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mt-6">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
