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
    <div className="bg-background min-h-screen pb-20">
      
      {/* ── Page Header ─────────────────────────────── */}
      <div className="bg-amber-50/50 dark:bg-amber-950/20 border-b border-amber-200/50 dark:border-amber-900/50 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Trophy className="h-4 w-4" />
            Penghargaan & Capaian
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Prestasi Desa
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base sm:text-lg leading-relaxed">
            Kumpulan penghargaan dan pencapaian yang berhasil diraih Desa Kebanggan sebagai wujud dedikasi pemerintah desa dan masyarakat.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 max-w-6xl">

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
    </div>
  );
}