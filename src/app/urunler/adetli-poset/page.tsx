"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AdetliPosetPage() {
    const products = [
        {
            category: "Birpack Serisi",
            items: [
                "Birpack 150 Adetli Büyük Boy",
                "Birpack 200 Adetli Orta Boy",
                "Birpack 300 Adetli Küçük Boy"
            ]
        },
        {
            category: "Özel Adetli Seriler",
            items: [
                "İnce Süper Mini 500 Adetli"
            ]
        }
    ];

    const handleWhatsAppClick = (productName: string) => {
        const text = `Merhaba, Arya Ambalaj internet sitesinden geliyorum. ${productName} poşet hakkında fiyat ve detaylı bilgi alabilir miyim?`;
        const url = `https://wa.me/905424434495?text=${encodeURIComponent(text)}`;
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
                            Adetli Poşet Çeşitleri
                        </h1>
                        <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
                            İşletmeniz için ideal kalınlık ve adetlerde, ekonomik ve dayanıklı toptan baskısız poşet seçenekleri. Fiyat bilgisi için hemen iletişime geçin.
                        </p>
                    </motion.div>

                    {/* Products Grid */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
                        {products.map((group, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col"
                            >
                                <div className="bg-primary-50 p-6 border-b border-primary-100">
                                    <h2 className="text-2xl font-bold text-primary-900 text-center">
                                        {group.category}
                                    </h2>
                                </div>
                                <div className="p-4 sm:p-6 flex-grow flex flex-col">
                                    <ul className="space-y-4 flex-grow mb-4">
                                        {group.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100 shadow-sm sm:shadow-none bg-zinc-50/50 sm:bg-transparent group">
                                                <div className="flex flex-row items-center gap-4 flex-1">
                                                    {/* Resim Eklenebilir Rozet (Placeholder) */}
                                                    <div className="w-12 h-12 rounded-full bg-gray-200 shrink-0 shadow-inner flex items-center justify-center overflow-hidden relative group-hover:bg-primary-50 transition-all">
                                                    </div>

                                                    <span className="font-semibold text-gray-800 leading-snug">
                                                        {item}
                                                    </span>
                                                </div>
                                                <button
                                                    onClick={() => handleWhatsAppClick(item)}
                                                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-green-50 text-green-700 hover:bg-green-100 hover:text-green-800 rounded-lg text-sm font-semibold transition-colors w-full sm:w-auto shrink-0 mt-2 sm:mt-0"
                                                >
                                                    <MessageCircle className="w-5 h-5" />
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
        </div>
    );
}
