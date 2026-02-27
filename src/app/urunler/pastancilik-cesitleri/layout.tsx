import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Pastancılık Çeşitleri: Kutu, Altlık ve Ekipmanlar Toptan | Arya Ambalaj",
    description: "Pasta kutuları, pasta altlıkları, tatlı kapları, magnolya kabı, krema torbası ve toptan pastane malzemeleri.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
