"use client";

import { motion } from "framer-motion";

export default function TeamModern() {
  const team = [
    { role: "Komisaris", name: "Decky Firmansyah", img: null },
    { role: "CEO", name: "Priyambodo Pujo Sulaksono", img: null },
    { role: "COO", name: "Hafizh Alief Alamsyah", img: null },
    { role: "CMO", name: "Bella Wyndara", img: null },
    { role: "CFO", name: "Salsabilla Adfanisa", img: null },
    { role: "CSO", name: "Shabila Pridadindya", img: null },
    { role: "CTO", name: "Ferdiansyah Nugraha", img: null }
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 relative z-10 items-stretch">
        {team.map((member, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center text-center group/member cursor-pointer h-full"
          >
            <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 transition-colors duration-300 shrink-0 mb-3 ${idx < 2 ? 'border-[#c084fc]' : 'border-white/20 group-hover/member:border-[#c084fc]/50'}`}>
              {member.img ? (
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover/member:grayscale-0 group-hover/member:opacity-100 transition-all duration-500"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#111] to-[#1a1a1a] flex flex-col items-center justify-center relative group-hover/member:from-[#1a1a1a] group-hover/member:to-[#222] transition-colors duration-500">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#c084fc]/10 blur-[15px] rounded-full group-hover/member:bg-[#c084fc]/30 group-hover/member:scale-150 transition-all duration-700"></div>
                  <span className="text-3xl font-black text-white/5 tracking-tighter absolute select-none group-hover/member:scale-110 group-hover/member:text-white/10 transition-all duration-500">
                    {getInitials(member.name)}
                  </span>
                  <span className="relative z-10 text-[#c084fc] text-[9px] font-bold tracking-[0.2em] uppercase mt-2 opacity-80 group-hover/member:opacity-100">Soon</span>
                </div>
              )}
            </div>
            <div className="flex flex-col flex-grow items-center w-full">
              <h3 className="text-white font-bold text-xs md:text-sm leading-tight">{member.name}</h3>
              <p className="text-[#c084fc] text-[10px] md:text-xs font-semibold uppercase tracking-wider mt-auto pt-2">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex justify-center relative z-10">
        <a 
          href="/team" 
          className="px-6 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
        >
          Lihat Seluruh Tim
        </a>
      </div>
    </div>
  );
}
