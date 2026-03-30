import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";

export default function NotFound() {
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-var(--header-height)-200px)] py-20">
      <Container className="text-center max-w-lg">
        <p className="font-mono text-8xl md:text-9xl font-bold text-accent tracking-tighter">
          404
        </p>

        <h1 className="mt-6 font-heading text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          Page Not Found
        </h1>

        <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="mt-8">
          <Button asChild variant="cta" size="cta">
            <Link href="/">Go Back Home</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
