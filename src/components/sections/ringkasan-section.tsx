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
    <div className="rounded-xl border p-6 flex flex-col h-full">
      <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground mt-2 flex-1">{description}</p>
      <Button asChild variant="link" className="px-0 mt-4 w-fit">
        <Link href={href}>
          {linkLabel} <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </Button>
    </div>
  );
}