import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2 } from "lucide-react";
import {
  sejarahDesa,
  visiMisi,
  letakGeografis,
  perangkatDesa,
} from "@/data/profil";

export const metadata: Metadata = {
  title: "Profil Desa - Desa Kebanggan",
  description:
    "Sejarah, visi misi, letak geografis, dan struktur pemerintahan Desa Kebanggan, Kecamatan Moga, Kabupaten Pemalang.",
};

export default function ProfilPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight">Profil Desa</h1>
        <p className="text-muted-foreground mt-2">
          Desa Kebanggan, Kecamatan Moga, Kabupaten Pemalang, Jawa Tengah.
        </p>
      </div>

      <Tabs defaultValue="sejarah" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
          <TabsTrigger value="sejarah">Sejarah</TabsTrigger>
          <TabsTrigger value="visi-misi">Visi & Misi</TabsTrigger>
          <TabsTrigger value="geografis">Letak Geografis</TabsTrigger>
          <TabsTrigger value="struktur">Struktur Pemerintahan</TabsTrigger>
        </TabsList>

        <TabsContent value="sejarah" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Sejarah Desa Kebanggan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                {sejarahDesa}
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visi-misi" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Visi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{visiMisi.visi}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Misi</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {visiMisi.misi.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="geografis" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Letak Geografis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-muted-foreground">Batas Utara</p>
                  <p className="font-medium">{letakGeografis.batasUtara}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Batas Selatan</p>
                  <p className="font-medium">{letakGeografis.batasSelatan}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Batas Timur</p>
                  <p className="font-medium">{letakGeografis.batasTimur}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Batas Barat</p>
                  <p className="font-medium">{letakGeografis.batasBarat}</p>
                </div>
                <Separator className="sm:col-span-2" />
                <div>
                  <p className="text-sm text-muted-foreground">Luas Wilayah</p>
                  <p className="font-medium">{letakGeografis.luasWilayah}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Jumlah Dusun</p>
                  <p className="font-medium">{letakGeografis.jumlahDusun}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="struktur" className="mt-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {perangkatDesa.map((p, i) => (
              <div key={i} className="rounded-lg border p-4 text-center">
                <p className="text-sm text-muted-foreground">{p.jabatan}</p>
                <p className="font-medium mt-1">{p.nama}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}