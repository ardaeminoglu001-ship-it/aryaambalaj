"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedProducts() {
    const featuredProducts = [
        {
            id: "1",
            title: "Kraft Karton Çanta",
            description: "Doğa dostu ve dayanıklı, perakende satışa uygun ambalaj",
            image_url: "https://images.unsplash.com/photo-1596649774577-fbbe15a5105d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        },
        {
            id: "2",
            title: "Baskılı Hışır Poşet",
            description: "Marketler için sağlam, yüksek taşıma kapasiteli",
            image_url: "https://images.unsplash.com/photo-1620055746359-994df7bc617f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        },
        {
            id: "3",
            title: "Karton Bardak",
            description: "Sıcak içecekler için sızdırmaz, kalın cidarlı yapılı",
            image_url: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                        Öne Çıkan Ürünler
                    </h2>
                    <p className="text-gray-600 font-sans text-lg max-w-2xl mx-auto">
                        Müşterilerimiz tarafından en çok tercih edilen popüler ürünlerimiz
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {featuredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                                <img
                                    src={product.image_url}
                                    alt={product.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                                <p className="text-gray-600">{product.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 flex justify-center"
                >
                    <Link
                        href="/urunler"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary-50 text-primary-800 rounded-full font-semibold hover:bg-primary-100 transition-all duration-300 group"
                    >
                        Tüm Ürünleri İncele
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
