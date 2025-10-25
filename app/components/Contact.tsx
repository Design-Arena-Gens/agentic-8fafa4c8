"use client";

import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to start your remodeling project? Contact us today for a free consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-primary mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary text-white p-4 rounded-full">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary mb-1">Phone</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                  <p className="text-gray-600">(555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary text-white p-4 rounded-full">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary mb-1">Email</h4>
                  <p className="text-gray-600">info@premierremodeling.com</p>
                  <p className="text-gray-600">quotes@premierremodeling.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary text-white p-4 rounded-full">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary mb-1">Address</h4>
                  <p className="text-gray-600">123 Renovation Lane</p>
                  <p className="text-gray-600">Denver, CO 80202</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary text-white p-4 rounded-full">
                  <FaClock className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary mb-1">Business Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-primary mb-6">Request a Quote</h3>

            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Success!</strong>
                <span className="block sm:inline"> Your message has been sent. We&apos;ll be in touch soon!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  >
                    <option value="">Select a service</option>
                    <option value="kitchen">Kitchen Remodeling</option>
                    <option value="bathroom">Bathroom Renovation</option>
                    <option value="addition">Home Addition</option>
                    <option value="painting">Interior Painting</option>
                    <option value="basement">Basement Finishing</option>
                    <option value="whole">Whole Home Remodeling</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
