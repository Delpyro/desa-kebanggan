import Link from "next/link";
import { MapPin, Mail, Phone, Trees, ChevronRight } from "lucide-react";
import { desaProfile } from "@/data/profil";

export function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-50 border-t border-emerald-800/40 relative overflow-hidden">
      {/* Decorative subtle ambient pattern */}
      <div className="absolute inset-0 batik-texture opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 py-14 sm:px-6 relative z-10 grid gap-10 md:grid-cols-12">
        {/* Brand & info */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 text-emerald-950 font-bold shadow-md shadow-amber-500/20">
              <Trees className="h-5 w-5" />
            </div>
            <div>
              <span className="font-display italic text-2xl font-bold text-white tracking-tight">
                {desaProfile.nama}
              </span>
            </div>
          </div>
          <p className="text-sm text-emerald-200/80 leading-relaxed max-w-sm">
            Website resmi Pemerintah Desa Kebanggan, Kecamatan {desaProfile.kecamatan}, Kabupaten {desaProfile.kabupaten}, Provinsi {desaProfile.provinsi}. Melayani dengan transparansi dan kejujuran.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 space-y-3 text-sm">
          <p className="text-amber-400 font-semibold uppercase tracking-wider text-xs flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Navigasi Cepat
          </p>
          <ul className="space-y-2 text-emerald-200/80">
            {[
              { href: "/", label: "Beranda Utama" },
              { href: "/profil", label: "Profil & Visi Misi" },
              { href: "/bumdes", label: "BUMDes GJ" },
              { href: "/prestasi", label: "Prestasi Desa" },
              { href: "/galeri", label: "Galeri Foto" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1.5 hover:text-amber-300 transition-colors group"
                >
                  <ChevronRight className="h-3.5 w-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-4 space-y-3 text-sm">
          <p className="text-amber-400 font-semibold uppercase tracking-wider text-xs flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Kontak Kantor Desa
          </p>
          <div className="space-y-2.5 text-emerald-200/80">
            <div className="flex gap-3 items-start p-2.5 rounded-lg bg-emerald-900/40 border border-emerald-800/40">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-amber-400" />
              <span>Kantor Desa Kebanggan, Kec. Moga, Kab. Pemalang, Jawa Tengah</span>
            </div>
            <div className="flex gap-3 items-center p-2.5 rounded-lg bg-emerald-900/40 border border-emerald-800/40">
              <Phone className="h-4 w-4 shrink-0 text-amber-400" />
              <span>Hubungi Perangkat Desa via Halaman Kontak</span>
            </div>
            <div className="flex gap-3 items-center p-2.5 rounded-lg bg-emerald-900/40 border border-emerald-800/40">
              <Mail className="h-4 w-4 shrink-0 text-amber-400" />
              <span>pemdes.kebanggan@pemalang.go.id</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-emerald-900 bg-emerald-950/80 py-4 relative z-10">
        <div className="container mx-auto px-4 text-xs text-emerald-400/60 text-center">
          © {new Date().getFullYear()} Pemerintah Desa {desaProfile.nama}. Seluruh Hak Cipta Dilindungi.
        </div>
      </div>
    </footer>
  );
}