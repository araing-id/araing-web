import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { teamMembers } from "@/lib/data/team";
import ProfileSlideshow from "@/components/v2/ProfileSlideshow";
import { ArrowLeft, Briefcase, GraduationCap } from "lucide-react";

// Custom SVG Icons since some are missing in this lucide-react version
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.68a6.34 6.34 0 006.33 6.32 6.32 6.32 0 006.32-6.32V8.9a8.41 8.41 0 004.34 1.22v-3.4a4.93 4.93 0 01-2.4-.03z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export function generateStaticParams() {
  // Recompile trigger
  return teamMembers.map((member) => ({
    id: member.id,
  }));
}

export default async function TeamMemberPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const member = teamMembers.find((m) => m.id === resolvedParams.id);

  if (!member) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-[#c084fc]/30 selection:text-purple-200 flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 pt-24 pb-16 md:py-32 max-w-6xl">
        <div className="mb-8 md:mb-12">
          <Link 
            href="/team"
            className="inline-flex items-center text-white/60 hover:text-[#c084fc] transition-colors gap-2 text-sm uppercase tracking-widest font-bold group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Tim
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Visuals & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <ProfileSlideshow photos={member.photos} fallbackName={member.name} />

            {/* Social Media Links */}
            {(member.socials.instagram || member.socials.tiktok || member.socials.linkedin) && (
              <div className="flex items-center justify-center gap-4 pt-4 border-t border-white/10">
                {member.socials.instagram && (
                  <a 
                    href={member.socials.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#c084fc] hover:border-[#c084fc] hover:bg-[#c084fc]/10 transition-all hover:scale-110 shadow-[0_0_15px_rgba(192,132,252,0)] hover:shadow-[0_0_20px_rgba(192,132,252,0.3)]"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                )}
                {member.socials.tiktok && (
                  <a 
                    href={member.socials.tiktok} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#c084fc] hover:border-[#c084fc] hover:bg-[#c084fc]/10 transition-all hover:scale-110 shadow-[0_0_15px_rgba(192,132,252,0)] hover:shadow-[0_0_20px_rgba(192,132,252,0.3)]"
                  >
                    <TikTokIcon className="w-5 h-5" />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a 
                    href={member.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#c084fc] hover:border-[#c084fc] hover:bg-[#c084fc]/10 transition-all hover:scale-110 shadow-[0_0_15px_rgba(192,132,252,0)] hover:shadow-[0_0_20px_rgba(192,132,252,0.3)]"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Information */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="mb-10 relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#c084fc]/10 blur-[40px] rounded-full -z-10"></div>
              
              <h2 className="text-[#c084fc] text-sm md:text-base uppercase tracking-[0.3em] font-bold mb-3 flex items-center gap-2">
                <span className="w-8 h-px bg-[#c084fc]"></span>
                {member.role}
              </h2>
              
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-2 text-white">
                {member.name}
              </h1>
              
              {member.nickname && (
                <p className="text-xl md:text-2xl text-white/40 font-serif italic mb-6">
                  "{member.nickname}"
                </p>
              )}
              
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light border-l-2 border-[#c084fc]/50 pl-4 py-1">
                {member.tagline}
              </p>
            </div>

            <div className="space-y-6">
              {/* Education Card */}
              {member.education && (
                <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group hover:border-[#c084fc]/50 transition-colors duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#c084fc]/5 blur-[40px] rounded-full group-hover:bg-[#c084fc]/10 transition-colors duration-500"></div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-black/50 border border-white/5 flex items-center justify-center flex-shrink-0 text-[#c084fc] group-hover:bg-[#c084fc] group-hover:text-white transition-colors duration-300">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-bold uppercase tracking-wider mb-2">Latar Belakang Pendidikan</h3>
                      <p className="text-white/70 leading-relaxed">
                        {member.education}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Experience Card */}
              {member.experience && member.experience.length > 0 && (
                <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group hover:border-[#c084fc]/50 transition-colors duration-500">
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#c084fc]/5 blur-[40px] rounded-full group-hover:bg-[#c084fc]/10 transition-colors duration-500"></div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-black/50 border border-white/5 flex items-center justify-center flex-shrink-0 text-[#c084fc] group-hover:bg-[#c084fc] group-hover:text-white transition-colors duration-300">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-bold uppercase tracking-wider mb-4">Pengalaman Profesional</h3>
                      <ul className="space-y-3">
                        {member.experience.map((exp, idx) => (
                          <li key={idx} className="flex gap-3 text-white/70 leading-relaxed">
                            <span className="text-[#c084fc] mt-1.5 opacity-60">•</span>
                            <span>{exp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
