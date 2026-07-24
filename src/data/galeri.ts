export interface FotoGaleri {
  id: number;
  src: string;
  alt: string;
  kategori: "Kegiatan" | "Infrastruktur" | "Alam" | "Budaya";
}

// Ganti src dengan path foto asli di /public/galeri/
export const dataGaleri: FotoGaleri[] = [
  { id: 1, src: "/galeri/kegiatan-1.jpg", alt: "Kegiatan gotong royong warga", kategori: "Kegiatan" },
  { id: 2, src: "/galeri/infrastruktur-1.jpg", alt: "Jalan desa", kategori: "Infrastruktur" },
  { id: 3, src: "/galeri/alam-1.jpg", alt: "Pemandangan sawah desa", kategori: "Alam" },
  { id: 4, src: "/galeri/budaya-1.jpg", alt: "Acara adat desa", kategori: "Budaya" },
];

export const kategoriGaleri = ["Semua", "Kegiatan", "Infrastruktur", "Alam", "Budaya"] as const;