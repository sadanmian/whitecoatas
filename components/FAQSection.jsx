"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is the eligibility criteria for MBBS abroad?",
      answer:
        "Students must have completed 12th grade with Physics, Chemistry, Biology/Biotechnology and English with minimum 50% marks (40% for reserved categories). NEET qualification is mandatory for Indian students to pursue MBBS abroad.",
    },
    {
      id: 2,
      question: "Are the universities NMC and WHO approved?",
      answer:
        "Yes, all our partner universities are approved by the National Medical Commission (NMC) and World Health Organization (WHO). This ensures that graduates can practice medicine in India after clearing the necessary licensing exams.",
    },
    {
      id: 3,
      question: "What are the total costs involved?",
      answer:
        "The total cost varies by country and university, typically ranging from $25,000 to $50,000 for the entire course. This includes tuition fees, accommodation, food, and other living expenses. We provide detailed cost breakdowns for each destination.",
    },
    {
      id: 4,
      question: "Is the degree valid in India?",
      answer:
        "Yes, degrees from NMC-approved universities are valid in India. Graduates need to clear the Foreign Medical Graduate Examination (FMGE) or National Exit Test (NExT) to practice medicine in India.",
    },
    {
      id: 5,
      question: "What languages are courses taught in?",
      answer:
        "Most universities offer MBBS programs in English medium. Some universities also provide local language support in the initial years to help students adapt better to the local environment.",
    },
    {
      id: 6,
      question: "How safe is it to study abroad?",
      answer:
        "All our partner countries and universities maintain high safety standards. We also provide 24/7 support to students and maintain regular contact with parents. Our local representatives ensure student welfare throughout their stay.",
    },
    {
      id: 7,
      question: "What about accommodation and food?",
      answer:
        "We arrange safe and comfortable accommodation in university hostels or approved private accommodations. Most places offer Indian food options, and we help students find familiar cuisines to make their stay comfortable.",
    },
    {
      id: 8,
      question: "How long does the visa process take?",
      answer:
        "The visa process typically takes 2-4 weeks depending on the country. We handle the entire visa process and provide guidance for document preparation, application submission, and interview preparation if required.",
    },
    {
      id: 9,
      question: "Can I work part-time while studying?",
      answer:
        "Some countries allow international students to work part-time with certain restrictions. We provide complete information about work permissions and opportunities in each destination country.",
    },
    {
      id: 10,
      question: "What support do you provide after admission?",
      answer:
        "We provide continuous support including pre-departure orientation, airport assistance, accommodation help, local area guidance, academic support, and regular check-ins throughout the course duration.",
    },
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <HelpCircle className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to the most common questions about studying MBBS abroad.
            Can't find what you're looking for? Contact our experts for
            personalized guidance.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openFAQ === faq.id ? (
                          <ChevronUp className="w-5 h-5 text-blue-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </div>
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openFAQ === faq.id ? "auto" : 0,
                      opacity: openFAQ === faq.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our expert counselors are here to help! Get personalized answers to
            all your questions about studying MBBS abroad. Book a free
            consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
            >
              Book Free Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Call Us Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
