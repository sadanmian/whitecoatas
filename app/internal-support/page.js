import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowLeft, PlayCircle, Phone, Mail, Globe } from "lucide-react";

// Unlisted internal page. Not linked from anywhere on the site and excluded
// from crawlers via the metadata below plus public/robots.txt.

// Swap this ID to change the video.
const YOUTUBE_VIDEO_ID = "aqz-KE-bpKQ"; // "Big Buck Bunny" — public sample clip

const helpTopics = [
  "Walkthrough of the enquiry and pre-registration flow",
  "How student documents are collected and verified",
  "Admission timelines and follow-up checkpoints",
  "Common questions raised by parents and students",
];

export const metadata = {
  title: "Internal Support – White Coat Abroad Studies",
  description:
    "Internal support walkthrough for the White Coat Abroad Studies team. Unlisted reference page.",
  robots: { index: false, follow: false, nocache: true },
};

export default function InternalSupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <section className="rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-8 md:p-12 mb-12 shadow-xl">
            <p className="text-sm md:text-base font-semibold tracking-wide uppercase text-blue-100 mb-3">
              Internal Resource
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-5">
              Internal Support
            </h1>
            <p className="text-blue-50 text-base md:text-lg max-w-3xl leading-relaxed">
              A short walkthrough for the White Coat Abroad Studies team. This
              page is unlisted and is not part of the public website — please do
              not share the link with students or partners.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <PlayCircle className="w-7 h-7 text-blue-600" />
              Support Walkthrough
            </h2>

            <div className="mx-auto max-w-5xl">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-900 shadow-xl">
                {/* The Redacto consent script strips this iframe's src before
                    hydration and restores it once the visitor consents, so the
                    server and client markup intentionally differ here. */}
                <iframe
                  suppressHydrationWarning
                  className="absolute inset-0 h-full w-full border-0"
                  src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}`}
                  title="Internal support walkthrough"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Internal reference video — unlisted and not part of the public
                site.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              What This Covers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {helpTopics.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-gray-200 p-4 bg-white shadow-sm"
                >
                  <PlayCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Still Need Help?
            </h2>
            <p className="text-gray-600 mb-6">
              Reach the admissions desk directly if something in the walkthrough
              does not match what you are seeing.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 mb-6">
              <a href="tel:+919456695915">
                <span className="inline-flex items-center gap-2 text-gray-800 hover:text-blue-700">
                  <Phone className="w-4 h-4" />
                  +91 94566 95915
                </span>
              </a>
              <a href="mailto:whitecoatabroadstudies@gmail.com">
                <span className="inline-flex items-center gap-2 text-gray-800 hover:text-blue-700">
                  <Mail className="w-4 h-4" />
                  whitecoatabroadstudies@gmail.com
                </span>
              </a>
              <a
                href="https://www.whitecoatas.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline-flex items-center gap-2 text-gray-800 hover:text-blue-700">
                  <Globe className="w-4 h-4" />
                  www.whitecoatas.in
                </span>
              </a>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Go to Contact Section
            </Link>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
