export default function FeaturedProducts() {
    const featuredProducts = [
        {
            id: "1",
            title: "Kraft Karton Çanta",
            description: "Doğa dostu ve dayanıklı, perakende satışa uygun ambalaj",
            image_url: "https://images.unsplash.com/photo-1596649774577-fbbe15a5105d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        },
        {
            id: "2",
            title: "Baskılı Hışır Poşet",
            description: "Marketler için sağlam, yüksek taşıma kapasiteli",
            image_url: "https://images.unsplash.com/photo-1620055746359-994df7bc617f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        },
        {
            id: "3",
            title: "Karton Bardak",
            description: "Sıcak içecekler için sızdırmaz, kalın cidarlı yapılı",
            image_url: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                        Öne Çıkan Ürünler
                    </h2>
                    <p className="text-gray-600 font-sans text-lg max-w-2xl mx-auto">
                        Müşterilerimiz tarafından en çok tercih edilen popüler ürünlerimiz
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                                <img
                                    src={product.image_url}
                                    alt={product.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                                <p className="text-gray-600">{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
