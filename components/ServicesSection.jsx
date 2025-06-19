"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  GraduationCap,
  Plane,
  Home,
  CreditCard,
  Headphones,
  BookOpen,
  Users,
  CheckCircle,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: "Documentation Support",
      description:
        "Complete assistance with document preparation, verification, and submission for university applications.",
      features: [
        "Document Verification",
        "Application Forms",
        "Attestation Support",
        "Translation Services",
      ],
    },
    {
      icon: GraduationCap,
      title: "University Selection",
      description:
        "Expert guidance to choose the right university based on your budget, preferences, and career goals.",
      features: [
        "Personalized Counseling",
        "University Comparison",
        "Course Details",
        "Admission Requirements",
      ],
    },
    {
      icon: Plane,
      title: "Visa Assistance",
      description:
        "End-to-end visa support including application, interview preparation, and documentation.",
      features: [
        "Visa Application",
        "Interview Prep",
        "Document Checklist",
        "Embassy Support",
      ],
    },
    {
      icon: Home,
      title: "Accommodation",
      description:
        "Safe and comfortable accommodation arrangements near your university campus.",
      features: [
        "Hostel Booking",
        "Shared Apartments",
        "Local Connections",
        "Safety Assured",
      ],
    },
    {
      icon: CreditCard,
      title: "Financial Guidance",
      description:
        "Complete support for education loans, forex, and financial planning for your studies abroad.",
      features: [
        "Education Loans",
        "Forex Services",
        "Bank Account Opening",
        "Financial Planning",
      ],
    },
    {
      icon: Headphones,
      title: "24/7 Student Support",
      description:
        "Round-the-clock support for students and parents throughout the entire journey.",
      features: [
        "Emergency Support",
        "Academic Guidance",
        "Parent Updates",
        "Regular Check-ins",
      ],
    },
  ];

  const process = [
    {
      step: 1,
      title: "Free Counseling",
      description:
        "Initial consultation to understand your goals and preferences",
      icon: Users,
    },
    {
      step: 2,
      title: "University Selection",
      description:
        "Choose from our partner universities based on your criteria",
      icon: GraduationCap,
    },
    {
      step: 3,
      title: "Application Process",
      description: "Complete application and documentation support",
      icon: FileText,
    },
    {
      step: 4,
      title: "Visa Processing",
      description: "End-to-end visa assistance and interview preparation",
      icon: Plane,
    },
    {
      step: 5,
      title: "Pre-Departure",
      description: "Orientation, accommodation, and travel arrangements",
      icon: CheckCircle,
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20 lg:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed">
            Comprehensive support from application to graduation. We handle
            everything so you can focus on your studies and achieving your
            dreams.
          </p>

          {/* Services Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/medical-consultation.jpg"
                alt="Professional medical consultation and services"
                className="w-full h-[200px] md:h-[250px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Expert Guidance & Support</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-24 md:mb-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                <CardHeader className="text-center pb-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-center space-x-2"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Simple 5-Step Process
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From initial consultation to successful enrollment, we guide you
              through every step of your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                {/* Connecting Line */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-x-1/2 z-0"></div>
                )}

                <div className="relative z-10">
                  <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-blue-600">
                    <step.icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                    {step.step}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your MBBS Journey?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who chose WhiteCoatAs for
              their medical education abroad. Get started with a free
              consultation today!
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
                Download Brochure
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
