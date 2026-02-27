"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function KilogramlikPosetPage() {
    const products = [
        { brand: "Aybal", types: ["Büyük Boy", "Orta Boy", "Küçük Boy", "Battal Boy"] },
        { brand: "Nehir", types: ["Küçük Boy", "Orta Boy", "Büyük Boy", "Battal Boy"] },
        { brand: "Naksan", types: ["Süper Mini", "Yeni Mini", "Küçük Boy", "Orta Boy", "Büyük Boy", "Battal Boy"] },
    ];

    const handleWhatsAppClick = (productName: string) => {
        const text = `Merhaba, Arya Ambalaj internet sitesinden geliyorum. ${productName} cinsi poşet hakkında fiyat ve detaylı bilgi alabilir miyim?`;
        const url = `https://wa.me/905424422857?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="min-h-screen flex flex-col font-sans bg-zinc-50">
            <Navbar />

            <main className="flex-grow py-12 md:py-20 px-4 md:px-8 lg:px-12">
                <div className="max-w-5xl mx-auto">
                    {/* Back Link */}
                    <div className="mb-8">
                        <Link
                            href="/urunler"
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-800 transition-colors font-medium text-sm"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Katalog & Ürünler'e Dön
                        </Link>
                    </div>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 tracking-tight">
                            Kilogramlık Poşet Çeşitleri
                        </h1>
                        <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
                            Aybal, Nehir ve Naksan markalarının en çok tercih edilen dayanıklı hışır ve atlet poşet seçenekleri. Fiyat bilgisi için hemen iletişime geçin.
                        </p>
                    </motion.div>

                    {/* Products Grid */}
                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        {products.map((brandGroup, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col"
                            >
                                <div className="bg-primary-50 p-6 border-b border-primary-100">
                                    <h2 className="text-2xl font-bold text-primary-900 text-center">
                                        {brandGroup.brand} <span className="text-primary-600 font-normal">Poşetleri</span>
                                    </h2>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <ul className="space-y-4 flex-grow mb-8">
                                        {brandGroup.types.map((type, typeIndex) => (
                                            <li key={typeIndex} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-lg hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100">
                                                <span className="font-semibold text-gray-800">
                                                    {brandGroup.brand} {type}
                                                </span>
                                                <button
                                                    onClick={() => handleWhatsAppClick(`${brandGroup.brand} ${type}`)}
                                                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 hover:bg-green-100 hover:text-green-800 rounded-md text-sm font-medium transition-colors"
                                                >
                                                    <MessageCircle className="w-4 h-4" />
                                                    Fiyat Sor
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
            <WhatsAppFAB />
        </div>
    );
}
