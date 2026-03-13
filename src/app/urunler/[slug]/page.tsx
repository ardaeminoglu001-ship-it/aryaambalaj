import { PrismaClient } from "@prisma/client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, MessageCircle, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

// Parametreyi Next.js'ten alır (Örn: kopuk-tabak, catal-kasik)
export default async function CategoryPage({ params }: { params: { slug: string } }) {

    // 1- İlgili Kategoriyi ve ona ait ürünleri bul
    const category = await prisma.category.findUnique({
        where: { slug: params.slug },
        include: {
            products: true
        }
    });

    // Bulunamazsa 404 sayfasına at
    if (!category) {
        notFound();
    }

    const { name, products } = category;

    const handleWhatsAppText = (productName: string) => {
        return `Merhaba, Arya Ambalaj internet sitesinden geliyorum. ${productName} hakkında fiyat ve detaylı bilgi alabilir miyim?`;
    };

    return (
        <div className="min-h-screen flex flex-col font-sans bg-zinc-50">
            <Navbar />

            <main className="flex-grow py-12 md:py-20 px-4 md:px-8 lg:px-12">
                <div className="max-w-5xl mx-auto">
                    {/* Geri Dönüş Linki */}
                    <div className="mb-8">
                        <Link
                            href="/urunler"
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-800 transition-colors font-medium text-sm"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Katalog & Ürünler'e Dön
                        </Link>
                    </div>

                    {/* Başlık (Veritabanından gelir) */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 tracking-tight">
                            {name}
                        </h1>
                        <div className="w-24 h-1 bg-primary-500/50 mx-auto rounded-full"></div>
                    </div>

                    {/* Ürün Listesi */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                        <div className="p-4 sm:p-8 flex-grow flex flex-col">

                            {products.length === 0 ? (
                                <div className="py-20 text-center text-gray-400">
                                    <ImageIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                    <p>Bu kategoride henüz ürün bulunmamaktadır.</p>
                                </div>
                            ) : (
                                <ul className="space-y-4">
                                    {products.map((item: any) => (
                                        <li key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100 shadow-sm sm:shadow-none bg-zinc-50/50 sm:bg-transparent group">
                                            <div className="flex flex-row items-center gap-5 flex-1">

                                                {/* Ürün Görseli */}
                                                <div className="w-16 h-16 rounded-xl bg-gray-100 shrink-0 shadow-inner flex items-center justify-center overflow-hidden border border-gray-200">
                                                    {item.imageUrl ? (
                                                        <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <ImageIcon className="w-6 h-6 text-gray-300" />
                                                    )}
                                                </div>

                                                <div className="flex flex-col">
                                                    <span className="font-semibold text-gray-800 text-lg leading-snug">
                                                        {item.name}
                                                    </span>
                                                    {item.description && (
                                                        <span className="text-sm text-gray-500 mt-1">
                                                            {item.description}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* WhatsApp Butonu */}
                                            <a
                                                href={`https://wa.me/905424434495?text=${encodeURIComponent(handleWhatsAppText(item.name))}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-green-50 text-green-700 hover:bg-green-100 hover:text-green-800 rounded-lg text-sm font-semibold transition-colors w-full sm:w-auto shrink-0 mt-3 sm:mt-0"
                                            >
                                                <MessageCircle className="w-5 h-5" />
                                                Fiyat Sor
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
