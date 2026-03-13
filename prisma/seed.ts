import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ['info'] });

const initialCategories = [
    { name: "Köpük Tabak Çeşitleri", slug: "kopuk-tabak" },
    { name: "Karton Bardak Çeşitleri", slug: "karton-bardak" },
    { name: "Viza Rulosu", slug: "viza-rulosu" },
    { name: "Kilogramlık Poşet Çeşitleri", slug: "kilogramlik-poset" },
    { name: "Adetli Poşet", slug: "adetli-poset" },
    { name: "Pastancılık Çeşitleri", slug: "pastancilik-cesitleri" },
    { name: "Plastik Tabak Çeşitleri", slug: "plastik-tabak" },
    { name: "Çatal-Kaşık Çeşitleri", slug: "catal-kasik" },
    { name: "Çöp Poşetleri", slug: "cop-posetleri" },
    { name: "Takviyeli Poşet Çeşitleri", slug: "takviyeli-poset" },
    { name: "Buzdolabı & Kilitli Poşet", slug: "buzdolabi-kilitli-poset" },
    { name: "Streç Film Çeşitleri", slug: "strec-film" },
    { name: "Rulo Poşet Çeşitleri", slug: "rulo-poset" },
    { name: "Kağıt Çeşitleri", slug: "kagit-cesitleri" },
    { name: "Kurbanlık Poşet Çeşitleri", slug: "kurbanlik-poset" },
    { name: "Strafor Köpük Kasalar", slug: "kopuk-kasa" },
    { name: "Servis ve Sunum Ürünleri", slug: "servis-ve-sunum" },
    { name: "Karton Tabak Çeşitleri", slug: "karton-tabak" },
    { name: "Yemek Setleri", slug: "yemek-setleri" }
];

async function main() {
    console.log("Veritabanı sıfırlanıyor ve örnek veriler yükleniyor...");

    for (const category of initialCategories) {
        // Zaten ekliyse atla (unique hatasını önlemek için)
        await prisma.category.upsert({
            where: { slug: category.slug },
            update: {},
            create: {
                name: category.name,
                slug: category.slug,
            },
        });
    }

    console.log("19 Kategori başarıyla veritabanına aktarıldı!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
