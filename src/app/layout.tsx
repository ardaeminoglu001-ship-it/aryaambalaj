import type { Metadata } from "next";
import { Inter, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arya Ambalaj | Ankara Toptan Ambalaj ve Poşet",
  description: "Ankara Altındağ Hüseyingazi ve Karapürçek bölgesinin lider ambalaj toptancısı. 15 yıllık tecrübemizle toptan poşet, karton bardak, köpük tabak ve temizlik malzemeleri.",
  keywords: [
    "poşet", "ankara ambalaj", "ambalaj malzemesi", "toptan ambalaj",
    "karton bardak", "temizlik malzemeleri", "köpük tabak", "aybal poşet",
    "naksan poşet", "toptan karton bardak", "ankara poşet", "hüseyingazi ambalaj"
  ],
  openGraph: {
    title: "Arya Ambalaj | Toptan ve Perakende Ambalaj Çözümleri",
    description: "Ankara'nın lider toptan ambalaj tedarikçisi. Poşet, karton bardak, köpük tabak ve ambalaj malzemelerinde en uygun fiyatlar.",
    url: "https://aryaambalaj.com",
    siteName: "Arya Ambalaj",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${inter.variable} ${playfair.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
