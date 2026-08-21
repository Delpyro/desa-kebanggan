"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { dataGaleri, kategoriGaleri, type FotoGaleri } from "@/data/galeri";
import { Maximize2, Image as ImageIcon, Camera } from "lucide-react";

// Warna tema per kategori
const kategoriTheme: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
  Kegiatan:     { bg: "from-sky-50 to-sky-100/60 dark:from-sky-950/30 dark:to-sky-900/20",     border: "border-sky-300/40 dark:border-sky-700/25",     text: "text-sky-700/70 dark:text-sky-400/60",     iconBg: "bg-sky-500/10 border-sky-300/30" },
  Infrastruktur:{ bg: "from-amber-50 to-amber-100/60 dark:from-amber-950/30 dark:to-amber-900/20", border: "border-amber-300/40 dark:border-amber-700/25", text: "text-amber-700/70 dark:text-amber-400/60", iconBg: "bg-amber-500/10 border-amber-300/30" },
  Alam:         { bg: "from-emerald-50 to-emerald-100/60 dark:from-emerald-950/30 dark:to-emerald-900/20", border: "border-emerald-300/40 dark:border-emerald-700/25", text: "text-emerald-700/70 dark:text-emerald-400/60", iconBg: "bg-emerald-500/10 border-emerald-300/30" },
  Budaya:       { bg: "from-rose-50 to-rose-100/60 dark:from-rose-950/30 dark:to-rose-900/20", border: "border-rose-300/40 dark:border-rose-700/25", text: "text-rose-700/70 dark:text-rose-400/60", iconBg: "bg-rose-500/10 border-rose-300/30" },
};

function GaleriItemPlaceholder({ foto }: { foto: FotoGaleri }) {
  const theme = kategoriTheme[foto.kategori] ?? kategoriTheme["Kegiatan"];
  return (
    <div
      className={`relative aspect-square rounded-2xl overflow-hidden border bg-gradient-to-br ${theme.bg} ${theme.border} shadow-xs flex flex-col items-center justify-center gap-2`}
    >
      {/* Decorative circles */}
      <div className="absolute -top-5 -right-5 h-20 w-20 rounded-full bg-current opacity-5" />
      <div className="absolute -bottom-4 -left-4 h-14 w-14 rounded-full bg-current opacity-5" />

      {/* Dashed border inside */}
      <div className={`absolute inset-2 rounded-xl border-2 border-dashed ${theme.border} pointer-events-none`} />

      {/* Icon */}
      <div className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border ${theme.iconBg}`}>
        <Camera className={`h-6 w-6 ${theme.text}`} />
      </div>

      {/* Text */}
      <div className="relative z-10 text-center px-3">
        <p className={`text-[11px] font-semibold leading-snug ${theme.text}`}>{foto.alt}</p>
        <span className={`inline-block mt-1 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/40 dark:bg-white/5 ${theme.text}`}>
          {foto.kategori}
        </span>
      </div>
    </div>
  );
}

export function GaleriGrid() {
  const [filter, setFilter] = useState<(typeof kategoriGaleri)[number]>("Semua");
  const [selected, setSelected] = useState<FotoGaleri | null>(null);

  const filtered =
    filter === "Semua" ? dataGaleri : dataGaleri.filter((f) => f.kategori === filter);

  return (
    <div className="space-y-8">
      {/* Category filter pills */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-secondary/60 rounded-2xl border border-border/50 w-fit">
        {kategoriGaleri.map((k) => (
          <Button
            key={k}
            size="sm"
            variant={filter === k ? "default" : "ghost"}
            onClick={() => setFilter(k)}
            className={`rounded-xl text-xs font-semibold px-4 py-2 transition-all ${
              filter === k
                ? "shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {k}
          </Button>
        ))}
      </div>

      {/* Photo grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filtered.map((foto) => (
          <button
            key={foto.id}
            onClick={() => setSelected(foto)}
            className="group relative focus:outline-hidden focus:ring-2 focus:ring-primary rounded-2xl"
            aria-label={`Buka foto: ${foto.alt}`}
          >
            {/* Coba render gambar; jika gagal / belum ada → tampil placeholder */}
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-border/60 bg-card shadow-xs hover:shadow-xl hover:border-primary/40 transition-all duration-300">
              {foto.src ? (
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={() => {/* handled by placeholder below */}}
                />
              ) : null}

              {/* Always render placeholder underneath; if image loads it will cover this */}
              <GaleriItemPlaceholder foto={foto} />

              {/* Dark gradient overlay on hover (hanya muncul saat ada gambar) */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left pointer-events-none">
                <div className="flex items-center justify-between text-white">
                  <span className="text-xs font-semibold truncate pr-2">{foto.alt}</span>
                  <div className="rounded-full bg-white/20 p-1.5 backdrop-blur-xs shrink-0">
                    <Maximize2 className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 rounded-2xl border border-dashed border-border/60 bg-secondary/30">
          <ImageIcon className="h-10 w-10 mx-auto text-muted-foreground/50 mb-3" />
          <p className="text-muted-foreground font-medium">Belum ada foto untuk kategori ini.</p>
        </div>
      )}

      {/* Lightbox dialog */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-3xl border-border/60 bg-card">
          {selected && (
            <div className="space-y-0">
              <div className="relative w-full aspect-video bg-black/90">
                <Image src={selected.src} alt={selected.alt} fill className="object-contain" />
              </div>
              <div className="p-5 sm:p-6 bg-card">
                <DialogTitle className="text-lg font-bold text-foreground">
                  {selected.alt}
                </DialogTitle>
                <DialogDescription className="text-xs text-muted-foreground mt-1">
                  Kategori: <span className="font-semibold text-primary">{selected.kategori}</span>
                </DialogDescription>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}