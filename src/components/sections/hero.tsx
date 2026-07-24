import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { desaProfile } from "@/data/profil";

export function Hero() {
  return (
    <section className="border-b bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 py-20 md:py-28 text-center">
        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <MapPin className="h-4 w-4" />
          Kecamatan {desaProfile.kecamatan}, Kabupaten {desaProfile.kabupaten}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          {desaProfile.nama}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          {desaProfile.sambutan}
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button asChild>
            <Link href="/profil">Profil Desa</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/bumdes">BUMDes GJ</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}