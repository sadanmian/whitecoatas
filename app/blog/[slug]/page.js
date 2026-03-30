import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import { blogPosts, getBlogPostBySlug, getAllBlogSlugs } from "@/lib/data/blog";
import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ScrollReveal from "@/components/shared/ScrollReveal";
import BreadcrumbNav from "@/components/shared/BreadcrumbNav";
import CTABanner from "@/components/shared/CTABanner";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function parseMarkdownContent(content) {
  const lines = content.trim().split("\n");
  const elements = [];
  let currentList = [];
  let listType = null;
  let tableRows = [];
  let inTable = false;

  function flushList() {
    if (currentList.length > 0) {
      if (listType === "ol") {
        elements.push(
          <ol key={`ol-${elements.length}`} className="list-decimal pl-6 mb-4 space-y-2">
            {currentList.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            ))}
          </ol>
        );
      } else {
        elements.push(
          <ul key={`ul-${elements.length}`} className="list-disc pl-6 mb-4 space-y-2">
            {currentList.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            ))}
          </ul>
        );
      }
      currentList = [];
      listType = null;
    }
  }

  function flushTable() {
    if (tableRows.length > 0) {
      const headers = tableRows[0];
      const dataRows = tableRows.slice(2); // skip separator row
      elements.push(
        <div key={`table-${elements.length}`} className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr>
                {headers.map((h, i) => (
                  <th key={i} className="text-left p-3 bg-secondary font-semibold border-b border-border">
                    {h.trim()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataRows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="p-3 border-b border-border" dangerouslySetInnerHTML={{ __html: formatInline(cell.trim()) }} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    }
  }

  function formatInline(text) {
    return text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/`(.+?)`/g, "<code class='bg-secondary px-1.5 py-0.5 rounded text-sm'>$1</code>");
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Empty line
    if (trimmed === "") {
      flushList();
      if (inTable) flushTable();
      continue;
    }

    // Table row
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      flushList();
      inTable = true;
      const cells = trimmed
        .slice(1, -1)
        .split("|")
        .map((c) => c.trim());
      // Skip separator row (|---|---|)
      if (cells.every((c) => /^[-:]+$/.test(c))) {
        tableRows.push(cells);
      } else {
        tableRows.push(cells);
      }
      continue;
    } else if (inTable) {
      flushTable();
    }

    // Heading
    if (trimmed.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={`h3-${elements.length}`} className="text-xl font-semibold mt-8 mb-3 font-heading">
          {trimmed.slice(4)}
        </h3>
      );
      continue;
    }
    if (trimmed.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={`h2-${elements.length}`} className="text-2xl font-bold mt-10 mb-4 font-heading">
          {trimmed.slice(3)}
        </h2>
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(trimmed)) {
      if (listType !== "ol") {
        flushList();
        listType = "ol";
      }
      currentList.push(trimmed.replace(/^\d+\.\s/, ""));
      continue;
    }

    // Unordered list
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      if (listType !== "ul") {
        flushList();
        listType = "ul";
      }
      currentList.push(trimmed.slice(2));
      continue;
    }

    // Paragraph
    flushList();
    elements.push(
      <p key={`p-${elements.length}`} className="mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }} />
    );
  }

  flushList();
  if (inTable) flushTable();

  return elements;
}

export default function BlogPostPage({ params }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const dateFormatted = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const contentElements = parseMarkdownContent(post.content);

  return (
    <>
      {/* Article Header */}
      <section className="relative pt-32 pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10">
          <BreadcrumbNav
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 mt-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="size-4" />
                {dateFormatted}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <SectionWrapper className="!pt-0">
        <Container>
          <div className="max-w-3xl">
            {post.image && (
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-border/60 mb-10">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
              </div>
            )}

            <article className="prose-custom text-foreground">
              {contentElements}
            </article>

            {/* Back to blog */}
            <div className="mt-12 pt-8 border-t border-border">
              <Button asChild variant="outline-primary">
                <Link href="/blog">
                  <ArrowLeft className="size-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <ScrollReveal>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Related Articles
                </h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
                {relatedPosts.map((rp, i) => {
                  const rpDate = new Date(rp.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  });
                  return (
                    <ScrollReveal key={rp.id} delay={i * 0.1}>
                      <Link href={`/blog/${rp.slug}`} className="group block h-full">
                        <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/60">
                          <div className="relative h-40 w-full overflow-hidden bg-secondary">
                            {rp.image ? (
                              <Image
                                src={rp.image}
                                alt={rp.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 384px"
                              />
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-heading text-3xl font-bold text-muted-foreground/20">
                                  Blog
                                </span>
                              </div>
                            )}
                            <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                              {rp.category}
                            </Badge>
                          </div>
                          <CardContent className="p-4 space-y-2">
                            <h3 className="font-heading text-base font-bold text-foreground leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                              {rp.title}
                            </h3>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="size-3" />
                                {rpDate}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="size-3" />
                                {rp.readTime}
                              </span>
                            </div>
                            <span className="text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                              Read more
                              <ArrowRight className="size-3.5" />
                            </span>
                          </CardContent>
                        </Card>
                      </Link>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          )}
        </Container>
      </SectionWrapper>

      <CTABanner
        title="Ready to Begin Your MBBS Journey?"
        subtitle="Connect with our experts for personalized guidance on studying medicine abroad."
        primaryAction={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryAction={{ label: "Explore Universities", href: "/universities" }}
      />
    </>
  );
}
