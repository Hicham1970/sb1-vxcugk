import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-gray-900 min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/29181857/pexels-photo-29181857/free-photo-of-remorqueurs-amarres-au-port-de-hambourg-allemagne.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Container Port"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Expert Marine Surveying Services
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional vessel inspections, draft surveys, and marine
            consultancy services worldwide. Trust our experienced team for
            accurate assessments and detailed reporting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </div>
  );
}
