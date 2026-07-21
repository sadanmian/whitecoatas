import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle2, Phone, Globe, ArrowLeft } from "lucide-react";

export const metadata = {
  title:
    "Fergana Institute of Public Health (FMIPH) - MBBS in Uzbekistan | White Coat Abroad Studies",
  description:
    "Explore FMIPH, Uzbekistan: university overview, MBBS fee structure 2026-27, eligibility, documents, campus facilities, and career pathways for medical aspirants.",
};

const overviewRows = [
  { label: "University Name", value: "Fergana Institute of Public Health (FMIPH)" },
  { label: "Location", value: "Fergana City, Uzbekistan" },
  { label: "Established", value: "1991" },
  { label: "University Type", value: "Government Medical Institute" },
  { label: "Course Offered", value: "MBBS / MD (General Medicine)" },
  { label: "Course Duration", value: "6 Years (5 Years + 1 Year Internship)" },
  { label: "Medium of Instruction", value: "English" },
  { label: "Recognition", value: "WHO, WDOMS, NMC Guidelines" },
  { label: "Departments", value: "19 Academic Departments" },
  { label: "Faculty", value: "147+ Professors and Associate Professors" },
  { label: "Eligibility", value: "NEET Qualified + 50% PCB" },
];

const whyChoose = [
  "Government Medical Institute",
  "English Medium MBBS Program",
  "Affordable Tuition Fees",
  "Modern Laboratories and Simulation Centre",
  "19 Academic Departments",
  "147+ Experienced Faculty Members",
  "Clinical Training in Affiliated Hospitals",
  "Separate Boys' and Girls' Hostels",
  "Indian Mess Available",
  "Safe and Student-Friendly Campus",
  "FMGE/NExT Coaching Support",
  "Internationally Recognized Medical Degree",
];

const admissionEligibility = [
  "NEET UG Qualified",
  "Minimum 50% in Physics, Chemistry and Biology (40% for reserved categories)",
  "Minimum age: 17 years",
  "Valid passport",
];

const documentsRequired = [
  "Passport",
  "Class 10 mark sheet",
  "Class 12 mark sheet",
  "NEET score card",
  "Passport size photographs",
  "Medical fitness certificate",
];

const campusFacilities = [
  "Smart Classrooms",
  "Modern Medical Laboratories",
  "Digital Library",
  "Anatomy Museum",
  "Simulation Centre",
  "Research Laboratories",
  "Sports and Recreation Facilities",
  "Separate Boys' and Girls' Hostels",
  "Indian Mess",
  "Wi-Fi Campus",
  "24x7 Security",
  "Clinical Training in Affiliated Hospitals",
];

const careerOpportunities = [
  "FMGE/NExT (India)",
  "USMLE (USA)",
  "UKMLA (United Kingdom)",
  "DHA (Dubai)",
  "HAAD (Abu Dhabi)",
  "MOH (UAE)",
  "Postgraduate medical education worldwide",
];

const annualFeeRows = [
  {
    feeParticulars: "University Package",
    firstYear: "7,000 USD",
    secondYear: "5,400 USD",
    thirdToSixthYear: "4,650 USD",
  },
  {
    feeParticulars: "Mess Charges (Compulsory for 1st and 2nd Year)",
    firstYear: "1,200 USD",
    secondYear: "1,200 USD",
    thirdToSixthYear: "Optional",
  },
  {
    feeParticulars: "Total Annual Fee",
    firstYear: "8,200 USD",
    secondYear: "6,600 USD",
    thirdToSixthYear: "4,650 USD*",
  },
];

const packageRows = [
  { particulars: "Tuition Fee", amount: "3,600 USD" },
  { particulars: "Hostel Fee", amount: "750 USD" },
  { particulars: "Police Registration", amount: "300 USD" },
  { particulars: "Visa Extension", amount: "250 USD" },
  { particulars: "Health Insurance", amount: "100 USD" },
  { particulars: "FMGE/NExT Coaching", amount: "200 USD" },
  { particulars: "Administrative Charges", amount: "200 USD" },
  { particulars: "Additional First-Year University Charges", amount: "1,600 USD" },
  { particulars: "Total University Package", amount: "7,000 USD" },
];

const campusGallery = [
  {
    src: "/images/fmiph/campus-corridor.png",
    title: "Campus Corridor",
    alt: "FMIPH corridor with university emblems and branding",
  },
  {
    src: "/images/fmiph/auditorium.png",
    title: "Student Auditorium",
    alt: "Large FMIPH auditorium with students attending an academic session",
  },
  {
    src: "/images/fmiph/library.png",
    title: "Medical Library",
    alt: "FMIPH library shelves with academic and medical reference books",
  },
  {
    src: "/images/fmiph/classroom.png",
    title: "Interactive Classroom",
    alt: "FMIPH classroom with medical students during a lecture session",
  },
  {
    src: "/images/fmiph/campus-front.png",
    title: "Campus Front View",
    alt: "Front view of Fergana Medical Institute of Public Health building",
  },
  {
    src: "/images/fmiph/academic-block.png",
    title: "Academic Block",
    alt: "FMIPH academic block building and landscaped campus area",
  },
];

export default function FerganaMedicalInstitutePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#universities"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Universities
          </Link>

          <section className="rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-8 md:p-12 mb-12 shadow-xl">
            <p className="text-sm md:text-base font-semibold tracking-wide uppercase text-blue-100 mb-3">
              Fergana Institute of Public Health (FMIPH), Uzbekistan
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-5">
              Study MBBS at Fergana Institute of Public Health
            </h1>
            <p className="text-blue-50 text-base md:text-lg max-w-4xl leading-relaxed">
              Build your medical career at one of Uzbekistan's leading government
              medical institutes. FMIPH offers a globally recognized
              English-medium MBBS/MD (General Medicine) program with modern
              infrastructure, experienced faculty, and extensive clinical
              training.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              University Overview
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="min-w-full text-sm md:text-base">
                <tbody>
                  {overviewRows.map((row) => (
                    <tr key={row.label} className="border-b border-gray-100 last:border-b-0">
                      <th className="w-1/3 bg-gray-50 text-left font-semibold text-gray-900 px-5 py-4">
                        {row.label}
                      </th>
                      <td className="text-gray-700 px-5 py-4">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Why Choose FMIPH?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyChoose.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-gray-200 p-4 bg-white shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              MBBS Fee Structure (2026-27)
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-8">
              <table className="min-w-full text-sm md:text-base">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left font-semibold text-gray-900 px-5 py-4">
                      Fee Particulars
                    </th>
                    <th className="text-left font-semibold text-gray-900 px-5 py-4">
                      1st Year (USD)
                    </th>
                    <th className="text-left font-semibold text-gray-900 px-5 py-4">
                      2nd Year (USD)
                    </th>
                    <th className="text-left font-semibold text-gray-900 px-5 py-4">
                      3rd-6th Year (USD)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {annualFeeRows.map((row) => (
                    <tr key={row.feeParticulars} className="border-t border-gray-100">
                      <td className="px-5 py-4 text-gray-900 font-medium">{row.feeParticulars}</td>
                      <td className="px-5 py-4 text-gray-700">{row.firstYear}</td>
                      <td className="px-5 py-4 text-gray-700">{row.secondYear}</td>
                      <td className="px-5 py-4 text-gray-700">{row.thirdToSixthYear}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              University Package Includes
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-4">
              <table className="min-w-full text-sm md:text-base">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left font-semibold text-gray-900 px-5 py-4">Particulars</th>
                    <th className="text-left font-semibold text-gray-900 px-5 py-4">Amount (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {packageRows.map((row) => (
                    <tr key={row.particulars} className="border-t border-gray-100">
                      <td className="px-5 py-4 text-gray-900 font-medium">{row.particulars}</td>
                      <td className="px-5 py-4 text-gray-700">{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600">
              Hostel and mess are compulsory during the 1st and 2nd academic
              years. From the 3rd year onwards, they are optional.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Admission Eligibility
            </h2>
            <ul className="space-y-3">
              {admissionEligibility.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Documents Required
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {documentsRequired.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-gray-200 p-4 text-gray-700"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Campus Facilities
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {campusFacilities.map((facility) => (
                <li
                  key={facility}
                  className="rounded-xl border border-gray-200 bg-white p-4 text-gray-700 shadow-sm"
                >
                  {facility}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Career Opportunities
            </h2>
            <p className="text-gray-600 mb-4">
              After completing MBBS from FMIPH, graduates can pursue:
            </p>
            <ul className="space-y-3">
              {careerOpportunities.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Student Life
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Students at FMIPH enjoy a multicultural environment with modern
              accommodation, Indian food, extracurricular activities, sports
              facilities, and comprehensive academic support. The university
              focuses on practical learning, research, and clinical exposure to
              prepare students for successful medical careers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Campus Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campusGallery.map((photo) => (
                <figure
                  key={photo.src}
                  className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={1200}
                    height={800}
                    className="w-full h-56 object-cover"
                  />
                  <figcaption className="px-4 py-3 text-sm font-medium text-gray-700">
                    {photo.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-blue-50 border border-blue-100 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Apply Now
            </h2>
            <p className="text-lg text-blue-900 font-semibold mb-6">
              Admissions Open for 2026-27
            </p>
            <div className="space-y-3 mb-6">
              <a
                href="tel:+919456695915"
                className="inline-flex items-center gap-2 text-gray-800 hover:text-blue-700"
              >
                <Phone className="w-4 h-4" />
                +91 94566 95915
              </a>
              <a
                href="https://www.whitecoatas.in"
                target="_blank"
                rel="noreferrer"
                className="block"
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
              Contact Us for Admission Guidance
            </Link>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
