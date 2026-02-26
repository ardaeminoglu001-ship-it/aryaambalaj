import { MessageCircle } from "lucide-react";

export default function WhatsAppFAB() {
    return (
        <a
            href="https://wa.me/905424422857?text=Merhaba, Arya Ambalaj yetkilisi ile görüşmek istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[60] flex items-center justify-center"
            aria-label="WhatsApp'tan iletişime geçin"
        >
            <div className="relative group flex items-center">
                {/* Tooltip */}
                <div className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-xl shadow-lg shadow-black/10 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none border border-gray-100">
                    Toplu Fiyat veya Teknik Destek Alın!
                    <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45 border-r border-t border-gray-100"></div>
                </div>

                {/* Pulsing ring */}
                <div className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none"></div>

                {/* FAB Button */}
                <div className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:bg-[#1ebd5b] hover:scale-110 transition-all duration-300 relative z-10">
                    <MessageCircle className="w-7 h-7" />
                </div>
            </div>
        </a>
    );
}
