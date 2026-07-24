"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// Ganti dengan nomor WA kantor desa, format: kode negara tanpa "+" atau "0" di depan
// Contoh: 08123456789 -> 628123456789
const NOMOR_WA_DESA = "6281234567890";

export function KontakForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const nama = formData.get("nama") as string;
    const email = formData.get("email") as string;
    const pesan = formData.get("pesan") as string;

    const teks = `Halo, saya ingin menghubungi Kantor Desa Kebanggan.

Nama: ${nama}
Email: ${email}
Pesan: ${pesan}`;

    const url = `https://wa.me/${NOMOR_WA_DESA}?text=${encodeURIComponent(teks)}`;
    window.open(url, "_blank");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="nama">Nama</Label>
        <Input id="nama" name="nama" required />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="pesan">Pesan</Label>
        <Textarea id="pesan" name="pesan" rows={5} required />
      </div>
      <Button type="submit" className="w-full">
        Kirim via WhatsApp
      </Button>
    </form>
  );
}