"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Beranda", href: "#hero" },
    { label: "Tentang", href: "#about" },
    { label: "Pilar", href: "#pillars" },
    { label: "Sektor", href: "#divisions" },
    { label: "Tim", href: "#team" },
    { label: "Milestone", href: "#roadmap" },
    { label: "Kontak", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`p-4 rounded-2xl flex items-center justify-between transition-colors ${isScrolled ? "bg-[#1A1A1A]/90 backdrop-blur-md border border-white/10 shadow-lg" : ""}`}>
          
          <a href="#" className="font-bold text-2xl tracking-tighter">
            <span className="text-white">araing</span>
            <span className="text-[#c084fc]">.id</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-5 py-2 bg-[#c084fc] hover:bg-[#a64ca6] text-white rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(192,132,252,0.3)]"
            >
              Hubungi Kami
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 mt-2 mx-6 rounded-2xl overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
