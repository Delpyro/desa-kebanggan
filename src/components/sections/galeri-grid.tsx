"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { dataGaleri, kategoriGaleri, type FotoGaleri } from "@/data/galeri";
import { Maximize2, Image as ImageIcon } from "lucide-react";

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
            className="group relative aspect-4/3 sm:aspect-square rounded-2xl overflow-hidden border border-border/60 bg-card shadow-xs hover:shadow-xl hover:border-primary/40 transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-primary"
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Dark gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
              <div className="flex items-center justify-between text-white">
                <span className="text-xs font-semibold truncate pr-2">{foto.alt}</span>
                <div className="rounded-full bg-white/20 p-1.5 backdrop-blur-xs shrink-0">
                  <Maximize2 className="h-3.5 w-3.5" />
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