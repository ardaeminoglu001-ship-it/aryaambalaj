import { ShieldCheck, Truck, PercentCircle, ThumbsUp } from "lucide-react";

const features = [
    {
        icon: <ShieldCheck className="w-6 h-6 text-primary-800" />,
        title: "15 Yıllık Tecrübe",
        description: "Ambalaj sektöründe çeyrek asra yaklaşan deneyimimizle kaliteden ödün vermiyoruz."
    },
    {
        icon: <PercentCircle className="w-6 h-6 text-primary-800" />,
        title: "Toptan Alım Avantajı",
        description: "İşletmenizin maliyetlerini düşürmek için sipariş miktarınıza özel fiyatlandırma sunuyoruz."
    },
    {
        icon: <Truck className="w-6 h-6 text-primary-800" />,
        title: "Hızlı & Güvenli Teslimat",
        description: "Ankara içi siparişlerinizde kendi araçlarımızla hızlı teslimat garantisi veriyoruz."
    },
    {
        icon: <ThumbsUp className="w-6 h-6 text-primary-800" />,
        title: "%100 Müşteri Memnuniyeti",
        description: "Geniş ürün yelpazemiz ve çözüm odaklı hizmetimizle her zaman yanınızdayız."
    }
];

export default function TrustSection() {
    return (
        <section className="bg-zinc-50 py-24 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary-800 font-semibold tracking-wider text-sm uppercase mb-3 block">Neden Biz?</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                        Ankara'nın Lider <br className="hidden md:block" /> Toptan Ambalaj Tedarikçisi
                    </h2>
                    <p className="text-gray-600 font-sans text-lg">
                        İşletmeniz için en doğru ambalaj ve paketleme ürünlerini, sektördeki en rekabetçi fiyatlarla sunuyoruz.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary-100 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-100 transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
