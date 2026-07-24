"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { dataGaleri, kategoriGaleri, type FotoGaleri } from "@/data/galeri";

export function GaleriGrid() {
  const [filter, setFilter] = useState<(typeof kategoriGaleri)[number]>("Semua");
  const [selected, setSelected] = useState<FotoGaleri | null>(null);

  const filtered =
    filter === "Semua" ? dataGaleri : dataGaleri.filter((f) => f.kategori === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {kategoriGaleri.map((k) => (
          <Button
            key={k}
            size="sm"
            variant={filter === k ? "default" : "outline"}
            onClick={() => setFilter(k)}
          >
            {k}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((foto) => (
          <button
            key={foto.id}
            onClick={() => setSelected(foto)}
            className="relative aspect-square rounded-lg overflow-hidden border group"
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          Belum ada foto untuk kategori ini.
        </p>
      )}

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {selected && (
            <div className="relative w-full aspect-video">
              <Image src={selected.src} alt={selected.alt} fill className="object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}