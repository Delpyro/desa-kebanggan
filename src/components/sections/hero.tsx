import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, MapPin, ImageIcon } from "lucide-react";
import { desaProfile } from "@/data/profil";

export function Hero() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text Content ── */}
          <div className="space-y-8 max-w-xl">
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-3.5 py-1.5 rounded-full text-xs font-semibold">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              Kec. {desaProfile.kecamatan}, Kab. {desaProfile.kabupaten}
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-[1.1]">
                Portal Resmi
                <br />
                <span className="text-primary">Desa Kebanggan</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {desaProfile.sambutan}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-xl font-semibold px-7 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/25 transition-shadow">
                <Link href="/profil">
                  Profil Desa
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl font-semibold px-7 border-border/60 hover:bg-secondary">
                <Link href="/bumdes">BUMDes GJ</Link>
              </Button>
            </div>

            {/* Mini stats row */}
            <div className="flex items-center gap-6 pt-2 border-t border-border/50">
              {desaProfile.statistik.slice(0, 3).map((stat, i) => (
                <div key={i}>
                  <p className="text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Image Placeholder ── */}
          <div className="relative w-full aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden bg-muted border border-border/50 shadow-xl shadow-foreground/5">
            {/* Inner gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/8 via-transparent to-accent/30" />

            {/* Centered placeholder icon */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="h-20 w-20 rounded-2xl bg-background/80 shadow-sm border border-border/50 flex items-center justify-center backdrop-blur-sm">
                <ImageIcon className="h-9 w-9 text-muted-foreground" />
              </div>
              <div className="text-center px-8">
                <p className="font-semibold text-foreground/80 text-sm">Foto Desa Kebanggan</p>
                <p className="text-xs text-muted-foreground mt-1">Panorama · Balai Desa · Potensi Alam</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}