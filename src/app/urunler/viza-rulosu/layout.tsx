import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Viza Rulosu Çeşitleri: Termal, Pos ve Terazi Ruloları | Arya Ambalaj",
    description: "İşletmeler için yüksek çözünürlüklü ve kaliteli toptan termal yazıcı rulosu, pos cihazı rulosu ve yazar kasa terazi rulosu çeşitleri.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
