import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Prestasi } from "@/data/prestasi";
import { Trophy, Calendar, ImageIcon } from "lucide-react";
import Image from "next/image";

const tingkatColor: Record<Prestasi["tingkat"], string> = {
  Desa: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800",
  Kecamatan: "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/50 dark:text-sky-300 dark:border-sky-800",
  Kabupaten: "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/50 dark:text-teal-300 dark:border-teal-800",
  Provinsi: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800",
  Nasional: "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-800",
};

export function PrestasiCard({ prestasi }: { prestasi: Prestasi }) {
  return (
    <Card className="h-full border-border/60 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group rounded-2xl overflow-hidden flex flex-col">
      {/* ── Kotak Gambar ─────────────────────────────────── */}
      {prestasi.gambar ? (
        <div className="relative w-full h-48 bg-secondary/40 overflow-hidden">
          <Image
            src={prestasi.gambar}
            alt={prestasi.judul}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="relative w-full h-48 bg-gradient-to-br from-amber-50 to-amber-100/60 dark:from-amber-950/30 dark:to-amber-900/20 border-b border-amber-200/50 dark:border-amber-800/30 flex flex-col items-center justify-center gap-2 overflow-hidden">
          {/* Decorative background circles */}
          <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-amber-200/30 dark:bg-amber-700/20" />
          <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-amber-300/20 dark:bg-amber-600/15" />

          {/* Icon */}
          <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/15 border border-amber-300/40 dark:border-amber-600/30">
            <ImageIcon className="h-7 w-7 text-amber-500/70 dark:text-amber-400/60" />
          </div>

          {/* Placeholder text */}
          <div className="relative z-10 px-4 text-center">
            <p className="text-[11px] font-semibold text-amber-700/80 dark:text-amber-400/70 leading-snug">
              {prestasi.gambarPlaceholder ?? "Foto / Dokumentasi Prestasi"}
            </p>
            <p className="text-[10px] text-amber-600/50 dark:text-amber-500/40 mt-1">
              Ganti dengan gambar asli
            </p>
          </div>

          {/* Dashed border overlay */}
          <div className="absolute inset-2 rounded-xl border-2 border-dashed border-amber-300/40 dark:border-amber-600/25 pointer-events-none" />
        </div>
      )}

      {/* ── Card Content ─────────────────────────────────── */}
      <CardHeader className="p-5 pb-3">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="rounded-xl bg-amber-500/10 p-2.5 w-fit text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300">
            <Trophy className="h-5 w-5" />
          </div>
          <Badge
            className={`${tingkatColor[prestasi.tingkat]} px-3 py-1 font-semibold rounded-full border text-xs`}
            variant="outline"
          >
            {prestasi.tingkat}
          </Badge>
        </div>

        <CardTitle className="text-base leading-snug font-bold group-hover:text-primary transition-colors">
          {prestasi.judul}
        </CardTitle>

        <CardDescription className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
          <span className="font-medium text-foreground/80">{prestasi.kategori}</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {prestasi.tahun}
          </span>
        </CardDescription>
      </CardHeader>

      <CardContent className="p-5 pt-0 flex-1">
        <p className="text-sm text-muted-foreground leading-relaxed">{prestasi.deskripsi}</p>
      </CardContent>
    </Card>
  );
}