import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Tüm Kategorileri Getir
export async function GET() {
    try {
        const categories = await prisma.category.findMany({
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(categories);
    } catch (error) {
        return NextResponse.json({ error: "Kategoriler getirilirken hata oluştu" }, { status: 500 });
    }
}

// Yeni Kategori Ekle
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, slug } = body;

        if (!name || !slug) {
            return NextResponse.json({ error: "Eksik bilgi!" }, { status: 400 });
        }

        const newCategory = await prisma.category.create({
            data: { name, slug },
        });

        return NextResponse.json(newCategory, { status: 201 });
    } catch (error) {
        console.error("Kategori Ekleme Hatası:", error);
        return NextResponse.json({ error: "Kategori oluşturulamadı veya isim kullanılıyor.", details: String(error) }, { status: 500 });
    }
}
