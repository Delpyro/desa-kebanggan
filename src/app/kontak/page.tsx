import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageSquare, ImageIcon } from "lucide-react";
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
    <div className="bg-background min-h-screen pb-20">
      
      {/* ── Page Header ─────────────────────────────── */}
      <div className="bg-primary/5 border-b border-primary/10 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquare className="h-4 w-4" />
            Pusat Layanan & Kontak
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Hubungi Pemerintah Desa
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base sm:text-lg leading-relaxed">
            Ada pertanyaan, saran, atau keperluan pelayanan? Sampaikan melalui pesan WhatsApp atau kunjungi langsung kantor desa pada jam pelayanan.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 max-w-6xl">

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

        {/* Info contact + placeholder peta */}
        <div className="lg:col-span-5 space-y-4">
          {/* Google Maps Lokasi Desa */}
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-border/60 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.1714921217576!2d109.24275777592396!3d-7.106114869677643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fed0020bff5cd%3A0x389d0904b8972937!2sDesa%20kebanggan!5e0!3m2!1sen!2sid!4v1787282259074!5m2!1sen!2sid"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <h2 className="text-xl font-bold tracking-tight text-foreground">Informasi Kontak</h2>
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
    </div>
  );
}