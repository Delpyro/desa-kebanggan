import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Prestasi } from "@/data/prestasi";
import { Trophy } from "lucide-react";

const tingkatColor: Record<Prestasi["tingkat"], string> = {
  Desa: "bg-slate-100 text-slate-700",
  Kecamatan: "bg-blue-100 text-blue-700",
  Kabupaten: "bg-emerald-100 text-emerald-700",
  Provinsi: "bg-amber-100 text-amber-700",
  Nasional: "bg-red-100 text-red-700",
};

export function PrestasiCard({ prestasi }: { prestasi: Prestasi }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="rounded-full bg-primary/10 p-2 w-fit">
            <Trophy className="h-5 w-5 text-primary" />
          </div>
          <Badge className={tingkatColor[prestasi.tingkat]} variant="secondary">
            {prestasi.tingkat}
          </Badge>
        </div>
        <CardTitle className="text-lg leading-snug mt-2">
          {prestasi.judul}
        </CardTitle>
        <CardDescription>
          {prestasi.kategori} · {prestasi.tahun}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{prestasi.deskripsi}</p>
      </CardContent>
    </Card>
  );
}