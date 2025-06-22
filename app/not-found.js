"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Stethoscope, HeartPulse } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-blue-200">
          <Stethoscope size={120} />
        </div>
        <div className="absolute bottom-10 right-10 text-blue-200">
          <HeartPulse size={100} />
        </div>
        <div className="absolute top-1/2 left-1/4 text-blue-200 transform -translate-y-1/2">
          <Stethoscope size={80} />
        </div>
      </div>

      <div className="text-center max-w-2xl mx-auto relative z-10">
        {/* Animated 404 */}
        <div className="mb-12">
          <div className="relative">
            <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 animate-pulse">
              404
            </h1>
            <div className="absolute -top-2 -right-2 text-red-500 animate-bounce">
              <HeartPulse size={40} />
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
              <Stethoscope className="text-blue-600" size={32} />
              Page Not Found
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              It looks like this page has taken a medical leave! The page
              you&apos;re looking for doesn&apos;t exist or has been moved to a
              different location in our medical universe.
            </p>

            {/* Medical-themed illustration */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                  <Stethoscope className="text-blue-600" size={48} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-white text-sm font-bold">!</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Link href="/" className="block">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Home className="w-5 h-5 mr-2" />
                  Return to Home
                </Button>
              </Link>

              <button
                onClick={() => window.history.back()}
                className="mx-auto text-blue-600 hover:text-blue-700 font-medium px-6 py-3 rounded-full hover:bg-blue-50 transition-all duration-300 flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back to Previous Page
              </button>
            </div>
          </div>
        </div>

        {/* Additional help section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Need Medical Education Assistance?
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            If you&apos;re looking for information about medical education
            abroad, our home page has all the resources you need.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              Medical Universities
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
              Study Abroad
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
              Admissions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
