import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data/blog";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ScrollReveal from "@/components/shared/ScrollReveal";
import CTABanner from "@/components/shared/CTABanner";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Blog & Resources",
  description:
    "Guides, tips, and insights for studying MBBS abroad. Expert articles on university selection, visa process, costs, and student life.",
};

function BlogCard({ post, index }) {
  const dateFormatted = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <ScrollReveal delay={index * 0.08}>
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/60">
          <div className="relative h-48 w-full overflow-hidden bg-secondary">
            {post.image ? (
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-heading text-4xl font-bold text-muted-foreground/20">
                  Blog
                </span>
              </div>
            )}
            <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
              {post.category}
            </Badge>
          </div>

          <CardContent className="p-5 space-y-3">
            <h3 className="font-heading text-lg font-bold text-foreground leading-tight line-clamp-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-border/40">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="size-3" />
                  {dateFormatted}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="size-3" />
                  {post.readTime}
                </span>
              </div>
              <span className="text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                Read more
                <ArrowRight className="size-3.5" />
              </span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </ScrollReveal>
  );
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog & Resources"
        subtitle="Guides, tips, and insights for studying MBBS abroad."
        breadcrumbs={[{ label: "Blog" }]}
      />

      {/* Blog Grid */}
      <SectionWrapper>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <CTABanner
        title="Want Personalized Guidance?"
        subtitle="Our experts can help you choose the right university and plan your MBBS abroad journey."
        primaryAction={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryAction={{ label: "View Universities", href: "/universities" }}
      />
    </>
  );
}
