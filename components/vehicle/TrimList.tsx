import type { Trim } from "@/data/schema";
import { formatKRW } from "@/lib/format";
import { Check } from "lucide-react";

export function TrimList({
  trims,
  recommendedName,
}: {
  trims: Trim[];
  recommendedName?: string;
}) {
  return (
    <div className="space-y-3">
      {trims.map((t, idx) => {
        const isRecommended =
          recommendedName && t.name.startsWith(recommendedName.split(" + ")[0]);
        return (
          <div
            key={idx}
            className={`rounded-lg border p-4 ${
              isRecommended ? "border-primary/50 bg-primary/5" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-semibold">{t.name}</h4>
                  {isRecommended && (
                    <span className="inline-flex items-center gap-0.5 rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
                      <Check className="h-3 w-3" /> 추천
                    </span>
                  )}
                  {t.drivetrain && (
                    <span className="text-xs text-muted-foreground">{t.drivetrain}</span>
                  )}
                </div>
                {t.note && (
                  <p className="mt-1 text-xs text-muted-foreground">{t.note}</p>
                )}
              </div>
              <div className="text-right font-bold whitespace-nowrap">
                {formatKRW(t.priceKRW)}
              </div>
            </div>
            {t.keyFeatures && t.keyFeatures.length > 0 && (
              <ul className="mt-3 grid gap-1 sm:grid-cols-2 text-sm">
                {t.keyFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <Check className="h-3.5 w-3.5 text-ev mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
