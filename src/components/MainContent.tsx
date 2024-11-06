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
import Navbar from "./Navbar";
import Hero from "./Hero";
import ServiceCard from "./ServiceCard";
import TestimonialCard from "./TestimonialCard";
import ContactForm from "./ContactForm";
import React from "react";

export default function MainContent() {
  const services = [
    {
      icon: <Anchor className="w-6 h-6" />,
      title: "Service 1",
      description: "Description du service 1",
    },
    // ... autres services
  ];

  const testimonials = [
    {
      name: "Client 1",
      role: "Rôle 1",
      content: "Témoignage 1",
    },
    // ... autres témoignages
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />

      {/* Section Services */}
      <section id="services" className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              Icon={React.cloneElement(service.icon)}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      {/* Section Témoignages */}
      <section id="testimonials" className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Témoignages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Contactez-nous
          </h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
