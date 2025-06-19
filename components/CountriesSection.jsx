"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, DollarSign, Clock, Award } from "lucide-react";

const CountriesSection = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countries = [
    {
      id: 1,
      name: "Russia",
      flag: "🇷🇺",
      duration: "6 Years",
      tuitionFee: "$3,000-5,000/year",
      livingCost: "$2,000-3,000/year",
      description:
        "World-class medical education with English medium instruction",
      highlights: [
        "NMC Approved",
        "High Quality Education",
        "Affordable Fees",
        "Winter Climate",
      ],
      universities: 45,
      color: "from-red-500 to-red-600",
    },
    {
      id: 2,
      name: "Georgia",
      flag: "🇬🇪",
      duration: "6 Years",
      tuitionFee: "$5,000-8,000/year",
      livingCost: "$2,500-3,500/year",
      description: "European standard education with modern infrastructure",
      highlights: [
        "EU Standards",
        "English Medium",
        "Cultural Diversity",
        "Beautiful Landscape",
      ],
      universities: 12,
      color: "from-orange-500 to-red-500",
    },
    {
      id: 3,
      name: "Kazakhstan",
      flag: "🇰🇿",
      duration: "5-6 Years",
      tuitionFee: "$3,500-5,500/year",
      livingCost: "$1,800-2,800/year",
      description: "Quality medical education with affordable living costs",
      highlights: [
        "WHO Approved",
        "Low Living Cost",
        "Safe Environment",
        "Modern Facilities",
      ],
      universities: 8,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 4,
      name: "Kyrgyzstan",
      flag: "🇰🇬",
      duration: "5-6 Years",
      tuitionFee: "$3,000-4,500/year",
      livingCost: "$1,500-2,500/year",
      description: "Budget-friendly medical education with excellent faculty",
      highlights: [
        "Very Affordable",
        "Indian Food Available",
        "Mountain Beauty",
        "Friendly Culture",
      ],
      universities: 6,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 5,
      name: "Uzbekistan",
      flag: "🇺🇿",
      duration: "6 Years",
      tuitionFee: "$3,200-4,800/year",
      livingCost: "$1,800-2,800/year",
      description: "Growing medical education hub with modern facilities",
      highlights: [
        "Emerging Destination",
        "Cost Effective",
        "Good Infrastructure",
        "Cultural Similarity",
      ],
      universities: 10,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 6,
      name: "Ukraine",
      flag: "🇺🇦",
      duration: "6 Years",
      tuitionFee: "$4,000-6,000/year",
      livingCost: "$2,000-3,000/year",
      description:
        "European medical education with excellent clinical exposure",
      highlights: [
        "European Standards",
        "Clinical Exposure",
        "Research Opportunities",
        "Multicultural",
      ],
      universities: 25,
      color: "from-blue-600 to-purple-600",
    },
  ];

  return (
    <section id="countries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Study <span className="text-blue-600">Destinations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore top destinations for MBBS abroad. Each country offers unique
            advantages and world-class medical education at affordable costs.
          </p>
        </motion.div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={country.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedCountry(country)}
            >
              <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                {/* Country Header */}
                <div
                  className={`bg-gradient-to-r ${country.color} p-6 text-white relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 opacity-10 text-6xl">
                    {country.flag}
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-4xl">{country.flag}</span>
                      <Badge
                        variant="secondary"
                        className="bg-white/20 text-white"
                      >
                        {country.universities} Universities
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{country.name}</h3>
                    <p className="text-sm opacity-90">{country.description}</p>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Key Information */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">
                        Duration: <strong>{country.duration}</strong>
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">
                        Tuition: <strong>{country.tuitionFee}</strong>
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700">
                        Living: <strong>{country.livingCost}</strong>
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-yellow-500" />
                      Key Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {country.highlights.map((highlight, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs bg-blue-50 text-blue-700 border-blue-200"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                      <span className="text-blue-600 font-semibold text-sm">
                        Click to learn more
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help Choosing the Right Country?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our expert counselors will help you select the best destination
              based on your budget, preferences, and career goals. Get
              personalized guidance today!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Free Counseling
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountriesSection;
