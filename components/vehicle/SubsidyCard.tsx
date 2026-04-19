import type { Vehicle } from "@/data/schema";
import { calculateRealPrice } from "@/lib/calculations";
import { formatKRW } from "@/lib/format";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SubsidyCard({ vehicle }: { vehicle: Vehicle }) {
  if (vehicle.fuelType !== "EV") return null;
  const calc = calculateRealPrice(vehicle, { includeAcquisitionTax: false });

  return (
    <Card>
      <CardHeader>
        <CardTitle>보조금 & 예상 실구매가</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <div className="grid grid-cols-2 gap-2">
          <div className="text-muted-foreground">차량가 (추천 트림)</div>
          <div className="text-right font-medium">{formatKRW(calc.vehiclePriceKRW)}</div>
          <div className="text-muted-foreground">국고보조금</div>
          <div className="text-right text-ev font-medium">
            -{formatKRW(calc.nationalSubsidyKRW)}
          </div>
          <div className="text-muted-foreground">성남시 지방보조금</div>
          <div className="text-right text-ev font-medium">
            -{formatKRW(calc.localSubsidyKRW)}
          </div>
          <div className="text-muted-foreground font-medium">보조금 합계</div>
          <div className="text-right text-ev font-semibold">
            -{formatKRW(calc.totalSubsidyKRW)}
          </div>
        </div>
        <div className="border-t pt-3 flex items-center justify-between">
          <div className="font-semibold">보조금 차감 후 예상가</div>
          <div className="text-lg font-bold text-ev">
            {formatKRW(calc.realPurchasePriceKRW)}
          </div>
        </div>
        {calc.notes.length > 0 && (
          <div className="text-xs text-muted-foreground border-t pt-2 space-y-1">
            {calc.notes.map((n, i) => (
              <div key={i}>※ {n}</div>
            ))}
          </div>
        )}
        {vehicle.subsidy?.note && (
          <div className="text-xs text-muted-foreground">
            ※ {vehicle.subsidy.note}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
