"use client";

// NOTE: metadata should be added via app/universities/layout.js if needed
// export const metadata = { title: "Partner Universities" };

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Search, Star, MapPin, Calendar, DollarSign, Award, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { universities, russiaImages } from "@/lib/data/universities";
import { stats } from "@/lib/data/stats";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ScrollReveal from "@/components/shared/ScrollReveal";
import StatGrid from "@/components/shared/StatGrid";
import CTABanner from "@/components/shared/CTABanner";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const countries = ["All", ...Array.from(new Set(universities.map((u) => u.country)))];

function StarRating({ rating }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.3;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "size-4",
            i < full
              ? "fill-accent text-accent"
              : i === full && hasHalf
              ? "fill-accent/50 text-accent"
              : "text-muted-foreground/30"
          )}
        />
      ))}
      <span className="ml-1 text-sm font-semibold text-foreground">{rating}</span>
    </div>
  );
}

function UniversityCard({ university, index }) {
  return (
    <ScrollReveal delay={index * 0.08}>
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/60">
        {university.image && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={university.image}
              alt={university.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
              {university.ranking}
            </Badge>
          </div>
        )}
        <CardContent className={cn("space-y-4", university.image ? "p-5" : "p-5 pt-6")}>
          {!university.image && (
            <Badge variant="secondary" className="mb-1">
              {university.ranking}
            </Badge>
          )}

          <div>
            <h3 className="font-heading text-lg font-bold text-foreground leading-tight">
              {university.name}
            </h3>
            <div className="flex items-center gap-1.5 mt-1.5 text-sm text-muted-foreground">
              <MapPin className="size-3.5 shrink-0" />
              <span>{university.city}, {university.country}</span>
            </div>
          </div>

          <StarRating rating={university.rating} />

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="size-4 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Established</p>
                <p className="font-semibold text-foreground">{university.established}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="size-4 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Tuition</p>
                <p className="font-semibold text-foreground">{university.tuitionFee}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {university.accreditation.map((badge) => (
              <Badge key={badge} variant="outline" className="text-xs">
                <Award className="size-3 mr-1" />
                {badge}
              </Badge>
            ))}
          </div>

          {university.highlights && university.highlights.length > 0 && (
            <ul className="space-y-1">
              {university.highlights.map((hl) => (
                <li key={hl} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-primary shrink-0" />
                  {hl}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </ScrollReveal>
  );
}

export default function UniversitiesPage() {
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");

  const filtered = useMemo(() => {
    return universities.filter((u) => {
      const matchesCountry =
        selectedCountry === "All" || u.country === selectedCountry;
      const matchesSearch =
        search === "" ||
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.city.toLowerCase().includes(search.toLowerCase()) ||
        u.country.toLowerCase().includes(search.toLowerCase());
      return matchesCountry && matchesSearch;
    });
  }, [search, selectedCountry]);

  const showRussiaImages =
    selectedCountry === "All" || selectedCountry === "Russia";

  return (
    <>
      <PageHero
        title="Partner Universities"
        subtitle="Explore our network of NMC and WHO-approved medical universities across the globe."
        breadcrumbs={[{ label: "Universities" }]}
      />

      {/* Search + Filter + University Grid */}
      <section className="py-10 md:py-14">
        <Container>
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search universities by name, city, or country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 h-11"
            />
          </div>

          {/* Country Filter */}
          <div className="mt-4 flex flex-wrap gap-2">
            {countries.map((country) => (
              <Button
                key={country}
                variant={selectedCountry === country ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCountry(country)}
                className="rounded-full"
              >
                {country}
              </Button>
            ))}
          </div>
        </Container>
      </section>

      {/* University Grid */}
      <SectionWrapper className="!pt-0">
        <Container>
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={`${selectedCountry}-${search}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((uni, i) => (
                  <UniversityCard key={uni.id} university={uni} index={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-lg text-muted-foreground">
                  No universities found matching your criteria.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearch("");
                    setSelectedCountry("All");
                  }}
                >
                  Reset Filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Russia Images Gallery */}
          {showRussiaImages && russiaImages.length > 0 && (
            <div className="mt-16">
              <ScrollReveal>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Medical Universities in Russia
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl">
                  Browse images from our partner medical universities across Russia.
                </p>
              </ScrollReveal>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {russiaImages.map((src, i) => {
                  const name = src
                    .split("/")
                    .pop()
                    .replace(".jpeg", "")
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase());
                  return (
                    <ScrollReveal key={src} delay={i * 0.04}>
                      <div className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-border/60">
                        <Image
                          src={src}
                          alt={name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <p className="absolute bottom-0 left-0 right-0 p-2 text-xs text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                          {name}
                        </p>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          )}
        </Container>
      </SectionWrapper>

      {/* Stats */}
      <SectionWrapper>
        <Container>
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Our Global Network
              </h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                Numbers that reflect our commitment to student success.
              </p>
            </div>
          </ScrollReveal>
          <StatGrid stats={stats} />
        </Container>
      </SectionWrapper>

      <CTABanner
        title="Ready to Start Your Medical Journey?"
        subtitle="Get personalized university recommendations based on your preferences and budget."
        primaryAction={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryAction={{ label: "Explore Countries", href: "/countries" }}
      />
    </>
  );
}
