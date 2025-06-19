"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after 3 seconds
      setTimeout(() => setShowTooltip(true), 3000);
      // Hide tooltip after 8 seconds
      setTimeout(() => setShowTooltip(false), 8000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210"; // Replace with actual WhatsApp number
    const message =
      "Hi! I'm interested in MBBS abroad programs. Please provide more information.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{
          opacity: showTooltip ? 1 : 0,
          scale: showTooltip ? 1 : 0.8,
          y: showTooltip ? 0 : 10,
        }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-16 right-0 mb-2 mr-2"
      >
        <div className="bg-white rounded-lg shadow-lg p-3 border border-gray-200 relative max-w-xs">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 bg-gray-100 hover:bg-gray-200 rounded-full p-1 transition-colors duration-200"
          >
            <X className="w-3 h-3 text-gray-600" />
          </button>
          <div className="pr-4">
            <p className="text-sm text-gray-800 font-medium mb-1">
              Need help with MBBS abroad?
            </p>
            <p className="text-xs text-gray-600">
              Chat with our expert counselors now!
            </p>
          </div>
          {/* Arrow */}
          <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-gray-200"></div>
        </div>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.button
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.2,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <MessageCircle className="w-8 h-8 relative z-10" />

        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
      </motion.button>

      {/* Floating animation */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="w-full h-full bg-green-500 rounded-full opacity-20 blur-xl"></div>
      </motion.div>
    </div>
  );
};

export default WhatsAppButton;
