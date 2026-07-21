import HeroModern from "@/components/v2/HeroModern";
import ServicesModern from "@/components/v2/ServicesModern";
import WhyUsModern from "@/components/v2/WhyUsModern";
import ContactModern from "@/components/v2/ContactModern";
import PillarsModern from "@/components/v2/PillarsModern";
import TeamModern from "@/components/v2/TeamModern";
import RoadmapModern from "@/components/v2/RoadmapModern";

export default function V2Page() {
  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-[#c084fc]/30 selection:text-purple-200">
      {/* 
        Bento-style masonry/grid layout reflecting the modern,
        dark-mode aesthetic from the reference image, now fully interactive.
      */}
      
      <main className="container mx-auto px-4 py-16 lg:py-24 max-w-7xl space-y-6">
        
        {/* ROW 1: Hero & Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-min">
          <div className="lg:col-span-2">
            <HeroModern />
          </div>
          <div className="lg:col-span-1">
            <ContactModern />
          </div>
        </div>

        {/* ROW 2: Why Us & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-min">
          <div>
            <WhyUsModern />
          </div>
          <div>
            <PillarsModern />
          </div>
        </div>

        {/* ROW 3: Services (Full width or split) */}
        <div className="grid grid-cols-1 gap-6">
          <ServicesModern />
        </div>

        {/* ROW 4: Team (Full width) */}
        <div className="grid grid-cols-1 gap-6">
          <TeamModern />
        </div>

        {/* ROW 5: Roadmap & Additional Content Space */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-min">
          <div className="lg:col-span-2">
            <RoadmapModern />
          </div>
          <div className="lg:col-span-1 flex flex-col justify-end">
            {/* Just an aesthetic filler card to balance the bento grid */}
            <div className="h-[200px] bg-[#1A1A1A] rounded-3xl p-8 border border-[#333] flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#111111] to-[#c084fc]/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-3xl font-black text-white/20 uppercase transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                Arus Liar
              </h3>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
