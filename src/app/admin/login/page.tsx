"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import { motion } from "framer-motion";
import React from 'react';

export default function AdminLoginPage() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Basit Güvenlik (Demo amaçlı harcoded şifre)
        if (password === "Arya2024*") {
            // Şifre doğruysa localStorage'a jeton bırak ve dashboard'a yönlendir
            localStorage.setItem("isAdminAuthed", "true");
            router.push("/admin/dashboard");
        } else {
            setError(true);
            setTimeout(() => setError(false), 3000);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4 relative overflow-hidden">
            {/* Arkaplan Şıklığı */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 p-8 rounded-2xl shadow-2xl relative z-10"
            >
                <div className="flex flex-col items-center mb-8">
                    <div className="w-16 h-16 bg-slate-700/50 rounded-2xl flex items-center justify-center mb-4 border border-slate-600/50">
                        <Lock className="w-8 h-8 text-amber-500" />
                    </div>
                    <h1 className="text-2xl font-bold text-white text-center">
                        Arya Ambalaj Yönetim
                    </h1>
                    <p className="text-slate-400 text-sm mt-2 text-center">
                        Lütfen devam etmek için admin şifrenizi girin.
                    </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Yönetici Şifresi"
                            className="w-full bg-slate-900/50 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-slate-500"
                            required
                        />
                    </div>

                    {error && (
                        <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="text-red-400 text-sm text-center"
                        >
                            Hatalı şifre girdiniz.
                        </motion.p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 rounded-xl transition-colors shadow-lg shadow-amber-900/20"
                    >
                        Giriş Yap
                    </button>

                    <a href="/" className="block text-center text-sm text-slate-500 hover:text-slate-300 transition-colors mt-4">
                        ← Siteye Dön
                    </a>
                </form>
            </motion.div>
        </div>
    );
}
