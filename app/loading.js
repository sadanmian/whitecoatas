import { Skeleton } from "@/components/ui/skeleton";
import Container from "@/components/layout/Container";

export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton */}
      <section className="pt-32 pb-16">
        <Container>
          <Skeleton className="h-4 w-40 mb-6" />
          <Skeleton className="h-12 w-3/4 max-w-lg mb-4" />
          <Skeleton className="h-5 w-2/3 max-w-md" />
        </Container>
      </section>

      {/* Content skeleton */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <Skeleton className="h-8 w-64 mx-auto mb-3" />
            <Skeleton className="h-4 w-96 mx-auto max-w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-lg border border-border/60 overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-5 space-y-3">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <div className="flex gap-2 pt-2">
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-6 w-16 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA skeleton */}
      <section className="py-16 bg-secondary/30">
        <Container className="text-center">
          <Skeleton className="h-10 w-80 mx-auto mb-4 max-w-full" />
          <Skeleton className="h-5 w-96 mx-auto mb-8 max-w-full" />
          <div className="flex justify-center gap-4">
            <Skeleton className="h-10 w-40 rounded-md" />
            <Skeleton className="h-10 w-40 rounded-md" />
          </div>
        </Container>
      </section>
    </div>
  );
}
