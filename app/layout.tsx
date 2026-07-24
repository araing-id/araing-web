import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arus Liar Inisiatif Grup - araing.id",
  description: "Arus Liar Inisiatif Grup lahir sebagai wujud transformasi kolektif—menyatukan ikatan persaudaraan dengan standar tata kelola profesional demi melahirkan karya bernilai luhur dan dampak sosial yang nyata bagi masyarakat.",
  openGraph: {
    title: "Arus Liar Inisiatif Grup - araing.id",
    description: "Arus Liar Inisiatif Grup lahir sebagai wujud transformasi kolektif—menyatukan ikatan persaudaraan dengan standar tata kelola profesional demi melahirkan karya bernilai luhur dan dampak sosial yang nyata bagi masyarakat.",
    url: "https://araing.id",
    siteName: "Arus Liar Inisiatif Grup",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arus Liar Inisiatif Grup Preview Image",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/logo-araing.svg",
    shortcut: "/logo-araing.svg",
    apple: "/logo-araing.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
