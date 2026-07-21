"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function HeroModern() {
  return (
    <div className="relative h-[600px] rounded-3xl overflow-hidden bg-[#1A1A1A] group">
      {/* Background Image / Overlay */}
      {/* In a real scenario, you'd place a highly aesthetic background image here.
          For now, we use a sleek dark gradient with a subtle purple glow to mimic the vibe. */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#1A1A1A] to-[#2B1B36] opacity-90 z-0"></div>
      
      {/* Optional: Add a subtle grain or texture if you have one, or just the glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(166,76,166,0.1),transparent_70%)] z-0"></div>

      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
        
        {/* Top Header / Pill */}
        <div className="flex justify-between items-start">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#c084fc] animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider text-white/80 uppercase">Est. 2026</span>
          </div>
          
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#c084fc] text-white">
            <span className="text-xs font-bold tracking-widest uppercase">Ecosystem</span>
          </div>
        </div>

        {/* Center Content */}
        <div className="flex-grow flex flex-col items-center justify-center text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-[#c084fc] font-medium tracking-widest uppercase text-sm mb-4">Aesthetic & Modern</h3>
            
            {/* The main striking typography, similar to "Social Media Marketing" */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter">
              Arus Liar<br />
              <span className="font-serif italic font-medium text-white/90">Inisiatif Group</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/70 max-w-2xl mx-auto text-sm md:text-base lg:text-lg mt-8 font-medium leading-relaxed"
          >
            "Menyadari sepenuhnya bahwa potensi kreativitas, solidaritas, dan kompetensi teknis dari dinamika sosial adalah modal dasar tak ternilai. Kami hadir sebagai entitas bisnis komersial yang menjunjung tinggi nilai profesionalisme tanpa sedikit pun menanggalkan semangat persaudaraan."
          </motion.p>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button className="px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors w-full sm:w-auto">
            100+ Projects & Initiatives
          </button>
          
          <button className="group/btn px-6 py-3 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors flex items-center justify-center w-full sm:w-auto gap-2">
            Lihat Portofolio
            <ArrowUpRight className="w-4 h-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
        
      </div>
    </div>
  );
}
