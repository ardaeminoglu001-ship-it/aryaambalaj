"use client";

import { useState, useEffect } from "react";
import FilterSidebar from "./FilterSidebar";
import ProductCard, { ProductCardSkeleton } from "./ProductCard";

// Geçici (Mock) Ürün Verileri
const MOCK_PRODUCTS = [
    {
        id: "1",
        title: "Kraft Karton Çorba Kasesi - Kapaklı",
        description: "Sıcak ve soğuk sızdırmaz kraft çorba kasesi. Toptan restoran ve paket servis kullanımları için idealdir.",
        image_url: "https://images.unsplash.com/photo-1596649774577-fbbe15a5105d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: { name: "Karton Tabak & Kase" },
        material: "Karton",
        size: "16 oz",
        usage: "Sıcak İçecek",
    },
    {
        id: "2",
        title: "Baskılı Hışır Atlet Poşet",
        description: "Bakkal, market ve mağazalar için yüksek dirençli toptan baskısız hışır poşet.",
        image_url: "https://images.unsplash.com/photo-1620055746359-994df7bc617f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: { name: "Poşet" },
        material: "Plastik",
        size: "Orta",
        usage: "Paket Servis",
    },
    {
        id: "3",
        title: "Beyaz Köpük Tabak (Et/Tavuk)",
        description: "Kasap ve şarküteriler için dayanıklı, sızdırmaz köpük tabağı.",
        image_url: "https://images.unsplash.com/photo-1622340638575-cf560ca0afad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: { name: "Köpük Tabak" },
        material: "Köpük",
        size: "Büyük",
        usage: "Sunum",
    },
    {
        id: "4",
        title: "Double Karton Bardak - Sıcak İçecek",
        description: "Espresso, çay ve filtre kahve kullanımları için kalın cidarlı sızdırmaz karton bardak.",
        image_url: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: { name: "Karton Bardak" },
        material: "Karton",
        size: "8 oz",
        usage: "Sıcak İçecek",
    },
    {
        id: "5",
        title: "Bombe Kapaklı Pet Soğuk Bardak",
        description: "Frappe, milkshake ve soğuk kahve için şeffaf kalite standartlarına uygun toptan pet bardak.",
        image_url: "https://images.unsplash.com/photo-1595981267035-7b04d84b4e18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: { name: "Pet Bardak" },
        material: "PET",
        size: "12 oz",
        usage: "Soğuk İçecek",
    },
    {
        id: "6",
        title: "Endüstriyel Rulo Temizlik Havlusu",
        description: "Sanayi, fabrika ve atölyeler için yüksek emici toptan temizlik kağıt havlusu.",
        image_url: "https://images.unsplash.com/photo-1584820927498-cafeecdebf88?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: { name: "Temizlik Malzemeleri" },
        material: "Kağıt",
        size: "Büyük",
        usage: "Sunum",
    }
];

export default function ProductGrid() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState(MOCK_PRODUCTS);
    const [filteredProducts, setFilteredProducts] = useState(MOCK_PRODUCTS);

    // Simulating Fetch API network delay with Supabase
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1200);
        return () => clearTimeout(timer);
    }, []);

    const handleFilterChange = (filters: { material?: string; size?: string; usage?: string }) => {
        let result = products;

        if (filters.material) {
            result = result.filter(p => p.material === filters.material);
        }
        if (filters.size) {
            result = result.filter(p => p.size === filters.size);
        }
        if (filters.usage) {
            result = result.filter(p => p.usage === filters.usage);
        }

        setFilteredProducts(result);
    };

    return (
        <section id="kategoriler" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                            Ürün Kataloğu
                        </h2>
                        <p className="text-gray-600 font-sans text-lg">
                            Ambalaj, paketleme ve temizlik grubunda yüzlerce çeşit ürün arasından işletmenizin ihtiyacına uygun olanları bulun.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar / Filters */}
                    <div className="w-full lg:w-1/4 shrink-0">
                        <FilterSidebar onFilterChange={handleFilterChange} />
                    </div>

                    {/* Product Grid Area */}
                    <div className="flex-1">
                        {/* Results Count & Sort (Visual only) */}
                        <div className="flex justify-between items-center mb-6 hidden md:flex">
                            <span className="text-sm font-medium text-gray-500">
                                {!loading ? <>{filteredProducts.length} toptan ürün listeleniyor</> : <>Ürünler yükleniyor...</>}
                            </span>
                            <select className="text-sm border-gray-200 rounded-lg py-2 px-3 bg-white text-gray-700 shadow-sm focus:ring-primary-500 focus:border-primary-500 cursor-pointer">
                                <option>Önerilen Sıralama</option>
                                <option>A'dan Z'ye</option>
                                <option>Z'den A'ya</option>
                            </select>
                        </div>

                        {/* Grid */}
                        {loading ? (
                            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <ProductCardSkeleton key={i} />
                                ))}
                            </div>
                        ) : filteredProducts.length > 0 ? (
                            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="w-full h-64 bg-gray-50 rounded-2xl border border-dashed border-gray-300 flex flex-col items-center justify-center text-center p-8">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                                    <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Seçili kriterlerde ürün bulunamadı</h3>
                                <p className="text-gray-500 text-sm max-w-sm">Filtrelerinizi değiştirerek veya kaldırarak aradığınız ambalaj ürünlerini tekrar inceleyebilirsiniz.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
