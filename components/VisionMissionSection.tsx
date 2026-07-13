"use client";

import { motion } from "framer-motion";

export default function VisionMissionSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24"
        >
          {/* Visi */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -left-6 md:-left-12 top-0 text-7xl font-bold text-slate-800/30 -z-10 select-none">
              Pasal 5
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Visi</h2>
            <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]" />
              <p className="text-xl md:text-2xl leading-relaxed text-slate-300">
                Menjadi perusahaan induk dan ekosistem kolaboratif lintas sektor terkemuka yang tidak hanya mendominasi konversi pasar, tetapi juga memastikan setiap anggotanya mencapai puncak kesuksesan finansial dan keahlian profesi. Hal ini bertujuan untuk mewariskan rekam jejak (legacy) serta dampak sosial yang konkret bagi kemajuan peradaban masyarakat, baik di dunia nyata maupun ranah digital.
              </p>
            </div>
          </motion.div>

          {/* Misi */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -left-6 md:-left-12 top-0 text-7xl font-bold text-slate-800/30 -z-10 select-none">
              Pasal 6
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-right">Misi</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Membangun dan mengembangkan portofolio karya berstandar industri tinggi di masing-masing sektor keahlian anggota.",
                "Melakukan penetrasi dan invasi pasar secara terukur dan strategis, dengan menyeimbangkan nilai komersial (profitabilitas) dan kebermanfaatan sosial (dampak).",
                "Menerapkan tata kelola kelembagaan yang transparan, terstruktur, adaptif, dan bervaluasi tinggi untuk menjamin kemandirian finansial seluruh anggota."
              ].map((misi, index) => (
                <div key={index} className="glass-card p-8 rounded-3xl flex flex-col items-start space-y-4 hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {misi}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
