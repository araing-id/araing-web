"use client";

import { motion } from "framer-motion";
import { DollarSign, Network, Heart, Lightbulb, ShieldCheck } from "lucide-react";

export default function PillarsModern() {
  const pillars = [
    { title: "Kemandirian Finansial", icon: <DollarSign className="w-5 h-5 text-[#c084fc]" /> },
    { title: "Sinergi Lintas Sektor", icon: <Network className="w-5 h-5 text-[#c084fc]" /> },
    { title: "Dampak Sosial", icon: <Heart className="w-5 h-5 text-[#c084fc]" /> },
    { title: "Inovasi Adaptif", icon: <Lightbulb className="w-5 h-5 text-[#c084fc]" /> },
    { title: "Integritas & Persaudaraan", icon: <ShieldCheck className="w-5 h-5 text-[#c084fc]" /> }
  ];

  return (
    <div className="h-full bg-[#111111] rounded-3xl p-8 lg:p-12 border border-[#333] relative overflow-hidden flex flex-col justify-between group">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#c084fc]/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-[#c084fc]/15 transition-colors duration-500"></div>

      <div className="mb-8 relative z-10">
        <p className="text-[#c084fc] text-sm uppercase tracking-widest font-semibold mb-2">Pasal 7</p>
        <h2 className="text-3xl md:text-4xl font-black text-white italic uppercase tracking-tighter mb-4">
          5 Pilar <br/> Organisasi
        </h2>
        <p className="text-white/50 text-sm">
          Pondasi utama yang menopang setiap pergerakan kami.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
        {pillars.map((pillar, idx) => (
          <motion.div 
            key={idx} 
            whileHover={{ scale: 1.05 }}
            className={`flex items-center space-x-3 p-4 bg-[#1A1A1A] border border-white/5 rounded-2xl hover:border-[#c084fc]/50 hover:bg-[#c084fc]/10 transition-colors cursor-default ${idx === 4 ? 'sm:col-span-2 justify-center' : ''}`}
          >
            <div className="w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center shrink-0">
              {pillar.icon}
            </div>
            <span className="text-white font-medium text-sm">{pillar.title}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
