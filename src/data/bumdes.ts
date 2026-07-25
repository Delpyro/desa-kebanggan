export interface UnitUsaha {
  id: string;
  nama: string;
  deskripsi: string;
  kategori: string;
  gambar?: string;
}

export interface Pengurus {
  jabatan: string;
  nama: string;
}

export const bumdesProfile = {
  nama: "BUMDes Wisata Gumuk Jagongan (GJ)",
  potensiUnggulan: "Pariwisata Alam Gumuk Jagongan",
  jumlahTenagaKerja: 10,
  lokasi: "Tanah Milik Desa Kebanggan, Kec. Moga",
  deskripsi:
    "BUMDes Desa Kebanggan mengelola potensi wisata pariwisata alam Gumuk Jagongan (GJ) di atas tanah milik desa. Unit usaha ini menjadi penggerak ekonomi desa yang menyerap 10 tenaga kerja lokal serta menyediakan sarana rekreasi ramah keluarga.",
  visi: "Menjadikan Wisata Gumuk Jagongan (GJ) sebagai destinasi pariwisata mandiri, berdaya saing, dan sumber peningkatan pendapatan asli Desa Kebanggan.",
  misi: [
    "Mengembangkan pariwisata alam Gumuk Jagongan berbasis kearifan lokal secara berkelanjutan.",
    "Memperluas wahana rekreasi keluarga seperti Kolam Renang dan Permainan Anak yang aman dan bersih.",
    "Memberdayakan masyarakat desa sebagai tenaga kerja operasional dan pelaku usaha UMKM di area wisata.",
    "Meningkatkan Pendapatan Asli Desa (PADes) guna menopang pembangunan sarana publik Desa Kebanggan.",
  ],
};

export const unitUsahaList: UnitUsaha[] = [
  {
    id: "1",
    nama: "Kolam Renang Gumuk Jagongan (GJ)",
    kategori: "Rekreasi Air",
    deskripsi:
      "Fasilitas kolam renang dengan air pegunungan yang jernih dan segar di kawasan dataran tinggi Gumuk Jagongan, cocok untuk anak-anak dan keluarga.",
  },
  {
    id: "2",
    nama: "Wahana Permainan Anak",
    kategori: "Pariwisata & Edukasi",
    deskripsi:
      "Area wahana permainan anak yang aman dan menyenangkan di area terbuka terbuka hijau Gumuk Jagongan.",
  },
  {
    id: "3",
    nama: "Kios UMKM & Kuliner Desa",
    kategori: "Perdagangan & Jasa",
    deskripsi:
      "Sentra kuliner dan jajanan khas daerah Moga yang dikelola oleh warga lokal Desa Kebanggan di area sekitar wisata GJ.",
  },
];

export const pengurusList: Pengurus[] = [
  { jabatan: "Direktur / Pengelola BUMDes", nama: "-" },
  { jabatan: "Sekretaris", nama: "-" },
  { jabatan: "Bendahara", nama: "-" },
  { jabatan: "Koordinator Lapangan Wisata GJ", nama: "-" },
  { jabatan: "Tenaga Kerja Operasional", nama: "10 Orang Warga Desa Kebanggan" },
];