import type { Vehicle } from "@/data/schema";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/table";
import { formatKRW } from "@/lib/format";

export function PriceTable({ vehicle }: { vehicle: Vehicle }) {
  const p = vehicle.pricing;
  return (
    <div className="space-y-3">
      <Table>
        <THead>
          <TR>
            <TH>구분</TH>
            <TH>트림</TH>
            <TH className="text-right">가격</TH>
          </TR>
        </THead>
        <TBody>
          <TR>
            <TD className="font-medium">기본</TD>
            <TD>{p.baseTrim.name}</TD>
            <TD className="text-right font-semibold">{formatKRW(p.baseTrim.priceKRW)}</TD>
          </TR>
          <TR className="bg-accent/50">
            <TD className="font-medium text-primary">추천</TD>
            <TD>
              {p.recommendedTrim.name}
              {p.recommendedTrim.includedOptionPackages.length > 0 && (
                <div className="mt-1 text-xs text-muted-foreground">
                  포함: {p.recommendedTrim.includedOptionPackages.join(" · ")}
                </div>
              )}
            </TD>
            <TD className="text-right font-bold">{formatKRW(p.recommendedTrim.priceKRW)}</TD>
          </TR>
          <TR>
            <TD className="font-medium">풀옵션</TD>
            <TD>최상위/풀패키지</TD>
            <TD className="text-right">{formatKRW(p.fullOption.priceKRW)}</TD>
          </TR>
        </TBody>
      </Table>
    </div>
  );
}
