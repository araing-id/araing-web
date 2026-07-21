import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-[#c084fc]/30 selection:text-purple-200">
      <Navbar />
      
      <main className="container mx-auto px-6 py-32 max-w-4xl">
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#c084fc]/20 text-[#c084fc] border border-[#c084fc]/30 mb-6">
            <span className="text-xs font-bold tracking-widest uppercase">Legal Document</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-4">
            Terms of Service
          </h1>
          <p className="text-white/50 text-sm">Pembaruan Terakhir: 21 Juli 2026</p>
        </div>

        <div className="prose prose-invert prose-purple max-w-none space-y-10 text-white/70">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Penerimaan Ketentuan</h2>
            <p className="leading-relaxed">
              Dengan mengakses dan menggunakan website <strong>araing.id</strong>, Anda secara otomatis menyetujui seluruh Ketentuan Layanan (<em>Terms of Service</em>) yang ditetapkan oleh Arus Liar Inisiatif Group. Jika Anda tidak setuju dengan ketentuan ini, Anda dipersilakan untuk menghentikan penggunaan situs ini.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Sifat Entitas dan Ekosistem</h2>
            <p className="leading-relaxed">
              Arus Liar Inisiatif Group bertindak sebagai <em>holding company</em> dan inkubator ide yang membawahi berbagai anak perusahaan (<em>subsidiaries</em>) independen di berbagai sektor. Segala bentuk kerja sama bisnis, penawaran proyek, atau operasional lapangan akan diatur dan tunduk pada kontrak spesifik yang mengikat entitas anak perusahaan terkait, bukan sekadar representasi dari website ini.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Hak Kekayaan Intelektual</h2>
            <p className="leading-relaxed mb-4">
              Seluruh konten, desain, logo, tulisan, dan aset digital yang terdapat di website ini adalah milik eksklusif Arus Liar Inisiatif Group atau anak perusahaannya, serta dilindungi oleh undang-undang hak cipta Republik Indonesia.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Portofolio:</strong> Proyek-proyek yang ditampilkan di halaman <code>/portofolio</code> adalah hasil karya nyata dari ekosistem kami dan mitra terkait. Menggandakan, memodifikasi, atau mengklaim hasil karya tersebut adalah pelanggaran hukum.</li>
              <li><strong>Penggunaan Terbatas:</strong> Dokumen <em>Company Profile</em> yang diunduh dari situs ini hanya boleh digunakan untuk tujuan referensi kerja sama bisnis dan tidak untuk disalahgunakan secara komersial tanpa izin tertulis.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Batasan Tanggung Jawab (Liability)</h2>
            <p className="leading-relaxed">
              Arus Liar Inisiatif Group berupaya memastikan seluruh informasi di website ini akurat dan mutakhir. Namun demikian, kami <strong>tidak bertanggung jawab</strong> atas kerugian langsung, tidak langsung, insidental, maupun konsekuensial yang mungkin timbul akibat penggunaan atau ketidakmampuan menggunakan website ini. Informasi yang bersifat proyeksi masa depan (<em>roadmap</em>, inisiatif akan datang) bukanlah sebuah janji mengikat yang menjamin hasil absolut.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Pengajuan Kolaborasi & Rekrutmen</h2>
            <p className="leading-relaxed">
              Inisiatif rekrutmen sukarela seperti program "Balad Araing" tunduk pada proses seleksi internal. Kami memiliki hak penuh untuk menerima atau menolak aplikasi kolaborasi atau keanggotaan berdasarkan kebijaksanaan strategis manajemen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Perubahan Ketentuan</h2>
            <p className="leading-relaxed">
              Arus Liar Inisiatif Group berhak memperbarui Ketentuan Layanan ini kapan saja tanpa pemberitahuan sebelumnya. Penggunaan berkelanjutan Anda atas situs ini setelah adanya pembaruan dianggap sebagai penerimaan Anda terhadap ketentuan yang baru.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
