"use client";

import { motion } from "framer-motion";

export default function TeamModern() {
  const team = [
    { role: "Komisaris", name: "Decky Firmansyah", img: "https://i.pravatar.cc/300?img=11" },
    { role: "CEO", name: "Priyambodo Pujo Sulaksono", img: "https://i.pravatar.cc/300?img=33" },
    { role: "COO", name: "Hafizh Alief Alamsyah", img: "https://i.pravatar.cc/300?img=14" },
    { role: "CMO", name: "Bella Wyndara", img: "https://i.pravatar.cc/300?img=5" },
    { role: "CFO", name: "Salsabilla Adfanisa", img: "https://i.pravatar.cc/300?img=47" },
    { role: "CSO", name: "Shabila Pridadindya", img: "https://i.pravatar.cc/300?img=9" },
    { role: "CTO", name: "Ferdiansyah Nugraha", img: "https://i.pravatar.cc/300?img=60" }
  ];

  return (
    <div className="h-full bg-[#1A1A1A] rounded-3xl p-8 lg:p-12 border border-[#333] relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#c084fc]/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 relative z-10 gap-4">
        <div>
          <p className="text-[#c084fc] text-sm uppercase tracking-widest font-semibold mb-2">Leadership</p>
          <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
            Struktur <br className="hidden md:block" /> Organisasi
          </h2>
        </div>
        <p className="text-white/50 text-sm max-w-xs md:text-right">
          Dipimpin oleh para profesional berpengalaman yang mengutamakan nilai integritas dan persaudaraan.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 relative z-10">
        {team.map((member, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center text-center space-y-3 group/member cursor-pointer"
          >
            <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 transition-colors duration-300 ${idx < 2 ? 'border-[#c084fc]' : 'border-white/20 group-hover/member:border-[#c084fc]/50'}`}>
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-full h-full object-cover grayscale opacity-80 group-hover/member:grayscale-0 group-hover/member:opacity-100 transition-all duration-500"
              />
            </div>
            <div>
              <h3 className="text-white font-bold text-xs md:text-sm leading-tight">{member.name}</h3>
              <p className="text-[#c084fc] text-[10px] md:text-xs font-semibold uppercase tracking-wider mt-1">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
