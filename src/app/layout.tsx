import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Arya Ambalaj | Ankara Toptan Ambalaj",
  description: "Ankara Altındağ'da 15 yıllık tecrübeyle toptan poşet, ambalaj, karton ve plastik ürün tedariği sağlayan güvenilir çözüm ortağınız.",
  keywords: ["poşet", "ankara ambalaj", "ambalaj malzemesi", "toptan ambalaj", "karton bardak", "temizlik malzemeleri"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
