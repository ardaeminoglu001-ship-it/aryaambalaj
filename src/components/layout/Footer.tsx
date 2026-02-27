import Link from "next/link";
import { Mail, MapPin, Phone, Clock, ChevronRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-950 text-zinc-300">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-20 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Company Info */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 inline-block">
                            <div className="bg-primary-800 text-white w-10 h-10 rounded-lg flex items-center justify-center font-serif font-bold text-xl">
                                A
                            </div>
                            <div className="flex flex-col">
                                <span className="font-serif font-bold text-xl text-white leading-none">
                                    Arya Ambalaj
                                </span>
                            </div>
                        </Link>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Ankara Altındağ'da 15 yıllık tecrübemizle, toptan poşet, karton ve plastik temizlik ürünleri alanında işletmelerin güvenilir tedarikçisiyiz. Kalite ve uygun fiyat odaklı hizmet anlayışımızla yanınızdayız.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-serif font-semibold text-lg mb-6 flex items-center gap-2">
                            <span className="w-8 h-px bg-primary-800"></span> Hızlı Menü
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm group">
                                    <ChevronRight className="w-3 h-3 text-primary-600 group-hover:translate-x-1 transition-transform" />
                                    Ana Sayfa
                                </Link>
                            </li>
                            <li>
                                <Link href="/urunler" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm group">
                                    <ChevronRight className="w-3 h-3 text-primary-600 group-hover:translate-x-1 transition-transform" />
                                    Ürün Kataloğu
                                </Link>
                            </li>
                            <li>
                                <Link href="/hakkimizda" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm group">
                                    <ChevronRight className="w-3 h-3 text-primary-600 group-hover:translate-x-1 transition-transform" />
                                    Hakkımızda
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/905424422857?text=Merhaba, fiyat bilgisi almak istiyorum."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm group"
                                >
                                    <ChevronRight className="w-3 h-3 text-primary-600 group-hover:translate-x-1 transition-transform" />
                                    İletişime Geçin
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Important Categories */}
                    <div>
                        <h4 className="text-white font-serif font-semibold text-lg mb-6 flex items-center gap-2">
                            <span className="w-8 h-px bg-primary-800"></span> Ürün Gruplarımız
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/urunler/kilogramlik-poset" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm group cursor-pointer">
                                    <ChevronRight className="w-3 h-3 text-primary-600 group-hover:translate-x-1 transition-transform" /> Poşet Çeşitleri
                                </Link>
                            </li>
                            <li>
                                <Link href="/urunler/karton-bardak" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm group cursor-pointer">
                                    <ChevronRight className="w-3 h-3 text-primary-600 group-hover:translate-x-1 transition-transform" /> Karton Bardak Çeşitleri
                                </Link>
                            </li>
                            <li>
                                <Link href="/urunler/pastancilik-cesitleri" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm group cursor-pointer">
                                    <ChevronRight className="w-3 h-3 text-primary-600 group-hover:translate-x-1 transition-transform" /> Pastancılık Çeşitleri
                                </Link>
                            </li>
                            <li>
                                <Link href="/urunler/kopuk-tabak" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm group cursor-pointer">
                                    <ChevronRight className="w-3 h-3 text-primary-600 group-hover:translate-x-1 transition-transform" /> Köpük Tabak Çeşitleri
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-serif font-semibold text-lg mb-6 flex items-center gap-2">
                            <span className="w-8 h-px bg-primary-800"></span> İletişim
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                                <span className="text-zinc-400 text-sm leading-relaxed">
                                    Beşikkaya Mah. 1953. Sokak No:6 <br />
                                    06360 Altındağ / Ankara
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary-600 shrink-0" />
                                <a href="https://wa.me/905424422857" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                                    0542 442 2857
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary-600 shrink-0" />
                                <a href="mailto:info@aryaambalaj.com" className="text-zinc-400 hover:text-white transition-colors text-sm">
                                    info@aryaambalaj.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-primary-600 shrink-0" />
                                <span className="text-zinc-400 text-sm">
                                    Pzt-Cmt: 08:30 - 18:30
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-zinc-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-500 text-xs text-center md:text-left">
                        &copy; {currentYear} Arya Ambalaj. Tüm hakları saklıdır. Ankara Altındağ toptan ambalaj ve paketleme tedarikçisi.
                    </p>
                    <div className="flex gap-4">
                        {/* Sosyal Medya İkonları Placeholder */}
                        <div className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-primary-800 transition-colors flex items-center justify-center cursor-pointer">
                            <span className="text-xs text-white">IG</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-primary-800 transition-colors flex items-center justify-center cursor-pointer">
                            <span className="text-xs text-white">FB</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
