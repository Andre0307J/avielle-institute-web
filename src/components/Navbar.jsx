import React, { useState, useEffect } from "react";
import { Menu, X, Heart, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavImage from "/assets/avielle-institute-blue.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    {name: "Become An Instructor", href: "#instructors" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? "border-b border-gray-200 shadow-sm" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img src={NavImage} alt="Avielle Institute Logo" className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">
                Avielle Institute.
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button
              variant="default"
              size="sm"
              className="mt-4 cursor-pointer bg-gradient-to-r from-[#715CDE] to-[#B1A5FE] text-white font-[600] w-28 h-12 rounded-[23px] transition ease-in-out duration-400 text-[16px] filter drop-shadow-[0_5px_8px_#B1A5FE] hover:from-[#9393f5] hover:to-[b1a5f8]"
              onClick={() => (window.location.href = "#")}
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
