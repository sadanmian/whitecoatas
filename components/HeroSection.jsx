"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/doctor-with-diploma.jpg')",
      }}
    >
      {/* Modern minimal overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-blue-50/95 backdrop-blur-[1px]"></div>

      {/* Clean geometric elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 right-20 w-2 h-2 bg-blue-500/30 rounded-full"></div>
        <div className="absolute bottom-32 left-16 w-1 h-1 bg-purple-500/40 rounded-full"></div>
        <div className="absolute top-1/3 left-1/5 w-1.5 h-1.5 bg-blue-400/25 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-purple-400/30 rounded-full"></div>
      </div>

      {/* Main content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-8 text-center">
        {/* Modern badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-gray-200/50 rounded-full px-6 py-3 mb-8 shadow-sm"
        >
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-700">
            Medical Education Excellence
          </span>
        </motion.div>

        {/* Clean headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.9]"
        >
          <span className="block text-gray-900">
            Study{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MBBS
            </span>
          </span>
          <span className="block text-gray-900">Abroad</span>
        </motion.h1>

        {/* Clean subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto font-light"
        >
          Transform your medical career with world-class education and expert
          guidance
        </motion.p>

        {/* Modern CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-lg font-medium rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border-0"
          >
            Get Started Today
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Minimal scroll indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <div className="w-5 h-8 border border-gray-400/60 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-0.5 h-2 bg-gray-500/60 rounded-full mt-1.5"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
