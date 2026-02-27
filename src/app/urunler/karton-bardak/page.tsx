"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Karton Bardak Çeşitleri ve Toptan Fiyatları | Arya Ambalaj",
    description: "2.5oz, 4oz, 7oz, 8oz ve 12oz karton bardak çeşitleri. Ankara'da sıcak ve soğuk içecekler için sızdırmaz, toptan uygun fiyatlı karton bardaklar.",
};

export default function KartonBardakPage() {
    const sizes = ["2.5oz", "4oz", "6.5oz", "7oz", "8oz", "12oz"];

    const handleWhatsAppClick = (size: string) => {
        const text = `Merhaba, Arya Ambalaj internet sitesinden geliyorum. ${size} karton bardak hakkında fiyat ve detaylı bilgi alabilir miyim?`;
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
                            Karton Bardak Çeşitleri
                        </h1>
                        <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
                            Farklı ihtiyaçlara uygun boyutlarda sıvı sızdırmaz, ısıya dayanıklı karton bardaklar. Toptan alım ve fiyat bilgisi için hemen iletişime geçin.
                        </p>
                    </motion.div>

                    {/* Products List */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-w-3xl mx-auto"
                    >
                        <div className="bg-primary-50 p-6 border-b border-primary-100">
                            <h2 className="text-2xl font-bold text-primary-900 text-center">
                                Standart <span className="text-primary-600 font-normal">Boyutlar</span>
                            </h2>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-4">
                                {sizes.map((size, index) => (
                                    <li key={index} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100 group">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 bg-primary-100 text-primary-800 rounded-full flex items-center justify-center font-bold font-serif group-hover:scale-110 transition-transform shadow-sm">
                                                {size.replace('oz', '')}
                                            </div>
                                            <div>
                                                <span className="font-semibold text-gray-800 text-lg block">
                                                    {size} Karton Bardak
                                                </span>
                                                <span className="text-sm text-gray-500">
                                                    Sıcak ve soğuk içecekler için ideal
                                                </span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleWhatsAppClick(size)}
                                            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-green-50 text-green-700 hover:bg-green-100 hover:text-green-800 rounded-lg text-sm font-semibold transition-colors shadow-sm w-full sm:w-auto mt-2 sm:mt-0"
                                        >
                                            <MessageCircle className="w-5 h-5" />
                                            Fiyat Sor
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
