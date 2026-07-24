import { Hero } from "@/components/sections/hero";
import { Statistik } from "@/components/sections/statistik";
import { RingkasanSection } from "@/components/sections/ringkasan-section";
import { Building2, Trophy, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <Statistik />

      <section className="container mx-auto px-4 py-16">
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