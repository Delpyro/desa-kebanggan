import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";

interface RingkasanSectionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}

export function RingkasanSection({
  icon: Icon,
  title,
  description,
  href,
  linkLabel,
}: RingkasanSectionProps) {
  return (
    <div className="group relative rounded-2xl border border-border/60 bg-card p-7 flex flex-col h-full shadow-xs hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 overflow-hidden">
      {/* Decorative hover gradient border glow */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/80 via-accent to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="rounded-2xl bg-secondary p-3.5 w-fit mb-5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-105">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>

      <p className="text-sm text-muted-foreground mt-2.5 flex-1 leading-relaxed">
        {description}
      </p>

      <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
        <Button
          asChild
          variant="ghost"
          className="px-0 text-xs font-semibold tracking-wide uppercase text-primary hover:bg-transparent hover:text-accent group/btn"
        >
          <Link href={href} className="inline-flex items-center gap-1.5">
            <span>{linkLabel}</span>
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
}