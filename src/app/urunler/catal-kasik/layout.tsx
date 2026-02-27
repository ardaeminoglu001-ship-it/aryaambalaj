import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Çatal & Kaşık Çeşitleri: CHS ve Ekosan Toptan | Arya Ambalaj",
    description: "CHS lüx, Ekosan lüx ve Ekosan eko serisi 50'li ve 100'lü paketlerde toptan plastik çatal ve kaşık çeşitleri. Paket servis ve catering için.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
