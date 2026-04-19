import Link from "next/link";
import Image from "next/image";
import { VEHICLES, getVehicleBySlug } from "@/data/vehicles";
import type { Vehicle } from "@/data/schema";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/table";
import { FuelBadge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatKRW, formatNumber } from "@/lib/format";
import { calculateRealPrice } from "@/lib/calculations";
import { SEGMENT_LABEL, ORIGIN_LABEL } from "@/lib/constants";
import { getAllInsights } from "@/data/insights";
import { ArrowLeft, Sparkles } from "lucide-react";

export const metadata = {
  title: "차량 비교 — SUV 구매 가이드 2026",
};

function cell<T>(values: T[], fn: (v: T) => string | number | null | undefined) {
  const out = values.map(fn);
  const allSame = out.every((v) => v === out[0]);
  return out.map((v, i) => ({
    value: v,
    highlight: !allSame,
    key: i,
  }));
}

export default async function ComparePage({
  searchParams,
}: {
  searchParams: Promise<{ ids?: string }>;
}) {
  const { ids } = await searchParams;
  const slugs = (ids ?? "").split(",").filter(Boolean).slice(0, 3);
  const vehicles: Vehicle[] = slugs
    .map((s) => getVehicleBySlug(s))
    .filter((v): v is Vehicle => v != null);

  if (vehicles.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-2xl font-bold">비교할 차량을 선택해주세요</h1>
        <p className="mt-2 text-muted-foreground">
          메인 페이지에서 비교할 차량을 최대 3대까지 선택하세요.
        </p>
        <Link href="/" className="mt-4 inline-block">
          <Button>← 전체 차량 보기</Button>
        </Link>
      </div>
    );
  }

  const rows: Array<{ label: string; values: (string | null)[] }> = [];

  rows.push({ label: "분류", values: vehicles.map((v) => SEGMENT_LABEL[v.segment]) });
  rows.push({ label: "원산지", values: vehicles.map((v) => ORIGIN_LABEL[v.origin]) });

  rows.push({ label: "기본 트림", values: vehicles.map((v) => `${v.pricing.baseTrim.name} / ${formatKRW(v.pricing.baseTrim.priceKRW)}`) });
  rows.push({ label: "추천 트림", values: vehicles.map((v) => `${v.pricing.recommendedTrim.name} / ${formatKRW(v.pricing.recommendedTrim.priceKRW)}`) });
  rows.push({ label: "풀옵션 가격", values: vehicles.map((v) => formatKRW(v.pricing.fullOption.priceKRW)) });

  rows.push({
    label: "보조금 반영 예상가",
    values: vehicles.map((v) => {
      if (v.fuelType !== "EV") return "해당 없음";
      const calc = calculateRealPrice(v);
      return formatKRW(calc.realPurchasePriceKRW);
    }),
  });

  rows.push({
    label: "출력",
    values: vehicles.map((v) => `${formatNumber(v.specs.powerHp, "hp")} / ${formatNumber(v.specs.torqueNm, "Nm")}`),
  });
  rows.push({
    label: vehicles.every((v) => v.fuelType === "EV") ? "1회 충전 주행거리" : "연비/전비",
    values: vehicles.map((v) =>
      v.fuelType === "EV" && v.specs.range_km
        ? `${v.specs.range_km}km (${v.specs.efficiency})`
        : v.specs.efficiency
    ),
  });
  rows.push({ label: "구동방식", values: vehicles.map((v) => v.specs.drivetrain) });
  rows.push({
    label: "크기 (L×W×H)",
    values: vehicles.map(
      (v) =>
        `${formatNumber(v.specs.length_mm)}×${formatNumber(v.specs.width_mm)}×${formatNumber(v.specs.height_mm)}`
    ),
  });
  rows.push({ label: "축거", values: vehicles.map((v) => formatNumber(v.specs.wheelbase_mm, "mm")) });
  rows.push({ label: "공차중량", values: vehicles.map((v) => formatNumber(v.specs.weight_kg, "kg")) });
  rows.push({ label: "트렁크", values: vehicles.map((v) => formatNumber(v.specs.trunk_liters, "L")) });
  rows.push({ label: "좌석", values: vehicles.map((v) => `${v.specs.seats}인`) });

  rows.push({ label: "서라운드 뷰", values: vehicles.map((v) => v.pricing.essentials.surroundView) });
  rows.push({ label: "후방 카메라", values: vehicles.map((v) => v.pricing.essentials.rearCamera) });
  rows.push({ label: "CarPlay/AA", values: vehicles.map((v) => v.pricing.essentials.carplayAndroidAuto) });
  rows.push({ label: "ADAS", values: vehicles.map((v) => v.pricing.essentials.adas) });

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> 전체 차량
      </Link>

      <h1 className="mt-4 text-3xl font-bold tracking-tight">차량 비교</h1>
      <p className="mt-2 text-muted-foreground">선택한 {vehicles.length}대의 차량을 나란히 비교합니다.</p>

      <div className="mt-6 grid gap-4" style={{ gridTemplateColumns: `repeat(${vehicles.length}, minmax(0, 1fr))` }}>
        {vehicles.map((v) => (
          <div key={v.slug} className="rounded-lg border bg-card overflow-hidden">
            <div className="relative aspect-[16/10] bg-muted">
              {v.images.hero && (
                <Image src={v.images.hero} alt={v.name} fill sizes="33vw" className="object-cover" unoptimized />
              )}
            </div>
            <div className="p-3">
              <FuelBadge fuelType={v.fuelType} />
              <Link href={`/vehicles/${v.slug}`}>
                <h3 className="mt-1 font-semibold hover:underline">{v.name}</h3>
              </Link>
              <p className="text-xs text-muted-foreground">{v.brand}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Table>
          <THead>
            <TR>
              <TH className="w-40">항목</TH>
              {vehicles.map((v) => (
                <TH key={v.slug}>{v.name}</TH>
              ))}
            </TR>
          </THead>
          <TBody>
            {rows.map((row, idx) => {
              const cells = cell(row.values, (x) => x);
              return (
                <TR key={idx}>
                  <TD className="text-muted-foreground font-medium">{row.label}</TD>
                  {cells.map((c) => (
                    <TD
                      key={c.key}
                      className={
                        c.highlight
                          ? "font-medium"
                          : "text-muted-foreground"
                      }
                    >
                      {c.value ?? "—"}
                    </TD>
                  ))}
                </TR>
              );
            })}
          </TBody>
        </Table>
      </div>

      {vehicles.length >= 2 && (
        <section className="mt-8">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">AI 비교 인사이트</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            선택한 차량들에 대한 구체적인 비교 의견입니다. 실제 리서치 데이터를 바탕으로 작성되었습니다.
          </p>
          <div className="space-y-3">
            {getAllInsights(vehicles.map((v) => v.slug)).map(({ pair, text }, idx) => {
              const [sa, sb] = pair;
              const va = vehicles.find((v) => v.slug === sa)!;
              const vb = vehicles.find((v) => v.slug === sb)!;
              return (
                <div key={idx} className="rounded-lg border bg-gradient-to-br from-primary/5 to-transparent p-4">
                  <div className="flex flex-wrap items-center gap-2 text-sm font-semibold mb-2">
                    <span>{va.name}</span>
                    <span className="text-muted-foreground">vs</span>
                    <span>{vb.name}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/90">{text}</p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-ev/5 p-4">
          <h3 className="font-semibold text-ev mb-2">장점 비교</h3>
          <ul className="space-y-3 text-sm">
            {vehicles.map((v) => (
              <li key={v.slug}>
                <div className="font-medium">{v.name}</div>
                <ul className="ml-4 list-disc text-xs text-muted-foreground space-y-0.5 mt-1">
                  {v.pros.slice(0, 3).map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <h3 className="font-semibold text-red-700 mb-2">단점 비교</h3>
          <ul className="space-y-3 text-sm">
            {vehicles.map((v) => (
              <li key={v.slug}>
                <div className="font-medium">{v.name}</div>
                <ul className="ml-4 list-disc text-xs text-muted-foreground space-y-0.5 mt-1">
                  {v.cons.slice(0, 3).map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
