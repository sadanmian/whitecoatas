import { Phone, Mail, Globe } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How White Coat Abroad Studies collects, uses, and protects your personal information when you visit our website or submit your details through our forms.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Effective Date: 01 February 2026"
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <SectionWrapper className="!pt-8">
        <Container>
          <div className="max-w-3xl mx-auto prose-custom text-foreground">
            <p className="leading-relaxed mb-4">
              White Coat Abroad Studies (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;) respects your privacy and is committed to protecting the personal information you share with us.
            </p>
            <p className="leading-relaxed mb-6">
              This Privacy Policy explains how we collect, use, and protect your information when you visit our website or submit your details through our forms, advertisements, or contact channels.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              When you fill out an enquiry form, pre-registration form, or contact us, we may collect:
            </p>
            <ul>
              <li>Full Name</li>
              <li>Phone Number</li>
              <li>Email Address</li>
              <li>City/State</li>
              <li>NEET Qualification Status</li>
              <li>Preferred Country/University for MBBS</li>
              <li>Any other details you voluntarily provide</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the collected information only for:
            </p>
            <ul>
              <li>Providing MBBS abroad admission guidance</li>
              <li>Sending university details, fee structure, and counselling support</li>
              <li>Contacting you via call, WhatsApp, email, or SMS</li>
              <li>Processing your pre-registration and admission application</li>
              <li>Improving our services and student support</li>
            </ul>

            <h2>3. Sharing of Information</h2>
            <p>
              We do not sell, rent, or trade your personal information. Your data may only be shared with:
            </p>
            <ul>
              <li>Partner universities abroad (only for admission purposes)</li>
              <li>Authorized staff members for counselling support</li>
              <li>Government authorities if legally required</li>
            </ul>

            <h2>4. Data Protection &amp; Security</h2>
            <p>
              We take reasonable security measures to protect your personal data from:
            </p>
            <ul>
              <li>Unauthorized access</li>
              <li>Misuse</li>
              <li>Loss or alteration</li>
            </ul>
            <p>
              However, no online platform can guarantee 100% security.
            </p>

            <h2>5. Cookies and Tracking</h2>
            <p>
              Our website may use cookies or similar technologies to:
            </p>
            <ul>
              <li>Improve user experience</li>
              <li>Analyze website traffic</li>
              <li>Run advertising campaigns (Facebook/Instagram/Google)</li>
            </ul>
            <p>
              You may disable cookies in your browser settings.
            </p>

            <h2>6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites (universities, payment portals, etc.).
            </p>
            <p>
              We are not responsible for the privacy practices of those websites.
            </p>

            <h2>7. Your Consent</h2>
            <p>
              By submitting your information on our website or forms, you consent to this Privacy Policy and agree to be contacted by White Coat Abroad Studies.
            </p>

            <h2>8. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time.
            </p>
            <p>
              Any changes will be posted on this page with a revised effective date.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy, contact us:
            </p>
            <div className="rounded-xl bg-secondary/50 p-6 space-y-3 not-prose">
              <p className="font-heading font-bold text-lg text-foreground">
                White Coat Abroad Studies
              </p>
              <a
                href="tel:+919456695915"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="size-4 text-primary" />
                +91 9456695915
              </a>
              <a
                href="mailto:whitecoatabroadstudies@gmail.com"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="size-4 text-primary" />
                whitecoatabroadstudies@gmail.com
              </a>
              <a
                href="https://whitecoatas.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm"
              >
                <Globe className="size-4 text-primary" />
                whitecoatas.tech
              </a>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
