export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#111111] pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          <div className="space-y-4 text-center md:text-left max-w-sm">
            <a href="#" className="flex items-center gap-2">
              <img src="/logo-araing.svg" alt="Araing Logo" className="h-12 w-auto" />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Arus Liar Inisiatif Group. Mewariskan rekam jejak (legacy) serta dampak sosial yang konkret bagi kemajuan peradaban.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-12">
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Organisasi</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-slate-400 hover:text-white transition-colors text-sm">Visi & Misi</a></li>
                <li><a href="#pillars" className="text-slate-400 hover:text-white transition-colors text-sm">5 Pilar</a></li>
                <li><a href="#team" className="text-slate-400 hover:text-white transition-colors text-sm">Struktur</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Sektor</h4>
              <ul className="space-y-2">
                <li><a href="#divisions" className="text-slate-400 hover:text-white transition-colors text-sm">Digital Media</a></li>
                <li><a href="#divisions" className="text-slate-400 hover:text-white transition-colors text-sm">Tech-X</a></li>
                <li><a href="#divisions" className="text-slate-400 hover:text-white transition-colors text-sm">Healthcare</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Arus Liar Inisiatif Group. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {/* Social icons placeholders */}
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
              IN
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
              IG
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
