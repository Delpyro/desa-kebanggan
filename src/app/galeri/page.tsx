import type { Metadata } from "next";
import { GaleriGrid } from "@/components/sections/galeri-grid";

export const metadata: Metadata = {
  title: "Galeri - Desa Kebanggan",
  description: "Dokumentasi kegiatan, infrastruktur, dan budaya Desa Kebanggan.",
};

export default function GaleriPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Galeri Desa</h1>
        <p className="text-muted-foreground mt-2">
          Dokumentasi kegiatan, pembangunan, dan kehidupan masyarakat Desa Kebanggan.
        </p>
      </div>
      <GaleriGrid />
    </div>
  );
}