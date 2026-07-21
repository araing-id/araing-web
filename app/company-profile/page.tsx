"use client";

import { Printer, ArrowLeft, Mail, MapPin, Phone, Globe } from "lucide-react";
import Link from "next/link";

export default function CompanyProfilePage() {
  const handlePrint = () => {
    window.print();
  };

  const teamMembers = Array.from({ length: 15 }).map((_, i) => ({
    name: `Anggota Tim ${i + 1}`,
    role: i % 3 === 0 ? "Executive" : i % 2 === 0 ? "Specialist" : "Manager",
    imgUrl: `https://ui-avatars.com/api/?name=Anggota+${i+1}&background=random&color=fff&size=200`,
  }));

  const portfolios = [
    { title: "Project Alpha", client: "Kementerian BUMN", desc: "Digitalisasi sistem operasional terpusat dengan peningkatan efisiensi 40%." },
    { title: "HealthTech Initiative", client: "RSUD Cimahi", desc: "Implementasi rekam medis elektronik terintegrasi berbasis cloud." },
    { title: "Social Impact Campaign", client: "NGO Nasional", desc: "Kampanye digital masif dengan jangkauan 2 juta+ impresi." },
    { title: "Smart City Infrastructure", client: "Pemkot Bandung", desc: "Masterplan dan implementasi IoT untuk pemantauan tata kota." },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#c084fc]/30 selection:text-purple-900">
      
      {/* Non-printable UI Controls */}
      <div className="fixed top-4 right-4 z-50 flex gap-4 print:hidden">
        <Link 
          href="/"
          className="flex items-center gap-2 bg-[#111111] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali
        </Link>
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 bg-[#c084fc] text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-[#a64ca6] transition shadow-lg"
        >
          <Printer className="w-4 h-4" />
          Download PDF / Cetak
        </button>
      </div>

      {/* Printable Document Container */}
      <div className="max-w-[210mm] mx-auto bg-white min-h-[297mm] shadow-[0_0_40px_rgba(0,0,0,0.1)] print:shadow-none print:w-full print:max-w-full">
        
        {/* PAGE 1: Cover & Intro */}
        <div className="h-[297mm] flex flex-col p-16 relative overflow-hidden page-break-after-always">
          {/* Aesthetic Shape */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c084fc]/10 rounded-bl-[100px] -z-10 print:bg-white print:border print:border-[#c084fc]/20"></div>
          
          <div className="mt-12 flex-shrink-0">
            <img src="/logo-araing.svg" alt="Logo" className="h-16 w-auto mb-8 filter invert brightness-0" style={{ filter: 'brightness(0)' }} />
            <h1 className="text-6xl font-black uppercase tracking-tighter leading-none mb-4">
              Company<br />Profile
            </h1>
            <div className="w-20 h-2 bg-[#c084fc] mb-8 print:bg-black"></div>
            <p className="text-2xl font-light text-gray-500 max-w-md">
              Mewariskan rekam jejak (legacy) serta dampak sosial yang konkret bagi kemajuan peradaban.
            </p>
          </div>

          <div className="mt-auto mb-12">
            <h3 className="text-lg font-bold uppercase tracking-widest text-[#c084fc] mb-4 print:text-black">Mukadimah</h3>
            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              Menyadari sepenuhnya bahwa potensi kreativitas, solidaritas, dan kompetensi teknis yang lahir dari dinamika sosial merupakan modal dasar yang tak ternilai, maka diperlukan sebuah wadah yang terstruktur, profesional, dan memiliki landasan hukum yang kuat. Wadah ini bertransformasi dari sekadar lingkaran pertemanan menjadi sebuah entitas bisnis komersial yang menjunjung tinggi nilai-nilai profesionalisme tanpa sedikit pun menanggalkan semangat persaudaraan. Atas dasar kesepakatan bersama, disusunlah Anggaran Dasar dan Anggaran Rumah Tangga (AD/ART) Arus Liar Inisiatif Group sebagai pedoman fundamental, arah strategis, serta solusi resolusi dalam setiap dinamika organisasi.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <p className="font-bold tracking-widest uppercase text-xs">Arus Liar Inisiatif Group</p>
            <p className="text-gray-500 text-xs">Tahun 2026</p>
          </div>
        </div>

        {/* PAGE 2: Arah, Visi & Misi */}
        <div className="h-[297mm] p-16 relative page-break-after-always flex flex-col">
          <div className="mb-12">
            <h2 className="text-xs font-bold text-[#c084fc] uppercase tracking-widest mb-2 print:text-gray-500">01. Tentang Kami</h2>
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">Arah Perusahaan</h3>
            <p className="text-base text-gray-700 leading-relaxed text-justify">
              Arah strategis perusahaan adalah bertransformasi menjadi holding company berskala nasional yang menaungi berbagai subsidiaries (anak perusahaan) di berbagai sektor. Perusahaan bertindak sebagai inkubator ide, penyedia modal, dan akselerator bisnis yang memastikan setiap sektor beroperasi secara mandiri, menguntungkan, dan memberikan dampak sosial positif bagi masyarakat Cimahi dan Indonesia.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-xs font-bold text-[#c084fc] uppercase tracking-widest mb-2 print:text-gray-500">Pasal 5</h2>
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">Visi</h3>
            <p className="text-base text-gray-700 leading-relaxed text-justify">
              Menjadi perusahaan induk dan ekosistem kolaboratif lintas sektor terkemuka yang tidak hanya mendominasi konversi pasar, tetapi juga memastikan setiap anggotanya mencapai puncak kesuksesan finansial dan keahlian profesi. Hal ini bertujuan untuk mewariskan rekam jejak (legacy) serta dampak sosial yang konkret bagi kemajuan peradaban masyarakat, baik di dunia nyata maupun ranah digital.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-xs font-bold text-[#c084fc] uppercase tracking-widest mb-2 print:text-gray-500">Pasal 6</h2>
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">Misi</h3>
            <ul className="list-decimal pl-5 space-y-4 text-base text-gray-700 text-justify">
              <li>Membangun dan mengembangkan portofolio karya berstandar industri tinggi di masing-masing sektor keahlian anggota.</li>
              <li>Melakukan penetrasi dan invasi pasar secara terukur dan strategis, dengan menyeimbangkan nilai komersial (profitabilitas) dan kebermanfaatan sosial (dampak).</li>
              <li>Menerapkan tata kelola kelembagaan yang transparan, terstruktur, adaptif, dan bervaluasi tinggi untuk menjamin kemandirian finansial seluruh anggota.</li>
            </ul>
          </div>
        </div>

        {/* PAGE 3: Kemampuan & Penawaran */}
        <div className="h-[297mm] p-16 relative flex flex-col page-break-after-always">
          <div className="mb-12">
            <h2 className="text-xs font-bold text-[#c084fc] uppercase tracking-widest mb-2 print:text-gray-500">02. Layanan Utama</h2>
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-8">Sektor Keahlian</h3>
            
            <div className="space-y-6">
              {[
                { name: "Digital Media", info: "Pemasaran digital, kampanye kreatif, dan manajemen media sosial tingkat lanjut." },
                { name: "Tech-X & Transformasi", info: "Konsultasi IT, pengembangan perangkat lunak, dan digitalisasi operasi bisnis." },
                { name: "Healthcare", info: "Sistem rekam medis terpadu dan solusi teknologi kesehatan modern." },
                { name: "Legal Advisory", info: "Pendampingan hukum perusahaan, kepatuhan regulasi, dan perizinan." },
                { name: "Infrastructure", info: "Perencanaan dan manajemen proyek infrastruktur cerdas." },
              ].map((sector, idx) => (
                <div key={idx} className="flex border-b border-gray-200 pb-4">
                  <div className="w-1/3 font-bold text-lg">{sector.name}</div>
                  <div className="w-2/3 text-gray-600 text-sm leading-relaxed">{sector.info}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <h2 className="text-xs font-bold text-[#c084fc] uppercase tracking-widest mb-2 print:text-gray-500">03. Nilai Tambah</h2>
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">Keunggulan Kami</h3>
            <div className="grid grid-cols-3 gap-6">
              {[
                { title: "Sinergi Lintas Sektor", desc: "Pendekatan holistik yang mengintegrasikan berbagai disiplin ilmu." },
                { title: "Keseimbangan Nilai", desc: "Menggabungkan profitabilitas komersial dengan dampak sosial nyata." },
                { title: "Tata Kelola Adaptif", desc: "Manajemen yang transparan dan siap menghadapi dinamika zaman." }
              ].map((val, idx) => (
                <div key={idx} className="p-5 bg-gray-50 border border-gray-100 rounded-xl">
                  <h4 className="font-bold text-base mb-2">{val.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PAGE 4: Rekam Jejak */}
        <div className="h-[297mm] p-16 relative flex flex-col page-break-after-always">
          <div className="mb-12">
            <h2 className="text-xs font-bold text-[#c084fc] uppercase tracking-widest mb-2 print:text-gray-500">04. Rekam Jejak</h2>
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">Portofolio Terpilih</h3>
            <div className="grid grid-cols-2 gap-6">
              {portfolios.map((item, idx) => (
                <div key={idx} className="p-6 border border-gray-200 rounded-xl">
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-[#c084fc] text-xs font-bold tracking-widest uppercase mb-3 print:text-gray-500">{item.client}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold uppercase tracking-tighter mb-6">Klien & Mitra Strategis</h3>
            {/* Placeholder Logos */}
            <div className="grid grid-cols-4 gap-4 opacity-40 grayscale">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div key={num} className="h-16 bg-gray-200 rounded-lg flex items-center justify-center border border-gray-300">
                  <span className="font-bold text-gray-400 text-xs">LOGO CLIENT</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold uppercase tracking-tighter mb-4">Testimoni Klien</h3>
            <p className="text-base italic text-gray-600 leading-relaxed mb-4">
              "Kolaborasi dengan Arus Liar Inisiatif Group memberikan dimensi baru bagi operasional kami. Pendekatan lintas sektor mereka sangat komprehensif dan menghasilkan dampak yang nyata."
            </p>
            <p className="font-bold text-sm">— Direktur Utama, Instansi Mitra</p>
          </div>
        </div>

        {/* PAGE 5: Manusia di Balik Perusahaan */}
        <div className="h-[297mm] p-16 relative flex flex-col page-break-after-always">
          <div className="mb-8">
            <h2 className="text-xs font-bold text-[#c084fc] uppercase tracking-widest mb-2 print:text-gray-500">05. The People</h2>
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">Tim Utama Kami</h3>
            <p className="text-sm text-gray-600">Dipimpin oleh para profesional berpengalaman yang mengutamakan nilai integritas dan persaudaraan.</p>
          </div>

          <div className="grid grid-cols-5 gap-y-8 gap-x-4">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <img 
                  src={member.imgUrl} 
                  alt={member.name} 
                  className="w-20 h-20 rounded-full object-cover mb-3 border border-gray-200"
                />
                <h4 className="font-bold text-xs leading-tight mb-1">{member.name}</h4>
                <p className="text-[#c084fc] text-[10px] uppercase font-bold tracking-wider print:text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-auto border-t border-gray-200 pt-8">
            <h4 className="font-bold text-lg mb-2">Struktur Organisasi</h4>
            <p className="text-sm text-gray-600 text-justify leading-relaxed">
              Arus Liar Inisiatif Group beroperasi dengan tata kelola kelembagaan yang transparan, di mana jajaran Komisaris (pengawas dan penasihat strategis) berkolaborasi erat dengan level Eksekutif (CEO, COO, CFO, CMO, CTO, CSO). Setiap direktorat menangani secara mandiri ekosistem anak perusahaan (subsidiaries) yang relevan, memastikan eksekusi operasional yang taktis dan berkelanjutan.
            </p>
          </div>
        </div>

        {/* PAGE 6: Call To Action & Contact */}
        <div className="h-[297mm] p-16 relative flex flex-col justify-center items-center text-center bg-[#111111] text-white print:bg-white print:text-black">
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(166,76,166,0.1),transparent_70%)] z-0 print:hidden"></div>
          
          <div className="relative z-10 w-full max-w-2xl">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-6">Mari Berkolaborasi</h2>
            <p className="text-lg text-white/70 print:text-gray-600 mb-12">
              Hubungi kami untuk konsultasi gratis dan mulailah membangun warisan masa depan bersama Arus Liar Inisiatif Group.
            </p>
            
            <div className="grid grid-cols-2 gap-8 text-left bg-white/5 print:bg-gray-50 border border-white/10 print:border-gray-200 p-8 rounded-3xl mb-12">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#c084fc] print:text-black flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50 print:text-gray-500 mb-1">Email Resmi</p>
                  <p className="font-bold">contact@araing.id</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#c084fc] print:text-black flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50 print:text-gray-500 mb-1">WhatsApp / Telepon</p>
                  <p className="font-bold">+62 811 2233 4455</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Globe className="w-6 h-6 text-[#c084fc] print:text-black flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50 print:text-gray-500 mb-1">Website</p>
                  <p className="font-bold">www.araing.id</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#c084fc] print:text-black flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50 print:text-gray-500 mb-1">Lokasi Kantor</p>
                  <p className="font-bold text-sm">Gedung Inovasi Lt. 8<br/>Cimahi, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              {/* Added standard styling for logo inversion on print */}
              <div className="print:hidden">
                <img src="/logo-araing.svg" alt="Logo" className="h-12 w-auto filter invert brightness-0" style={{ filter: 'brightness(0) invert(1)' }} />
              </div>
              <div className="hidden print:block">
                <img src="/logo-araing.svg" alt="Logo" className="h-12 w-auto filter invert brightness-0" style={{ filter: 'brightness(0)' }} />
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
            color: black !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .page-break-after-always {
            page-break-after: always;
            height: 297mm;
            overflow: hidden;
            box-sizing: border-box;
          }
          /* Ensure backgrounds print correctly */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
}
