import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { teamMembers, getInitials } from "@/lib/data/team";
import Link from "next/link";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-[#c084fc]/30 selection:text-purple-200">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16 md:py-32 max-w-7xl">
        <div className="mb-12 md:mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-4">
            Meet The Team
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Kekuatan di balik ekosistem Arus Liar. Profil talenta profesional lintas disiplin kami.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {teamMembers.map((member, idx) => (
            <Link 
              href={`/team/${member.id}`} 
              key={idx} 
              className="group relative overflow-hidden rounded-2xl bg-[#1A1A1A] border border-white/5 aspect-[3/4] cursor-pointer block"
            >
              
              {/* Photo or Premium Placeholder */}
              {member.imgUrl ? (
                <img 
                  src={member.imgUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#111] to-[#1a1a1a] flex flex-col items-center justify-center relative overflow-hidden group-hover:from-[#1a1a1a] group-hover:to-[#222] transition-colors duration-500">
                  {/* Glowing orb */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#c084fc]/10 blur-[40px] rounded-full group-hover:bg-[#c084fc]/30 group-hover:scale-150 transition-all duration-700"></div>
                  
                  {/* Subtle Dot Grid */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                  {/* Massive Initials Watermark */}
                  <span className="text-6xl md:text-7xl font-black text-white/5 tracking-tighter absolute select-none group-hover:scale-110 group-hover:text-white/10 transition-all duration-500">
                    {getInitials(member.name)}
                  </span>
                  
                  {/* SOON Badge */}
                  <div className="relative z-10 border border-[#c084fc]/30 bg-[#c084fc]/10 px-4 py-1.5 rounded-full backdrop-blur-sm group-hover:border-[#c084fc]/60 group-hover:bg-[#c084fc]/20 transition-colors shadow-[0_0_15px_rgba(192,132,252,0.1)] group-hover:shadow-[0_0_20px_rgba(192,132,252,0.3)]">
                    <span className="text-[#c084fc] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">Soon</span>
                  </div>
                </div>
              )}
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Text Info */}
              <div className="absolute bottom-0 left-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 w-full">
                <h3 className="font-bold text-white text-sm md:text-base leading-tight mb-1">{member.name}</h3>
                <p className="text-xs text-[#c084fc] font-medium tracking-wide uppercase">{member.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
