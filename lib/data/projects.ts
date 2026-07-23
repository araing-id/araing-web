export interface Project {
  id: string;
  title: string;
  category: string;
  status: string;
  progress: number;
  desc: string;
  challenge: string;
  solution: string;
  impact: string[];
  timeline: string;
}

export const activeProjects: Project[] = [
  { 
    id: "PRJ001",
    title: "Sobat Warga", 
    category: "Tech-X", 
    status: "Tahap Pengembangan", 
    progress: 40,
    desc: "Aplikasi tingkat RT, RW, dan desa/kelurahan untuk memfasilitasi administrasi dokumen dan pengembangan infrastruktur warga.",
    challenge: "Banyak warga di tingkat kelurahan hingga desa masih mengalami kesulitan dalam mengurus dokumen administrasi karena proses birokrasi yang berbelit dan tidak terpusat. Selain itu, pelaporan masalah infrastruktur lokal sering terhambat.",
    solution: "Sobat Warga hadir sebagai platform satu pintu (One-Stop Portal) berbasis aplikasi mobile yang memudahkan warga dalam pengajuan surat pengantar RT/RW, pelaporan fasilitas umum, hingga akses informasi desa secara real-time.",
    impact: [
      "Memangkas waktu pengurusan dokumen dari hitungan hari menjadi hitungan jam.",
      "Meningkatkan transparansi laporan infrastruktur dan keuangan desa.",
      "Digitalisasi data kependudukan secara terstruktur dan terenkripsi."
    ],
    timeline: "Q3 2026 - Q1 2027"
  },
  { 
    id: "PRJ002",
    title: "Araing Edu-Care", 
    category: "Edukasi & Hukum", 
    status: "Tahap Pengembangan", 
    progress: 30,
    desc: "Penyuluhan interaktif ke SD/SMP/SMA mengenai kesadaran hukum, kesehatan, bahaya NAPZA, dan edukasi anti kenakalan remaja.",
    challenge: "Tingginya angka kenakalan remaja, kurangnya edukasi hukum sejak dini, serta maraknya peredaran NAPZA yang menyasar generasi muda di tingkat pendidikan dasar hingga menengah.",
    solution: "Program penyuluhan keliling (roadshow) ke sekolah-sekolah dengan metode interaktif, melibatkan pakar hukum, psikolog, serta aparat penegak hukum yang menggunakan pendekatan persuasif dan mudah dipahami oleh pelajar.",
    impact: [
      "Membangun kesadaran dini tentang konsekuensi hukum dan kesehatan.",
      "Menekan potensi angka kriminalitas remaja melalui pencegahan (preventif).",
      "Memberikan wadah konsultasi anonim bagi siswa yang membutuhkan perlindungan."
    ],
    timeline: "Q4 2026 - Ongoing"
  },
  { 
    id: "PRJ003",
    title: "Pusat Kreasi & Penyaluran Bakat", 
    category: "Sosial Budaya", 
    status: "Tahap Pengembangan", 
    progress: 25,
    desc: "Wadah inovatif untuk mengarahkan minat dan bakat pemuda sebagai respons aktif dalam menekan angka kenakalan remaja.",
    challenge: "Banyak energi anak muda yang tidak tersalurkan secara positif karena minimnya fasilitas olahraga, seni, dan kreativitas yang dapat diakses secara gratis atau terjangkau, memicu terjadinya perilaku menyimpang.",
    solution: "Membangun ekosistem wadah kreatif (creative hub) yang menyediakan kelas seni, fasilitas olahraga, serta mentoring kreativitas digital (seperti desain, coding, dan videografi) untuk menyalurkan energi secara produktif.",
    impact: [
      "Lahirnya talenta lokal berdaya saing di industri kreatif.",
      "Penurunan drastis tingkat kenakalan remaja di kawasan percontohan.",
      "Terbangunnya komunitas positif yang saling mendukung antar pemuda."
    ],
    timeline: "Q3 2026 - Q2 2027"
  },
  { 
    id: "PRJ004",
    title: "Cek Kesehatan Masyarakat", 
    category: "Healthcare", 
    status: "Tahap Persiapan", 
    progress: 10,
    desc: "Cek kesehatan gratis (tensi, gula darah, kolesterol) yang menjangkau langsung ke pelosok desa sebagai bentuk kepedulian.",
    challenge: "Terbatasnya akses warga desa terhadap pemeriksaan kesehatan dasar akibat kendala jarak, biaya, dan kurangnya pemahaman preventif terhadap penyakit degeneratif.",
    solution: "Mengoperasikan unit kesehatan bergerak (mobile clinic) yang rutin mengunjungi desa-desa untuk memberikan layanan pemeriksaan dasar seperti tekanan darah, gula darah, dan kolesterol secara gratis tanpa syarat.",
    impact: [
      "Deteksi dini penyakit degeneratif yang dapat menyelamatkan nyawa.",
      "Peningkatan kesadaran pola hidup sehat di kalangan warga desa.",
      "Kemudahan rujukan ke fasilitas kesehatan terdekat bagi kasus risti (risiko tinggi)."
    ],
    timeline: "Q1 2027"
  },
  { 
    id: "PRJ005",
    title: "Bakti Sosial & Tindakan Gigi FKG", 
    category: "Healthcare", 
    status: "Tahap Persiapan", 
    progress: 15,
    desc: "Layanan pemeriksaan dan tindakan medis secara langsung, berkolaborasi dengan Fakultas Kedokteran Gigi (FKG).",
    challenge: "Kesehatan mulut dan gigi masih sering dianaktirikan oleh masyarakat. Biaya perawatan yang relatif tinggi membuat masyarakat menunda pengobatan hingga mencapai kondisi darurat.",
    solution: "Berkolaborasi dengan mahasiswa dan dosen dari Fakultas Kedokteran Gigi (FKG) untuk turun langsung memberikan penyuluhan sikat gigi yang benar serta tindakan medis dasar (cabut, tambal, pembersihan karang gigi).",
    impact: [
      "Akses kesehatan gigi dan mulut yang inklusif untuk ratusan warga.",
      "Edukasi masif pentingnya kebersihan oral (oral hygiene) di kalangan anak-anak.",
      "Penyediaan rekam medis gigi awal untuk masyarakat marginal."
    ],
    timeline: "Q2 2027"
  },
];
