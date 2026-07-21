"use client";

import { motion } from "framer-motion";

export default function RoadmapModern() {
  const milestones = [
    { year: "Q1 2026", title: "Inisiasi & Konsolidasi", desc: "Pembentukan pondasi organisasi, legalitas, dan penghimpunan talenta kunci.", active: true },
    { year: "Q2 2026", title: "Peluncuran Portofolio", desc: "Rilis proyek-proyek perdana dari 5 pilar sektor, menetapkan standar kualitas.", active: true },
    { year: "Q3 2026", title: "Ekspansi Ekosistem", desc: "Membuka kolaborasi dengan mitra eksternal & program dampak sosial regional.", active: false },
    { year: "Q4 2026", title: "Dominasi Sektoral", desc: "Memimpin pasar konversi sambil membuktikan rekam jejak sosial.", active: false }
  ];

  return (
    <div className="h-full bg-[#1A1A1A] rounded-3xl p-8 lg:p-12 border border-[#333] relative overflow-hidden group">
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#c084fc]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="mb-10 text-center relative z-10">
        <p className="text-[#c084fc] text-sm uppercase tracking-widest font-semibold mb-2">Roadmap</p>
        <h2 className="text-3xl md:text-4xl font-black text-white italic uppercase tracking-tighter">
          Rencana Strategis
        </h2>
      </div>

      <div className="relative border-l border-[#c084fc]/30 ml-4 md:ml-8 space-y-10 z-10">
        {milestones.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline node */}
            <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-[#1A1A1A] ${item.active ? 'bg-[#c084fc] shadow-[0_0_15px_rgba(192,132,252,0.8)]' : 'bg-[#555]'}`}>
              {item.active && (
                <div className="absolute inset-0 m-auto w-1 h-1 bg-white rounded-full animate-ping"></div>
              )}
            </div>

            <div className="group/item">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border ${item.active ? 'bg-[#c084fc]/10 border-[#c084fc]/50 text-[#c084fc]' : 'bg-white/5 border-white/10 text-white/40'}`}>
                {item.year}
              </span>
              <h3 className={`text-xl font-bold mb-2 transition-colors ${item.active ? 'text-white' : 'text-white/60 group-hover/item:text-white/80'}`}>
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
