import { FaPhoneAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary to-gray-800 text-white pt-20">
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Transform Your Home Into Your Dream Space
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Professional remodeling services with 20+ years of experience. We bring your vision to life with quality craftsmanship and attention to detail.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary">
            Start Your Project
          </a>
          <a href="#portfolio" className="btn-secondary">
            View Our Work
          </a>
        </div>
        <div className="mt-12 flex items-center justify-center gap-2 text-lg">
          <FaPhoneAlt className="text-secondary" />
          <span>Call us today: <strong className="text-accent">(555) 123-4567</strong></span>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
