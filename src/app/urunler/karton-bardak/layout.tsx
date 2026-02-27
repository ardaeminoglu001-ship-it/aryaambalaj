import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Karton Bardak Çeşitleri ve Toptan Fiyatları | Arya Ambalaj",
    description: "2.5oz, 4oz, 7oz, 8oz ve 12oz karton bardak çeşitleri. Ankara'da sıcak ve soğuk içecekler için sızdırmaz, toptan uygun fiyatlı karton bardaklar.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
