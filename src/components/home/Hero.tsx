import Link from "next/link";
import { ArrowRight, PackageOpen } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary-50 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-primary-100/50 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-24 pb-32 lg:pt-32 lg:pb-40 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                    {/* Text Content */}
                    <div className="flex flex-col items-start space-y-8 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-800 text-sm font-medium">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-600"></span>
                            </span>
                            Ankara içi aynı gün teslimat garantisi
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-[1.15] tracking-tight">
                            Toptan Ambalajda <br />
                            <span className="text-primary-800 italic">15 Yıllık Güven</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sans max-w-lg">
                            Poşet, karton, plastik ambalaj ve temizlik malzemelerinde işletmenize özel en uygun fiyat garantisiyle kesintisiz tedarik sağlıyoruz.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4">
                            <Link
                                href="#kategoriler"
                                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-800 text-white px-8 py-4 rounded-xl font-medium shadow-xl shadow-primary-900/20 hover:bg-primary-900 hover:-translate-y-1 transition-all duration-300 text-lg group"
                            >
                                Kataloğu İncele
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <a
                                href="https://wa.me/905424422857?text=Merhaba, toptan alım fiyat listesi rica ediyorum."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-gray-800 border-2 border-gray-200 px-8 py-3.5 rounded-xl font-medium hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 text-lg"
                            >
                                Fiyat Teklifi Al
                            </a>
                        </div>

                        <div className="flex items-center gap-6 pt-6 text-sm font-medium text-gray-500">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                                    <PackageOpen className="w-5 h-5 text-primary-800" />
                                </div>
                                <span>Toptan & Perakende</span>
                            </div>
                        </div>
                    </div>

                    {/* Image/Visual Right Side */}
                    <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[600px] flex items-center justify-center">
                        {/* Main Image Base (Using simple shapes as placeholder for real photography) */}
                        <div className="relative w-full h-full max-w-md mx-auto">
                            <div className="absolute inset-0 bg-primary-800 rounded-3xl transform rotate-3 scale-105 opacity-10"></div>
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-900 to-primary-700 rounded-3xl shadow-2xl overflow-hidden p-8 flex flex-col justify-end">
                                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1590212151175-e58edd96185b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center rounded-2xl mb-6 shadow-inner opacity-80 mix-blend-overlay"></div>
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-full relative z-10">
                                    <h3 className="text-white font-serif font-semibold text-2xl mb-2">Restoran & Cafe</h3>
                                    <p className="text-primary-100 text-sm">İşletmeniz için eksiksiz ambalaj çözümleri.</p>
                                </div>
                            </div>

                            {/* Floating Element */}
                            <div className="absolute -left-12 top-1/4 bg-white p-4 rounded-2xl shadow-xl shadow-black/5 animate-bounce-slow flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">1000+</p>
                                    <p className="text-xs text-gray-500 font-medium">Teslim Edilen Sipariş</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
