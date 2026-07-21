import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, Clock, Activity } from "lucide-react";

export default function ProjectsPage() {
  const ongoingProjects = [
    { 
      title: "Inkubasi Startup Lokal", 
      category: "Tech-X", 
      status: "Tahap Pendanaan", 
      progress: 60,
      desc: "Program pendampingan komprehensif bagi 10 startup potensial asal Cimahi untuk menembus pasar nasional." 
    },
    { 
      title: "Pusat Pelatihan Digital", 
      category: "Pendidikan & Sosial", 
      status: "Konstruksi & Persiapan", 
      progress: 40,
      desc: "Pembangunan infrastruktur fisik dan penyusunan kurikulum untuk memberdayakan talenta digital muda." 
    },
    { 
      title: "Sistem Terpadu RSUD", 
      category: "Healthcare", 
      status: "Pengembangan", 
      progress: 85,
      desc: "Digitalisasi sistem rekam medis dan antrean terpusat untuk memangkas waktu tunggu pasien secara signifikan." 
    },
    { 
      title: "Kampanye Peduli Pendidikan", 
      category: "Digital Media", 
      status: "Akan Datang (Q4 2026)", 
      progress: 10,
      desc: "Inisiatif penggalangan dana dan kesadaran publik untuk mendigitalisasi perpustakaan desa." 
    },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-[#c084fc]/30 selection:text-purple-200">
      <Navbar />
      
      <main className="container mx-auto px-4 py-32 max-w-7xl">
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#c084fc]/20 text-[#c084fc] border border-[#c084fc]/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#c084fc] animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest uppercase">Ongoing & Upcoming</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-4">
            Proyek Aktif
          </h1>
          <p className="text-white/60 max-w-2xl text-lg">
            Pantau inisiatif dan proyek terbaru yang sedang kami kerjakan. Kami percaya pada transparansi proses dan dedikasi pada hasil nyata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ongoingProjects.map((project, idx) => (
            <div key={idx} className="group relative bg-[#1A1A1A] p-8 rounded-3xl border border-white/5 hover:border-[#c084fc]/30 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#111111] to-[#c084fc]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold px-3 py-1 bg-white/5 text-white/70 rounded-full border border-white/10">{project.category}</span>
                  
                  {/* Status Badge */}
                  <div className="flex items-center gap-1.5 text-xs font-medium text-white/80 bg-black/40 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                    {project.progress < 20 ? (
                      <Clock className="w-3.5 h-3.5 text-orange-400" />
                    ) : (
                      <Activity className="w-3.5 h-3.5 text-green-400" />
                    )}
                    {project.status}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#c084fc] transition-colors">{project.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-8">
                  {project.desc}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="relative z-10 w-full bg-white/5 rounded-full h-2 mb-2 overflow-hidden border border-white/10">
                <div 
                  className="bg-gradient-to-r from-[#c084fc] to-[#a64ca6] h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <div className="relative z-10 flex justify-between items-center text-xs text-white/40 font-mono">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>

              <div className="relative z-10 mt-8 flex justify-end">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#c084fc] group-hover:text-white transition-colors text-white/40">
                  <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
