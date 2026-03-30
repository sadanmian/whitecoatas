import HeroSection from "@/components/home/HeroSection";
import SocialProofBar from "@/components/home/SocialProofBar";
import ProblemSection from "@/components/home/ProblemSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedCountries from "@/components/home/FeaturedCountries";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <ProblemSection />
      <ServicesOverview />
      <FeaturedCountries />
      <ProcessTimeline />
      <TestimonialsCarousel />
      <HomeCTA />
    </>
  );
}
