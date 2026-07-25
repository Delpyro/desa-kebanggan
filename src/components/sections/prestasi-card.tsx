import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Prestasi } from "@/data/prestasi";
import { Trophy, Calendar } from "lucide-react";

const tingkatColor: Record<Prestasi["tingkat"], string> = {
  Desa: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800",
  Kecamatan: "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/50 dark:text-sky-300 dark:border-sky-800",
  Kabupaten: "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/50 dark:text-teal-300 dark:border-teal-800",
  Provinsi: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800",
  Nasional: "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-800",
};

export function PrestasiCard({ prestasi }: { prestasi: Prestasi }) {
  return (
    <Card className="h-full border-border/60 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group rounded-2xl overflow-hidden flex flex-col justify-between">
      <CardHeader className="p-6">
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

        <CardTitle className="text-lg leading-snug font-bold group-hover:text-primary transition-colors">
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

      <CardContent className="p-6 pt-0">
        <p className="text-sm text-muted-foreground leading-relaxed">{prestasi.deskripsi}</p>
      </CardContent>
    </Card>
  );
}