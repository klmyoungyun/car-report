import type { Vehicle } from "@/data/schema";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/table";
import { formatNumber } from "@/lib/format";

export function SpecTable({ vehicle }: { vehicle: Vehicle }) {
  const s = vehicle.specs;
  return (
    <Table>
      <THead>
        <TR>
          <TH>제원</TH>
          <TH>값</TH>
        </TR>
      </THead>
      <TBody>
        <TR>
          <TD className="text-muted-foreground">전장 × 전폭 × 전고</TD>
          <TD>
            {formatNumber(s.length_mm, "mm")} × {formatNumber(s.width_mm, "mm")} × {formatNumber(s.height_mm, "mm")}
          </TD>
        </TR>
        <TR>
          <TD className="text-muted-foreground">축거</TD>
          <TD>{formatNumber(s.wheelbase_mm, "mm")}</TD>
        </TR>
        <TR>
          <TD className="text-muted-foreground">공차중량</TD>
          <TD>{formatNumber(s.weight_kg, "kg")}</TD>
        </TR>
        <TR>
          <TD className="text-muted-foreground">트렁크 용량</TD>
          <TD>{formatNumber(s.trunk_liters, "L")}</TD>
        </TR>
        <TR>
          <TD className="text-muted-foreground">좌석 수</TD>
          <TD>{s.seats}인승</TD>
        </TR>
        <TR>
          <TD className="text-muted-foreground">구동방식</TD>
          <TD>{s.drivetrain}</TD>
        </TR>
        <TR>
          <TD className="text-muted-foreground">최대 출력</TD>
          <TD>{formatNumber(s.powerHp, "hp")}</TD>
        </TR>
        <TR>
          <TD className="text-muted-foreground">최대 토크</TD>
          <TD>{formatNumber(s.torqueNm, "Nm")}</TD>
        </TR>
        <TR>
          <TD className="text-muted-foreground">
            {vehicle.fuelType === "EV" ? "복합 전비" : "복합 연비"}
          </TD>
          <TD>{s.efficiency || "—"}</TD>
        </TR>
        {vehicle.fuelType === "EV" || vehicle.fuelType === "PHEV" ? (
          <>
            <TR>
              <TD className="text-muted-foreground">1회 충전 주행거리</TD>
              <TD>{formatNumber(s.range_km, "km")}</TD>
            </TR>
            <TR>
              <TD className="text-muted-foreground">배터리 용량</TD>
              <TD>{formatNumber(s.battery_kwh, "kWh")}</TD>
            </TR>
            <TR>
              <TD className="text-muted-foreground">급속충전</TD>
              <TD>{s.charging || "—"}</TD>
            </TR>
          </>
        ) : null}
      </TBody>
    </Table>
  );
}
