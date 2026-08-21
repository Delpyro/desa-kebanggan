import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon, ImageIcon } from "lucide-react";

interface RingkasanSectionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  imagePlaceholder?: string;
}

export function RingkasanSection({
  icon: Icon,
  title,
  description,
  href,
  linkLabel,
  imagePlaceholder,
}: RingkasanSectionProps) {
  return (
    <div className="group flex flex-col rounded-2xl border border-border/60 bg-card overflow-hidden hover:border-primary/30 hover:shadow-lg hover:shadow-foreground/5 transition-all duration-300">

      {/* Image placeholder — tall and clean */}
      <div className="relative w-full h-52 bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="h-14 w-14 rounded-2xl bg-background/70 backdrop-blur-sm border border-border/50 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <ImageIcon className="h-6 w-6 text-muted-foreground" />
          </div>
          <p className="text-xs font-medium text-foreground/60 text-center px-6 leading-snug">
            {imagePlaceholder ?? `Foto ${title}`}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start gap-3 mb-3">
          <div className="h-9 w-9 rounded-lg bg-accent flex items-center justify-center text-primary shrink-0 mt-0.5">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold text-foreground leading-snug pt-1">{title}</h3>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>

        <div className="mt-5 pt-4 border-t border-border/40">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all duration-200"
          >
            {linkLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}