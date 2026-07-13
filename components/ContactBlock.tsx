"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactBlock() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="glass-card rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />
          
          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            {/* Left side text */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Mari Berkolaborasi</h2>
                <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                  Jadilah bagian dari revolusi, di mana kreativitas dan eksekusi komersial bertemu untuk menciptakan peradaban digital yang lebih baik.
                </p>
              </div>

              <div className="space-y-6 pt-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="font-medium text-white">info@araing.id</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-blue-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Telepon</p>
                    <p className="font-medium text-white">+62 857 9346 8966</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-blue-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Kantor Pusat</p>
                    <p className="font-medium text-white">Cimahi, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Nama Lengkap</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all font-sans"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Perusahaan</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all font-sans"
                      placeholder="PT Maju Bersama"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Email Alamat</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all font-sans"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Pesan</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all font-sans resize-none"
                    placeholder="Ceritakan tujuan kolaborasi Anda..."
                  />
                </div>

                <button 
                  type="button"
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium flex items-center justify-center transition-colors shadow-lg shadow-blue-500/25"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Kirim Pesan
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
