"use client";

import { useState } from "react";

const projects = [
  {
    id: 1,
    category: "kitchen",
    title: "Modern Kitchen Renovation",
    description: "Complete kitchen transformation with custom cabinetry and quartz countertops",
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&q=80",
  },
  {
    id: 2,
    category: "bathroom",
    title: "Luxury Master Bathroom",
    description: "Spa-inspired bathroom with walk-in shower and marble finishes",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
  },
  {
    id: 3,
    category: "kitchen",
    title: "Contemporary Kitchen Design",
    description: "Open-concept kitchen with island and stainless steel appliances",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
  },
  {
    id: 4,
    category: "living",
    title: "Living Room Makeover",
    description: "Modern living space with custom built-ins and lighting",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
  },
  {
    id: 5,
    category: "bathroom",
    title: "Guest Bathroom Remodel",
    description: "Elegant bathroom with modern fixtures and tile work",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
  },
  {
    id: 6,
    category: "basement",
    title: "Finished Basement",
    description: "Entertainment space with home theater and bar area",
    image: "https://images.unsplash.com/photo-1574643156929-51fa098b0394?w=800&q=80",
  },
];

const categories = ["all", "kitchen", "bathroom", "living", "basement"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">
            Explore our recent projects and see the quality of our work
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-secondary text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
