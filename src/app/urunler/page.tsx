import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";

export const metadata = {
    title: "Ürün Grupları | Arya Ambalaj",
    description: "Arya Ambalaj'ın geniş ürün yelpazesini inceleyin. Köpük tabaklardan karton bardaklara kadar tüm toptan ambalaj çözümleri.",
};

const categories = [
    "Köpük Tabak Çeşitleri",
    "Karton Bardak Çeşitleri",
    "Viza Rulosu",
    "Kilogramlık Poşet Çeşitleri",
    "Adetli Poşet",
    "Pastancılık Çeşitleri",
    "Plastik Tabak Çeşitleri",
    "Çatal-Kaşık Çeşitleri"
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
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 flex items-center justify-center text-center cursor-pointer border border-gray-100 group"
                            >
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-800 transition-colors">
                                    {category}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
            <WhatsAppFAB />
        </div>
    );
}
