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
    const waMessage = `Merhaba, Arya Ambalaj sitesinden yazıyorum. '${product.title}' ürünü için toptan fiyat almak istiyorum.`;
    const waLink = `https://wa.me/905424434495?text=${encodeURIComponent(waMessage)}`;

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-primary-900/5 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full relative">
            {/* Category Badge */}
            <div className="absolute top-4 right-4 bg-gray-50/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-800 shadow-sm border border-gray-200 z-10">
                {product.category?.name || "Diğer"}
            </div>

            <div className="p-5 flex flex-col flex-grow">
                {/* Header: Icon + Title inline */}
                <div className="flex flex-row items-center justify-start gap-4 mb-3">
                    <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center shrink-0 border border-gray-200 shadow-sm">
                        <svg className="w-6 h-6 text-gray-400 border-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 text-lg leading-snug line-clamp-2">
                            {product.title}
                        </h3>
                    </div>
                </div>

                <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">
                    {product.description || "Toptan alımlar için yüksek kaliteli ürün."}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {product.material && (
                        <span className="px-2 py-1 bg-gray-50 text-gray-600 text-[10px] uppercase tracking-wider font-semibold rounded-md border border-gray-100">
                            M: {product.material}
                        </span>
                    )}
                    {product.size && (
                        <span className="px-2 py-1 bg-gray-50 text-gray-600 text-[10px] uppercase tracking-wider font-semibold rounded-md border border-gray-100">
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
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full animate-pulse relative p-5">
            <div className="absolute top-4 right-4 bg-gray-200 px-8 py-3 rounded-full"></div>

            <div className="flex flex-row items-center justify-start gap-4 mb-3 mt-4">
                <div className="w-14 h-14 rounded-full bg-gray-200 shrink-0"></div>
                <div className="flex-1 min-w-0">
                    <div className="h-5 w-3/4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-5 w-1/2 bg-gray-200 rounded"></div>
                </div>
            </div>

            <div className="h-4 w-full bg-gray-100 rounded mb-2 mt-2"></div>
            <div className="h-4 w-2/3 bg-gray-100 rounded mb-4 flex-grow"></div>

            <div className="flex gap-2 mb-6">
                <div className="h-5 w-12 bg-gray-200 rounded-md"></div>
                <div className="h-5 w-12 bg-gray-200 rounded-md"></div>
            </div>

            <div className="w-full h-12 bg-gray-200 rounded-xl mt-auto"></div>
        </div>
    );
}
