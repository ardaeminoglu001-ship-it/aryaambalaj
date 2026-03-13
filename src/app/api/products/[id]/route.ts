import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: productId } = await params;

        if (!productId) {
            return NextResponse.json({ error: "Ürün ID Gerekli" }, { status: 400 });
        }

        await prisma.product.delete({
            where: { id: productId },
        });

        return NextResponse.json({ message: "Ürün silindi." });
    } catch (error) {
        return NextResponse.json({ error: "Silinirken hata oluştu" }, { status: 500 });
    }
}
