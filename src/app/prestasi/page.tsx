import type { Metadata } from "next";
import { prestasiList } from "@/data/prestasi";
import { PrestasiCard } from "@/components/sections/prestasi-card";
import { Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Prestasi Desa - Desa Kebanggan",
  description: "Daftar prestasi dan penghargaan yang diraih Desa Kebanggan.",
};

export default function PrestasiPage() {
  const sortedPrestasi = [...prestasiList].sort((a, b) => b.tahun - a.tahun);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 space-y-12 max-w-6xl">
      {/* Header section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500/10 via-secondary to-background border border-amber-500/20 p-8 sm:p-10 shadow-xs">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Trophy className="h-3.5 w-3.5" />
          Penghargaan & Capaian
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Prestasi Desa Kebanggan
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl text-sm sm:text-base leading-relaxed">
          Berbagai penghargaan dan pencapaian yang berhasil diraih Desa Kebanggan sebagai wujud kerja keras pemerintah desa dan partisipasi aktif masyarakat.
        </p>
      </div>

      {sortedPrestasi.length === 0 ? (
        <div className="text-center py-16 rounded-2xl border border-dashed border-border/60 bg-secondary/30">
          <Trophy className="h-10 w-10 mx-auto text-muted-foreground/50 mb-3" />
          <p className="text-muted-foreground font-medium">Belum ada data prestasi terdaftar.</p>
        </div>
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