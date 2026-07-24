import type { Metadata } from "next";
import { Inter, Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://desakebanggan.id"; // ganti dengan domain asli nanti

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Desa Kebanggan - Kecamatan Moga, Kabupaten Pemalang",
    template: "%s | Desa Kebanggan",
  },
  description:
    "Website resmi Desa Kebanggan, Kecamatan Moga, Kabupaten Pemalang, Jawa Tengah. Informasi profil desa, BUMDes, prestasi, galeri, dan kontak.",
  keywords: [
    "Desa Kebanggan",
    "Moga",
    "Pemalang",
    "Jawa Tengah",
    "website desa",
    "BUMDes",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Desa Kebanggan",
    title: "Desa Kebanggan - Kecamatan Moga, Kabupaten Pemalang",
    description:
      "Website resmi Desa Kebanggan. Informasi transparan seputar profil, BUMDes, prestasi, dan kegiatan desa.",
    images: [
      {
        url: "/og-image.jpg", // taruh gambar 1200x630 di /public
        width: 1200,
        height: 630,
        alt: "Desa Kebanggan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desa Kebanggan - Kecamatan Moga, Kabupaten Pemalang",
    description: "Website resmi Desa Kebanggan.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={cn(inter.variable, fraunces.variable, jakarta.variable)}
    >
      <body className="font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}