import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-[#c084fc]/30 selection:text-purple-200">
      <Navbar />
      
      <main className="container mx-auto px-6 py-32 max-w-4xl">
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#c084fc]/20 text-[#c084fc] border border-[#c084fc]/30 mb-6">
            <span className="text-xs font-bold tracking-widest uppercase">Legal Document</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/50 text-sm">Pembaruan Terakhir: 21 Juli 2026</p>
        </div>

        <div className="prose prose-invert prose-purple max-w-none space-y-10 text-white/70">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Pendahuluan</h2>
            <p className="leading-relaxed">
              Arus Liar Inisiatif Grup ("Kami", "Perusahaan") menghormati privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda bagikan kepada kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, memelihara, dan melindungi informasi pengunjung website <strong>araing.id</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Informasi yang Kami Kumpulkan</h2>
            <p className="leading-relaxed mb-4">
              Sebagai portal profil perusahaan dan ekosistem kolaboratif, pengumpulan data kami bersifat sangat terbatas dan transparan. Kami mungkin mengumpulkan informasi berikut:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Informasi Kontak Sukarela:</strong> Nama, alamat email, atau nomor telepon jika Anda secara sukarela menghubungi kami melalui tautan email atau formulir kolaborasi (seperti program "Balad Araing").</li>
              <li><strong>Data Analitik Dasar:</strong> Data non-pribadi seperti jenis peramban (browser), sistem operasi, dan statistik kunjungan halaman untuk keperluan optimasi website (log standar web server).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Penggunaan Informasi</h2>
            <p className="leading-relaxed mb-4">
              Setiap informasi yang Anda berikan hanya akan digunakan untuk tujuan berikut:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Merespons pertanyaan, proposal kolaborasi, atau permintaan layanan yang Anda ajukan.</li>
              <li>Mengevaluasi pendaftaran relawan atau keterlibatan sumber daya manusia dalam ekosistem anak perusahaan kami.</li>
              <li>Meningkatkan pengalaman pengguna di website kami melalui evaluasi analitik lalu lintas data anonim.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Perlindungan dan Kerahasiaan Data</h2>
            <p className="leading-relaxed">
              Arus Liar Inisiatif Grup beroperasi dengan prinsip <em>holding company</em> di mana integritas dan kerahasiaan mitra adalah prioritas. Kami <strong>tidak pernah dan tidak akan pernah</strong> menjual, menyewakan, atau menukar informasi pribadi Anda kepada pihak ketiga untuk tujuan komersial di luar ekosistem terafiliasi kami, kecuali diwajibkan oleh hukum yang berlaku di Republik Indonesia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Tautan ke Situs Pihak Ketiga</h2>
            <p className="leading-relaxed">
              Website kami mungkin berisi tautan ke situs web anak perusahaan, mitra strategis, atau portofolio klien. Kebijakan Privasi ini tidak berlaku untuk situs web pihak ketiga tersebut. Kami menyarankan Anda untuk membaca kebijakan privasi dari setiap situs web yang Anda kunjungi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Hubungi Kami</h2>
            <p className="leading-relaxed">
              Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini atau pengelolaan data pribadi Anda, jangan ragu untuk menghubungi kami melalui <strong>contact@araing.id</strong>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
