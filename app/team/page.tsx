import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TeamPage() {
  // Generate 20 dummy members
  const teamMembers = Array.from({ length: 20 }).map((_, i) => ({
    name: `Anggota Tim ${i + 1}`,
    role: i % 3 === 0 ? "Executive" : i % 2 === 0 ? "Specialist" : "Manager",
    imgUrl: `https://ui-avatars.com/api/?name=Anggota+${i+1}&background=random&color=fff&size=400`,
  }));

  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-[#c084fc]/30 selection:text-purple-200">
      <Navbar />
      
      <main className="container mx-auto px-4 py-32 max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-4">
            Meet The Team
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Kekuatan di balik ekosistem Arus Liar. Profil talenta profesional lintas disiplin kami.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl bg-[#1A1A1A] border border-white/5 aspect-[3/4] cursor-pointer">
              {/* Photo */}
              <img 
                src={member.imgUrl} 
                alt={member.name} 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Text Info */}
              <div className="absolute bottom-0 left-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-bold text-white text-sm md:text-base leading-tight mb-1">{member.name}</h3>
                <p className="text-xs text-[#c084fc] font-medium tracking-wide uppercase">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
