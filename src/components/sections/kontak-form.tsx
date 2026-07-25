"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

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
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="nama" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Nama Lengkap
        </Label>
        <Input
          id="nama"
          name="nama"
          placeholder="Masukkan nama Anda..."
          required
          className="rounded-xl border-border/60 bg-background/50 focus:bg-background transition-colors"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Alamat Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="nama@email.com"
          required
          className="rounded-xl border-border/60 bg-background/50 focus:bg-background transition-colors"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="pesan" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Pesan / Pertanyaan
        </Label>
        <Textarea
          id="pesan"
          name="pesan"
          rows={4}
          placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
          required
          className="rounded-xl border-border/60 bg-background/50 focus:bg-background transition-colors resize-none"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full font-semibold rounded-xl shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2"
      >
        <span>Kirim via WhatsApp</span>
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}