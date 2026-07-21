"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Countries", href: "#countries" },
    { name: "Universities", href: "#universities" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* Desktop view - show text */}
            <div className="hidden sm:flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91 94566 95915</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>whitecoatabroadstudies@gmail.com</span>
            </div>

            {/* Mobile view - show icons only */}
            <div className="flex sm:hidden items-center space-x-3">
              <a
                href="tel:+919456695915"
                className="flex items-center justify-center w-6 h-6 hover:bg-blue-800 rounded transition-colors duration-200"
                title="Call us"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:whitecoatabroadstudies@gmail.com"
                className="flex items-center justify-center w-6 h-6 hover:bg-blue-800 rounded transition-colors duration-200"
                title="Email us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <span>✈️ Your Gateway to Global Medical Education</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              onClick={() => {
                // Scroll to top when logo is clicked
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center cursor-pointer"
              >
                <Image
                  src="/images/logo.png"
                  alt="WhiteCoat Abroad Studies"
                  width={84}
                  height={84}
                  className="h-auto w-16 md:w-20"
                  priority
                />
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          className="md:hidden overflow-hidden bg-white rounded-lg shadow-lg"
        >
          <div className="px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Apply Now
            </Button>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;
