import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Köpük Tabak Çeşitleri: Erze ve Köpüksan Toptan | Arya Ambalaj",
    description: "Erze ve Köpüksan marka 3 gözlü, 5 gözlü ve tek kare ısı yalıtımlı sızdırmaz köpük (strafor) tabaklar. Catering ve paket servis için toptan köpük ambalaj.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
