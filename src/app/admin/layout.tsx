import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Admin Paneli | Arya Ambalaj',
    description: 'Yönetim Paneli Girişi',
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-900 font-sans">
            {children}
        </div>
    );
}
