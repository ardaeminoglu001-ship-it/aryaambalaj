"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Download, MapPin } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
            {/* Top Info Bar (Desktop only) */}
            <div className="hidden md:flex justify-between items-center bg-zinc-50 border-b border-gray-100 px-6 lg:px-12 py-2 text-xs text-gray-600">
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-primary-600" />
                        Beşikkaya, 1953. Sk. No:6, 06360 Altındağ/Ankara
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <a
                        href="https://wa.me/905424422857"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-primary-800 transition-colors font-medium"
                    >
                        <Phone className="w-3 h-3 text-primary-600" />
                        0542 442 2857
                    </a>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="px-4 md:px-6 lg:px-12">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="bg-primary-800 text-white w-10 h-10 rounded-lg flex items-center justify-center font-serif font-bold text-xl shadow-md">
                            A
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif font-bold text-xl text-gray-900 leading-none">
                                Arya Ambalaj
                            </span>
                            <span className="text-[10px] text-gray-500 font-medium tracking-widest uppercase mt-1">
                                Toptan & Perakende
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-primary-800 font-medium transition-colors"
                        >
                            Ana Sayfa
                        </Link>
                        <Link
                            href="/#kategoriler"
                            className="text-gray-700 hover:text-primary-800 font-medium transition-colors"
                        >
                            Katalog & Ürünler
                        </Link>
                        <Link
                            href="/hakkimizda"
                            className="text-gray-700 hover:text-primary-800 font-medium transition-colors"
                        >
                            Hakkımızda
                        </Link>
                    </div>

                    {/* Desktop Right Side (Call to Action) */}
                    <div className="hidden md:flex items-center gap-4">
                        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 font-medium text-sm transition-all duration-300">
                            <Download className="w-4 h-4" />
                            Kataloğu PDF İndir
                        </button>
                        <a
                            href="https://wa.me/905424422857?text=Merhaba, fiyat bilgisi almak istiyorum."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary-800 text-white font-medium text-sm shadow-md shadow-primary-800/20 hover:bg-primary-900 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Hemen İletişime Geç
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-600 hover:text-primary-800 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
                    <div className="flex flex-col px-4 pt-2 pb-6 gap-4">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 text-gray-800 hover:bg-gray-50 hover:text-primary-800 rounded-lg font-medium"
                        >
                            Ana Sayfa
                        </Link>
                        <Link
                            href="/#kategoriler"
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 text-gray-800 hover:bg-gray-50 hover:text-primary-800 rounded-lg font-medium"
                        >
                            Katalog & Ürünler
                        </Link>
                        <Link
                            href="/hakkimizda"
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 text-gray-800 hover:bg-gray-50 hover:text-primary-800 rounded-lg font-medium"
                        >
                            Hakkımızda
                        </Link>

                        <div className="h-px bg-gray-100 my-2" />

                        <button className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-700 font-medium text-sm">
                            <Download className="w-4 h-4" />
                            Kataloğu PDF İndir
                        </button>
                        <a
                            href="https://wa.me/905424422857"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-primary-800 text-white font-medium text-sm shadow-md"
                        >
                            0542 442 2857 Numarasını Ara
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
