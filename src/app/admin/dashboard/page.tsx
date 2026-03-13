"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, PlusCircle, LayoutDashboard, PackageSearch, PackagePlus, Trash2, Edit3, ImagePlus } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";

interface Category {
    id: string;
    name: string;
    slug: string;
}

interface Product {
    id: string;
    name: string;
    description: string | null;
    imageUrl: string | null;
    categoryId: string;
}

export default function AdminDashboard() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("categories");

    const [categories, setCategories] = useState<Category[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    // Form States
    const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState("");

    const [isProductModalOpen, setProductModalOpen] = useState(false);
    const [selectedCategoryForProduct, setSelectedCategoryForProduct] = useState("");
    const [newProductName, setNewProductName] = useState("");
    const [newProductDesc, setNewProductDesc] = useState("");
    const [newProductFile, setNewProductFile] = useState<File | null>(null);

    // Güvenlik: Admin tokenini kontrol et
    useEffect(() => {
        const isAuthed = localStorage.getItem("isAdminAuthed");
        if (isAuthed !== "true") {
            router.push("/admin/login");
        } else {
            fetchCategories();
            fetchProducts();
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("isAdminAuthed");
        router.push("/admin/login");
    };

    const fetchCategories = async () => {
        try {
            const res = await fetch("/api/categories");
            if (res.ok) {
                const data = await res.json();
                setCategories(data);
            }
        } catch (error) {
            console.error("Kategoriler alınamadı");
        }
    };

    const fetchProducts = async () => {
        try {
            const res = await fetch("/api/products");
            if (res.ok) {
                const data = await res.json();
                setProducts(data);
            }
        } catch (error) {
            console.error("Ürünler alınamadı");
        }
    };

    const handleCreateCategory = async (e: React.FormEvent) => {
        e.preventDefault();

        // Slug generation from name
        const turkishMap: { [key: string]: string } = {
            'ç': 'c', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u',
            'Ç': 'c', 'Ğ': 'g', 'İ': 'i', 'Ö': 'o', 'Ş': 's', 'Ü': 'u',
            ' ': '-'
        };
        const slug = newCategoryName
            .replace(/[çğıöşüÇĞİÖŞÜ ]/g, match => turkishMap[match] || '-')
            .toLowerCase()
            .replace(/[^a-z0-9-]/g, '')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');

        try {
            const res = await fetch("/api/categories", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: newCategoryName, slug })
            });

            if (res.ok) {
                toast.success("Kategori Eklendi");
                setNewCategoryName("");
                setCategoryModalOpen(false);
                fetchCategories();
            } else {
                const data = await res.json();
                toast.error(data.details ? `Hata: ${data.details}` : data.error || "Hata oluştu.");
            }
        } catch (e: any) {
            toast.error(e.message || "Bağlantı hatası.");
        }
    };

    const handleDeleteCategory = async (id: string) => {
        if (!confirm("Bu kategoriyi ve içindeki TÜM ürünleri silmek istediğinize emin misiniz?")) return;

        try {
            const res = await fetch(`/api/categories/${id}`, { method: "DELETE" });
            if (res.ok) {
                toast.success("Kategori Silindi");
                fetchCategories();
                fetchProducts();
            } else {
                toast.error("Silinemedi");
            }
        } catch (e) {
            toast.error("Hata oluştu.");
        }
    };

    const handleCreateProduct = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedCategoryForProduct) {
            toast.error("Lütfen bir kategori seçin");
            return;
        }

        try {
            let imageUrl = null;

            // Eğer resim yüklendiyse önce resmi API'ye gönder
            if (newProductFile) {
                const formData = new FormData();
                formData.append('file', newProductFile);

                const uploadRes = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData,
                });

                if (uploadRes.ok) {
                    const uploadData = await uploadRes.json();
                    imageUrl = uploadData.url;
                } else {
                    toast.error("Fotoğraf yüklenemedi!");
                    return;
                }
            }

            // Ardından ürünü API'ye ekle
            const res = await fetch("/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: newProductName,
                    description: newProductDesc,
                    categoryId: selectedCategoryForProduct,
                    imageUrl
                })
            });

            if (res.ok) {
                toast.success("Ürün Eklendi");
                setNewProductName("");
                setNewProductDesc("");
                setNewProductFile(null);
                setProductModalOpen(false);
                fetchProducts();
            } else {
                toast.error("Hata oluştu.");
            }
        } catch (e) {
            toast.error("Bağlantı hatası.");
        }
    };

    const handleDeleteProduct = async (id: string) => {
        if (!confirm("Bu ürünü silmek istediğinize emin misiniz?")) return;

        try {
            const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
            if (res.ok) {
                toast.success("Ürün Silindi");
                fetchProducts();
            } else {
                toast.error("Silinemedi");
            }
        } catch (e) {
            toast.error("Hata oluştu.");
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col md:flex-row text-slate-200">
            <Toaster position="top-right" />

            {/* Sidebar */}
            <aside className="w-full md:w-64 bg-slate-800 border-r border-slate-700 p-6 flex flex-col h-auto md:h-screen sticky top-0">
                <div className="mb-10 flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-slate-900 font-bold text-xl">
                        A
                    </div>
                    <div>
                        <h2 className="font-bold text-white text-lg">Arya Admin</h2>
                        <span className="text-xs text-slate-400">Yönetim Paneli</span>
                    </div>
                </div>

                <nav className="flex-1 space-y-2">
                    <button
                        onClick={() => setActiveTab('categories')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'categories' ? 'bg-amber-500/10 text-amber-500 font-medium border border-amber-500/20' : 'text-slate-400 hover:bg-slate-700 hover:text-white'}`}
                    >
                        <LayoutDashboard className="w-5 h-5" />
                        Kategoriler
                    </button>
                    <button
                        onClick={() => setActiveTab('products')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'products' ? 'bg-amber-500/10 text-amber-500 font-medium border border-amber-500/20' : 'text-slate-400 hover:bg-slate-700 hover:text-white'}`}
                    >
                        <PackageSearch className="w-5 h-5" />
                        Ürünler
                    </button>
                </nav>

                <div className="mt-auto pt-6 border-t border-slate-700">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-xl transition-all"
                    >
                        <LogOut className="w-5 h-5" />
                        Çıkış Yap
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 md:p-10 overflow-y-auto">
                {activeTab === 'categories' && (
                    <div className="max-w-5xl mx-auto">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h1 className="text-3xl font-bold text-white">Kategoriler</h1>
                                <p className="text-slate-400 mt-1">Sitedeki tüm ana ürün başlıkları.</p>
                            </div>
                            <button
                                onClick={() => setCategoryModalOpen(true)}
                                className="bg-amber-600 hover:bg-amber-500 text-white px-5 py-2.5 rounded-xl font-medium flex items-center gap-2 transition-all shadow-lg shadow-amber-900/20"
                            >
                                <PlusCircle className="w-5 h-5" />
                                Kategori Ekle
                            </button>
                        </div>

                        <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-xl">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-800/50 border-b border-slate-700 text-slate-400 text-sm">
                                        <th className="p-4 font-medium">Kategori Adı</th>
                                        <th className="p-4 font-medium">Bağlantı (Slug)</th>
                                        <th className="p-4 font-medium text-right">İşlemler</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.length === 0 ? (
                                        <tr><td colSpan={3} className="p-8 text-center text-slate-500">Henüz kategori bulunmuyor.</td></tr>
                                    ) : (
                                        categories.map(cat => (
                                            <tr key={cat.id} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                                                <td className="p-4 font-medium text-slate-200">{cat.name}</td>
                                                <td className="p-4 text-slate-500 text-sm">/urunler/{cat.slug}</td>
                                                <td className="p-4 text-right">
                                                    <button
                                                        onClick={() => handleDeleteCategory(cat.id)}
                                                        className="text-red-400 hover:text-red-300 p-2 hover:bg-red-400/10 rounded-lg transition-colors"
                                                    >
                                                        <Trash2 className="w-5 h-5" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'products' && (
                    <div className="max-w-6xl mx-auto">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h1 className="text-3xl font-bold text-white">Ürünler</h1>
                                <p className="text-slate-400 mt-1">Kategorilere ait detaylı ürün kayıtları ve görselleri.</p>
                            </div>
                            <button
                                onClick={() => setProductModalOpen(true)}
                                className="bg-amber-600 hover:bg-amber-500 text-white px-5 py-2.5 rounded-xl font-medium flex items-center gap-2 transition-all shadow-lg shadow-amber-900/20"
                            >
                                <PackagePlus className="w-5 h-5" />
                                Ürün Ekle
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.length === 0 ? (
                                <div className="col-span-full p-12 text-center text-slate-500 bg-slate-800 rounded-2xl border border-slate-700">
                                    Henüz ürün eklenmemiş. Kategori seçerek ilk ürününüzü ekleyin.
                                </div>
                            ) : (
                                products.map(prod => {
                                    const catName = categories.find(c => c.id === prod.categoryId)?.name || 'Bilinmiyor';
                                    return (
                                        <div key={prod.id} className="bg-slate-800 border border-slate-700 rounded-2xl p-5 flex flex-col shadow-xl hover:border-slate-600 transition-colors">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="w-16 h-16 rounded-xl bg-slate-700/50 flex items-center justify-center shrink-0 border border-slate-600/30 overflow-hidden">
                                                    {prod.imageUrl ? (
                                                        <img src={prod.imageUrl} alt={prod.name} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <ImagePlus className="w-6 h-6 text-slate-500" />
                                                    )}
                                                </div>
                                                <button
                                                    onClick={() => handleDeleteProduct(prod.id)}
                                                    className="text-slate-500 hover:text-red-400 transition-colors"
                                                >
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </div>

                                            <span className="text-xs font-semibold text-amber-500 mb-1 tracking-wider uppercase">{catName}</span>
                                            <h3 className="text-lg font-bold text-white mb-2 leading-tight">{prod.name}</h3>

                                            {prod.description && (
                                                <p className="text-sm text-slate-400 line-clamp-2 mt-auto">
                                                    {prod.description}
                                                </p>
                                            )}
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>
                )}
            </main>

            {/* M O D A L S */}

            {/* Kategori Ekle Modal */}
            {isCategoryModalOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-slate-800 border border-slate-700 p-6 md:p-8 rounded-2xl w-full max-w-md shadow-2xl">
                        <h2 className="text-2xl font-bold text-white mb-6">Yeni Kategori</h2>
                        <form onSubmit={handleCreateCategory} className="space-y-4">
                            <div>
                                <label className="block text-sm text-slate-400 mb-1">Kategori Adı</label>
                                <input
                                    type="text"
                                    value={newCategoryName}
                                    onChange={e => setNewCategoryName(e.target.value)}
                                    className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    required
                                    placeholder="Örn: Renkli Peçeteler"
                                />
                            </div>
                            <div className="flex gap-3 mt-8">
                                <button
                                    type="button"
                                    onClick={() => setCategoryModalOpen(false)}
                                    className="flex-1 py-3 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl transition-colors font-medium"
                                >
                                    İptal
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 py-3 px-4 bg-amber-600 hover:bg-amber-500 text-white rounded-xl transition-colors font-medium shadow-lg shadow-amber-900/20"
                                >
                                    Kaydet
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Ürün Ekle Modal */}
            {isProductModalOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-slate-800 border border-slate-700 p-6 md:p-8 rounded-2xl w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto">
                        <h2 className="text-2xl font-bold text-white mb-6">Yeni Ürün Ekle</h2>
                        <form onSubmit={handleCreateProduct} className="space-y-5">

                            <div>
                                <label className="block text-sm text-slate-400 mb-1">Hangi Kategoriye Eklensin?</label>
                                <select
                                    value={selectedCategoryForProduct}
                                    onChange={e => setSelectedCategoryForProduct(e.target.value)}
                                    className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 appearance-none"
                                    required
                                >
                                    <option value="" disabled>Kategori Seçin</option>
                                    {categories.map(c => (
                                        <option key={c.id} value={c.id}>{c.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm text-slate-400 mb-1">Ürün İsmi</label>
                                <input
                                    type="text"
                                    value={newProductName}
                                    onChange={e => setNewProductName(e.target.value)}
                                    className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    required
                                    placeholder="Örn: 22cm Karton Tabak"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-slate-400 mb-1">İçindekiler / Açıklama (İsteğe Bağlı)</label>
                                <textarea
                                    value={newProductDesc}
                                    onChange={e => setNewProductDesc(e.target.value)}
                                    className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none h-24"
                                    placeholder="Örn: Peçete, Kürdan, Tuz..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-slate-400 mb-1">Ürün Görseli (İsteğe Bağlı)</label>
                                <div className="border-2 border-dashed border-slate-600 hover:border-amber-500 transition-colors rounded-xl p-6 text-center cursor-pointer bg-slate-900 group">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={e => setNewProductFile(e.target.files?.[0] || null)}
                                        className="hidden"
                                        id="fileUpload"
                                    />
                                    <label htmlFor="fileUpload" className="cursor-pointer flex flex-col items-center justify-center">
                                        <ImagePlus className="w-8 h-8 text-slate-500 group-hover:text-amber-500 mb-3 transition-colors" />
                                        <span className="text-slate-300 font-medium">
                                            {newProductFile ? newProductFile.name : "Fotoğraf Yüklemek İçin Tıklayın"}
                                        </span>
                                        <span className="text-slate-500 text-xs mt-1">PNG, JPG, WEBP (Max 5MB)</span>
                                    </label>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-8 pt-4 border-t border-slate-700">
                                <button
                                    type="button"
                                    onClick={() => setProductModalOpen(false)}
                                    className="flex-1 py-3 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl transition-colors font-medium"
                                >
                                    İptal
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 py-3 px-4 bg-amber-600 hover:bg-amber-500 text-white rounded-xl transition-colors font-medium shadow-lg shadow-amber-900/20"
                                >
                                    Ürünü Ekle
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
