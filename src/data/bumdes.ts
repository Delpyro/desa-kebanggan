export interface UnitUsaha {
  id: string;
  nama: string;
  deskripsi: string;
  gambar?: string;
}

export interface Pengurus {
  jabatan: string;
  nama: string;
}

export const bumdesProfile = {
  nama: "BUMDes GJ",
  tahunBerdiri: 2020, // ganti sesuai data asli
  deskripsi:
    "BUMDes GJ merupakan Badan Usaha Milik Desa Kebanggan yang dikelola untuk meningkatkan perekonomian dan kesejahteraan masyarakat desa melalui berbagai unit usaha produktif.",
  visi: "Menjadi badan usaha desa yang mandiri dan berdaya saing demi kesejahteraan masyarakat Desa Kebanggan.",
  misi: [
    "Mengelola potensi ekonomi desa secara profesional",
    "Meningkatkan pendapatan asli desa",
    "Membuka lapangan kerja bagi masyarakat desa",
  ],
};

export const unitUsahaList: UnitUsaha[] = [
  {
    id: "1",
    nama: "Unit Usaha 1", // ganti nama unit usaha asli
    deskripsi: "Deskripsi singkat unit usaha ini.",
    gambar: "/images/bumdes/unit-1.jpg",
  },
];

export const pengurusList: Pengurus[] = [
  { jabatan: "Direktur", nama: "-" },
  { jabatan: "Sekretaris", nama: "-" },
  { jabatan: "Bendahara", nama: "-" },
];