import { PlayCircle, ExternalLink } from "lucide-react";

const YT_VIDEO_ID = "gIHyF5Ofoz0";

export function VideoProfil() {
  return (
    <section className="bg-foreground text-background py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

        {/* Section heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <PlayCircle className="h-3.5 w-3.5" />
              Video Profil Resmi
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-background leading-tight">
              Mengenal Desa Kebanggan
              <br />
              <span className="text-primary">Lebih Dekat</span>
            </h2>
          </div>
          <a
            href={`https://youtu.be/${YT_VIDEO_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition-colors shrink-0 shadow-md"
          >
            <ExternalLink className="h-4 w-4" />
            Buka di YouTube
          </a>
        </div>

        {/* YouTube Embed — 16:9 full width */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src={`https://www.youtube.com/embed/${YT_VIDEO_ID}?rel=0&modestbranding=1&color=white`}
            title="Video Profil Desa Kebanggan"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Caption */}
        <p className="text-center text-sm text-background/50 mt-6 font-medium">
          Video Profil Desa Kebanggan · Kecamatan Moga, Kabupaten Pemalang, Jawa Tengah
        </p>

      </div>
    </section>
  );
}
