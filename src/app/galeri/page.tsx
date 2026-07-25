import type { Metadata } from "next";
import { GaleriGrid } from "@/components/sections/galeri-grid";
import { Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Galeri - Desa Kebanggan",
  description: "Dokumentasi kegiatan, infrastruktur, dan budaya Desa Kebanggan.",
};

export default function GaleriPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 space-y-12 max-w-6xl">
      {/* Header section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/10 via-secondary to-background border border-primary/20 p-8 sm:p-10 shadow-xs">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
          <Camera className="h-3.5 w-3.5" />
          Dokumentasi Desa
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Galeri Desa Kebanggan
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl text-sm sm:text-base leading-relaxed">
          Kumpulan dokumentasi foto kegiatan masyarakat, pembangunan infrastruktur, potensi alam, serta agenda Desa Kebanggan.
        </p>
      </div>

      <GaleriGrid />
    </div>
  );
}