import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Phone, Mail, Globe } from "lucide-react";

export const metadata = {
  title: "Privacy Policy – White Coat Abroad Studies",
  description:
    "How White Coat Abroad Studies collects, uses, and protects your personal information when you visit our website or submit your details through our forms.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-white pt-28 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Privacy Policy – White Coat Abroad Studies
          </h1>
          <p className="text-gray-500 mb-8">Effective Date: 01 February 2026</p>

          <p className="text-gray-600 leading-relaxed mb-6">
            White Coat Abroad Studies (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;) respects your privacy and is committed to protecting the personal information you share with us.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            This Privacy Policy explains how we collect, use, and protect your information when you visit our website or submit your details through our forms, advertisements, or contact channels.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              When you fill out an enquiry form, pre-registration form, or contact us, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Full Name</li>
              <li>Phone Number</li>
              <li>Email Address</li>
              <li>City/State</li>
              <li>NEET Qualification Status</li>
              <li>Preferred Country/University for MBBS</li>
              <li>Any other details you voluntarily provide</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We use the collected information only for:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Providing MBBS abroad admission guidance</li>
              <li>Sending university details, fee structure, and counselling support</li>
              <li>Contacting you via call, WhatsApp, email, or SMS</li>
              <li>Processing your pre-registration and admission application</li>
              <li>Improving our services and student support</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              3. Sharing of Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We do not sell, rent, or trade your personal information. Your data may only be shared with:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Partner universities abroad (only for admission purposes)</li>
              <li>Authorized staff members for counselling support</li>
              <li>Government authorities if legally required</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              4. Data Protection & Security
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We take reasonable security measures to protect your personal data from:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Unauthorized access</li>
              <li>Misuse</li>
              <li>Loss or alteration</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              However, no online platform can guarantee 100% security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              5. Cookies and Tracking
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Our website may use cookies or similar technologies to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Improve user experience</li>
              <li>Analyze website traffic</li>
              <li>Run advertising campaigns (Facebook/Instagram/Google)</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              You may disable cookies in your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              6. Third-Party Links
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Our website may contain links to third-party sites (universities, payment portals, etc.).
            </p>
            <p className="text-gray-600 leading-relaxed">
              We are not responsible for the privacy practices of those websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              7. Your Consent
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By submitting your information on our website or forms, you consent to this Privacy Policy and agree to be contacted by White Coat Abroad Studies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              8. Updates to This Policy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We may update this Privacy Policy from time to time.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Any changes will be posted on this page with a revised effective date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              9. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions regarding this Privacy Policy, contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <p className="font-semibold text-gray-900">White Coat Abroad Studies</p>
              <a
                href="tel:+919456695915"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                +91 9456695915
              </a>
              <a
                href="mailto:whitecoatabroadstudies@gmail.com"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-600" />
                whitecoatabroadstudies@gmail.com
              </a>
              <a
                href="https://whitecoatas.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Globe className="w-4 h-4 text-blue-600" />
                whitecoatas.tech
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
