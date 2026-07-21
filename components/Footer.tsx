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
              <h4 className="text-white font-semibold">Perusahaan</h4>
              <ul className="space-y-2">
                <li><a href="/#about" className="text-slate-400 hover:text-white transition-colors text-sm">Visi & Misi</a></li>
                <li><a href="/#pillars" className="text-slate-400 hover:text-white transition-colors text-sm">5 Pilar Utama</a></li>
                <li><a href="/team" className="text-slate-400 hover:text-white transition-colors text-sm">Manajemen & Tim</a></li>
                <li><a href="/company-profile" className="text-slate-400 hover:text-white transition-colors text-sm">Company Profile</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Sektor</h4>
              <ul className="space-y-2">
                <li><a href="/#divisions" className="text-slate-400 hover:text-white transition-colors text-sm">Digital Media</a></li>
                <li><a href="/#divisions" className="text-slate-400 hover:text-white transition-colors text-sm">Tech-X</a></li>
                <li><a href="/#divisions" className="text-slate-400 hover:text-white transition-colors text-sm">Healthcare</a></li>
                <li><a href="/#divisions" className="text-slate-400 hover:text-white transition-colors text-sm">Legal Advisory</a></li>
                <li><a href="/#divisions" className="text-slate-400 hover:text-white transition-colors text-sm">Infrastructure</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Jejak & Legal</h4>
              <ul className="space-y-2">
                <li><a href="/projects" className="text-slate-400 hover:text-white transition-colors text-sm">Proyek Aktif</a></li>
                <li><a href="/portofolio" className="text-slate-400 hover:text-white transition-colors text-sm">Portofolio Klien</a></li>
                <li><a href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="text-slate-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Arus Liar Inisiatif Group. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="https://instagram.com/araing.id" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all" aria-label="Instagram">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://tiktok.com/@araing.id" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all" aria-label="TikTok">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/company/araing.id" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all" aria-label="LinkedIn">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
