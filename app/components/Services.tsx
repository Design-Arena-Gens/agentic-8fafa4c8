import { FaKitchenSet, FaBath, FaHammer, FaPaintRoller, FaCouch, FaHouseChimney } from "react-icons/fa6";

const services = [
  {
    icon: FaKitchenSet,
    title: "Kitchen Remodeling",
    description: "Custom kitchen designs with modern appliances, cabinetry, and countertops to create your perfect cooking space.",
  },
  {
    icon: FaBath,
    title: "Bathroom Renovation",
    description: "Luxury bathroom transformations including tile work, fixtures, and spa-like amenities.",
  },
  {
    icon: FaHammer,
    title: "Home Additions",
    description: "Expand your living space with expertly crafted room additions and extensions.",
  },
  {
    icon: FaPaintRoller,
    title: "Interior Painting",
    description: "Professional painting services to refresh and revitalize your home's interior.",
  },
  {
    icon: FaCouch,
    title: "Basement Finishing",
    description: "Transform your basement into a functional living area, entertainment space, or home office.",
  },
  {
    icon: FaHouseChimney,
    title: "Whole Home Remodeling",
    description: "Complete home renovations tailored to your lifestyle and design preferences.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive remodeling solutions for every room in your home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-2 transform transition-transform"
            >
              <div className="flex justify-center mb-6">
                <service.icon className="text-6xl text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
