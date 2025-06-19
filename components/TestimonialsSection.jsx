"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      university: "First Moscow State Medical University",
      country: "Russia",
      year: "2023",
      rating: 5,
      image: "👩‍⚕️",
      text: "WhiteCoatAs made my dream of studying MBBS abroad come true. Their guidance was exceptional from university selection to visa processing. I'm now in my second year at Moscow Medical and couldn't be happier!",
      course: "MBBS",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      university: "Tbilisi State Medical University",
      country: "Georgia",
      year: "2022",
      rating: 5,
      image: "👨‍⚕️",
      text: "The team at WhiteCoatAs provided excellent support throughout my admission process. They helped me choose the right university and handled all documentation smoothly. Now I'm confidently pursuing my medical career in Georgia.",
      course: "MBBS",
    },
    {
      id: 3,
      name: "Anjali Patel",
      university: "Kazakh National Medical University",
      country: "Kazakhstan",
      year: "2023",
      rating: 5,
      image: "👩‍🎓",
      text: "I was worried about studying abroad, but WhiteCoatAs made everything so easy. From the initial counseling to accommodation arrangements, they took care of everything. Highly recommended for anyone considering MBBS abroad!",
      course: "MBBS",
    },
    {
      id: 4,
      name: "Vikash Singh",
      university: "Kyrgyz State Medical Academy",
      country: "Kyrgyzstan",
      year: "2021",
      rating: 5,
      image: "👨‍🎓",
      text: "Thanks to WhiteCoatAs, I'm now in my final year of MBBS. Their transparent process and continuous support made my journey smooth. The financial guidance they provided was particularly helpful for my family.",
      course: "MBBS",
    },
    {
      id: 5,
      name: "Sneha Reddy",
      university: "Tashkent Medical Academy",
      country: "Uzbekistan",
      year: "2023",
      rating: 5,
      image: "👩‍💼",
      text: "WhiteCoatAs exceeded my expectations in every way. Their counselors are knowledgeable and caring. They not only helped me get admission but also provided ongoing support. I feel confident about my future as a doctor.",
      course: "MBBS",
    },
    {
      id: 6,
      name: "Arjun Mehta",
      university: "Bogomolets National Medical University",
      country: "Ukraine",
      year: "2022",
      rating: 5,
      image: "👨‍🔬",
      text: "The personalized attention I received from WhiteCoatAs was outstanding. They understood my preferences and helped me choose Ukraine for my studies. The quality of education here is excellent, and I'm grateful for their guidance.",
      course: "MBBS",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Student <span className="text-blue-300">Success Stories</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Hear from our successful students who are now pursuing their medical
            dreams abroad. Their journey could be your inspiration!
          </p>

          {/* Success Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/students-graduation.jpg"
                alt="Successful medical students at graduation"
                className="w-full h-[250px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">
                  Dreams Achieved, Careers Built
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-500/20 p-4 rounded-full">
                    <Quote className="w-8 h-8 text-blue-300" />
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-center text-lg md:text-xl leading-relaxed mb-8 text-gray-100">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Student Info */}
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <span className="text-6xl">
                      {testimonials[currentTestimonial].image}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-2">
                    {testimonials[currentTestimonial].name}
                  </h4>

                  <p className="text-blue-200 mb-2">
                    {testimonials[currentTestimonial].course} Student
                  </p>

                  <p className="text-blue-300 text-sm mb-4">
                    {testimonials[currentTestimonial].university},{" "}
                    {testimonials[currentTestimonial].country}
                  </p>

                  {/* Rating */}
                  <div className="flex justify-center space-x-1 mb-2">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      )
                    )}
                  </div>

                  <p className="text-blue-300 text-sm">
                    Admitted in {testimonials[currentTestimonial].year}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentTestimonial
                  ? "bg-blue-400"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer"
              onClick={() => goToTestimonial(index)}
            >
              <Card
                className={`bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 ${
                  index === currentTestimonial ? "ring-2 ring-blue-400" : ""
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{testimonial.image}</span>
                    <div>
                      <h4 className="font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-blue-200 text-sm">
                        {testimonial.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-gray-200 text-sm line-clamp-3">
                    {testimonial.text}
                  </p>
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
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "5000+", label: "Happy Students" },
            { number: "98%", label: "Success Rate" },
            { number: "15+", label: "Countries" },
            { number: "10+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">
                {stat.number}
              </div>
              <div className="text-blue-100 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
