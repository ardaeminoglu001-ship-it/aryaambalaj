import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";

export const metadata = {
    title: "Hakkımızda | Arya Ambalaj",
    description: "Ankara'nın Hüseyingazi ve Karapürçek bölgesinin ilk poşet ve ambalaj toptancısı Arya Ambalaj'ın 15 yıllık tecrübesi.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-gray-50">
            <Navbar />

            <main
                className="flex-grow flex items-center justify-center py-20 px-4 md:px-8 lg:px-12 bg-red-600 relative"
                style={{ fontFamily: "var(--font-montserrat)" }}
            >
                <div className="w-full max-w-7xl mx-auto relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-widest text-white mb-10 drop-shadow-md">
                            15 YILLIK TECRÜBE
                        </h1>
                        <p className="text-white/95 text-lg md:text-xl lg:text-2xl font-light leading-loose tracking-wide max-w-4xl mx-auto drop-shadow-sm">
                            Ankara'nın Hüseyingazi ve Karapürçek bölgesinin ilk poşet ve ambalaj toptancısı olan Arya Ambalaj, sektördeki 15 yıllık köklü geçmişi ve sarsılmaz hizmet anlayışıyla kaliteden ödün vermeden yoluna devam etmektedir. Bölge esnafına ve işletmelere sunduğumuz güvenilir ambalaj çözümleriyle, 15 yıldır olduğu gibi bugün de güvenin ve tecrübenin adresi olmaktan gurur duyuyoruz.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
            <WhatsAppFAB />
        </div>
    );
}
