export interface Prestasi {
  id: string;
  tahun: number;
  judul: string;
  tingkat: "Desa" | "Kecamatan" | "Kabupaten" | "Provinsi" | "Nasional";
  kategori: string;
  deskripsi: string;
  gambar?: string;
}

export const prestasiList: Prestasi[] = [
  {
    id: "1",
    tahun: 2024,
    judul: "Juara 1 Lomba Desa Tingkat Kecamatan Moga",
    tingkat: "Kecamatan",
    kategori: "Tata Kelola Desa",
    deskripsi:
      "Desa Kebanggan meraih peringkat pertama dalam penilaian lomba desa tingkat Kecamatan Moga, mencakup aspek administrasi, pembangunan, dan kemasyarakatan.",
    gambar: "/images/prestasi/lomba-desa-2024.jpg",
  },
  // tambahin data prestasi lain di sini, ganti dulu placeholder di atas
];