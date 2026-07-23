import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, Activity } from "lucide-react";
import { activeProjects } from "@/lib/data/projects";
import Link from "next/link";

export default function ProjectPage() {
  const projects = activeProjects;

  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-[#c084fc]/30 selection:text-purple-200 flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-32 max-w-6xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-4">
            Proyek Aktif
          </h1>
          <p className="text-white/60 max-w-2xl text-lg">
            Inisiatif dan program nyata yang sedang kami kembangkan untuk menghadirkan dampak sosial bagi masyarakat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Link href={`/projects/${project.id}`} key={idx}>
              <div className="group bg-[#151515] p-8 md:p-10 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col justify-between min-h-[380px] h-full cursor-pointer">
              
              <div className="flex flex-col flex-grow">
                {/* Top Pills */}
                <div className="flex justify-between items-start mb-10">
                  <span className="text-sm font-medium px-5 py-2 bg-transparent text-white/70 rounded-full border border-white/10">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2 px-5 py-2 bg-transparent text-white/90 rounded-full border border-white/10">
                    <Activity className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-medium">{project.status}</span>
                  </div>
                </div>
                
                {/* Title & Desc */}
                <h3 className="text-3xl font-bold mb-4 text-white leading-tight">
                  {project.title}
                </h3>
                <p className="text-base text-white/60 leading-relaxed mb-10">
                  {project.desc}
                </p>
              </div>

              {/* Bottom Section */}
              <div className="mt-auto">
                <div className="w-full bg-[#2A2A2A] rounded-full h-2.5 mb-4 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-[#c084fc] to-[#e879f9] h-2.5 rounded-full" 
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-mono text-white/40">Progress</span>
                  <span className="text-sm font-mono text-white/60">{project.progress}%</span>
                </div>

                <div className="flex justify-end">
                  <div className="w-14 h-14 rounded-full bg-[#222222] flex items-center justify-center group-hover:bg-[#2A2A2A] transition-colors text-white/60 group-hover:text-white cursor-pointer">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>

            </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
