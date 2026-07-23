import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { activeProjects } from "@/lib/data/projects";
import { ArrowLeft, CheckCircle2, Calendar, Target, Lightbulb, Activity } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return activeProjects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = activeProjects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-[#c084fc]/30 selection:text-purple-200">
      <Navbar />

      <main className="container mx-auto px-4 pt-32 pb-24 max-w-5xl">
        {/* Back button */}
        <div className="mb-12">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Proyek Aktif
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-[#151515] p-8 md:p-12 rounded-[2rem] border border-white/5 relative overflow-hidden mb-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c084fc]/10 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-1.5 bg-white/5 text-white/70 rounded-full text-sm font-medium border border-white/10">
                {project.category}
              </span>
              <div className="flex items-center gap-2 px-4 py-1.5 bg-[#c084fc]/10 text-[#c084fc] rounded-full border border-[#c084fc]/20">
                <Activity className="w-4 h-4" />
                <span className="text-sm font-bold">{project.status}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter mb-6 leading-tight">
              {project.title}
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mb-12">
              {project.desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-white/10 pt-8 mt-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-white/40" />
                  <span className="text-sm text-white/40 uppercase tracking-widest font-semibold">Estimasi Pelaksanaan</span>
                </div>
                <p className="text-xl font-bold text-white">{project.timeline}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Activity className="w-4 h-4 text-white/40" />
                  <span className="text-sm text-white/40 uppercase tracking-widest font-semibold">Progress Keseluruhan</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-full bg-[#2A2A2A] rounded-full h-2.5 overflow-hidden flex-grow">
                    <div 
                      className="bg-gradient-to-r from-[#c084fc] to-[#e879f9] h-2.5 rounded-full" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <span className="font-mono font-bold text-white/80">{project.progress}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Challenge */}
          <div className="bg-[#1A1A1A] p-8 md:p-10 rounded-[2rem] border border-white/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Latar Belakang Masalah</h2>
            </div>
            <p className="text-white/60 leading-relaxed text-lg">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="bg-[#1A1A1A] p-8 md:p-10 rounded-[2rem] border border-white/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Solusi Inovatif</h2>
            </div>
            <p className="text-white/60 leading-relaxed text-lg">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2B1B36] p-8 md:p-12 rounded-[2rem] border border-[#c084fc]/30 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#c084fc]/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 flex items-center gap-3">
              <span className="text-[#c084fc]">Dampak Sosial</span> yang Diharapkan
            </h2>

            <div className="grid grid-cols-1 gap-4">
              {project.impact.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-[#c084fc]" />
                  </div>
                  <p className="text-lg text-white/80 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
