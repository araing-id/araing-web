"use client";

import { motion } from "framer-motion";

export default function WhyUsModern() {
  const missions = [
    { title: "PORTFOLIO & STANDAR TINGGI", desc: "Membangun portofolio karya berstandar industri di tiap sektor keahlian." },
    { title: "KOMERSIAL & SOSIAL", desc: "Penetrasi pasar yang menyeimbangkan profitabilitas dan kebermanfaatan sosial." },
    { title: "TATA KELOLA ADAPTIF", desc: "Transparan, terstruktur, bervaluasi tinggi untuk menjamin kemandirian anggota." }
  ];

  return (
    <div className="h-full bg-[#111111] rounded-3xl p-8 lg:p-12 border border-[#333] relative overflow-hidden flex flex-col justify-between">
      {/* Background glow */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#c084fc]/10 blur-[80px] rounded-full pointer-events-none"></div>

      <div>
        <p className="text-[#c084fc] text-sm uppercase tracking-widest font-semibold mb-2">Visi & Misi</p>
        <h2 className="text-3xl md:text-4xl font-black text-white italic uppercase tracking-tighter mb-6">
          Why You Should<br />
          <span className="text-[#c084fc]">Work With Us</span>
        </h2>
        
        <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">
          Menjadi ekosistem kolaboratif lintas sektor yang mendominasi konversi pasar, 
          memastikan setiap anggota mencapai puncak kesuksesan, dan mewariskan rekam jejak untuk kemajuan peradaban.
        </p>
      </div>

      <div className="space-y-4">
        {missions.map((mission, idx) => (
          <div key={idx} className="flex flex-col space-y-1">
            <div className="px-6 py-3 bg-[#1A1A1A] border border-white/10 rounded-full text-center hover:bg-[#c084fc]/10 hover:border-[#c084fc]/30 transition-colors cursor-default">
              <span className="text-white font-bold text-sm tracking-wide">{mission.title}</span>
            </div>
            {/* Optional: we could show the description on hover, but for now we keep it clean like the pills in the image */}
          </div>
        ))}
      </div>
    </div>
  );
}
