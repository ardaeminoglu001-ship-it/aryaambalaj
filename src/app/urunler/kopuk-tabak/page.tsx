"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function KopukTabakPage() {
    const products = [
        {
            category: "Erze Marka Köpük Tabaklar",
            items: [
                "Erze 3 Gözlü Köpük Tabak",
                "Erze 5 Gözlü Köpük Tabak",
                "Erze Tek Kare Mod 16 Köpük Tabak",
                "Erze Tek Kare Mod 2 Köpük Tabak",
                "Erze Tek Kare Mod 1 Köpük Tabak",
                "Erze Yuvarlak A33 Köpük Tabak",
                "Erze Yuvarlak B33 Köpük Tabak",
                "Erze Yuvarlak C33 Köpük Tabak",
                "Erze Kapaklı Tek Gözlü C23 Köpük Tabak",
                "Erze Kapaklı 3 Gözlü A23 Köpük Tabak",
                "Erze Tek Gözlü Kapaklı Küçük D23"
            ]
        },
        {
            category: "Köpüksan Marka Köpük Tabaklar",
            items: [
                "Köpüksan 3 Gözlü Köpük Tabak",
                "Köpüksan 5 Gözlü Köpük Tabak",
                "Köpüksan Tek Kare Mod 16 Köpük Tabak",
                "Köpüksan Tek Kare Mod 1 Köpük Tabak",
                "Köpüksan Tek Kare Mod 2 Köpük Tabak",
                "Köpüksan Tek Kare C110 Köpük Tabak",
                "Köpüksan Tepsi K8 Köpük Tabak",
                "Köpüksan Hamburger Köpük Tabağı"
            ]
        },
        {
            category: "Diğer Köpük Tabaklar & Kaplar",
            items: [
                "Mod 16 Turuncu Köpük Tabak",
                "Mod 1 Turuncu Köpük Tabak"
            ]
        },
        {
            category: "Strafor Köpük Kasalar",
            items: [
                "Strafor Köpük Kasa 5kg",
                "Strafor Köpük Kasa 10kg",
                "Strafor Köpük Kasa 15kg",
                "Strafor Köpük Kasa 20kg"
            ]
        }
    ];

    const handleWhatsAppClick = (productName: string) => {
        const text = `Merhaba, Arya Ambalaj internet sitesinden geliyorum. ${productName} hakkında fiyat ve detaylı bilgi alabilir miyim?`;
        const url = `https://wa.me/905424434495?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="min-h-screen flex flex-col font-sans bg-zinc-50">
            <Navbar />

            <main className="flex-grow py-12 md:py-20 px-4 md:px-8 lg:px-12">
                <div className="max-w-6xl mx-auto">
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
                            Köpük Tabak Çeşitleri
                        </h1>
                        <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
                            Erze ve Köpüksan markalarının en kaliteli, ısıyı muhafaza eden tek kullanımlık köpük (strafor) tabak ve taşıma ürünleri.
                        </p>
                    </motion.div>

                    {/* Products Grid */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                        {products.map((group, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col"
                            >
                                <div className="bg-primary-50 p-6 border-b border-primary-100">
                                    <h2 className="text-xl font-bold text-primary-900 flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-white text-primary-800 flex items-center justify-center text-sm shadow-sm">
                                            {index + 1}
                                        </div>
                                        {group.category}
                                    </h2>
                                </div>
                                <div className="p-4 sm:p-6 flex-grow flex flex-col">
                                    <ul className="space-y-3 flex-grow">
                                        {group.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-lg hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100 group">
                                                <div className="flex flex-row items-center gap-4 flex-1">
                                                    <div className="w-12 h-12 rounded-full bg-gray-200 shrink-0 shadow-inner flex items-center justify-center">
                                                    </div>
                                                    <span className="font-medium text-gray-800 text-sm sm:text-base leading-snug">
                                                        {item}
                                                    </span>
                                                </div>
                                                <button
                                                    onClick={() => handleWhatsAppClick(item)}
                                                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-50 text-green-700 hover:bg-green-100 hover:text-green-800 rounded-md text-sm font-semibold transition-colors w-full sm:w-auto shrink-0"
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
        </div>
    );
}
