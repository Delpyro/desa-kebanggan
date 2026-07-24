import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { bumdesProfile, unitUsahaList, pengurusList } from "@/data/bumdes";
import { Building2, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "BUMDes GJ - Desa Kebanggan",
  description: "Profil dan unit usaha BUMDes GJ, Desa Kebanggan.",
};

export default function BumdesPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      {/* Hero / intro */}
      <div className="max-w-2xl">
        <div className="flex items-center gap-2 text-primary mb-2">
          <Building2 className="h-5 w-5" />
          <span className="text-sm font-medium">Badan Usaha Milik Desa</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">
          {bumdesProfile.nama}
        </h1>
        <p className="text-muted-foreground mt-3">{bumdesProfile.deskripsi}</p>
      </div>

      {/* Visi Misi */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Visi</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{bumdesProfile.visi}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Misi</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {bumdesProfile.misi.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Unit Usaha */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-6">Unit Usaha</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {unitUsahaList.map((unit) => (
            <Card key={unit.id}>
              <CardHeader>
                <CardTitle className="text-lg">{unit.nama}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{unit.deskripsi}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Pengurus */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          Struktur Pengurus
        </h2>
        <div className="grid gap-4 sm:grid-cols-3 max-w-2xl">
          {pengurusList.map((p, i) => (
            <div key={i} className="rounded-lg border p-4 text-center">
              <p className="text-sm text-muted-foreground">{p.jabatan}</p>
              <p className="font-medium mt-1">{p.nama}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}