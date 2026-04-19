"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { VEHICLES } from "@/data/vehicles";
import { calculateRealPrice } from "@/lib/calculations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FuelBadge } from "@/components/ui/badge";
import { formatKRW } from "@/lib/format";
import { SEONGNAM_2026 } from "@/data/subsidies";
import { ArrowLeft, Calculator } from "lucide-react";

export default function CalculatorPage() {
  const evVehicles = VEHICLES.filter((v) => v.fuelType === "EV");
  const [slug, setSlug] = useState<string>(evVehicles[0]?.slug ?? "");
  const [localSubsidyOverride, setLocalSubsidyOverride] = useState<number | null>(null);
  const [includeAcquisitionTax, setIncludeAcquisitionTax] = useState(true);

  const vehicle = useMemo(() => evVehicles.find((v) => v.slug === slug), [evVehicles, slug]);
  const calc = useMemo(() => {
    if (!vehicle) return null;
    return calculateRealPrice(vehicle, {
      localSubsidyKRW: localSubsidyOverride,
      includeAcquisitionTax,
    });
  }, [vehicle, localSubsidyOverride, includeAcquisitionTax]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> 전체 차량
      </Link>

      <div className="mt-4 flex items-center gap-3">
        <Calculator className="h-7 w-7 text-primary" />
        <h1 className="text-3xl font-bold tracking-tight">보조금 & 세금 계산기</h1>
      </div>
      <p className="mt-2 text-muted-foreground">
        경기도 성남시 기준 전기차 실구매가를 계산합니다.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-[1fr_1.3fr]">
        <Card>
          <CardHeader>
            <CardTitle>입력</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">차량 선택</label>
              <select
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full h-10 rounded-md border px-3 bg-background text-sm"
              >
                {evVehicles.map((v) => (
                  <option key={v.slug} value={v.slug}>
                    {v.name} (추천 {formatKRW(v.pricing.recommendedTrim.priceKRW)})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">거주 지자체</label>
              <select className="w-full h-10 rounded-md border px-3 bg-background text-sm" defaultValue="seongnam" disabled>
                <option value="seongnam">{SEONGNAM_2026.city} ({SEONGNAM_2026.province})</option>
              </select>
              <div className="mt-1 text-xs text-muted-foreground">
                현재 성남시만 지원. 다른 지자체는 추후 확장 예정.
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">지방보조금 (수동 조정)</label>
              <input
                type="number"
                placeholder="미입력 시 기본값 사용"
                value={localSubsidyOverride ?? ""}
                onChange={(e) =>
                  setLocalSubsidyOverride(e.target.value ? Number(e.target.value) : null)
                }
                className="w-full h-10 rounded-md border px-3 bg-background text-sm"
              />
              <div className="mt-1 text-xs text-muted-foreground">
                2026년 성남시 단일 확정금액은 공개 자료에 없습니다. 실제 공고를 확인해 수동 입력하세요.
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={includeAcquisitionTax}
                onChange={(e) => setIncludeAcquisitionTax(e.target.checked)}
                className="h-4 w-4"
              />
              <span>취득세 포함하여 계산</span>
            </label>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex-row items-center justify-between gap-2">
            <CardTitle>결과</CardTitle>
            {vehicle && <FuelBadge fuelType={vehicle.fuelType} />}
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {!vehicle || !calc ? (
              <p className="text-muted-foreground">차량을 선택하세요.</p>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-muted-foreground">추천 트림 차량가</div>
                  <div className="text-right font-medium">
                    {formatKRW(calc.vehiclePriceKRW)}
                  </div>
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
                  {includeAcquisitionTax && (
                    <>
                      <div className="text-muted-foreground">
                        취득세 (EV 감면 반영)
                      </div>
                      <div className="text-right font-medium">
                        +{formatKRW(calc.acquisitionTaxKRW)}
                      </div>
                    </>
                  )}
                </div>
                <div className="border-t pt-3 flex items-center justify-between">
                  <div className="font-semibold">실구매 예상가</div>
                  <div className="text-xl font-bold text-primary">
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
                <Link href={`/vehicles/${vehicle.slug}`}>
                  <Button variant="outline" size="sm" className="w-full mt-2">
                    상세 페이지 보기
                  </Button>
                </Link>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 rounded-lg border bg-card p-4">
        <h3 className="font-semibold mb-2">성남시 EV 보조금 신청 절차</h3>
        <ol className="list-decimal ml-5 text-sm space-y-1 text-muted-foreground">
          {SEONGNAM_2026.howToApply.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
        <p className="mt-3 text-xs text-muted-foreground">
          문의: {SEONGNAM_2026.contact} · 공식:{" "}
          <a href={SEONGNAM_2026.officialUrls[0]} target="_blank" rel="noreferrer" className="underline">
            성남시청
          </a>{" "}
          / <a href={SEONGNAM_2026.officialUrls[1]} target="_blank" rel="noreferrer" className="underline">
            무공해차 통합누리집
          </a>
        </p>
      </div>
    </div>
  );
}
