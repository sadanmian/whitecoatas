import CTABanner from "@/components/shared/CTABanner";

export default function HomeCTA() {
  return (
    <CTABanner
      title="Ready to Start Your Medical Career Abroad?"
      subtitle="Join 5,000+ students who chose WhiteCoatAs for their MBBS journey. Get free expert counseling today."
      primaryAction={{ label: "Get Free Counseling", href: "/contact" }}
      secondaryAction={{
        label: "Call +91 94566 95915",
        href: "tel:+919456695915",
      }}
      variant="primary"
    />
  );
}
