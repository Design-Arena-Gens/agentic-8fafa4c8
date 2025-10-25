import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Premier <span className="text-secondary">Remodeling</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Transforming homes with quality craftsmanship and exceptional service for over 20 years. Your vision, our expertise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-secondary hover:bg-accent text-white p-3 rounded-full transition-colors duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-secondary hover:bg-accent text-white p-3 rounded-full transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="bg-secondary hover:bg-accent text-white p-3 rounded-full transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="bg-secondary hover:bg-accent text-white p-3 rounded-full transition-colors duration-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-secondary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-secondary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-secondary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-secondary transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-secondary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Kitchen Remodeling</li>
              <li className="text-gray-300">Bathroom Renovation</li>
              <li className="text-gray-300">Home Additions</li>
              <li className="text-gray-300">Interior Painting</li>
              <li className="text-gray-300">Basement Finishing</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {currentYear} Premier Remodeling. All rights reserved. | Made with <FaHeart className="inline text-red-500" /> by Premier Team
          </p>
        </div>
      </div>
    </footer>
  );
}
