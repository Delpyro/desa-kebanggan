import type { Metadata } from "next";
import { prestasiList } from "@/data/prestasi";
import { PrestasiCard } from "@/components/sections/prestasi-card";

export const metadata: Metadata = {
  title: "Prestasi Desa - Desa Kebanggan",
  description: "Daftar prestasi dan penghargaan yang diraih Desa Kebanggan.",
};

export default function PrestasiPage() {
  const sortedPrestasi = [...prestasiList].sort((a, b) => b.tahun - a.tahun);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Prestasi Desa Kebanggan</h1>
        <p className="text-muted-foreground mt-2">
          Berbagai penghargaan dan pencapaian yang berhasil diraih Desa
          Kebanggan sebagai wujud kerja keras pemerintah desa dan partisipasi
          masyarakat.
        </p>
      </div>

      {sortedPrestasi.length === 0 ? (
        <p className="text-muted-foreground">Belum ada data prestasi.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedPrestasi.map((item) => (
            <PrestasiCard key={item.id} prestasi={item} />
          ))}
        </div>
      )}
    </div>
  );
}