import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import crypto from "crypto";

export async function POST(req: NextRequest) {
    try {
        const data = await req.formData();
        const file: File | null = data.get("file") as unknown as File;

        if (!file) {
            return NextResponse.json({ error: "Dosya bulunamadı" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Rastgele benzersiz bir isim üret
        const uniqueSuffix = crypto.randomUUID();
        const cleanName = file.name.replace(/[^a-zA-Z0-9.]/g, ''); // Türkçe karakter vb. temizliği
        const newFileName = `${uniqueSuffix}-${cleanName}`;

        // Dosya yolu => public/uploads/[isim]
        const uploadDir = path.join(process.cwd(), "public", "uploads");
        const filePath = path.join(uploadDir, newFileName);

        // Sisteme Yaz
        await writeFile(filePath, buffer);

        // Frontend'e resim URL'sini `/uploads/...` olarak ulaştır
        return NextResponse.json({
            message: "Başarılı",
            url: `/uploads/${newFileName}`
        }, { status: 201 });

    } catch (error) {
        console.error("Yükleme Hatası:", error);
        return NextResponse.json({ error: "Fotoğraf yüklenemedi" }, { status: 500 });
    }
}
