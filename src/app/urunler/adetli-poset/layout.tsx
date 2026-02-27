import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Adetli Poşet Çeşitleri: Birpack ve İnce Toptan | Arya Ambalaj",
    description: "Birpack 150 adetli büyük boy, 200 adetli orta boy, 300 adetli küçük boy ve ince süper mini 500 adetli toptan rulo ve paket poşet çeşitleri.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
