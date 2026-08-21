import Link from "next/link";
import { MapPin, Mail, Phone, Trees, ChevronRight, ExternalLink } from "lucide-react";
import { desaProfile } from "@/data/profil";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

        <div className="grid gap-10 md:grid-cols-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center shadow-md shadow-primary/30">
                <Trees className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg text-background">
                {desaProfile.nama}
              </span>
            </Link>
            <p className="text-sm text-background/50 leading-relaxed max-w-xs">
              Website resmi Pemerintah Desa Kebanggan, Kecamatan {desaProfile.kecamatan}, Kabupaten {desaProfile.kabupaten}, Provinsi {desaProfile.provinsi}.
            </p>
          </div>

          {/* Navigasi */}
          <div className="md:col-span-4 space-y-5">
            <p className="text-xs font-bold text-background/40 uppercase tracking-widest">
              Navigasi
            </p>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Beranda" },
                { href: "/profil", label: "Profil Desa" },
                { href: "/bumdes", label: "BUMDes GJ" },
                { href: "/prestasi", label: "Prestasi Desa" },
                { href: "/galeri", label: "Galeri Foto" },
                { href: "/kontak", label: "Kontak" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-background/60 hover:text-background transition-colors group"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-primary group-hover:translate-x-0.5 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div className="md:col-span-4 space-y-5">
            <p className="text-xs font-bold text-background/40 uppercase tracking-widest">
              Kontak & Alamat
            </p>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-background/60 leading-relaxed">
                  Kantor Desa Kebanggan, Kec. Moga, Kab. Pemalang, Jawa Tengah
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-background/60">pemdes.kebanggan@pemalang.go.id</span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <Link href="/kontak" className="text-sm text-background/60 hover:text-background transition-colors inline-flex items-center gap-1 group">
                  Layanan Masyarakat
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/30 font-medium">
          <p>© {new Date().getFullYear()} Pemerintah Desa {desaProfile.nama}. Seluruh Hak Cipta Dilindungi.</p>
          <p>Dibangun oleh Tim KKN</p>
        </div>

      </div>
    </footer>
  );
}