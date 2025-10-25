import { FaClipboardList, FaPencilRuler, FaHardHat, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    icon: FaClipboardList,
    title: "Consultation",
    description: "We meet with you to understand your vision, needs, and budget for your remodeling project.",
  },
  {
    icon: FaPencilRuler,
    title: "Design & Planning",
    description: "Our team creates detailed plans and 3D renderings to bring your ideas to life.",
  },
  {
    icon: FaHardHat,
    title: "Construction",
    description: "Expert craftsmen execute the project with precision, keeping you informed every step of the way.",
  },
  {
    icon: FaCheckCircle,
    title: "Final Walkthrough",
    description: "We ensure every detail meets your expectations and our quality standards before completion.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12">
            A streamlined approach to make your remodeling experience stress-free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="flex justify-center mb-6">
                <div className="bg-secondary rounded-full p-6 shadow-xl">
                  <step.icon className="text-5xl text-white" />
                </div>
              </div>
              <div className="absolute top-12 left-1/2 transform translate-x-8 hidden lg:block">
                {index < steps.length - 1 && (
                  <div className="w-32 h-0.5 bg-accent"></div>
                )}
              </div>
              <div className="relative z-10">
                <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 font-bold">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
