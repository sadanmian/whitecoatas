"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector("header");
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    // Update on mount
    updateHeaderHeight();

    // Update on resize
    window.addEventListener("resize", updateHeaderHeight);

    // Update after a short delay to ensure DOM is fully rendered
    setTimeout(updateHeaderHeight, 100);

    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen"
      style={{
        height: `calc(100vh - ${headerHeight}px)`,
        minHeight: `calc(100vh - ${headerHeight}px)`,
      }}
    >
      {/* Background with Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-medical-education.jpg"
          alt="Medical education background"
          className="w-full h-full object-cover object-center"
        />
        {/* Responsive overlay for text readability */}
        <div className="absolute inset-0 bg-white/85 md:bg-white/75 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white/40 to-blue-100/60 z-20"></div>
      </div>

      {/* Simplified background pattern */}
      <div className="absolute inset-0 opacity-10 z-30">
        <div className="absolute top-10 right-10 text-4xl md:text-6xl">🩺</div>
        <div className="absolute bottom-10 left-10 text-4xl md:text-6xl">
          📚
        </div>
        <div className="absolute top-1/2 left-10 text-3xl md:text-4xl">⚕️</div>
        <div className="absolute top-1/2 right-10 text-3xl md:text-4xl">🎓</div>
      </div>

      {/* Content Container - Perfectly Centered */}
      <div className="relative z-40 w-full h-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 w-full">
          <div className="text-center">
            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 md:mb-10"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="block">
                  Your Dream of{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    MBBS Abroad
                  </span>
                </span>
                <span className="block mt-2">Starts Here</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              WhiteCoatAs - Your trusted partner for affordable, quality medical
              education abroad. Fulfill your dream of becoming a doctor with our
              expert guidance.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold group"
              >
                Start Your Journey
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
              >
                Explore Countries
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-600 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
