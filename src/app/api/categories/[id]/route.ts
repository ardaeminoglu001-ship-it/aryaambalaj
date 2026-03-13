import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: categoryId } = await params;

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
