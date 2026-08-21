import { Hero } from "@/components/sections/hero";
import { Statistik } from "@/components/sections/statistik";
import { RingkasanSection } from "@/components/sections/ringkasan-section";
import { VideoProfil } from "@/components/sections/video-profil";
import { Building2, Trophy, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* 1. Hero — Split layout, gambar kanan */}
      <Hero />

      {/* 2. Statistik — Horizontal band */}
      <Statistik />

      {/* 3. Layanan & Informasi Cards */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

          {/* Section heading */}
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">
              Layanan & Informasi
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Semua yang perlu Anda ketahui
              <br />
              <span className="text-primary">tentang Desa Kebanggan</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Akses cepat ke profil desa, program BUMDes, dan prestasi yang telah diraih bersama.
            </p>
          </div>

          {/* 3-column grid */}
          <div className="grid gap-6 md:grid-cols-3">
            <RingkasanSection
              icon={Users}
              title="Profil Desa"
              description="Kenali sejarah, visi misi, letak geografis, struktur pemerintahan, dan monografi resmi Desa Kebanggan tahun 2025."
              href="/profil"
              linkLabel="Lihat Profil Lengkap"
              imagePlaceholder="Foto Balai Desa Kebanggan"
            />
            <RingkasanSection
              icon={Building2}
              title="BUMDes GJ"
              description="Badan Usaha Milik Desa yang mengelola Wisata Gumuk Jagongan (GJ) — kolam renang, wahana anak, dan UMKM lokal."
              href="/bumdes"
              linkLabel="Lihat BUMDes GJ"
              imagePlaceholder="Foto Wisata Gumuk Jagongan"
            />
            <RingkasanSection
              icon={Trophy}
              title="Prestasi Desa"
              description="Berbagai penghargaan tingkat kabupaten dan nasional yang berhasil diraih Desa Kebanggan."
              href="/prestasi"
              linkLabel="Lihat Semua Prestasi"
              imagePlaceholder="Foto Piala & Penghargaan Desa"
            />
          </div>

        </div>
      </section>

      {/* 4. Video Profil — Dark cinematic section, paling bawah */}
      <VideoProfil />
    </>
  );
}