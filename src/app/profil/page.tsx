import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle2,
  GitBranch,
  User,
  Landmark,
  History,
  Compass,
  MapPin,
  Users,
  Briefcase,
  GraduationCap,
  TrendingUp,
  Sprout,
  ShieldAlert,
} from "lucide-react";
import {
  sejarahDesa,
  visiMisi,
  strategiDanKebijakan,
  letakGeografis,
  demografiData,
  pendidikanData,
  lapanganUsahaData,
  pekerjaanData,
  ekonomiData,
  perangkatDesa,
} from "@/data/profil";

// ── Org Chart Sub-components ──────────────────────────────────────
const accentMap: Record<string, string> = {
  primary:
    "border-primary/40 bg-primary/5 [&_.label]:bg-primary [&_.label]:text-primary-foreground [&_.avatar]:bg-primary/10 [&_.avatar]:text-primary",
  emerald:
    "border-emerald-400/40 bg-emerald-50/50 dark:bg-emerald-950/20 [&_.label]:bg-emerald-600 [&_.label]:text-white [&_.avatar]:bg-emerald-500/10 [&_.avatar]:text-emerald-600",
  sky: "border-sky-400/40 bg-sky-50/50 dark:bg-sky-950/20 [&_.label]:bg-sky-500 [&_.label]:text-white [&_.avatar]:bg-sky-500/10 [&_.avatar]:text-sky-600",
  amber:
    "border-amber-400/40 bg-amber-50/50 dark:bg-amber-950/20 [&_.label]:bg-amber-500 [&_.label]:text-white [&_.avatar]:bg-amber-500/10 [&_.avatar]:text-amber-600",
  rose: "border-rose-400/40 bg-rose-50/50 dark:bg-rose-950/20 [&_.label]:bg-rose-500 [&_.label]:text-white [&_.avatar]:bg-rose-500/10 [&_.avatar]:text-rose-600",
};

