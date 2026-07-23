"use client";

import { Printer, ArrowLeft, Mail, MapPin, Phone, Globe } from "lucide-react";
import Link from "next/link";
import { teamMembers, getInitials } from "@/lib/data/team";

export default function CompanyProfilePage() {
  const handlePrint = () => {
    window.print();
  };

  const portfolios = [
    { title: "Project Alpha", client: "Kementerian BUMN", desc: "Digitalisasi sistem operasional terpusat dengan peningkatan efisiensi 40%." },
    { title: "HealthTech Initiative", client: "RSUD Cimahi", desc: "Implementasi rekam medis elektronik terintegrasi berbasis cloud." },
    { title: "Social Impact Campaign", client: "NGO Nasional", desc: "Kampanye digital masif dengan jangkauan 2 juta+ impresi." },
    { title: "Smart City Infrastructure", client: "Pemkot Bandung", desc: "Masterplan dan implementasi IoT untuk pemantauan tata kota." },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-white font-sans selection:bg-[#c084fc]/30 selection:text-purple-200 pb-16 md:pb-0">
      
      {/* Non-printable UI Controls */}
      <div className="fixed bottom-4 right-4 md:top-4 md:bottom-auto md:right-4 z-50 flex flex-col md:flex-row gap-3 print:hidden">
        <Link 
          href="/"
          className="flex justify-center items-center gap-2 bg-[#1A1A1A] text-white px-4 py-3 md:py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-white/10"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali
        </Link>
        <button 
          onClick={handlePrint}
          className="flex justify-center items-center gap-2 bg-[#c084fc] text-white px-4 py-3 md:py-2 rounded-full text-sm font-bold hover:bg-[#a64ca6] transition shadow-[0_0_20px_rgba(192,132,252,0.4)]"
        >
          <Printer className="w-4 h-4" />
          Download PDF / Cetak
        </button>
      </div>

      {/* Printable Document Container */}
      <div className="w-full max-w-[210mm] mx-auto bg-[#111111] print:bg-white min-h-screen md:min-h-[297mm] shadow-[0_0_40px_rgba(192,132,252,0.05)] print:shadow-none print:w-full print:max-w-full text-white print:text-black">
        
        {/* PAGE 1: Cover & Intro */}
        <div className="h-auto min-h-[100vh] md:min-h-0 md:h-[297mm] print:h-[297mm] flex flex-col p-6 sm:p-10 md:p-16 print:p-16 relative overflow-hidden page-break-after-always bg-[#111111] print:bg-white">
          {/* Aesthetic Shape */}
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#c084fc]/10 rounded-bl-[100px] -z-10 print:bg-transparent print:border print:border-[#c084fc]/20"></div>
          
          <div className="mt-12 flex-shrink-0">
            {/* White logo for web, dark logo for print */}
            <img src="/logo-araing.svg" alt="Logo" className="h-12 md:h-16 w-auto mb-8 filter invert brightness-0 print:hidden" style={{ filter: 'brightness(0) invert(1)' }} />
            <img src="/logo-araing.svg" alt="Logo" className="h-12 md:h-16 w-auto mb-8 hidden print:block filter invert brightness-0" style={{ filter: 'brightness(0)' }} />
            
            <h1 className="text-4xl md:text-6xl print:text-6xl font-black uppercase tracking-tighter leading-none mb-4 text-white print:text-black">
              Company<br />Profile
            </h1>
            <div className="w-16 md:w-20 h-2 bg-[#c084fc] mb-8 print:bg-black"></div>
            <p className="text-xl md:text-2xl print:text-2xl font-light text-white/50 max-w-md print:text-gray-500">
              Mewariskan rekam jejak (legacy) serta dampak sosial yang konkret bagi kemajuan peradaban.
            </p>
          </div>

          <div className="mt-auto mb-12">
            <h3 className="text-base md:text-lg print:text-lg font-bold uppercase tracking-widest text-[#c084fc] mb-4 print:text-black">Mukadimah</h3>
            <p className="text-sm text-white/70 leading-relaxed text-justify print:text-gray-700">
              Didorong oleh besarnya potensi kreativitas, kompetensi teknis, serta kuatnya semangat kebersamaan, terwujudlah sebuah urgensi untuk mendirikan wadah yang sah, profesional, dan berjangka panjang. Arus Liar Inisiatif Grup lahir sebagai wujud transformasi kolektif—menyatukan ikatan persaudaraan dengan standar tata kelola profesional demi melahirkan karya bernilai luhur. Anggaran Dasar dan Anggaran Rumah Tangga (AD/ART) ini dirumuskan sebagai landasan pijak, kompas penentu arah, sekaligus fondasi utama dalam merawat integritas dan keselarasan organisasi.
            </p>
          </div>
          
          <div className="flex-shrink-0 pt-8 border-t border-white/10 md:border-none md:pt-0">
            <p className="font-bold tracking-widest uppercase text-xs text-white/90 print:text-black">Arus Liar Inisiatif Grup</p>
            <p className="text-white/40 text-xs print:text-gray-500">Tahun 2026</p>
          </div>
        </div>

        {/* PAGE 2: Arah, Visi & Misi */}
        <div className="h-auto min-h-[100vh] md:min-h-0 md:h-[297mm] print:h-[297mm] p-6 sm:p-10 md:p-16 print:p-16 relative page-break-after-always flex flex-col bg-[#111111] print:bg-white">
          <div className="mb-8 md:mb-10 print:mb-10">
            <h2 className="text-xs font-bold text-[#c084fc] uppercase tracking-widest mb-2 print:text-gray-500">01. Tentang Kami</h2>
            <h3 className="text-2xl md:text-3xl print:text-3xl font-black uppercase tracking-tighter mb-4 text-white print:text-black">Arah Perusahaan</h3>
            <p className="text-sm md:text-base print:text-base text-white/70 leading-relaxed text-justify print:text-gray-700">
              Secara strategis, perusahaan berorientasi untuk bertransformasi menjadi induk usaha (holding company) berskala nasional yang membawahi beragam entitas anak (subsidiaries) di berbagai sektor strategis. Perusahaan memosisikan diri sebagai inkubator inovasi, fasilitator sekaligus penggalang permodalan strategis, dan akselerator bisnis yang menjamin setiap entitas mampu beroperasi secara mandiri, berkelanjutan, serta menghadirkan kontribusi sosial yang nyata bagi masyarakat Indonesia.
            </p>
          </div>

          <div className="mb-8 md:mb-10 print:mb-10">
            <h2 className="text-xs font-bold text-[#c084fc] uppercase tracking-widest mb-2 print:text-gray-500">02. Landasan Filosofis</h2>
            <h3 className="text-2xl md:text-3xl print:text-3xl font-black uppercase tracking-tighter mb-4 text-white print:text-black">Visi</h3>
            <p className="text-sm md:text-base print:text-base text-white/70 leading-relaxed text-justify print:text-gray-700">
              Menjadi induk perusahaan sekaligus ekosistem kolaborasi lintas sektor terkemuka yang memimpin pasar, memacu eskalasi finansial dan kapabilitas profesional secara berkesinambungan, serta menorehkan warisan (legacy) yang bermakna dan berdampak positif bagi peradaban masyarakat, baik di dunia fisik maupun digital.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl print:text-3xl font-black uppercase tracking-tighter mb-4 text-white print:text-black">Misi</h3>
            <ul className="list-decimal pl-5 space-y-2 md:space-y-3 print:space-y-3 text-sm md:text-base print:text-base text-white/70 text-justify print:text-gray-700">
              <li>Mengembangkan karya dan menghadirkan solusi inovatif dengan standar industri yang tinggi di setiap unit kegiatan organisasi.</li>
              <li>Menjalankan penetrasi pasar melalui strategi yang terukur, dengan menjaga keseimbangan antara keberlanjutan ekonomi dan perluasan manfaat bagi masyarakat.</li>
              <li>Menerapkan tata kelola lembaga yang transparan, terstruktur, akuntabel, adaptif, dan berintegritas untuk mewujudkan kemandirian ekosistem bersama.</li>
            </ul>
          </div>

          <div className="mt-auto">
            <h3 className="text-xl md:text-2xl print:text-2xl font-black uppercase tracking-tighter mb-4 text-white print:text-black">5 Pilar Organisasi</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 print:grid-cols-5 gap-3">
              {[
                { name: "Kemandirian Finansial" },
                { name: "Sinergi Lintas Sektor" },
                { name: "Dampak Sosial" },
                { name: "Inovasi Adaptif" },
                { name: "Integritas & Persaudaraan" }
              ].map((p, i) => (
                <div key={i} className={`p-3 bg-white/5 border border-white/10 rounded-lg print:bg-gray-50 print:border-gray-200 flex items-center justify-center text-center ${i === 4 ? 'col-span-2 sm:col-span-1 md:col-span-1 print:col-span-1' : ''}`}>
                  <span className="text-xs md:text-sm print:text-sm font-bold text-white print:text-black">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PAGE 3: Kemampuan & Penawaran */}
        <div className="h-auto min-h-[100vh] md:min-h-0 md:h-[297mm] print:h-[297mm] p-6 sm:p-10 md:p-16 print:p-16 relative flex flex-col page-break-after-always bg-[#111111] print:bg-white">
          <div className="mb-12">
            <h2 className="text-xs font-bold text-[#c084fc] uppercase tracking-widest mb-2 print:text-gray-500">03. Layanan Utama</h2>
            <h3 className="text-2xl md:text-3xl print:text-3xl font-black uppercase tracking-tighter mb-6 md:mb-8 print:mb-8 text-white print:text-black">Sektor Keahlian</h3>
            
            <div className="space-y-4 md:space-y-6 print:space-y-6">
              {[
                { name: "Digital Media", info: "Pemasaran digital, kampanye kreatif, dan manajemen media sosial tingkat lanjut." },
                { name: "Tech-X", info: "Konsultasi IT, pengembangan perangkat lunak, dan digitalisasi operasi bisnis." },
                { name: "Healthcare", info: "Sistem rekam medis terpadu dan solusi teknologi kesehatan modern." },
                { name: "Legal Advisory", info: "Pendampingan hukum perusahaan, kepatuhan regulasi, dan perizinan." },
                { name: "Infrastructure", info: "Perencanaan dan manajemen proyek infrastruktur cerdas." },
              ].map((sector, idx) => (
                <div key={idx} className="flex flex-col md:flex-row print:flex-row border-b border-white/10 print:border-gray-200 pb-4">
                  <div className="w-full md:w-1/3 print:w-1/3 font-bold text-base md:text-lg print:text-lg text-white print:text-black mb-1 md:mb-0 print:mb-0">{sector.name}</div>
                  <div className="w-full md:w-2/3 print:w-2/3 text-white/60 text-sm leading-relaxed print:text-gray-600">{sector.info}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <h2 className="text-xs font-bold text-[#c084fc] uppercase tracking-widest mb-2 print:text-gray-500">04. Nilai Tambah</h2>
            <h3 className="text-2xl md:text-3xl print:text-3xl font-black uppercase tracking-tighter mb-6 text-white print:text-black">Keunggulan Kami</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-4 md:gap-6 print:gap-6">
              {[
                { title: "Sinergi Lintas Sektor", desc: "Pendekatan holistik yang mengintegrasikan berbagai disiplin ilmu." },
                { title: "Keseimbangan Nilai", desc: "Menggabungkan profitabilitas komersial dengan dampak sosial nyata." },
                { title: "Tata Kelola Adaptif", desc: "Manajemen yang transparan dan siap menghadapi dinamika zaman." }
              ].map((val, idx) => (
                <div key={idx} className="p-4 md:p-5 print:p-5 bg-white/5 border border-white/10 rounded-xl print:bg-gray-50 print:border-gray-200">
                  <h4 className="font-bold text-base mb-2 text-white print:text-black">{val.title}</h4>
                  <p className="text-xs text-white/60 leading-relaxed print:text-gray-600">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PAGE 4: Rekam Jejak */}
        <div className="h-auto min-h-[100vh] md:min-h-0 md:h-[297mm] print:h-[297mm] p-6 sm:p-10 md:p-16 print:p-16 relative flex flex-col page-break-after-always bg-[#111111] print:bg-white">
          <div className="mb-10 md:mb-12 print:mb-12">
            <h2 className="text-xs font-bold text-[#c084fc] uppercase tracking-widest mb-2 print:text-gray-500">05. Rekam Jejak</h2>
            <h3 className="text-2xl md:text-3xl print:text-3xl font-black uppercase tracking-tighter mb-6 text-white print:text-black">Portofolio Terpilih</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-4 md:gap-6 print:gap-6">
              {portfolios.map((item, idx) => (
                <div key={idx} className="p-5 md:p-6 print:p-6 border border-white/10 rounded-xl print:border-gray-200">
                  <h4 className="font-bold text-base md:text-lg print:text-lg mb-1 text-white print:text-black">{item.title}</h4>
                  <p className="text-[#c084fc] text-xs font-bold tracking-widest uppercase mb-3 print:text-gray-500">{item.client}</p>
                  <p className="text-xs md:text-sm print:text-sm text-white/60 leading-relaxed print:text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 md:mb-12 print:mb-12">
            <h3 className="text-lg md:text-xl print:text-xl font-bold uppercase tracking-tighter mb-4 md:mb-6 print:mb-6 text-white print:text-black">Klien & Mitra Strategis</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 print:grid-cols-4 gap-3 md:gap-4 print:gap-4 opacity-30 grayscale print:opacity-100 print:grayscale-0">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div key={num} className="h-12 md:h-16 print:h-16 bg-white/10 rounded-lg flex items-center justify-center border border-white/5 print:bg-gray-100 print:border-gray-300">
                  <span className="font-bold text-white/40 text-[10px] md:text-xs print:text-xs print:text-gray-400">LOGO CLIENT</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto bg-white/5 p-6 md:p-8 print:p-8 rounded-2xl border border-white/10 print:bg-gray-50 print:border-gray-200">
            <h3 className="text-lg md:text-xl print:text-xl font-bold uppercase tracking-tighter mb-4 text-white print:text-black">Testimoni Klien</h3>
            <p className="text-sm md:text-base print:text-base italic text-white/60 leading-relaxed mb-4 print:text-gray-600">
              "Kolaborasi dengan Arus Liar Inisiatif Grup memberikan dimensi baru bagi operasional kami. Pendekatan lintas sektor mereka sangat komprehensif dan menghasilkan dampak yang nyata."
            </p>
            <p className="font-bold text-xs md:text-sm print:text-sm text-white/90 print:text-black">— Direktur Utama, Instansi Mitra</p>
          </div>
        </div>

        {/* PAGE 5: Manusia di Balik Perusahaan */}
        <div className="h-auto min-h-[100vh] md:min-h-0 md:h-[297mm] print:h-[297mm] p-6 sm:p-10 md:p-16 print:p-16 relative flex flex-col page-break-after-always bg-[#111111] print:bg-white">
          <div className="mb-8">
            <h2 className="text-xs font-bold text-[#c084fc] uppercase tracking-widest mb-2 print:text-gray-500">06. The People</h2>
            <h3 className="text-2xl md:text-3xl print:text-3xl font-black uppercase tracking-tighter mb-2 text-white print:text-black">Tim Utama Kami</h3>
            <p className="text-sm text-white/60 print:text-gray-600">Dipimpin oleh para profesional berpengalaman yang mengutamakan nilai integritas dan persaudaraan.</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 print:grid-cols-5 gap-y-6 md:gap-y-8 print:gap-y-8 gap-x-2 md:gap-x-4 print:gap-x-4">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group h-full">
                {member.imgUrl ? (
                  <img 
                    src={member.imgUrl} 
                    alt={member.name} 
                    className="w-16 h-16 md:w-20 md:h-20 print:w-20 print:h-20 rounded-full object-cover mb-2 md:mb-3 print:mb-3 border border-white/10 print:border-gray-200"
                  />
                ) : (
                  <div className="w-16 h-16 md:w-20 md:h-20 print:w-20 print:h-20 rounded-full mb-2 md:mb-3 print:mb-3 bg-gradient-to-br from-[#111] to-[#1a1a1a] print:from-gray-100 print:to-gray-200 flex flex-col items-center justify-center relative overflow-hidden group-hover:from-[#1a1a1a] group-hover:to-[#222] transition-colors duration-500 border border-white/10 print:border-gray-200 shrink-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#c084fc]/10 blur-[10px] rounded-full group-hover:bg-[#c084fc]/30 group-hover:scale-150 transition-all duration-700 print:hidden"></div>
                    <span className="text-xl md:text-2xl print:text-2xl font-black text-white/10 print:text-black/10 tracking-tighter absolute select-none group-hover:scale-110 transition-all duration-500">
                      {getInitials(member.name)}
                    </span>
                    <span className="relative z-10 text-[#c084fc] text-[7px] md:text-[8px] print:text-[8px] font-bold tracking-[0.2em] uppercase mt-1 opacity-80 group-hover:opacity-100 print:text-gray-500">Soon</span>
                  </div>
                )}
                <div className="flex flex-col flex-grow items-center w-full justify-start">
                  <h4 className="font-bold text-[10px] md:text-xs print:text-xs leading-tight mb-1 text-white/90 print:text-black">{member.name}</h4>
                  <p className="text-[#c084fc] text-[8px] md:text-[10px] print:text-[10px] uppercase font-bold tracking-wider mt-auto pt-1 print:text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-auto border-t border-white/10 pt-6 md:pt-8 print:pt-8 print:border-gray-200">
            <h4 className="font-bold text-base md:text-lg print:text-lg mb-2 text-white print:text-black">Struktur Organisasi</h4>
            <p className="text-xs md:text-sm print:text-sm text-white/60 text-justify leading-relaxed print:text-gray-600">
              Arus Liar Inisiatif Grup beroperasi dengan tata kelola kelembagaan yang transparan, di mana jajaran Komisaris (pengawas dan penasihat strategis) berkolaborasi erat dengan level Eksekutif (CEO, COO, CFO, CMO, CTO, CSO). Setiap direktorat menangani secara mandiri ekosistem anak perusahaan (subsidiaries) yang relevan, memastikan eksekusi operasional yang taktis dan berkelanjutan.
            </p>
          </div>
        </div>

        {/* PAGE 6: Call To Action & Contact */}
        <div className="h-[100vh] md:min-h-0 md:h-[297mm] print:h-[297mm] p-6 sm:p-10 md:p-16 print:p-16 relative flex flex-col justify-center items-center text-center bg-[#1A1A1A] text-white print:bg-white print:text-black border-t border-[#c084fc]/10 print:border-none">
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(166,76,166,0.1),transparent_70%)] z-0 print:hidden"></div>
          
          <div className="relative z-10 w-full max-w-2xl">
            <h2 className="text-3xl md:text-5xl print:text-4xl font-black uppercase tracking-tighter mb-4 md:mb-6 print:mb-6 text-white print:text-black">Mari Berkolaborasi</h2>
            <p className="text-sm md:text-lg print:text-lg text-white/70 print:text-gray-600 mb-8 md:mb-12 print:mb-12">
              Hubungi kami untuk konsultasi gratis dan mulailah membangun warisan masa depan bersama Arus Liar Inisiatif Grup.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 print:grid-cols-2 gap-4 md:gap-6 print:gap-6 text-left mb-8 md:mb-12 print:mb-12 relative">
              {/* Decorative glow behind cards */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#c084fc]/5 blur-[100px] -z-10 rounded-full print:hidden"></div>

              <a href="mailto:info@araing.id" className="group flex items-start gap-4 p-6 rounded-3xl bg-white/5 hover:bg-[#c084fc]/10 border border-white/10 hover:border-[#c084fc]/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(192,132,252,0.15)] print:bg-white print:border-gray-200 print:p-4 print:hover:translate-y-0 print:shadow-none">
                <div className="w-12 h-12 rounded-full bg-black/40 border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#c084fc] group-hover:border-[#c084fc] transition-all duration-300 print:bg-gray-100 print:border-gray-200">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 print:w-6 print:h-6 text-[#c084fc] group-hover:text-white transition-colors flex-shrink-0 print:text-black" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs print:text-xs uppercase tracking-widest text-white/50 group-hover:text-[#c084fc]/80 print:text-gray-500 mb-1 transition-colors">Email Resmi</p>
                  <p className="font-bold text-sm md:text-base print:text-base text-white print:text-black">info@araing.id</p>
                </div>
              </a>

              <a href="https://wa.me/6281122334455" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 p-6 rounded-3xl bg-white/5 hover:bg-[#c084fc]/10 border border-white/10 hover:border-[#c084fc]/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(192,132,252,0.15)] print:bg-white print:border-gray-200 print:p-4 print:hover:translate-y-0 print:shadow-none">
                <div className="w-12 h-12 rounded-full bg-black/40 border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#c084fc] group-hover:border-[#c084fc] transition-all duration-300 print:bg-gray-100 print:border-gray-200">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 print:w-6 print:h-6 text-[#c084fc] group-hover:text-white transition-colors flex-shrink-0 print:text-black" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs print:text-xs uppercase tracking-widest text-white/50 group-hover:text-[#c084fc]/80 print:text-gray-500 mb-1 transition-colors">WhatsApp / Telepon</p>
                  <p className="font-bold text-sm md:text-base print:text-base text-white print:text-black">+62 857 9346 8966</p>
                </div>
              </a>

              <a href="https://araing.id" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 p-6 rounded-3xl bg-white/5 hover:bg-[#c084fc]/10 border border-white/10 hover:border-[#c084fc]/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(192,132,252,0.15)] print:bg-white print:border-gray-200 print:p-4 print:hover:translate-y-0 print:shadow-none">
                <div className="w-12 h-12 rounded-full bg-black/40 border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#c084fc] group-hover:border-[#c084fc] transition-all duration-300 print:bg-gray-100 print:border-gray-200">
                  <Globe className="w-5 h-5 md:w-6 md:h-6 print:w-6 print:h-6 text-[#c084fc] group-hover:text-white transition-colors flex-shrink-0 print:text-black" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs print:text-xs uppercase tracking-widest text-white/50 group-hover:text-[#c084fc]/80 print:text-gray-500 mb-1 transition-colors">Website</p>
                  <p className="font-bold text-sm md:text-base print:text-base text-white print:text-black">www.araing.id</p>
                </div>
              </a>

              <a href="https://maps.google.com/?q=Cimahi,Indonesia" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 p-6 rounded-3xl bg-white/5 hover:bg-[#c084fc]/10 border border-white/10 hover:border-[#c084fc]/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(192,132,252,0.15)] print:bg-white print:border-gray-200 print:p-4 print:hover:translate-y-0 print:shadow-none">
                <div className="w-12 h-12 rounded-full bg-black/40 border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#c084fc] group-hover:border-[#c084fc] transition-all duration-300 print:bg-gray-100 print:border-gray-200">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 print:w-6 print:h-6 text-[#c084fc] group-hover:text-white transition-colors flex-shrink-0 print:text-black" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs print:text-xs uppercase tracking-widest text-white/50 group-hover:text-[#c084fc]/80 print:text-gray-500 mb-1 transition-colors">Lokasi Kantor</p>
                  <p className="font-bold text-xs md:text-sm print:text-sm text-white print:text-black">Cimahi, Indonesia</p>
                </div>
              </a>
            </div>

            <div className="flex justify-center">
              <div className="print:hidden">
                <img src="/logo-araing.svg" alt="Logo" className="h-8 md:h-12 print:h-12 w-auto filter invert brightness-0" style={{ filter: 'brightness(0) invert(1)' }} />
              </div>
              <div className="hidden print:block">
                <img src="/logo-araing.svg" alt="Logo" className="h-8 md:h-12 print:h-12 w-auto filter invert brightness-0" style={{ filter: 'brightness(0)' }} />
              </div>
            </div>
          </div>
        </div>

      </div>

      <style jsx global>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }
          body {
            background-color: white !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .page-break-after-always {
            page-break-after: always;
            height: 297mm;
            overflow: hidden;
            box-sizing: border-box;
          }
        }
      `}</style>
    </div>
  );
}
