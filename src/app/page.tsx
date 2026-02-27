import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import TrustSection from "@/components/home/TrustSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import GoogleMapSection from "@/components/home/GoogleMapSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white pb-20 md:pb-0">
      <Navbar />

      <main className="flex-grow">
        {/* Giriş / Hero Alanı */}
        <Hero />

        {/* Neden Biz / Güven Alanı */}
        <TrustSection />

        {/* Öne Çıkan Ürünler */}
        <FeaturedProducts />

        {/* Harita */}
        <GoogleMapSection />
      </main>

      <Footer />
    </div>
  );
}
