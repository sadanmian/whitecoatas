"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  DollarSign,
  Users,
  Award,
  Clock,
  BookOpen,
  ChevronRight,
  Star,
} from "lucide-react";

const UniversitiesSection = () => {
  const [selectedCountry, setSelectedCountry] = useState("All");

  const countries = [
    "All",
    "Russia",
    "Georgia",
    "Kazakhstan",
    "Kyrgyzstan",
    "Uzbekistan",
    "Ukraine",
  ];

  const universities = [
    {
      id: 1,
      name: "First Moscow State Medical University",
      country: "Russia",
      city: "Moscow",
      established: 1758,
      tuitionFee: "$4,500/year",
      ranking: "Top 5 Medical University",
      accreditation: ["NMC", "WHO"],
      students: "12,000+",
      rating: 4.8,
      highlights: [
        "Oldest Medical University",
        "High Research Output",
        "International Recognition",
      ],
      image: "🏛️",
      color: "from-red-500 to-red-600",
    },
    {
      id: 2,
      name: "Tbilisi State Medical University",
      country: "Georgia",
      city: "Tbilisi",
      established: 1918,
      tuitionFee: "$6,000/year",
      ranking: "Top Medical University",
      accreditation: ["NMC", "WHO", "ECFMG"],
      students: "8,000+",
      rating: 4.7,
      highlights: [
        "European Standards",
        "Modern Infrastructure",
        "Clinical Excellence",
      ],
      image: "🏥",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 3,
      name: "Kazakh National Medical University",
      country: "Kazakhstan",
      city: "Almaty",
      established: 1931,
      tuitionFee: "$4,000/year",
      ranking: "Leading Medical University",
      accreditation: ["NMC", "WHO"],
      students: "10,000+",
      rating: 4.6,
      highlights: [
        "Research Excellence",
        "International Faculty",
        "State-of-art Labs",
      ],
      image: "🔬",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 4,
      name: "Kyrgyz State Medical Academy",
      country: "Kyrgyzstan",
      city: "Bishkek",
      established: 1939,
      tuitionFee: "$3,200/year",
      ranking: "Premier Medical Institute",
      accreditation: ["NMC", "WHO"],
      students: "6,000+",
      rating: 4.5,
      highlights: [
        "Affordable Education",
        "Experienced Faculty",
        "Good Clinical Exposure",
      ],
      image: "🎓",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 5,
      name: "Tashkent Medical Academy",
      country: "Uzbekistan",
      city: "Tashkent",
      established: 1919,
      tuitionFee: "$3,800/year",
      ranking: "Top Medical Academy",
      accreditation: ["NMC", "WHO"],
      students: "7,500+",
      rating: 4.4,
      highlights: [
        "Modern Campus",
        "Digital Learning",
        "International Programs",
      ],
      image: "💻",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 6,
      name: "Bogomolets National Medical University",
      country: "Ukraine",
      city: "Kyiv",
      established: 1841,
      tuitionFee: "$5,200/year",
      ranking: "Top Medical University",
      accreditation: ["NMC", "WHO", "ECFMG"],
      students: "15,000+",
      rating: 4.9,
      highlights: [
        "Historic Institution",
        "Research Leader",
        "International Recognition",
      ],
      image: "🏆",
      color: "from-blue-600 to-purple-600",
    },
  ];

  const filteredUniversities =
    selectedCountry === "All"
      ? universities
      : universities.filter((uni) => uni.country === selectedCountry);

  return (
    <section id="universities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Top <span className="text-blue-600">Universities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partner with prestigious medical universities worldwide. All our
            universities are NMC and WHO approved with excellent academic
            standards.
          </p>
        </motion.div>

        {/* Country Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCountry === country
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md"
              }`}
            >
              {country}
            </button>
          ))}
        </motion.div>

        {/* Universities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUniversities.map((university, index) => (
            <motion.div
              key={university.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                {/* University Header */}
                <div
                  className={`bg-gradient-to-r ${university.color} p-6 text-white relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 opacity-20 text-6xl">
                    {university.image}
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="secondary"
                        className="bg-white/20 text-white"
                      >
                        {university.country}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold">
                          {university.rating}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">
                      {university.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm opacity-90">
                      <MapPin className="w-4 h-4" />
                      <span>{university.city}</span>
                      <span>•</span>
                      <span>Est. {university.established}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Key Information */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-gray-600">
                          Tuition Fee
                        </span>
                      </div>
                      <span className="font-semibold text-gray-900">
                        {university.tuitionFee}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-gray-600">Students</span>
                      </div>
                      <span className="font-semibold text-gray-900">
                        {university.students}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-purple-600" />
                        <span className="text-sm text-gray-600">Ranking</span>
                      </div>
                      <span className="font-semibold text-gray-900 text-xs">
                        {university.ranking}
                      </span>
                    </div>
                  </div>

                  {/* Accreditation */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                      Accreditation
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {university.accreditation.map((acc, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs bg-green-50 text-green-700 border-green-200"
                        >
                          {acc}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                      Key Highlights
                    </h4>
                    <ul className="space-y-1">
                      {university.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span className="text-xs text-gray-600">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learn More Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold text-sm transition-colors duration-200 flex items-center justify-center space-x-2 group"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-white rounded-2xl p-12 shadow-lg border border-gray-100"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our University Network
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Partnered with the world's leading medical universities to provide
              you with the best education opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                number: "100+",
                label: "Partner Universities",
                color: "text-blue-600",
              },
              {
                icon: MapPin,
                number: "15+",
                label: "Countries",
                color: "text-green-600",
              },
              {
                icon: Award,
                number: "100%",
                label: "NMC Approved",
                color: "text-purple-600",
              },
              {
                icon: Users,
                number: "5000+",
                label: "Students Enrolled",
                color: "text-orange-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gray-50`}
                >
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UniversitiesSection;
