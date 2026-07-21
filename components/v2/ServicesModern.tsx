"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Camera, Code, Stethoscope, Scale, Building } from "lucide-react";

export default function ServicesModern() {
  const services = [
    {
      id: "media",
      title: "Digital Media",
      desc: "Produksi konten, media sosial, dan penyiaran digital.",
      icon: <Camera className="w-10 h-10 text-white/80" />,
      color: "rgba(244, 63, 94, 0.4)" // rose
    },
    {
      id: "tech",
      title: "Tech-X & Transformasi",
      desc: "Pengembangan perangkat lunak & solusi IT.",
      icon: <Code className="w-10 h-10 text-white/80" />,
      color: "rgba(6, 182, 212, 0.4)" // cyan
    },
    {
      id: "health",
      title: "Healthcare",
      desc: "Pelayanan medis & kesejahteraan masyarakat.",
      icon: <Stethoscope className="w-10 h-10 text-white/80" />,
      color: "rgba(16, 185, 129, 0.4)" // emerald
    },
    {
      id: "legal",
      title: "Legal Advisory",
      desc: "Konsultasi hukum korporat & kepatuhan.",
      icon: <Scale className="w-10 h-10 text-white/80" />,
      color: "rgba(139, 92, 246, 0.4)" // violet
    },
    {
      id: "infra",
      title: "Infrastructure",
      desc: "Rekayasa infrastruktur ramah lingkungan.",
      icon: <Building className="w-10 h-10 text-white/80" />,
      color: "rgba(245, 158, 11, 0.4)" // amber
    },
  ];

  const [activeTab, setActiveTab] = useState(services[0].id);

  const activeService = services.find(s => s.id === activeTab) || services[0];

  return (
    <div className="h-full bg-[#1A1A1A] rounded-3xl p-8 lg:p-12 border border-[#333] relative overflow-hidden group">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#a64ca6]/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-start mb-4 text-xs text-white/50 tracking-widest font-mono uppercase">
          <span>Sektor</span>
          <span>Ekosistem</span>
          <span>Kolaborasi</span>
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-black text-[#c084fc] uppercase tracking-tighter">
            Our Divisions
          </h2>
        </div>

        {/* Interactive Center element */}
        <div className="flex-grow flex flex-col items-center justify-center py-6 relative h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 3 }}
              exit={{ opacity: 0, scale: 0.9, rotate: -3 }}
              transition={{ duration: 0.3 }}
              className="w-56 h-64 bg-white p-3 shadow-2xl relative"
            >
              <div className="w-full h-full bg-[#111111] border border-gray-200 flex flex-col items-center justify-center relative overflow-hidden p-4 text-center">
                {/* Dynamic abstract background for the polaroid */}
                <div 
                  className="absolute inset-0 opacity-50 blur-xl" 
                  style={{ background: `radial-gradient(circle at 50% 50%, ${activeService.color}, transparent 70%)` }}
                ></div>
                
                <div className="relative z-10 flex flex-col items-center space-y-4">
                  {activeService.icon}
                  <h3 className="text-white font-bold text-lg leading-tight uppercase tracking-wide">
                    {activeService.title}
                  </h3>
                  <p className="text-white/60 text-xs line-clamp-3">
                    {activeService.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pills / Services List (Interactive) */}
        <div className="mt-8">
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((service) => {
              const isActive = activeTab === service.id;
              return (
                <button 
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#c084fc] border-[#c084fc] text-white shadow-[0_0_15px_rgba(192,132,252,0.4)] scale-105" 
                      : "bg-transparent border-white/20 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {service.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
