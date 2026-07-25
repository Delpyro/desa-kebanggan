import { desaProfile } from "@/data/profil";
import { Users, Home, MapPin, Network } from "lucide-react";

const statIcons = [Users, Home, MapPin, Network];

export function Statistik() {
  return (
    <section className="relative -mt-8 z-20 container mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {desaProfile.statistik.map((item, i) => {
          const Icon = statIcons[i % statIcons.length];
          return (
            <div
              key={i}
              className="glass-card rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-border/60 flex flex-col items-center text-center group"
            >
              <div className="rounded-xl bg-primary/10 p-3 mb-3 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                {item.value}
              </p>
              <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-1">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}