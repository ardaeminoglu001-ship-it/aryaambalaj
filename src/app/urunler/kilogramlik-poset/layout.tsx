import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Kilogramlık Poşet Çeşitleri: Aybal, Nehir, Naksan Toptan | Arya Ambalaj",
    description: "Aybal, Nehir ve Naksan markalarının en çok tercih edilen dayanıklı atlet poşet seçenekleri. Büyük boy ve battal boy toptan poşet fiyatları.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
