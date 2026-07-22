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
  description: "Arus Liar Inisiatif Grup (araing.id) adalah ekosistem kolaboratif multi-sektor yang berfokus pada dampak sosial dan keunggulan komersial.",
  openGraph: {
    title: "Arus Liar Inisiatif Grup - araing.id",
    description: "Ekosistem kolaboratif multi-sektor yang berfokus pada dampak sosial dan keunggulan komersial.",
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
  twitter: {
    card: "summary_large_image",
    title: "Arus Liar Inisiatif Grup",
    description: "Ekosistem kolaboratif multi-sektor yang berfokus pada dampak sosial dan keunggulan komersial.",
    images: ["/og-image.png"],
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
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
