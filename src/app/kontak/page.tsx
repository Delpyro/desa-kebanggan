import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { KontakForm } from "@/components/sections/kontak-form";

export const metadata: Metadata = {
  title: "Kontak - Desa Kebanggan",
  description: "Hubungi kantor Desa Kebanggan, Kecamatan Moga, Kabupaten Pemalang.",
};

const infoKontak = [
  { icon: MapPin, label: "Alamat Kantor", value: "Kantor Desa Kebanggan, Kec. Moga, Kab. Pemalang, Jawa Tengah" },
  { icon: Phone, label: "Telepon / WhatsApp", value: "Layanan Pengaduan & Informasi Masyarakat" },
  { icon: Mail, label: "Email Resmi", value: "pemdes.kebanggan@pemalang.go.id" },
  { icon: Clock, label: "Jam Pelayanan", value: "Senin - Jumat, 08.00 - 15.00 WIB" },
];

export default function KontakPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 space-y-12 max-w-6xl">
      {/* Header section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/10 via-secondary to-background border border-primary/20 p-8 sm:p-10 shadow-xs">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
          <MessageSquare className="h-3.5 w-3.5" />
          Pusat Layanan & Kontak
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Hubungi Pemerintah Desa
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl text-sm sm:text-base leading-relaxed">
          Ada pertanyaan, saran, atau keperluan pelayanan? Sampaikan melalui formulir pesan cepat WhatsApp atau kunjungi kantor desa pada jam pelayanan.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-12 items-start">
        {/* Form area */}
        <Card className="lg:col-span-7 rounded-3xl border-border/60 shadow-sm overflow-hidden">
          <CardHeader className="p-6 sm:p-8 bg-secondary/30 border-b border-border/40">
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Kirim Pesan WhatsApp
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 sm:p-8">
            <KontakForm />
          </CardContent>
        </Card>

        {/* Info contact cards */}
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">Informasi Kontak</h2>
          {infoKontak.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
            >
              <div className="rounded-xl bg-primary/10 p-3 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</p>
                <p className="font-semibold text-foreground text-sm leading-snug">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}