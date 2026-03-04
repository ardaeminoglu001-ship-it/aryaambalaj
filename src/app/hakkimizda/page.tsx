import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
    title: "Hakkımızda | Arya Ambalaj",
    description: "Ankara'nın Hüseyingazi ve Karapürçek bölgesinin ilk poşet ve ambalaj toptancısı Arya Ambalaj'ın 15 yıllık tecrübesi.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-900">
            <Navbar />

            <main className="flex-grow flex items-center justify-center py-20 px-4 md:px-8 lg:px-12 relative overflow-hidden">
                {/* Zarif arkaplan ışıltıları */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl pointer-events-none"></div>

                <div className="w-full max-w-5xl mx-auto relative z-10">
                    <div className="text-center p-8 md:p-12 lg:p-16 border border-amber-900/30 bg-slate-800/40 backdrop-blur-sm rounded-2xl shadow-2xl">
                        <h1
                            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-amber-200 mb-10 drop-shadow-md"
                            style={{ fontFamily: 'var(--font-playfair), serif' }}
                        >
                            15 Yıllık Tecrübe
                        </h1>

                        <div className="w-24 h-1 bg-amber-500/50 mx-auto mb-10 rounded-full"></div>

                        <p
                            className="text-gray-200 text-lg md:text-xl lg:text-2xl font-medium leading-relaxed md:leading-loose max-w-4xl mx-auto"
                            style={{ fontFamily: 'var(--font-playfair), serif', letterSpacing: '0.02em' }}
                        >
                            Ankara'nın Hüseyingazi ve Karapürçek bölgesinin ilk poşet ve ambalaj toptancısı olan Arya Ambalaj, sektördeki 15 yıllık köklü geçmişi ve sarsılmaz hizmet anlayışıyla kaliteden ödün vermeden yoluna devam etmektedir. Bölge esnafına ve işletmelere sunduğumuz güvenilir ambalaj çözümleriyle, 15 yıldır olduğu gibi bugün de güvenin ve tecrübenin adresi olmaktan gurur duyuyoruz.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
