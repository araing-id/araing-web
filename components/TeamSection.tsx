"use client";

import { motion } from "framer-motion";

const team = [
  { role: "Komisaris", name: "Decky Firmansyah", img: "https://i.pravatar.cc/300?img=11" },
  { role: "CEO", name: "Priyambodo Pujo Sulaksono", img: "https://i.pravatar.cc/300?img=33" },
  { role: "COO", name: "Hafizh Alief Alamsyah", img: "https://i.pravatar.cc/300?img=14" },
  { role: "CMO", name: "Bella Wyndara", img: "https://i.pravatar.cc/300?img=5" },
  { role: "CFO", name: "Salsabilla Adfanisa", img: "https://i.pravatar.cc/300?img=47" },
  { role: "CSO", name: "Shabila Pridadindya", img: "https://i.pravatar.cc/300?img=9" },
  { role: "CTO", name: "Ferdiansyah Nugraha", img: "https://i.pravatar.cc/300?img=60" }
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Struktur Organisasi</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Dipimpin oleh para profesional berpengalaman yang mengutamakan nilai integritas dan persaudaraan.
          </p>
        </div>

        {/* Highlight Komisaris & CEO differently */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {team.slice(0, 2).map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative w-72"
            >
              <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-xl group-hover:bg-blue-500/40 transition-colors duration-500 opacity-0 group-hover:opacity-100" />
              <div className="glass-card p-6 rounded-3xl flex flex-col items-center text-center relative z-10 border border-white/10 hover:border-blue-500/50 transition-colors">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-slate-800">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-blue-400 font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The rest of the C-Levels */}
        <div className="flex flex-wrap justify-center gap-6">
          {team.slice(2).map((member, idx) => (
            <motion.div 
              key={idx + 2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className="group w-48"
            >
              <div className="glass p-5 rounded-3xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-slate-700">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1 leading-tight">{member.name}</h3>
                <p className="text-slate-400 text-sm font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
