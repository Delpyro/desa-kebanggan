import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin, ArrowRight, Building2, Sparkles } from "lucide-react";
import { desaProfile } from "@/data/profil";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-32">
      {/* Decorative ambient glow Orbs */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-accent/20 blur-[100px] rounded-full pointer-events-none" />

      {/* Batik subtle background texture */}
      <div className="absolute inset-0 batik-texture opacity-30 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 text-center max-w-4xl">
        {/* Location pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/80 border border-primary/20 text-xs font-semibold text-primary mb-6 shadow-xs backdrop-blur-xs animate-fade-in">
          <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
          <span>
            Kecamatan {desaProfile.kecamatan}, Kabupaten {desaProfile.kabupaten}
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        </div>

        {/* Hero title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.15]">
          Selamat Datang di Portal Resmi{" "}
          <span className="font-display italic text-gradient block sm:inline">
            {desaProfile.nama}
          </span>
        </h1>

        {/* Subtitle / Sambutan */}
        <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {desaProfile.sambutan}
        </p>

        {/* Call to Action buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto font-semibold px-7 rounded-xl shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            <Link href="/profil" className="flex items-center gap-2">
              <span>Jelajahi Profil Desa</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto font-semibold px-7 rounded-xl border-primary/30 hover:bg-secondary/70 transition-all duration-300"
          >
            <Link href="/bumdes" className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" />
              <span>Unit BUMDes GJ</span>
            </Link>
          </Button>
        </div>

        {/* Quick tagline pill */}
        <div className="mt-12 inline-flex items-center gap-2 text-xs text-muted-foreground/80 bg-background/60 px-4 py-2 rounded-full border border-border/40 backdrop-blur-xs">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span>Informasi Transparan, Pelayanan Cepat & Berkemajuan</span>
        </div>
      </div>
    </section>
  );
}