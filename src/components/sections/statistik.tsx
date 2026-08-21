import { desaProfile } from "@/data/profil";
import { Users, Home, MapPin, Network } from "lucide-react";

const statIcons = [Users, Home, MapPin, Network];

export function Statistik() {
  return (
    <section className="border-y border-border/50 bg-secondary/40 py-12 mt-4">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-y md:divide-y-0 divide-border/50">
          {desaProfile.statistik.map((item, i) => {
            const Icon = statIcons[i % statIcons.length];
            return (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-8 px-6 text-center gap-2 group"
              >
                <Icon className="h-5 w-5 text-primary mb-1" />
                <p className="text-3xl sm:text-4xl font-bold text-foreground tabular-nums">
                  {item.value}
                </p>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}