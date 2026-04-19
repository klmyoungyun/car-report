import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "ev" | "hev" | "phev" | "mhev" | "outline" | "muted";

const variantClass: Record<Variant, string> = {
  default: "bg-primary text-primary-foreground",
  ev: "bg-ev/10 text-ev border border-ev/30",
  hev: "bg-hev/10 text-hev border border-hev/30",
  phev: "bg-phev/10 text-phev border border-phev/30",
  mhev: "bg-mhev/10 text-mhev border border-mhev/30",
  outline: "border border-border text-foreground",
  muted: "bg-muted text-muted-foreground",
};

export function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: Variant }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        variantClass[variant],
        className
      )}
      {...props}
    />
  );
}

export function FuelBadge({ fuelType }: { fuelType: "EV" | "HEV" | "PHEV" | "MHEV" }) {
  const labels = {
    EV: "전기",
    HEV: "하이브리드",
    PHEV: "PHEV",
    MHEV: "마일드 하이브리드",
  } as const;
  const variantMap = { EV: "ev", HEV: "hev", PHEV: "phev", MHEV: "mhev" } as const;
  return <Badge variant={variantMap[fuelType]}>{labels[fuelType]}</Badge>;
}
