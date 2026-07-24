export const desaProfile = {
  nama: "Desa Kebanggan",
  kecamatan: "Moga",
  kabupaten: "Pemalang",
  provinsi: "Jawa Tengah",
  sambutan:
    "Selamat datang di website resmi Desa Kebanggan. Melalui website ini, kami berharap dapat memberikan informasi yang transparan dan mudah diakses oleh seluruh masyarakat serta pihak-pihak yang membutuhkan informasi seputar Desa Kebanggan.",
  namaKades: "-", // ganti nama kepala desa asli
  statistik: [
    { label: "Jumlah Penduduk", value: "-" },
    { label: "Jumlah Dusun", value: "-" },
    { label: "Luas Wilayah", value: "-" },
    { label: "Jumlah RT/RW", value: "-" },
  ],
};

export interface PerangkatDesa {
  jabatan: string;
  nama: string;
}

export const sejarahDesa = `
Tuliskan sejarah asal-usul Desa Kebanggan di sini — asal nama desa,
tahun berdiri/pemekaran, tokoh-tokoh penting, dan perkembangan desa
dari masa ke masa. Ganti paragraf ini dengan data asli dari pemdes.
`;

export const visiMisi = {
  visi:
    "Terwujudnya Desa Kebanggan yang maju, mandiri, dan sejahtera berbasis potensi lokal.",
  misi: [
    "Meningkatkan kualitas pelayanan publik yang transparan dan akuntabel",
    "Mengembangkan potensi ekonomi desa melalui BUMDes dan UMKM",
    "Meningkatkan kualitas infrastruktur dan lingkungan desa",
    "Memperkuat partisipasi masyarakat dalam pembangunan desa",
  ],
};

export const letakGeografis = {
  batasUtara: "-",
  batasSelatan: "-",
  batasTimur: "-",
  batasBarat: "-",
  luasWilayah: "-",
  jumlahDusun: "-",
};

export const perangkatDesa: PerangkatDesa[] = [
  { jabatan: "Kepala Desa", nama: "-" },
  { jabatan: "Sekretaris Desa", nama: "-" },
  { jabatan: "Kaur Keuangan", nama: "-" },
  { jabatan: "Kaur Perencanaan", nama: "-" },
  { jabatan: "Kaur Umum", nama: "-" },
  { jabatan: "Kasi Pemerintahan", nama: "-" },
  { jabatan: "Kasi Kesejahteraan", nama: "-" },
  { jabatan: "Kasi Pelayanan", nama: "-" },
];