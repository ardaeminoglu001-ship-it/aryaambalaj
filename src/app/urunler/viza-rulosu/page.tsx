"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function VizaRulosuPage() {
    const products = [
        "Termal Rulo",
        "Pos Rulosu",
        "Terazi Rulosu"
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
                <div className="max-w-4xl mx-auto">
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
                            Viza Rulosu Çeşitleri
                        </h1>
                        <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
                            Tüm pos cihazları, yazar kasalar ve teraziler ile uyumlu, yüksek kaliteli ve silinmeye dayanıklı termal rulo çeşitleri.
                        </p>
                    </motion.div>

                    {/* Products List */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                    >
                        <div className="bg-primary-50 p-6 border-b border-primary-100">
                            <h2 className="text-2xl font-bold text-primary-900 text-center">
                                Rulo <span className="text-primary-600 font-normal">Çeşitleri</span>
                            </h2>
                        </div>
                        <div className="p-6 md:p-8">
                            <ul className="space-y-4">
                                {products.map((item, index) => (
                                    <li key={index} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl hover:bg-zinc-50 transition-colors border border-gray-100 hover:border-primary-100 shadow-sm sm:shadow-none group">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white border border-gray-200 text-gray-600 rounded-full flex items-center justify-center font-bold font-serif group-hover:scale-110 group-hover:border-primary-200 group-hover:text-primary-800 transition-all shadow-sm">
                                                {index + 1}
                                            </div>
                                            <span className="font-semibold text-gray-800 text-lg">
                                                {item}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => handleWhatsAppClick(item)}
                                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-50 text-green-700 hover:bg-green-100 hover:text-green-800 rounded-lg text-sm font-semibold transition-colors w-full sm:w-auto mt-2 sm:mt-0"
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
