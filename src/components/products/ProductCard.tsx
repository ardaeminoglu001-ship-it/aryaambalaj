import Image from "next/image";
import { MessageCircle } from "lucide-react";

interface ProductCardProps {
    product: {
        id: string;
        title: string;
        description: string;
        image_url: string;
        category: { name: string };
        material?: string;
        size?: string;
    };
}

export default function ProductCard({ product }: ProductCardProps) {
    // Oluşturulacak WhatsApp Linki
    // https://wa.me/905424434495?text=Merhaba, Arya Ambalaj sitesinden yazıyorum. '[Ürün Adı]' ürünü için toptan fiyat almak istiyorum.
    const waMessage = `Merhaba, Arya Ambalaj sitesinden yazıyorum. '${product.title}' ürünü için toptan fiyat almak istiyorum.`;
    const waLink = `https://wa.me/905424434495?text=${encodeURIComponent(waMessage)}`;

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-primary-900/5 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
            {/* Product Image */}
            <div className="relative aspect-[4/3] w-full bg-gray-50 overflow-hidden">
                {product.image_url ? (
                    <Image
                        src={product.image_url}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                        <span className="font-serif italic text-lg opacity-50">Görsel Yok</span>
                    </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-800 shadow-sm border border-white/50">
                    {product.category?.name || "Diğer"}
                </div>
            </div>

            {/* Product Details */}
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 min-h-[56px]">
                    {product.title}
                </h3>

                <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">
                    {product.description || "Toptan alımlar için yüksek kaliteli ürün."}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {product.material && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] uppercase tracking-wider font-semibold rounded-md">
                            M: {product.material}
                        </span>
                    )}
                    {product.size && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] uppercase tracking-wider font-semibold rounded-md">
                            E: {product.size}
                        </span>
                    )}
                </div>

                {/* CTA Button */}
                <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5b] text-white py-3 rounded-xl font-medium transition-colors duration-300 mt-auto"
                >
                    <MessageCircle className="w-5 h-5" />
                    Toptan Fiyat İste
                </a>
            </div>
        </div>
    );
}

// Loading Skeleton
export function ProductCardSkeleton() {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full animate-pulse">
            <div className="aspect-[4/3] w-full bg-gray-200"></div>
            <div className="p-5 flex flex-col flex-grow">
                <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
                <div className="h-6 w-1/2 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 w-full bg-gray-100 rounded mb-2"></div>
                <div className="h-4 w-2/3 bg-gray-100 rounded mb-6 flex-grow"></div>

                <div className="flex gap-2 mb-6">
                    <div className="h-5 w-12 bg-gray-200 rounded-md"></div>
                    <div className="h-5 w-12 bg-gray-200 rounded-md"></div>
                </div>

                <div className="w-full h-12 bg-gray-200 rounded-xl mt-auto"></div>
            </div>
        </div>
    );
}
