import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { bumdesProfile, unitUsahaList, pengurusList } from "@/data/bumdes";
import { Building2, CheckCircle2, UserCheck, Store, Compass, Waves, Users, Sparkles, MapPin, ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "BUMDes Wisata Gumuk Jagongan (GJ) - Desa Kebanggan",
  description: "Profil dan unit usaha BUMDes Wisata Gumuk Jagongan (GJ) Desa Kebanggan, Kecamatan Moga, Pemalang.",
};

// Placeholder data per unit usaha
const unitUsahaPlaceholder: Record<string, string> = {
  "1": "Foto Kolam Renang Gumuk Jagongan (GJ)",
  "2": "Foto Wahana Permainan Anak di Area GJ",
  "3": "Foto Kios UMKM & Kuliner di Area GJ",
};

export default function BumdesPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* ── Page Hero Header ─────────────────────────────── */}
      <div className="relative w-full h-64 sm:h-80 lg:h-[420px] bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent z-10" />
        
        <div className="absolute inset-0 flex items-center justify-center z-5">
          <div className="flex flex-col items-center gap-3 text-foreground/20">
            <ImageIcon className="h-16 w-16" />
            <p className="text-sm font-medium">Banner Wisata Gumuk Jagongan</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 p-8 sm:p-12">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider">
                <Building2 className="h-3 w-3" />
                Badan Usaha Milik Desa
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider">
                <Users className="h-3 w-3" />
                {bumdesProfile.jumlahTenagaKerja} Tenaga Kerja Lokal
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {bumdesProfile.nama}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 space-y-16 max-w-6xl">
        {/* Intro text */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {bumdesProfile.deskripsi}
            </p>
          </div>
          <div className="flex flex-col gap-3 p-5 rounded-2xl bg-secondary/50 border border-border/50">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-foreground font-medium">Tanah Milik Desa Kebanggan</span>
            </div>
            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
              <span className="text-sm text-foreground font-medium">Pariwisata Alam & Rekreasi</span>
            </div>
          </div>
        </div>

      {/* Highlights Wisata GJ */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Kolam Renang */}
        <div className="rounded-2xl border border-border/60 bg-card shadow-xs flex flex-col overflow-hidden hover:border-sky-400/40 hover:shadow-lg transition-all duration-300 group">
          {/* Placeholder foto */}
          <div className="relative h-36 bg-muted border-b border-border/50 flex flex-col items-center justify-center gap-2 overflow-hidden text-muted-foreground">
            <ImageIcon className="h-6 w-6 text-muted-foreground/50" />
            <p className="text-[11px] font-medium text-center px-3">
              Foto Kolam Renang GJ
            </p>
          </div>

          <div className="p-6 space-y-3 flex-1">
            <div className="rounded-xl bg-sky-500/10 p-3 w-fit text-sky-600 dark:text-sky-400">
              <Waves className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Kolam Renang GJ</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Fasilitas berenang segar di area terbuka pegunungan Gumuk Jagongan untuk anak dan dewasa.
            </p>
          </div>
        </div>

        {/* Wahana Permainan */}
        <div className="rounded-2xl border border-border/60 bg-card shadow-xs flex flex-col overflow-hidden hover:border-amber-400/40 hover:shadow-lg transition-all duration-300 group">
          <div className="relative h-36 bg-muted border-b border-border/50 flex flex-col items-center justify-center gap-2 overflow-hidden text-muted-foreground">
            <ImageIcon className="h-6 w-6 text-muted-foreground/50" />
            <p className="text-[11px] font-medium text-center px-3">
              Foto Wahana Permainan Anak
            </p>
          </div>

          <div className="p-6 space-y-3 flex-1">
            <div className="rounded-xl bg-amber-500/10 p-3 w-fit text-amber-600 dark:text-amber-400">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Wahana Permainan Anak</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Area wahana permainan anak yang aman dan menyenangkan di tengah keasrian alam desa.
            </p>
          </div>
        </div>

        {/* Tenaga Kerja */}
        <div className="rounded-2xl border border-border/60 bg-card shadow-xs flex flex-col overflow-hidden hover:border-emerald-400/40 hover:shadow-lg transition-all duration-300 group">
          <div className="relative h-36 bg-muted border-b border-border/50 flex flex-col items-center justify-center gap-2 overflow-hidden text-muted-foreground">
            <ImageIcon className="h-6 w-6 text-muted-foreground/50" />
            <p className="text-[11px] font-medium text-center px-3">
              Foto Tenaga Kerja / Tim Operasional GJ
            </p>
          </div>

          <div className="p-6 space-y-3 flex-1">
            <div className="rounded-xl bg-emerald-500/10 p-3 w-fit text-emerald-600 dark:text-emerald-400">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground">10 Tenaga Kerja Desa</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Seluruh operasional dikelola dan didukung oleh 10 tenaga kerja warga lokal Desa Kebanggan.
            </p>
          </div>
        </div>
      </div>

      {/* Visi Misi */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="rounded-2xl border-border/60 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
              <Compass className="h-5 w-5" />
              Visi BUMDes GJ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base font-medium text-foreground bg-secondary/40 p-4 rounded-xl border border-border/40 italic leading-relaxed">
              &ldquo;{bumdesProfile.visi}&rdquo;
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/60 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Misi BUMDes GJ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {bumdesProfile.misi.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-foreground/90 items-start">
                  <div className="rounded-full bg-primary/10 p-1 text-primary shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Unit Usaha */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-accent/20 p-2.5 text-accent-foreground">
            <Store className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Unit Usaha &amp; Fasilitas Wisata GJ</h2>
            <p className="text-xs text-muted-foreground">Berbagai bidang usaha BUMDes Kebanggan di lokasi Gumuk Jagongan</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {unitUsahaList.map((unit) => (
            <Card
              key={unit.id}
              className="rounded-2xl border-border/60 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group flex flex-col overflow-hidden"
            >
              {/* Placeholder gambar unit usaha */}
              {unit.gambar ? (
                <div className="relative h-44 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={unit.gambar} alt={unit.nama} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ) : (
                <div className="relative h-44 bg-muted border-b border-border/50 flex flex-col items-center justify-center gap-2 overflow-hidden text-muted-foreground">
                  <ImageIcon className="h-8 w-8 text-muted-foreground/50" />
                  <div className="text-center px-4">
                    <p className="text-[11px] font-semibold text-foreground/70 leading-snug">
                      {unitUsahaPlaceholder[unit.id] ?? `Foto ${unit.nama}`}
                    </p>
                    <p className="text-[10px] text-muted-foreground/60 mt-0.5">Ganti dengan foto asli</p>
                  </div>
                </div>
              )}

              <CardHeader className="pt-5">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="rounded-xl bg-primary/10 p-3 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Store className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary text-primary border border-primary/20">
                    {unit.kategori}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {unit.nama}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{unit.deskripsi}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Pengurus */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
            <UserCheck className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Struktur Pengelola BUMDes</h2>
            <p className="text-xs text-muted-foreground">Tim pengelola operasional BUMDes Wisata Gumuk Jagongan (GJ)</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 max-w-4xl">
          {pengurusList.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border/60 bg-card shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-300 group overflow-hidden"
            >
              {/* Placeholder foto pengurus */}
              <div className="relative h-28 bg-muted border-b border-border/50 flex flex-col items-center justify-center gap-1.5 overflow-hidden text-muted-foreground">
                <UserCheck className="h-8 w-8 text-muted-foreground/50" />
                <p className="text-[10px] text-foreground/70 font-medium">Foto Pengurus</p>
              </div>

              <div className="p-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{p.jabatan}</p>
                <p className="font-bold text-base text-foreground mt-1">{p.nama}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}