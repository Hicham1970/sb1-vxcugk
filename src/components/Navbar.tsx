import React from "react";
import { Anchor, Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Anchor className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">
              MarineScope Surveys
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              onClick={scrollToTop}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Services
            </a>
            <a
              href="#work"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Contact
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
              aria-label="Toggle menu"
              title="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              onClick={scrollToTop}
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Services
            </a>
            <a
              href="#work"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
