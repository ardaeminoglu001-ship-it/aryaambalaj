import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Plastik Tabak Çeşitleri: 8cm, 12cm, 18cm, 22cm Toptan | Arya Ambalaj",
    description: "8cm, 12cm, 18cm ve 22cm ölçülerinde dayanıklı ve sert plastik tabak çeşitleri. Catering, organizasyon ve paket servis için toptan tabaklar.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
