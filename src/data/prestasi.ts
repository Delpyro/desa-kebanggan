export interface Prestasi {
  id: string;
  tahun: number;
  judul: string;
  tingkat: "Desa" | "Kecamatan" | "Kabupaten" | "Provinsi" | "Nasional";
  kategori: string;
  deskripsi: string;
  gambar?: string;
  gambarPlaceholder?: string;
}

export const prestasiList: Prestasi[] = [
  {
    id: "1",
    tahun: 2025,
    judul: "Juara 2 Rhapsodi Award – Lomba Desa & Kelurahan Bersih Periode I",
    tingkat: "Kabupaten",
    kategori: "Kebersihan & Lingkungan",
    deskripsi:
      "Desa Kebanggan meraih Juara 2 Rhapsodi Award dalam Lomba Desa dan Kelurahan Bersih Tingkat Kabupaten Pemalang Periode I Tahun 2025, sebagai wujud nyata komitmen pemerintah dan masyarakat dalam menjaga kebersihan lingkungan.",
    gambarPlaceholder: "Foto Piala / Sertifikat Juara 2 Rhapsodi Award Periode I 2025",
  },
  {
    id: "2",
    tahun: 2026,
    judul: "Juara 2 Rhapsodi Award – Lomba Desa & Kelurahan Bersih Periode II",
    tingkat: "Kabupaten",
    kategori: "Kebersihan & Lingkungan",
    deskripsi:
      "Desa Kebanggan kembali meraih Juara 2 Rhapsodi Award dalam Lomba Desa dan Kelurahan Bersih Tingkat Kabupaten Pemalang Periode II Tahun 2026, membuktikan konsistensi desa dalam menjaga standar kebersihan lingkungan.",
    gambarPlaceholder: "Foto Piala / Sertifikat Juara 2 Rhapsodi Award Periode II 2026",
  },
  {
    id: "3",
    tahun: 2025,
    judul: "Juara 1 – Percepatan Realisasi Penerimaan PBB P2 100%",
    tingkat: "Kabupaten",
    kategori: "Administrasi & Keuangan Desa",
    deskripsi:
      "Desa Kebanggan meraih Juara 1 Penghargaan atas Prestasi Percepatan Realisasi Penerimaan Pajak Bumi dan Bangunan (PBB P2) sebesar 100% Tahun 2025, mencerminkan keberhasilan pengelolaan administrasi keuangan dan kesadaran pajak masyarakat.",
    gambarPlaceholder: "Foto Piala / Sertifikat Penghargaan PBB P2 100% Tahun 2025",
  },
];