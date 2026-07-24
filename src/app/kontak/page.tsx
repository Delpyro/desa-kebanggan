import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { KontakForm } from "@/components/sections/kontak-form";

export const metadata: Metadata = {
  title: "Kontak - Desa Kebanggan",
  description: "Hubungi kantor Desa Kebanggan, Kecamatan Moga, Kabupaten Pemalang.",
};

const infoKontak = [
  { icon: MapPin, label: "Alamat", value: "Kantor Desa Kebanggan, Kec. Moga, Kab. Pemalang" },
  { icon: Phone, label: "Telepon", value: "-" },
  { icon: Mail, label: "Email", value: "-" },
  { icon: Clock, label: "Jam Layanan", value: "Senin - Jumat, 08.00 - 15.00 WIB" },
];

export default function KontakPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Hubungi Kami</h1>
        <p className="text-muted-foreground mt-2">
          Ada pertanyaan atau masukan? Sampaikan lewat form di bawah atau kontak langsung kantor desa.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Kirim Pesan</CardTitle>
          </CardHeader>
          <CardContent>
            <KontakForm />
          </CardContent>
        </Card>

        <div className="space-y-4">
          {infoKontak.map((item, i) => (
            <div key={i} className="flex gap-4 rounded-lg border p-4">
              <item.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}