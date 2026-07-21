"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactModern() {
  return (
    <div className="h-full bg-[#1A1A1A] rounded-3xl p-8 lg:p-12 border border-[#333] flex flex-col items-center justify-center text-center group">
      <h2 className="text-3xl md:text-5xl font-black text-[#c084fc] uppercase tracking-tighter mb-6">
        Mari Berkolaborasi
      </h2>

      <div className="w-full flex justify-center mb-8">
        <div className="px-6 py-2 border rounded-full border-white/30 text-white/80 text-sm tracking-widest uppercase flex items-center justify-center group-hover:border-[#c084fc]/50 transition-colors">
          Jadilah Bagian Dari Revolusi
        </div>
      </div>

      <div className="flex flex-col w-full space-y-4 mb-8">
        <div className="flex items-center space-x-3 text-white/70 justify-center">
          <Mail className="w-4 h-4 text-[#c084fc]" />
          <span className="text-sm">info@araing.id</span>
        </div>
        <div className="flex items-center space-x-3 text-white/70 justify-center">
          <Phone className="w-4 h-4 text-[#c084fc]" />
          <span className="text-sm">+62 857 9346 8966</span>
        </div>
        <div className="flex items-center space-x-3 text-white/70 justify-center">
          <MapPin className="w-4 h-4 text-[#c084fc]" />
          <span className="text-sm">Cimahi, Indonesia</span>
        </div>
      </div>

      <button className="px-8 py-3 bg-[#c084fc] hover:bg-[#a64ca6] text-white rounded-full font-bold uppercase tracking-wider text-sm transition-colors flex items-center justify-center w-full">
        Hubungi Kami
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  );
}
