export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imgUrl: string | null;
  nickname: string;
  tagline: string;
  education: string;
  experience: string[];
  socials: {
    instagram?: string;
    tiktok?: string;
    linkedin?: string;
  };
  photos: string[];
}

export const teamMembers: TeamMember[] = [
  { 
    id: "P000001",
    name: "Priyambodo Pujo Sulaksono", 
    role: "CEO", 
    imgUrl: null,
    nickname: "pryamm",
    tagline: "Visionary leader driving innovation and sustainable growth across sectors.",
    education: "S2 Manajemen Bisnis & Inovasi",
    experience: [
      "10+ Tahun memimpin perusahaan startup teknologi.",
      "Mantan Direktur Operasional di perusahaan multinasional.",
      "Konsultan bisnis strategis untuk proyek pemerintah."
    ],
    socials: {
      instagram: "https://instagram.com/araing.id",
      linkedin: "https://linkedin.com/company/araing"
    },
    photos: []
  },
  { 
    id: "P000002",
    name: "Hafizh Alief Alamsyah", 
    role: "COO", 
    imgUrl: null,
    nickname: "alif",
    tagline: "Operational master ensuring flawless execution and scalability.",
    education: "S1 Teknik Industri",
    experience: [
      "Mengelola operasional rantai pasok nasional.",
      "Membangun SOP untuk 5+ anak perusahaan.",
      "Pakar optimalisasi efisiensi bisnis."
    ],
    socials: {
      instagram: "https://instagram.com/araing.id"
    },
    photos: []
  },
  { 
    id: "P000003",
    name: "Salsabilla Adfanisa", 
    role: "CFO", 
    imgUrl: null,
    nickname: "bocil",
    tagline: "Strategic financial planner safeguarding the company's future.",
    education: "S2 Keuangan dan Perbankan",
    experience: [
      "Mantan auditor di KAP Big Four.",
      "Mengawal IPO perusahaan teknologi.",
      "Ahli dalam restrukturisasi finansial."
    ],
    socials: {
      instagram: "https://instagram.com/araing.id"
    },
    photos: []
  },
  { 
    id: "P000004",
    name: "Shabila Pridadindya", 
    role: "CSO", 
    imgUrl: null,
    nickname: "bile",
    tagline: "Architect of long-term strategies and market positioning.",
    education: "S1 Ilmu Komunikasi & Strategi Bisnis",
    experience: [
      "Pakar penetrasi pasar dan ekspansi bisnis.",
      "Berpengalaman dalam negosiasi B2B.",
      "Membentuk aliansi strategis dengan institusi."
    ],
    socials: {
      instagram: "https://instagram.com/araing.id",
      tiktok: "https://tiktok.com/@araing.id"
    },
    photos: []
  },
  { 
    id: "P000005",
    name: "Bella Wyndara", 
    role: "CMO", 
    imgUrl: null,
    nickname: "beyaw",
    tagline: "Creative marketing genius building powerful brand narratives.",
    education: "S1 Pemasaran Digital",
    experience: [
      "Mantan Head of Marketing di perusahaan e-commerce.",
      "Mencapai 10 juta+ impresi kampanye digital.",
      "Pakar dalam branding korporat."
    ],
    socials: {
      instagram: "https://instagram.com/araing.id",
      tiktok: "https://tiktok.com/@araing.id"
    },
    photos: []
  },
  { 
    id: "P000006",
    name: "Ferdiansyah Nugraha", 
    role: "CTO", 
    imgUrl: null,
    nickname: "ferdi",
    tagline: "Tech visionary building scalable and secure digital infrastructure.",
    education: "S1 Teknik Informatika",
    experience: [
      "Arsitek sistem cloud dan infrastruktur backend.",
      "Membangun platform dengan jutaan pengguna aktif.",
      "Pakar keamanan siber dan arsitektur microservices."
    ],
    socials: {
      instagram: "https://instagram.com/araing.id"
    },
    photos: []
  },
  { 
    id: "P000007",
    name: "Decky Firmansyah", 
    role: "Commissioner", 
    imgUrl: null,
    nickname: "ahong",
    tagline: "Seasoned advisor providing strategic oversight and governance.",
    education: "S3 Ilmu Hukum & Bisnis",
    experience: [
      "Mantan pejabat strategis instansi pemerintah.",
      "Pengawas tata kelola perusahaan multinasional.",
      "Pakar dalam regulasi dan kebijakan bisnis."
    ],
    socials: {
      linkedin: "https://linkedin.com/company/araing"
    },
    photos: []
  },
  { 
    id: "P000008",
    name: "Putri Dwi Lestari", 
    role: "Head of Digital Media", 
    imgUrl: null,
    nickname: "el",
    tagline: "Digital media expert driving engagement and social impact.",
    education: "S1 Desain Komunikasi Visual",
    experience: [
      "Mantan Creative Director agensi multinasional.",
      "Memimpin tim kreatif pemenang penghargaan.",
      "Pakar analisis audiens dan media sosial."
    ],
    socials: {
      instagram: "https://instagram.com/araing.id",
      tiktok: "https://tiktok.com/@araing.id"
    },
    photos: []
  },
  { 
    id: "P000009",
    name: "Restu Tidar Nugraha", 
    role: "Head of Tech-X", 
    imgUrl: null,
    nickname: "restu",
    tagline: "Innovator in experimental technologies and digital transformation.",
    education: "S1 Sistem Informasi",
    experience: [
      "Peneliti dalam teknologi AI dan IoT.",
      "Mengembangkan produk transformasi digital untuk manufaktur.",
      "Pelopor implementasi otomatisasi proses robotik (RPA)."
    ],
    socials: {
      instagram: "https://instagram.com/araing.id"
    },
    photos: []
  },
  { 
    id: "P000010",
    name: "Riskie Septiani", 
    role: "Head of Healthcare", 
    imgUrl: null,
    nickname: "iki",
    tagline: "Champion for modern, accessible, and integrated healthcare solutions.",
    education: "S2 Manajemen Administrasi Rumah Sakit (MARS)",
    experience: [
      "Konsultan manajemen rumah sakit dan faskes tingkat pertama.",
      "Pakar standarisasi kualitas pelayanan kesehatan.",
      "Pemimpin proyek sistem informasi rekam medis digital."
    ],
    socials: {
      instagram: "https://instagram.com/araing.id"
    },
    photos: []
  },
  { 
    id: "P000011",
    name: "Fariq Irham", 
    role: "Head of Infrastructure", 
    imgUrl: null,
    nickname: "fosil",
    tagline: "Master builder of robust, sustainable physical and digital infrastructures.",
    education: "S1 Teknik Sipil",
    experience: [
      "Manajer proyek infrastruktur berskala nasional.",
      "Pakar integrasi infrastruktur cerdas (Smart City).",
      "Berpengalaman 8+ tahun dalam konstruksi strategis."
    ],
    socials: {
      instagram: "https://instagram.com/araing.id"
    },
    photos: []
  },
  { 
    id: "P000012",
    name: "Gina Dwi Cahyani", 
    role: "Head of Legal Advisory", 
    imgUrl: null,
    nickname: "gina",
    tagline: "Legal expert ensuring absolute compliance and unshakeable corporate integrity.",
    education: "S2 Ilmu Hukum Pidana & Korporasi",
    experience: [
      "Mantan konsultan hukum di firma hukum terkemuka.",
      "Pakar legalitas, perizinan, dan kepatuhan perusahaan.",
      "Pendamping hukum untuk proyek-proyek strategis BUMN."
    ],
    socials: {
      linkedin: "https://linkedin.com/company/araing"
    },
    photos: []
  },
  { 
    id: "P000013",
    name: "Iyarra Herlan Nugraha", 
    role: "Secretary", 
    imgUrl: null,
    nickname: "ara",
    tagline: "Administrative maestro organizing the core rhythm of the company.",
    education: "S1 Administrasi Bisnis",
    experience: [
      "Mantan eksekutif asisten direksi korporat besar.",
      "Pakar dalam korespondensi dan tata naskah perusahaan.",
      "Pengelola efisiensi administratif lintas divisi."
    ],
    socials: {
      instagram: "https://instagram.com/araing.id"
    },
    photos: []
  },
  { 
    id: "P000014",
    name: "Denny Rizky", 
    role: "Member", 
    imgUrl: null,
    nickname: "denny",
    tagline: "Dedicated professional striving for operational excellence.",
    education: "S1 Manajemen",
    experience: [
      "Aktif dalam pengembangan komunitas dan relasi eksternal.",
      "Fasilitator operasional lapangan."
    ],
    socials: {
      instagram: "https://instagram.com/araing.id"
    },
    photos: []
  },
  { 
    id: "P000015",
    name: "Naufal Fausta", 
    role: "Member", 
    imgUrl: null,
    nickname: "uta",
    tagline: "Creative talent with an eye for detail and impact.",
    education: "S1 Desain Komunikasi Visual",
    experience: [
      "Spesialis multimedia dan konten digital.",
      "Memiliki portofolio luas dalam produksi audiovisual."
    ],
    socials: {
      instagram: "https://instagram.com/araing.id"
    },
    photos: []
  },
  { 
    id: "P000016",
    name: "Husni Siddiq Rijaldi", 
    role: "Member", 
    imgUrl: null,
    nickname: "husni",
    tagline: "Reliable problem solver in challenging environments.",
    education: "S1 Teknik Lingkungan",
    experience: [
      "Analis kebijakan dan implementasi lingkungan berkelanjutan.",
      "Pelaksana proyek manajemen sumber daya."
    ],
    socials: {
      instagram: "https://instagram.com/araing.id"
    },
    photos: []
  },
  { 
    id: "P000017",
    name: "M Rizky Hidayatulloh", 
    role: "Member", 
    imgUrl: null,
    nickname: "yayat",
    tagline: "Analytical mind driven by data and continuous learning.",
    education: "S1 Sistem Informasi",
    experience: [
      "Peneliti data dan asisten analis bisnis.",
      "Pengembangan instrumen evaluasi performa layanan."
    ],
    socials: {
      instagram: "https://instagram.com/araing.id"
    },
    photos: []
  },
  { 
    id: "P000018",
    name: "Renald Alfarish", 
    role: "Member", 
    imgUrl: null,
    nickname: "renald",
    tagline: "Passionate team player focused on collaborative success.",
    education: "S1 Ilmu Komunikasi",
    experience: [
      "Penggerak relasi media dan public relations.",
      "Aktif dalam inisiatif sosial dan kampanye kesadaran masyarakat."
    ],
    socials: {
      instagram: "https://instagram.com/araing.id"
    },
    photos: []
  },
  { 
    id: "P000019",
    name: "Muhammad Farrell", 
    role: "Member", 
    imgUrl: null,
    nickname: "payey",
    tagline: "Agile professional bringing fresh perspectives to the table.",
    education: "S1 Teknik Industri",
    experience: [
      "Optimalisasi rantai pasok dalam skala menengah.",
      "Fokus pada rekayasa sistem logistik."
    ],
    socials: {
      instagram: "https://instagram.com/araing.id"
    },
    photos: []
  }
];

export function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
}
