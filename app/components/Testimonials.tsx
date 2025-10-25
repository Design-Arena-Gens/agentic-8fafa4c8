"use client";

import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Denver, CO",
    text: "Premier Remodeling transformed our outdated kitchen into a modern masterpiece! The team was professional, punctual, and the quality of work exceeded our expectations. Highly recommend!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    location: "Boulder, CO",
    text: "We hired them for a complete bathroom renovation. From design to completion, everything was seamless. They truly listened to our needs and delivered exactly what we wanted.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    location: "Aurora, CO",
    text: "Our basement was an unused space until Premier Remodeling worked their magic. Now it's our favorite room in the house! The attention to detail and craftsmanship is outstanding.",
    rating: 5,
  },
  {
    name: "David Thompson",
    location: "Lakewood, CO",
    text: "Excellent communication throughout the entire project. They stayed on budget and completed our kitchen remodel ahead of schedule. Couldn't be happier with the results!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don&apos;t just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 relative">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} className="text-accent text-2xl mx-1" />
              ))}
            </div>

            <p className="text-xl md:text-2xl text-gray-700 italic mb-8 text-center">
              &ldquo;{testimonials[currentIndex].text}&rdquo;
            </p>

            <div className="text-center">
              <p className="font-bold text-primary text-lg">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-gray-600">{testimonials[currentIndex].location}</p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-secondary text-white p-3 rounded-full hover:bg-accent transition-colors"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-secondary text-white p-3 rounded-full hover:bg-accent transition-colors"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-secondary w-8" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
