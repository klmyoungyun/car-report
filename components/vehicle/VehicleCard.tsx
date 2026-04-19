"use client";

import Link from "next/link";
import Image from "next/image";
import type { Vehicle } from "@/data/schema";
import { FuelBadge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatKRW } from "@/lib/format";
import { useCompare } from "@/components/compare/CompareProvider";
import { SEGMENT_LABEL, ORIGIN_LABEL } from "@/lib/constants";
import { Plus, Check } from "lucide-react";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const { toggle, isSelected, canAdd } = useCompare();
  const selected = isSelected(vehicle.slug);

  const realPrice = vehicle.subsidy?.realPurchasePriceKRW;
  const priceToShow = vehicle.pricing.recommendedTrim.priceKRW;

  return (
    <Card className="overflow-hidden flex flex-col">
      <Link href={`/vehicles/${vehicle.slug}`} className="block">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
          {vehicle.images.hero ? (
            <Image
              src={vehicle.images.hero}
              alt={vehicle.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform hover:scale-105"
              unoptimized
            />
          ) : (
            <div className="flex h-full items-center justify-center text-muted-foreground">
              이미지 준비 중
            </div>
          )}
          <div className="absolute left-3 top-3 flex gap-1.5">
            <FuelBadge fuelType={vehicle.fuelType} />
          </div>
        </div>
      </Link>

      <CardContent className="flex-1 flex flex-col gap-3 pt-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="text-xs text-muted-foreground">
              {vehicle.brand} · {SEGMENT_LABEL[vehicle.segment]} · {ORIGIN_LABEL[vehicle.origin]}
            </div>
            <Link href={`/vehicles/${vehicle.slug}`}>
              <h3 className="mt-0.5 text-lg font-semibold hover:underline">
                {vehicle.name}
              </h3>
            </Link>
          </div>
        </div>

        <div className="mt-auto">
          <div className="text-xs text-muted-foreground">
            추천 트림 — {vehicle.pricing.recommendedTrim.name}
          </div>
          <div className="text-xl font-bold">{formatKRW(priceToShow)}</div>
          {realPrice != null && (
            <div className="text-xs text-ev font-medium">
              보조금 반영 예상가 {formatKRW(realPrice)}
            </div>
          )}
        </div>

        <div className="flex gap-2 pt-2">
          <Link href={`/vehicles/${vehicle.slug}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full">
              상세 보기
            </Button>
          </Link>
          <Button
            variant={selected ? "default" : "outline"}
            size="sm"
            disabled={!selected && !canAdd}
            onClick={() => toggle(vehicle.slug)}
          >
            {selected ? (
              <>
                <Check className="h-4 w-4" /> 선택됨
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" /> 비교
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
