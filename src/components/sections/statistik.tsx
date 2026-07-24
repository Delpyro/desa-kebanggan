import { desaProfile } from "@/data/profil";

export function Statistik() {
  return (
    <section className="border-b">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {desaProfile.statistik.map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary">
                {item.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}