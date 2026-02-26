"use client";

import Link from "next/link";
import { ArrowRight, PackageOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary-50 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-primary-100/50 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015]"></div>
            </div>

            <div className="pt-24 pb-0 lg:pt-32 relative z-10 flex flex-col items-center">
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto mb-16"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-[1.15] tracking-tight"
                        >
                            Toptan Ambalajda <br />
                            <span className="text-primary-800 italic">15 Yıllık Güven</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-600 leading-relaxed font-sans max-w-2xl"
                        >
                            Poşet, karton, plastik ambalaj ve temizlik malzemelerinde işletmenize özel en uygun fiyat garantisiyle kesintisiz tedarik sağlıyoruz.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-4"
                        >
                            <Link
                                href="#kategoriler"
                                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-800 text-white px-8 py-4 rounded-xl font-medium shadow-xl shadow-primary-900/20 hover:bg-primary-900 hover:-translate-y-1 transition-all duration-300 text-lg group"
                            >
                                Kataloğu İncele
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="flex items-center justify-center gap-6 pt-6 text-sm font-medium text-gray-500"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                                    <PackageOpen className="w-5 h-5 text-primary-800" />
                                </div>
                                <span>Toptan & Perakende</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
