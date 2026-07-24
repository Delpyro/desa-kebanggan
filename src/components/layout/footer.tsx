import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { desaProfile } from "@/data/profil";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-accent/20">
      <div className="container mx-auto px-4 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-display italic text-xl mb-2">{desaProfile.nama}</p>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Kecamatan {desaProfile.kecamatan}, Kabupaten {desaProfile.kabupaten},{" "}
            {desaProfile.provinsi}.
          </p>
        </div>

        <div className="text-sm space-y-2 text-primary-foreground/70">
          <p className="text-accent uppercase tracking-widest text-xs mb-3">Tautan</p>
          <Link href="/profil" className="block hover:text-primary-foreground">Profil Desa</Link>
          <Link href="/bumdes" className="block hover:text-primary-foreground">BUMDes GJ</Link>
          <Link href="/prestasi" className="block hover:text-primary-foreground">Prestasi</Link>
          <Link href="/galeri" className="block hover:text-primary-foreground">Galeri</Link>
        </div>

        <div className="text-sm space-y-3 text-primary-foreground/70">
          <p className="text-accent uppercase tracking-widest text-xs mb-3">Kontak</p>
          <div className="flex gap-2 items-start">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
            <span>Kantor Desa {desaProfile.nama}</span>
          </div>
          <div className="flex gap-2 items-center">
            <Phone className="h-4 w-4 shrink-0 text-accent" />
            <span>-</span>
          </div>
          <div className="flex gap-2 items-center">
            <Mail className="h-4 w-4 shrink-0 text-accent" />
            <span>-</span>
          </div>
        </div>
      </div>

      <div className="border-t border-accent/10">
        <div className="container mx-auto px-4 py-4 text-xs text-primary-foreground/50 text-center">
          © {new Date().getFullYear()} Pemerintah Desa {desaProfile.nama}. Seluruh hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}