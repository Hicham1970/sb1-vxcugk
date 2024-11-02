// React import removed as it's not used in this file
import {
  Anchor,
  Ship,
  Compass,
  FileCheck,
  Mail,
  Phone,
  MapPin,
  Scale,
  Ruler,
  Shield,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceCard from "./components/ServiceCard";
import TestimonialCard from "./components/TestimonialCard";
import ContactForm from "./components/ContactForm";

function App() {
  const services = [
    {
      icon: Scale,
      title: "Draft Surveys",
      description:
        "Precise cargo weight determination through draft measurements, essential for commercial operations and compliance.",
    },
    {
      icon: Ship,
      title: "On/Off Hire Surveys",
      description:
        "Detailed vessel condition assessment at the beginning and end of charter periods.",
    },
    {
      icon: Shield,
      title: "P&I Surveys",
      description:
        "Protection & Indemnity inspections ensuring vessel compliance with insurance requirements.",
    },
    {
      icon: Ruler,
      title: "Bunker Surveys",
      description:
        "Accurate measurement of fuel quantity during bunkering operations.",
    },
    {
      icon: Compass,
      title: "Condition Surveys",
      description:
        "Comprehensive vessel condition assessment for buyers, sellers, or financial institutions.",
    },
    {
      icon: FileCheck,
      title: "Damage Surveys",
      description:
        "Expert assessment of vessel or cargo damage for insurance and claims purposes.",
    },
  ];

  const testimonials = [
    {
      name: "Captain Michael Chen",
      role: "Vessel Manager",
      content:
        "The attention to detail in their draft surveys is exceptional. Highly recommended for their professionalism.",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Sarah Martinez",
      role: "Charter Operations Manager",
      content:
        "Their on/off hire surveys have saved us countless disputes. Thorough and reliable service.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
    },
    {
      name: "James Wilson",
      role: "P&I Club Representative",
      content:
        "Outstanding technical knowledge and detailed reporting. A trusted partner for our surveys.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Hero />

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive marine surveying solutions for all your vessel needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                Icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Featured Work
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group">
              <img
                src="https://media.istockphoto.com/id/1712993468/fr/photo/officier-m%C3%A9canicien-enregistrant-les-param%C3%A8tres-de-fonctionnement-du-moteur-principal.webp?a=1&b=1&s=612x612&w=0&k=20&c=FL48gdd0fKnVaqM4aC4wkGvC2E80A9QrcnrkHdc0wR8="
                alt="Draft Survey"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white text-lg font-semibold px-4 text-center">
                  Inspection in Progress
                </p>
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1524522173746-f628baad3644?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVsa2VyJTIwY2FyZ298ZW58MHx8MHx8fDA%3D"
                alt="Vessel Inspection"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white text-lg font-semibold px-4 text-center">
                  On/Off-Hire Vessel Inspection
                </p>
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://plus.unsplash.com/premium_photo-1661924352987-fbf154846fb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGFua2Vyc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Loading Survey"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white text-lg font-semibold px-4 text-center">
                  Damage Assessment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the component remains the same */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Client Testimonials
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Us
              </h2>
              <p className="text-gray-600 mb-8">
                Get in touch for inquiries or to schedule an inspection. We'll
                respond within 24 hours.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-4" />
                  <span className="text-gray-700">(212) 656-275824</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-4" />
                  <span className="text-gray-700">h.garoum@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                  <span className="text-gray-700">
                    123 Harbor Drive, Marina Bay, Casablanca 27009
                  </span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Anchor className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">
                  MarineScope Surveys
                </span>
              </div>
              <p className="text-gray-400">
                Professional marine surveying services with global reach.For the
                moment this is only for a personal learning project, but I'm
                planning to make it a business in the future. i am not trying to
                use this for commercial purposes because i still working for SGS
                as an employee...😘😎💨
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#work"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Work
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Certifications</h3>
              <ul className="space-y-2 text-gray-400">
                <li>IIMS Certified</li>
                <li>Lloyd's Register Approved</li>
                <li>SAMS Accredited</li>
                <li>ISO 9001:2015</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} MarineScope Surveys. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
