import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";

export default function CTABanner({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  variant = "primary",
}) {
  return (
    <section
      className={cn(
        "relative py-16 md:py-20 overflow-hidden",
        variant === "primary" && "bg-primary text-primary-foreground",
        variant === "accent" && "bg-accent text-accent-foreground"
      )}
    >
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.15), transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(255,255,255,0.1), transparent 60%)",
        }}
      />

      <Container className="relative z-10 text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          {primaryAction && (
            <Button
              asChild
              size="lg"
              variant={variant === "primary" ? "secondary" : "default"}
              className="min-w-[180px] text-base font-semibold"
            >
              <Link href={primaryAction.href}>{primaryAction.label}</Link>
            </Button>
          )}

          {secondaryAction && (
            <Button
              asChild
              size="lg"
              variant="ghost"
              className={cn(
                "min-w-[180px] text-base font-semibold border-2 bg-transparent",
                variant === "primary" &&
                  "border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground",
                variant === "accent" &&
                  "border-accent-foreground/40 text-accent-foreground hover:bg-accent-foreground/10 hover:text-accent-foreground"
              )}
            >
              <Link href={secondaryAction.href} {...(secondaryAction.target ? { target: secondaryAction.target, rel: "noopener noreferrer" } : {})}>{secondaryAction.label}</Link>
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
