import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { bumdesProfile, unitUsahaList, pengurusList } from "@/data/bumdes";
import { Building2, CheckCircle2, UserCheck, Store, Compass, Waves, Users, Sparkles, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "BUMDes Wisata Gumuk Jagongan (GJ) - Desa Kebanggan",
  description: "Profil dan unit usaha BUMDes Wisata Gumuk Jagongan (GJ) Desa Kebanggan, Kecamatan Moga, Pemalang.",
};

export default function BumdesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 space-y-16 max-w-6xl">
      {/* Hero / intro banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/10 via-secondary to-background border border-primary/20 p-8 sm:p-10 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Building2 className="h-3.5 w-3.5" />
            Badan Usaha Milik Desa
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-semibold">
            <Users className="h-3.5 w-3.5" />
            {bumdesProfile.jumlahTenagaKerja} Tenaga Kerja Lokal
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          {bumdesProfile.nama}
        </h1>

        <p className="text-muted-foreground max-w-3xl text-sm sm:text-base leading-relaxed">
          {bumdesProfile.deskripsi}
        </p>

        <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-muted-foreground border-t border-border/40">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Lokasi: Tanah Milik Desa Kebanggan</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-amber-500" />
            <span>Potensi Unggulan: Pariwisata Alam & Rekreasi</span>
          </div>
        </div>
      </div>

      {/* Highlights Wisata GJ */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="rounded-xl bg-sky-500/10 p-3 w-fit text-sky-600 dark:text-sky-400">
              <Waves className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Kolam Renang GJ</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Fasilitas berenang segar di area terbuka pegunungan Gumuk Jagongan untuk anak dan dewasa.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="rounded-xl bg-amber-500/10 p-3 w-fit text-amber-600 dark:text-amber-400">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Wahana Permainan Anak</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Area wahana permainan anak yang aman dan menyenangkan di tengah keasrian alam desa.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-xs flex flex-col justify-between">
          <div className="space-y-3">
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
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Unit Usaha & Fasilitas Wisata GJ</h2>
            <p className="text-xs text-muted-foreground">Berbagai bidang usaha BUMDes Kebanggan di lokasi Gumuk Jagongan</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {unitUsahaList.map((unit) => (
            <Card
              key={unit.id}
              className="rounded-2xl border-border/60 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <CardHeader>
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
              className="rounded-2xl border border-border/60 bg-card p-5 text-center shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
            >
              <div className="mx-auto h-12 w-12 rounded-full bg-secondary text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <UserCheck className="h-6 w-6" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{p.jabatan}</p>
              <p className="font-bold text-base text-foreground mt-1">{p.nama}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
