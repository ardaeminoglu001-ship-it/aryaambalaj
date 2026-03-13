import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const categoryId = params.id;

        if (!categoryId) {
            return NextResponse.json({ error: "Kategori ID Gerekli" }, { status: 400 });
        }

        // Schema'da onDelete: Cascade tanımladığımız için bağlı tüm ürünler de silinir.
        await prisma.category.delete({
            where: { id: categoryId },
        });

        return NextResponse.json({ message: "Kategori (ve ilişkili ürünler) başarıyla silindi." });
    } catch (error) {
        return NextResponse.json({ error: "Silinirken hata oluştu" }, { status: 500 });
    }
}
