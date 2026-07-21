"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, Sparkles } from "lucide-react";

export default function ContactModern() {
  return (
    <div className="h-full bg-[#111111] rounded-3xl p-8 lg:p-12 border border-white/10 relative overflow-hidden flex flex-col items-center justify-center text-center group transition-all duration-500 hover:border-[#c084fc]/30">
      
      {/* Background Animated Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#c084fc]/20 blur-[100px] rounded-full pointer-events-none"
      ></motion.div>

      {/* Title Section */}
      <div className="relative z-10 mb-10">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-[#c084fc]/50 drop-shadow-[0_0_15px_rgba(192,132,252,0.3)]">
          Mari <br/> Berkolaborasi
        </h2>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="inline-flex px-8 py-3 rounded-full border border-[#c084fc]/40 bg-[#c084fc]/10 text-[#c084fc] text-xs font-bold tracking-widest uppercase items-center gap-2 shadow-[0_0_15px_rgba(192,132,252,0.2)]"
        >
          <Sparkles className="w-4 h-4" />
          Jadilah Bagian Dari Revolusi
        </motion.div>
      </div>

      {/* Contact Info (Sleek Glass Badges) */}
      <div className="flex flex-col w-full space-y-4 mb-12 relative z-10">
        {[
          { icon: <Mail className="w-5 h-5 text-[#c084fc]" />, text: "contact@araing.id" },
          { icon: <Phone className="w-5 h-5 text-[#c084fc]" />, text: "+62 811 2233 4455" },
          { icon: <MapPin className="w-5 h-5 text-[#c084fc]" />, text: "Cimahi, Indonesia" }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ x: 5 }}
            className="flex items-center space-x-4 text-white/90 justify-center bg-white/5 py-4 px-6 rounded-2xl border border-white/5 hover:border-[#c084fc]/30 hover:bg-[#c084fc]/10 transition-colors w-full cursor-default"
          >
            {item.icon}
            <span className="text-sm font-medium">{item.text}</span>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button 
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="relative z-10 px-8 py-4 bg-white text-black hover:bg-[#c084fc] hover:text-white rounded-full font-black uppercase tracking-widest text-sm transition-all duration-300 flex items-center justify-center w-full shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_10px_30px_rgba(192,132,252,0.4)] group/btn"
      >
        Hubungi Kami
        <ArrowRight className="w-4 h-4 ml-3 group-hover/btn:translate-x-1 transition-transform" />
      </motion.button>

    </div>
  );
}
