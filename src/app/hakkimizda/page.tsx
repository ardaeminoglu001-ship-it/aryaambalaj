"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#121212]">
            <Navbar />

            <main className="flex-grow flex items-center justify-center py-24 px-4 md:px-8 lg:px-12 relative overflow-hidden">
                <div className="w-full max-w-5xl mx-auto relative z-10 flex flex-col items-center">
                    <div className="text-center md:px-12 py-8">
                        {/* Lüks Serif Başlık */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-10 text-[#D4AF37]"
                            style={{ fontFamily: 'var(--font-playfair), serif' }}
                        >
                            15 Yıllık Tecrübe
                        </motion.h1>

                        {/* Zarif Altın Çizgi */}
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                            className="w-16 h-[2px] bg-[#D4AF37]/60 mx-auto mb-12 origin-center"
                        ></motion.div>

                        {/* Klas, İnce Gövde Metni */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                            className="text-[#E0E0E0] text-lg md:text-xl font-light leading-relaxed md:leading-[2.2] max-w-4xl mx-auto tracking-wide"
                            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                        >
                            Ankara'nın Hüseyingazi ve Karapürçek bölgesinin ilk poşet ve ambalaj toptancısı olan Arya Ambalaj, sektördeki 15 yıllık köklü geçmişi ve sarsılmaz hizmet anlayışıyla kaliteden ödün vermeden yoluna devam etmektedir. Bölge esnafına ve işletmelere sunduğumuz güvenilir ambalaj çözümleriyle, 15 yıldır olduğu gibi bugün de güvenin ve tecrübenin adresi olmaktan gurur duyuyoruz.
                        </motion.p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
