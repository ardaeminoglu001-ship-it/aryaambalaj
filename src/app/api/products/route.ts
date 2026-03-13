import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Tüm Ürünleri Getir
export async function GET() {
    try {
        const products = await prisma.product.findMany({
            orderBy: { createdAt: "desc" },
            include: { category: true } // Kategori isimlerini de dahil et
        });
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ error: "Ürünler getirilirken hata oluştu" }, { status: 500 });
    }
}

// Yeni Ürün Ekle
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, description, categoryId, imageUrl } = body;

        if (!name || !categoryId) {
            return NextResponse.json({ error: "İsim ve Kategori zorunludur!" }, { status: 400 });
        }

        const newProduct = await prisma.product.create({
            data: {
                name,
                description: description || null,
                categoryId,
                imageUrl: imageUrl || null
            },
        });

        return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Ürün eklenemedi." }, { status: 500 });
    }
}
