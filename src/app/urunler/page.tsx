import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
    title: "Ürün Grupları | Arya Ambalaj",
    description: "Arya Ambalaj'ın geniş ürün yelpazesini inceleyin. Köpük tabaklardan karton bardaklara kadar tüm toptan ambalaj çözümleri.",
};

const categories = [
    { name: "Köpük Tabak Çeşitleri", href: "/urunler/kopuk-tabak" },
    { name: "Karton Bardak Çeşitleri", href: "/urunler/karton-bardak" },
    { name: "Viza Rulosu", href: "/urunler/viza-rulosu" },
    { name: "Kilogramlık Poşet Çeşitleri", href: "/urunler/kilogramlik-poset" },
    { name: "Adetli Poşet", href: "/urunler/adetli-poset" },
    { name: "Pastancılık Çeşitleri", href: "/urunler/pastancilik-cesitleri" },
    { name: "Plastik Tabak Çeşitleri", href: "/urunler/plastik-tabak" },
    { name: "Çatal-Kaşık Çeşitleri", href: "/urunler/catal-kasik" }
];

export default function ProductsPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-zinc-50">
            <Navbar />

            <main className="flex-grow py-20 px-4 md:px-8 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 drop-shadow-sm tracking-tight">
                            Ürün Grupları
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 font-sans max-w-2xl mx-auto">
                            İşletmeniz için en uygun, dayanıklı ve ekonomik ambalaj çözümlerini keşfedin.
                        </p>
                    </div>

                    {/* Category Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                        {categories.map((category, index) => {
                            const CardContent = (
                                <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-row items-center justify-start gap-4 cursor-pointer border border-gray-100 group h-full">
                                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                                        <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary-800 transition-colors text-left leading-tight">
                                        {category.name}
                                    </h3>
                                </div>
                            );

                            return category.href ? (
                                <Link href={category.href} key={index} className="block h-full block">
                                    {CardContent}
                                </Link>
                            ) : (
                                <div key={index} className="h-full">
                                    {CardContent}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
