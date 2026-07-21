import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroModern from "@/components/v2/HeroModern";
import ServicesModern from "@/components/v2/ServicesModern";
import WhyUsModern from "@/components/v2/WhyUsModern";
import ContactModern from "@/components/v2/ContactModern";
import PillarsModern from "@/components/v2/PillarsModern";
import TeamModern from "@/components/v2/TeamModern";
import RoadmapModern from "@/components/v2/RoadmapModern";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-[#c084fc]/30 selection:text-purple-200">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16 lg:py-24 max-w-7xl space-y-6 pt-32">
        
        {/* ROW 1: Hero & Contact */}
        <div id="hero" className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-min">
          <div className="lg:col-span-2">
            <HeroModern />
          </div>
          <div className="lg:col-span-1" id="contact">
            <ContactModern />
          </div>
        </div>

        {/* ROW 2: Why Us & Pillars */}
        <div id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-min">
          <div>
            <WhyUsModern />
          </div>
          <div id="pillars">
            <PillarsModern />
          </div>
        </div>

        {/* ROW 3: Services (Full width or split) */}
        <div id="divisions" className="grid grid-cols-1 gap-6">
          <ServicesModern />
        </div>

        {/* ROW 4: Team (Full width) */}
        <div id="team" className="grid grid-cols-1 gap-6">
          <TeamModern />
        </div>

        {/* ROW 5: Roadmap & Additional Content Space */}
        <div id="roadmap" className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-min">
          <div className="lg:col-span-2">
            <RoadmapModern />
          </div>
          <div className="lg:col-span-1 flex flex-col justify-end">
            <div className="h-full bg-gradient-to-br from-[#1A1A1A] to-[#2B1B36] rounded-3xl p-8 border border-[#c084fc]/30 flex flex-col justify-center relative overflow-hidden group shadow-[0_0_30px_rgba(192,132,252,0.1)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c084fc]/20 blur-[50px] rounded-full group-hover:bg-[#c084fc]/40 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-[#c084fc]/20 text-[#c084fc] rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                  Open Recruitment
                </span>
                <h3 className="text-2xl font-black text-white italic uppercase tracking-tight mb-2 leading-tight">
                  Bergabunglah Menjadi<br/>
                  <span className="text-[#c084fc]">Balad Araing</span>
                </h3>
                <p className="text-white/70 text-xs leading-relaxed mb-6">
                  Jadilah motor penggerak perubahan sosial. Kami mencari SDM berdedikasi tinggi yang siap berdampak nyata bagi masyarakat melalui inisiatif lintas sektor.
                </p>
                <a href="#contact" className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors gap-2">
                  Daftar Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
