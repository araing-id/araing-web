"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";

const milestones = [
  {
    year: "Q1 2026",
    title: "Inisiasi & Konsolidasi",
    description: "Pembentukan pondasi organisasi, legalitas, dan penghimpunan talenta kunci ke dalam ekosistem Arus Liar.",
    status: "completed"
  },
  {
    year: "Q2 2026",
    title: "Peluncuran Portofolio Awal",
    description: "Rilis proyek-proyek perdana dari 5 pilar sektor, menetapkan standar kualitas dan penetrasi pasar awal.",
    status: "in-progress"
  },
  {
    year: "Q3 2026",
    title: "Ekspansi Ekosistem",
    description: "Membuka kolaborasi dengan mitra eksternal, invasi pasar digital yang lebih luas, dan program dampak sosial regional.",
    status: "upcoming"
  },
  {
    year: "Q4 2026",
    title: "Dominasi Sektoral",
    description: "Memimpin pasar konversi pada masing-masing sektor sambil membuktikan rekam jejak (legacy) sosial yang terukur.",
    status: "upcoming"
  }
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/30 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Rencana Strategis</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Peta jalan untuk mewujudkan kemandirian finansial dan dampak sosial terukur secara bertahap.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-700/50 pl-8 md:pl-16 space-y-16">
          {milestones.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:-left-[73px] bg-[#020617] p-1">
                {item.status === "completed" ? (
                  <CheckCircle2 className="w-8 h-8 text-blue-500 bg-blue-500/20 rounded-full" />
                ) : item.status === "in-progress" ? (
                  <div className="w-8 h-8 rounded-full border-4 border-blue-500 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                  </div>
                ) : (
                  <Circle className="w-8 h-8 text-slate-600" />
                )}
              </div>

              <div className={`glass p-8 rounded-3xl border ${item.status === 'in-progress' ? 'border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.15)]' : 'border-white/5'} hover:scale-[1.02] transition-transform duration-300`}>
                <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 ${
                  item.status === 'completed' ? 'bg-green-500/20 text-green-400' : 
                  item.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-800 text-slate-400'
                }`}>
                  {item.year}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
