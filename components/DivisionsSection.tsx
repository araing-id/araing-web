"use client";

import { motion } from "framer-motion";
import { Camera, Code, Stethoscope, Scale, Building } from "lucide-react";
import { useState } from "react";

const divisions = [
  {
    id: "media",
    title: "Digital Media & Creative Hub",
    description: "Bergerak di bidang produksi konten, media sosial, dan penyiaran digital.",
    icon: <Camera className="w-10 h-10" />,
    color: "from-pink-500 to-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    id: "tech",
    title: "Tech-X & Digital Transformation",
    description: "Berfokus pada pengembangan perangkat lunak, sistem IT, dan solusi teknologi modern.",
    icon: <Code className="w-10 h-10" />,
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/10",
  },
  {
    id: "health",
    title: "Healthcare & Wellness Initiative",
    description: "Menangani dampak sosial di bidang kesehatan, pelayanan medis, dan kesejahteraan masyarakat.",
    icon: <Stethoscope className="w-10 h-10" />,
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-500/10",
  },
  {
    id: "legal",
    title: "Legal & Compliance Advisory",
    description: "Menyediakan advokasi, konsultasi hukum korporat, dan kepatuhan perundang-undangan.",
    icon: <Scale className="w-10 h-10" />,
    color: "from-purple-500 to-indigo-500",
    bg: "bg-purple-500/10",
  },
  {
    id: "infra",
    title: "Infrastructure & Sustainable Engineering",
    description: "Mengelola proyek pembangunan fisik, desain arsitektur, dan rekayasa infrastruktur yang ramah lingkungan.",
    icon: <Building className="w-10 h-10" />,
    color: "from-amber-500 to-orange-500",
    bg: "bg-orange-500/10",
  }
];

export default function DivisionsSection() {
  const [activeTab, setActiveTab] = useState(divisions[0].id);

  return (
    <section id="divisions" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Sektor & Ekosistem</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Mengadopsi model multi-sektor yang saling terintegrasi dalam sebuah ekosistem kolaboratif untuk menciptakan dampak komersial dan sosial.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Tabs Sidebar */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            {divisions.map((div) => {
              const isActive = activeTab === div.id;
              return (
                <button
                  key={div.id}
                  onClick={() => setActiveTab(div.id)}
                  className={`relative p-5 rounded-2xl text-left transition-all duration-300 ${
                    isActive 
                      ? "bg-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-white/20" 
                      : "hover:bg-white/5 border-transparent opacity-60 hover:opacity-100"
                  } border`}
                >
                  <div className="flex items-center space-x-4 relative z-10">
                    <div className={`p-2 rounded-xl bg-gradient-to-br ${div.color} text-white shadow-lg`}>
                      {div.icon}
                    </div>
                    <h3 className="font-bold text-white text-lg">{div.title}</h3>
                  </div>
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 border border-white/20 rounded-2xl bg-white/5"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-7 h-full min-h-[400px]">
            {divisions.map((div) => (
              div.id === activeTab && (
                <motion.div
                  key={div.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className={`h-full rounded-3xl p-8 md:p-12 glass flex flex-col justify-center relative overflow-hidden backdrop-blur-2xl ${div.bg}`}
                >
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${div.color} opacity-20 rounded-full blur-[100px]`} />
                  <div className="relative z-10 space-y-6">
                    <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${div.color} text-white shadow-xl mb-4`}>
                      {div.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-white leading-tight">
                      {div.title}
                    </h3>
                    <p className="text-xl text-slate-300 leading-relaxed">
                      {div.description}
                    </p>
                    <div className="pt-8">
                      <button className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors font-medium">
                        Pelajari Selengkapnya
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