function OrgCard({
  jabatan,
  nama,
  accent = "primary",
}: {
  jabatan: string;
  nama: string;
  accent?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border px-4 py-3 w-full max-w-xs mx-auto shadow-xs ${accentMap[accent] ?? ""}`}
    >
      <div className="avatar h-10 w-10 rounded-full flex items-center justify-center shrink-0">
        <User className="h-5 w-5" />
      </div>
      <div>
        <div className="label rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider w-fit mb-1">
          {jabatan}
        </div>
        <p className="font-bold text-sm text-foreground leading-none">{nama}</p>
      </div>
    </div>
  );
}

function OrgConnector() {
  return (
    <div className="flex flex-col items-center py-1">
      <div className="w-0.5 h-5 bg-border" />
    </div>
  );
}
// ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Profil Desa - Desa Kebanggan",
  description:
    "Sejarah, Visi Misi RPJM Desa, Data Demografi Monografi 2025, Letak Geografis, Perekonomian, dan Struktur Pemerintahan Desa Kebanggan.",
};

export default function ProfilPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 space-y-12 max-w-6xl">
      {/* Header section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/10 via-secondary to-background border border-primary/20 p-8 sm:p-10 shadow-xs">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
          <Landmark className="h-3.5 w-3.5" />
          Monografi Resmi Desa Kebanggan Tahun 2025
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Profil & Gambaran Umum Desa
        </h1>
        <p className="text-muted-foreground mt-2 max-w-3xl text-sm sm:text-base leading-relaxed">
          Menyajikan data resmi Monografi Desa Kebanggan 2025, arah pembangunan RPJM Desa 2019–2025, letak astronomis, demografi penduduk, mata pencaharian, serta statistik pendidikan.
        </p>
      </div>

      <Tabs defaultValue="visi-misi" className="w-full space-y-8">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 p-1.5 bg-secondary/70 rounded-2xl border border-border/50 h-auto gap-1">
          <TabsTrigger
            value="visi-misi"
            className="rounded-xl py-2.5 text-xs sm:text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm transition-all"
          >
            <Compass className="h-4 w-4 mr-2 hidden sm:inline" />
            Visi & Misi
          </TabsTrigger>
          <TabsTrigger
            value="geografis"
            className="rounded-xl py-2.5 text-xs sm:text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm transition-all"
          >
            <MapPin className="h-4 w-4 mr-2 hidden sm:inline" />
            Geografis
          </TabsTrigger>
          <TabsTrigger
            value="demografi"
            className="rounded-xl py-2.5 text-xs sm:text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm transition-all"
          >
            <Users className="h-4 w-4 mr-2 hidden sm:inline" />
            Demografi
          </TabsTrigger>
          <TabsTrigger
            value="ekonomi"
            className="rounded-xl py-2.5 text-xs sm:text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm transition-all"
          >
            <TrendingUp className="h-4 w-4 mr-2 hidden sm:inline" />
            Perekonomian
          </TabsTrigger>
          <TabsTrigger
            value="struktur"
            className="rounded-xl py-2.5 text-xs sm:text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm transition-all"
          >
            <User className="h-4 w-4 mr-2 hidden sm:inline" />
            Struktur Pemdes
          </TabsTrigger>
        </TabsList>

        {/* Tab 1: Visi & Misi */}
        <TabsContent value="visi-misi" className="space-y-6">
          <Card className="rounded-2xl border-border/60 shadow-sm overflow-hidden">
            <div className="bg-primary/5 p-4 border-b border-primary/10 flex items-center justify-between">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Dasar Hukum RPJM Desa</span>
              <span className="text-xs text-muted-foreground">{visiMisi.dasarHukum}</span>
            </div>
            <CardHeader className="pt-6">
              <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                <Compass className="h-5 w-5" />
                Visi Desa Kebanggan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-6 rounded-2xl bg-secondary/50 border border-primary/20 text-center">
                <p className="text-lg sm:text-xl font-bold text-foreground font-display tracking-tight leading-relaxed">
                  &ldquo;{visiMisi.visi}&rdquo;
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Misi Pembangunan Desa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-1">
                {visiMisi.misi.map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-card border border-border/50 items-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-sm sm:text-base text-foreground leading-relaxed pt-0.5">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                <Compass className="h-5 w-5" />
                Strategi dan Kebijakan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                  {strategiDanKebijakan.deskripsi}
                </p>
                <div className="grid gap-3">
                  {strategiDanKebijakan.strategi.map((item, i) => (
                    <div key={i} className="flex gap-4 p-3.5 rounded-xl bg-card border border-border/50 items-start">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs shrink-0">
                        {i + 1}
                      </div>
                      <p className="text-sm text-foreground leading-relaxed pt-0.5">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-sm text-primary font-medium italic leading-relaxed text-center">
                  &ldquo;{strategiDanKebijakan.fokus}&rdquo;
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Langkah Operasional Pembangunan
                </h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {strategiDanKebijakan.langkahOperasional.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-secondary/40 border border-border/40">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span className="text-sm text-foreground leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Prioritas Pengembangan Desa
                </h4>
                <div className="grid gap-3 sm:grid-cols-1">
                  {strategiDanKebijakan.prioritasPengembangan.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-card border border-border/50">
                      <div className="h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                      <span className="text-sm font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <History className="h-5 w-5 text-primary" />
                Gambaran & Sejarah Singkat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-muted-foreground whitespace-pre-line leading-relaxed">
                {sejarahDesa}
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab 2: Geografis & Topografi */}
        <TabsContent value="geografis" className="space-y-6">
          <Card className="rounded-2xl border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Kondisi Geografis & Batas Wilayah
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-xs uppercase font-semibold tracking-wider text-primary mb-1">Letak Astronomis</p>
                <p className="font-semibold text-foreground text-sm sm:text-base">{letakGeografis.astronomis}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 rounded-xl bg-secondary/40 border border-border/40">
                  <p className="text-xs uppercase font-semibold tracking-wider text-muted-foreground mb-1">Batas Utara</p>
                  <p className="font-semibold text-foreground text-sm">{letakGeografis.batasUtara}</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/40 border border-border/40">
                  <p className="text-xs uppercase font-semibold tracking-wider text-muted-foreground mb-1">Batas Selatan</p>
                  <p className="font-semibold text-foreground text-sm">{letakGeografis.batasSelatan}</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/40 border border-border/40">
                  <p className="text-xs uppercase font-semibold tracking-wider text-muted-foreground mb-1">Batas Timur</p>
                  <p className="font-semibold text-foreground text-sm">{letakGeografis.batasTimur}</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/40 border border-border/40">
                  <p className="text-xs uppercase font-semibold tracking-wider text-muted-foreground mb-1">Batas Barat</p>
                  <p className="font-semibold text-foreground text-sm">{letakGeografis.batasBarat}</p>
                </div>
              </div>

              <Separator />

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="p-4 rounded-xl bg-card border border-border/60">
                  <p className="text-xs uppercase font-semibold tracking-wider text-muted-foreground mb-1">Total Luas Wilayah</p>
                  <p className="font-bold text-foreground text-xl text-primary">{letakGeografis.luasWilayah}</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border/60">
                  <p className="text-xs uppercase font-semibold tracking-wider text-muted-foreground mb-1">Tanah Sawah Pertanian</p>
                  <p className="font-bold text-foreground text-base">{letakGeografis.tanahSawah}</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border/60">
                  <p className="text-xs uppercase font-semibold tracking-wider text-muted-foreground mb-1">Tanah Pemukiman & Darat</p>
                  <p className="font-bold text-foreground text-base">{letakGeografis.tanahDarat}</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 rounded-xl bg-secondary/30 border border-border/40">
                  <p className="text-xs uppercase font-semibold tracking-wider text-muted-foreground mb-1">Ketinggian Topografi</p>
                  <p className="font-semibold text-foreground text-sm">{letakGeografis.ketinggian}</p>
                  <p className="text-xs text-muted-foreground mt-1">{letakGeografis.topografi}</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/30 border border-border/40">
                  <p className="text-xs uppercase font-semibold tracking-wider text-muted-foreground mb-1">Jenis Tanah</p>
                  <p className="font-semibold text-foreground text-sm">{letakGeografis.jenisTanah}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab 3: Demografi & Pendidikan */}
        <TabsContent value="demografi" className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-xs">
              <p className="text-xs uppercase font-semibold tracking-wider text-muted-foreground">Total Penduduk</p>
              <p className="text-3xl font-bold text-primary mt-1">{demografiData.totalPenduduk.toLocaleString("id-ID")} Jiwa</p>
              <p className="text-xs text-muted-foreground mt-1">Laki-laki: {demografiData.lakiLaki} | Perempuan: {demografiData.perempuan}</p>
            </div>
            <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-xs">
              <p className="text-xs uppercase font-semibold tracking-wider text-muted-foreground">Jumlah Kepala Keluarga</p>
              <p className="text-3xl font-bold text-foreground mt-1">{demografiData.jumlahKK} KK</p>
              <p className="text-xs text-muted-foreground mt-1">{demografiData.jumlahAnggotaKeluarga} Anggota Keluarga</p>
            </div>
            <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-xs">
              <p className="text-xs uppercase font-semibold tracking-wider text-muted-foreground">Kepadatan Penduduk</p>
              <p className="text-3xl font-bold text-foreground mt-1">{demografiData.kepadatan}</p>
              <p className="text-xs text-muted-foreground mt-1">Laju Pertumbuhan: {demografiData.lajuPertumbuhan}</p>
            </div>
            <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-xs">
              <p className="text-xs uppercase font-semibold tracking-wider text-muted-foreground">Pembagian Wilayah</p>
              <p className="text-3xl font-bold text-foreground mt-1">2 Dusun</p>
              <p className="text-xs text-muted-foreground mt-1">Terbagi dalam 2 RW & 8 RT</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Kelompok Usia */}
            <Card className="rounded-2xl border-border/60 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-foreground flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Komposisi Kelompok Usia (2025)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {demografiData.kelompokUsia.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-secondary/40 border border-border/40">
                    <span className="text-sm font-medium text-foreground">{item.kelompok}</span>
                    <span className="font-bold text-primary text-sm">{item.jumlah} Jiwa</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tingkat Pendidikan */}
            <Card className="rounded-2xl border-border/60 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-foreground flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Tingkat Pendidikan Penduduk (2025)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2.5">
                {pendidikanData.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-secondary/30 text-xs sm:text-sm">
                    <span className="text-muted-foreground">{item.tingkat}</span>
                    <span className="font-bold text-foreground">{item.jumlah} Orang</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tab 4: Perekonomian & Pekerjaan */}
        <TabsContent value="ekonomi" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="rounded-2xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Kondisi Perekonomian & Income
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <p className="text-xs uppercase font-semibold tracking-wider text-primary">Pendapatan Perkapita (2025)</p>
                  <p className="text-2xl sm:text-3xl font-bold text-foreground mt-1">{ekonomiData.pendapatanPerkapitaTahun} / tahun</p>
                  <p className="text-xs text-muted-foreground mt-1">Rata-rata penghasilan: {ekonomiData.pendapatanPerkapitaBulan} / bulan</p>
                </div>

                <div className="p-4 rounded-xl bg-secondary/40 border border-border/40 space-y-2">
                  <p className="text-xs uppercase font-semibold tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <Sprout className="h-4 w-4 text-emerald-600" />
                    Komoditas Pertanian Utama
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {ekonomiData.komoditasUtama.map((k, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-semibold text-xs border border-emerald-300/50">
                        {k}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed pt-2">
                    Pertumbuhan ekonomi dipengaruhi oleh komoditas pertanian tanaman pangan, perkebunan, industri kecil rumah tangga, dan pariwisata.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Lapangan Usaha Utama */}
            <Card className="rounded-2xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Penduduk Berdasarkan Lapangan Usaha
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2.5">
                {lapanganUsahaData.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-secondary/40 border border-border/40 text-xs sm:text-sm">
                    <span className="font-medium text-foreground">{item.sektor}</span>
                    <span className="font-bold text-primary">{item.jumlah} Jiwa</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Rincian Jenis Pekerjaan */}
          <Card className="rounded-2xl border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground">
                Rincian Jenis Pekerjaan Penduduk (Monografi 2025)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {pekerjaanData.map((p, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-card border border-border/50 text-xs sm:text-sm">
                    <span className="text-muted-foreground">{p.jenis}</span>
                    <span className="font-bold text-foreground">{p.jumlah} Jiwa</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab 5: Struktur Pemdes */}
        <TabsContent value="struktur" className="space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <GitBranch className="h-3.5 w-3.5" />
            Struktur Organisasi & Tata Kerja Pemerintah Desa Kebanggan
          </div>

          {/* Bagan Organisasi */}
          <div className="flex flex-col items-center gap-0">

            {/* Level 1 – Kepala Desa */}
            <OrgCard jabatan="Kepala Desa" nama="Sarino" accent="primary" />
            <OrgConnector />

            {/* Level 2 – Sekretaris Desa */}
            <OrgCard jabatan="Sekretaris Desa" nama="Iwan" accent="emerald" />
            <OrgConnector />

            {/* Level 3 – Kaur & Kasi (dua kelompok sejajar) */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Kaur – Sekretariat */}
              <div className="flex flex-col gap-3">
                <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground border-b border-border/50 pb-2">Staf Sekretariat</p>
                <OrgCard jabatan="Kaur TU & Umum" nama="Eti Widyawati" accent="sky" />
                <OrgCard jabatan="Kaur Keuangan" nama="T. Tohasim" accent="sky" />
                <OrgCard jabatan="Kaur Perencanaan" nama="Anikmah" accent="sky" />
              </div>
              {/* Kasi – Pelaksana Teknis */}
              <div className="flex flex-col gap-3">
                <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground border-b border-border/50 pb-2">Pelaksana Teknis</p>
                <OrgCard jabatan="Kasi Pemerintahan" nama="Dwi Elok Annisa" accent="amber" />
                <OrgCard jabatan="Kasi Kesejahteraan" nama="Bambang Agus S." accent="amber" />
                <OrgCard jabatan="Kasi Pelayanan" nama="Rezha Fahlefi" accent="amber" />
              </div>
            </div>

            <OrgConnector />

            {/* Level 4 – Kepala Dusun */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
              <OrgCard jabatan="Kepala Dusun I" nama="Khamim" accent="rose" />
              <OrgCard jabatan="Kepala Dusun II" nama="Nur Amaliya" accent="rose" />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
