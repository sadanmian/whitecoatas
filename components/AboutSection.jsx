"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "NMC Approved Universities",
      description:
        "All our partner universities are approved by National Medical Commission (NMC) and WHO.",
    },
    {
      icon: Target,
      title: "Expert Guidance",
      description:
        "Our experienced counselors provide personalized guidance for your medical career abroad.",
    },
    {
      icon: Eye,
      title: "Transparent Process",
      description:
        "Complete transparency in admission process, fees, and documentation requirements.",
    },
    {
      icon: Heart,
      title: "Student Support",
      description:
        "24/7 support for students from application to graduation and beyond.",
    },
  ];

  const values = [
    {
      title: "Our Mission",
      description:
        "To provide affordable, quality medical education opportunities abroad and guide students towards a successful medical career.",
      icon: "🎯",
    },
    {
      title: "Our Vision",
      description:
        "To become the most trusted partner for students aspiring to study medicine abroad with complete transparency and support.",
      icon: "👁️",
    },
    {
      title: "Our Values",
      description:
        "Integrity, Excellence, Student-First Approach, and Commitment to Quality Education are the pillars of our service.",
      icon: "💎",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20 lg:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
            About <span className="text-blue-600">WhiteCoatAs</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are committed to making quality medical education accessible and
            affordable for Indian students. With over a decade of experience, we
            have helped thousands of students achieve their dreams of becoming
            doctors.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-32">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
                Why Choose WhiteCoatAs?
              </h3>
              <p className="text-gray-600 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
                We understand that choosing the right path for your medical
                education is one of the most important decisions of your life.
                That's why we're dedicated to providing you with comprehensive
                support, from university selection to graduation and beyond.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/medical-student-studying.jpg"
                alt="Medical student studying with books and stethoscope"
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-white rounded-full p-2 md:p-4 shadow-lg">
              <div className="text-lg md:text-2xl">🩺</div>
            </div>
            <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-white rounded-full p-2 md:p-4 shadow-lg">
              <div className="text-lg md:text-2xl">📚</div>
            </div>
          </motion.div>
        </div>

        {/* Mission, Vision, Values Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-32">
          {/* Left Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/medical-team.jpg"
                alt="Medical professionals and students"
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-white rounded-full p-2 md:p-4 shadow-lg">
              <div className="text-lg md:text-2xl">🎓</div>
            </div>
            <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-white rounded-full p-2 md:p-4 shadow-lg">
              <div className="text-lg md:text-2xl">🌍</div>
            </div>
          </motion.div>

          {/* Right Content - Mission, Vision, Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-1 lg:order-2"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{value.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 md:p-12 text-white"
        >
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Our Impact in Numbers
            </h3>
            <p className="text-blue-100 text-lg">
              Building dreams, shaping futures, creating doctors worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                number: "5000+",
                label: "Students Placed",
                sublabel: "Dreams Fulfilled",
              },
              {
                number: "100+",
                label: "Partner Universities",
                sublabel: "Global Network",
              },
              {
                number: "15+",
                label: "Countries",
                sublabel: "Worldwide Reach",
              },
              {
                number: "98%",
                label: "Success Rate",
                sublabel: "Proven Track Record",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-blue-200 text-sm">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
