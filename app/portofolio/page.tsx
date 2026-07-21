import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

export default function PortofolioPage() {
  const projects = [
    { title: "Project Alpha", category: "Digital Media", year: "2024", desc: "Kampanye digital terintegrasi dengan jangkauan 2 juta+ audiens." },
    { title: "Sistem Manajemen RS", category: "Healthcare", year: "2025", desc: "Digitalisasi sistem rekam medis terpusat untuk 5 rumah sakit." },
    { title: "Tech-X Initiative", category: "Tech-X", year: "2024", desc: "Transformasi digital untuk efisiensi operasional BUMN." },
    { title: "Legal Compliance Platform", category: "Legal Advisory", year: "2026", desc: "Platform otomatisasi pengecekan regulasi hukum." },
    { title: "Smart City Dev", category: "Infrastructure", year: "2025", desc: "Masterplan infrastruktur untuk kota pintar berbasis IoT." },
    { title: "Kampanye Sosial Nasional", category: "Digital Media", year: "2023", desc: "Program CSR digital yang memenangkan penghargaan nasional." },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-[#c084fc]/30 selection:text-purple-200">
      <Navbar />
      
      <main className="container mx-auto px-4 py-32 max-w-7xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-4">
            Portofolio
          </h1>
          <p className="text-white/60 max-w-2xl text-lg">
            Rekam jejak dan dampak nyata dari kolaborasi lintas sektor Arus Liar Inisiatif Group.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative bg-[#1A1A1A] p-8 rounded-3xl border border-white/5 hover:border-[#c084fc]/30 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#111111] to-[#c084fc]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex justify-between items-start mb-6">
                <span className="text-xs font-bold px-3 py-1 bg-white/5 text-white/70 rounded-full border border-white/10">{project.category}</span>
                <span className="text-xs font-mono text-[#c084fc]">{project.year}</span>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#c084fc] transition-colors">{project.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed line-clamp-3">
                  {project.desc}
                </p>
              </div>

              <div className="relative z-10 mt-6 flex justify-end">
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
