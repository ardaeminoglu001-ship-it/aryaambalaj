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

            <div className="pt-24 pb-0 lg:pt-32 relative z-10 flex flex-col items-center">
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full">
                    {/* Text Content */}
                    <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto mb-16">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-[1.15] tracking-tight">
                            Toptan Ambalajda <br />
                            <span className="text-primary-800 italic">15 Yıllık Güven</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sans max-w-2xl">
                            Poşet, karton, plastik ambalaj ve temizlik malzemelerinde işletmenize özel en uygun fiyat garantisiyle kesintisiz tedarik sağlıyoruz.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-4">
                            <Link
                                href="#kategoriler"
                                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-800 text-white px-8 py-4 rounded-xl font-medium shadow-xl shadow-primary-900/20 hover:bg-primary-900 hover:-translate-y-1 transition-all duration-300 text-lg group"
                            >
                                Kataloğu İncele
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="flex items-center justify-center gap-6 pt-6 text-sm font-medium text-gray-500">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                                    <PackageOpen className="w-5 h-5 text-primary-800" />
                                </div>
                                <span>Toptan & Perakende</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Google Maps Full Width Interactive Area */}
                <div className="w-full h-[500px] relative z-20">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.211757876274!2d32.9103038!3d39.958999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40820f1df21e1e0f%3A0x6b3b5c65db9128f7!2sBe%C5%9Fikkaya%2C%201953.%20Sk.%20No%3A6%2C%2006360%20Alt%C4%B1nda%C4%9F%2FAnkara!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Konum Haritası"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
