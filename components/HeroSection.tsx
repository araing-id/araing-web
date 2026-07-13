"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-blue-500/30 w-fit">
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-slate-300">Ekosistem Kolaboratif Multi-Sektor</span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              Komersial & <br/>
              <span className="text-gradient">Dampak Sosial</span>.
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Menyadari sepenuhnya bahwa potensi kreativitas, solidaritas, dan kompetensi teknis dari dinamika sosial adalah modal dasar tak ternilai. Kami hadir sebagai entitas bisnis komersial yang menjunjung tinggi nilai profesionalisme tanpa sedikit pun menanggalkan semangat persaudaraan.
            </p>
            
            <p className="text-xl font-medium text-slate-200">
              Selamat datang di Arus Liar Inisiatif Group.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="#programs"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all flex items-center shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                Lihat Portofolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#about"
                className="px-8 py-4 bg-transparent hover:bg-white/5 border border-white/20 text-white rounded-full font-medium transition-all text-center"
              >
                Pelajari Visi & Misi
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative h-[600px] w-full"
          >
            {/* Awesome Graphic / Glass card graphic */}
            <div className="absolute inset-0 glass-card rounded-3xl p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">AL</span>
                </div>
                <div className="px-4 py-2 rounded-full bg-white/10 text-sm border border-white/10">Est. 2026</div>
              </div>
              
              <div className="space-y-6">
                <div className="h-2 w-1/3 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full bg-blue-500"
                  />
                </div>
                <h3 className="text-3xl font-bold text-white">Mewariskan rekam jejak untuk peradaban.</h3>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-20 glass p-4 rounded-xl border border-white/10 shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center" />
                <div>
                  <p className="text-sm font-semibold text-white">Profitabilitas</p>
                  <p className="text-xs text-slate-400">High Conversion</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-12 bottom-32 glass p-4 rounded-xl border border-white/10 shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">♥</div>
                <div>
                  <p className="text-sm font-semibold text-white">Dampak Sosial</p>
                  <p className="text-xs text-slate-400">Concrete Benefits</p>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
