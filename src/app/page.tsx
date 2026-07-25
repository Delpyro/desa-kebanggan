import { Hero } from "@/components/sections/hero";
import { Statistik } from "@/components/sections/statistik";
import { RingkasanSection } from "@/components/sections/ringkasan-section";
import { Building2, Trophy, Users, Compass } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <Statistik />

      <section className="container mx-auto px-4 sm:px-6 py-20">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Compass className="h-3.5 w-3.5" />
            Layanan & Informasi
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Jelajahi Desa Kebanggan
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Akses informasi penting seputar pemerintahan, ekonomi desa, dan pencapaian masyarakat.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <RingkasanSection
            icon={Users}
            title="Profil Desa"
            description="Kenali sejarah, visi misi, letak geografis, dan struktur pemerintahan Desa Kebanggan."
            href="/profil"
            linkLabel="Lihat Profil"
          />
          <RingkasanSection
            icon={Building2}
            title="BUMDes GJ"
            description="Badan Usaha Milik Desa Kebanggan yang mengelola berbagai unit usaha untuk kesejahteraan masyarakat."
            href="/bumdes"
            linkLabel="Lihat BUMDes"
          />
          <RingkasanSection
            icon={Trophy}
            title="Prestasi Desa"
            description="Berbagai penghargaan dan pencapaian yang berhasil diraih Desa Kebanggan."
            href="/prestasi"
            linkLabel="Lihat Prestasi"
          />
        </div>
      </section>
    </>
  );
}