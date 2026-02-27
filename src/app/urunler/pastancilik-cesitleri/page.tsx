"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PastancilikCesitleriPage() {
    const categories = [
        {
            title: "Pasta Altlıkları",
            items: [
                "Küçük Pasta Altlığı",
                "Büyük Pasta Altlığı",
                "Mini Pasta Altlığı",
                "0 No Pasta Altlığı",
                "1 No Pasta Altlığı",
                "2 No Pasta Altlığı"
            ]
        },
        {
            title: "Kutular",
            items: [
                "Mini Pasta Kutusu",
                "1 No Pasta Kutusu",
                "2 No Pasta Kutusu",
                "500gr Baklava Kutusu",
                "1000gr Baklava Kutusu",
                "500gr Kuru Pasta Kutusu",
                "1000gr Kuru Pasta Kutusu"
            ]
        },
        {
            title: "Tatlı Kapları (Sert Plastik)",
            items: [
                "Sert Plastik Magnolya Kabı",
                "Sert Plastik Ayaklı Tatlı Kabı",
                "Sert Plastik Kavanoz Kabı (Tatlı İçin)",
                "Sert Plastik Ayaksız Yayvan Tatlı Kabı"
            ]
        },
        {
            title: "Ekipman ve Diğer Ürünler",
            items: [
                "Yaş Pasta Resmi",
                "Kremşanti Torbası",
                "Muffin Kek Kabı",
                "Gıda Boyası"
            ]
        }
    ];

    const handleWhatsAppClick = (productName: string) => {
        const text = `Merhaba, Arya Ambalaj internet sitesinden geliyorum. ${productName} hakkında fiyat ve detaylı bilgi alabilir miyim?`;
        const url = `https://wa.me/905424422857?text=${encodeURIComponent(text)}`;
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
                            Pastancılık Çeşitleri
                        </h1>
                        <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
                            Tüm pastaneler ve kafe işletmeleri için pasta kutuları, altlıkları, özel tasarım sunum kapları ve profesyonel ekipmanlar.
                        </p>
                    </motion.div>

                    {/* Category Grid */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                        {categories.map((group, index) => (
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
                                        {group.title}
                                    </h2>
                                </div>
                                <div className="p-4 sm:p-6 flex-grow flex flex-col">
                                    <ul className="space-y-3 flex-grow">
                                        {group.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-lg hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100 group">
                                                <span className="font-medium text-gray-800 text-sm sm:text-base">
                                                    {item}
                                                </span>
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
