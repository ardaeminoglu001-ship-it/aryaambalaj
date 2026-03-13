import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

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
