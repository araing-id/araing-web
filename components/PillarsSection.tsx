"use client";

import { motion } from "framer-motion";
import { DollarSign, Network, Heart, Lightbulb, ShieldCheck } from "lucide-react";

const pillars = [
  {
    title: "Kemandirian Finansial",
    description: "Menciptakan model bisnis yang menguntungkan dan berkelanjutan bagi perusahaan dan seluruh anggota.",
    icon: <DollarSign className="w-8 h-8 text-green-400" />,
    color: "group-hover:bg-green-500/10",
    border: "group-hover:border-green-500/30"
  },
  {
    title: "Sinergi Lintas Sektor",
    description: "Menghubungkan berbagai keahlian industri ke dalam satu ekosistem yang saling melengkapi.",
    icon: <Network className="w-8 h-8 text-blue-400" />,
    color: "group-hover:bg-blue-500/10",
    border: "group-hover:border-blue-500/30"
  },
  {
    title: "Dampak Sosial Terukur",
    description: "Setiap lini bisnis wajib memiliki turunan program atau nilai yang bermanfaat langsung bagi masyarakat.",
    icon: <Heart className="w-8 h-8 text-red-400" />,
    color: "group-hover:bg-red-500/10",
    border: "group-hover:border-red-500/30"
  },
  {
    title: "Inovasi Adaptif",
    description: "Terus berkembang mengikuti arus digitalisasi dan kebutuhan peradaban modern.",
    icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
    color: "group-hover:bg-yellow-500/10",
    border: "group-hover:border-yellow-500/30"
  },
  {
    title: "Integritas & Persaudaraan",
    description: "Menjaga etika profesionalisme berlandaskan rasa saling percaya dan menghargai.",
    icon: <ShieldCheck className="w-8 h-8 text-purple-400" />,
    color: "group-hover:bg-purple-500/10",
    border: "group-hover:border-purple-500/30"
  }
];

export default function PillarsSection() {
  return (
    <section id="pillars" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-900/50 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-blue-400 font-semibold tracking-wide uppercase text-sm">Pasal 7</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">5 Pilar Organisasi</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Arus Liar Inisiatif Group ditopang oleh pilar-pilar utama yang menjadi pondasi setiap pergerakan kami.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group glass p-8 rounded-3xl border border-white/5 transition-all duration-300 ${pillar.border} hover:scale-[1.02]`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 transition-colors duration-300 ${pillar.color}`}>
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
