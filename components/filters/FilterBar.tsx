"use client";

import { useMemo, useState } from "react";
import type { Vehicle, FuelType, Segment } from "@/data/schema";
import { Button } from "@/components/ui/button";
import { VehicleCard } from "@/components/vehicle/VehicleCard";
import { FUEL_LABEL, SEGMENT_LABEL, BUDGET_KRW } from "@/lib/constants";
import { formatKRW } from "@/lib/format";

type SortKey = "price-asc" | "price-desc" | "name" | "range";

export function FilterableVehicleGrid({ vehicles }: { vehicles: Vehicle[] }) {
  const [fuelFilter, setFuelFilter] = useState<FuelType | "ALL">("ALL");
  const [segmentFilter, setSegmentFilter] = useState<Segment | "ALL">("ALL");
  const [brandFilter, setBrandFilter] = useState<string>("ALL");
  const [maxPrice, setMaxPrice] = useState<number>(BUDGET_KRW);
  const [sortKey, setSortKey] = useState<SortKey>("price-asc");

  const brands = useMemo(() => {
    return Array.from(new Set(vehicles.map((v) => v.brand))).sort();
  }, [vehicles]);

  const filtered = useMemo(() => {
    const res = vehicles.filter((v) => {
      if (fuelFilter !== "ALL" && v.fuelType !== fuelFilter) return false;
      if (segmentFilter !== "ALL" && v.segment !== segmentFilter) return false;
      if (brandFilter !== "ALL" && v.brand !== brandFilter) return false;
      const price = v.pricing.recommendedTrim.priceKRW;
      if (price != null && price > maxPrice) return false;
      return true;
    });

    res.sort((a, b) => {
      const pa = a.pricing.recommendedTrim.priceKRW ?? Infinity;
      const pb = b.pricing.recommendedTrim.priceKRW ?? Infinity;
      switch (sortKey) {
        case "price-asc":
          return pa - pb;
        case "price-desc":
          return pb - pa;
        case "range":
          return (b.specs.range_km ?? 0) - (a.specs.range_km ?? 0);
        case "name":
          return a.name.localeCompare(b.name);
      }
    });

    return res;
  }, [vehicles, fuelFilter, segmentFilter, brandFilter, maxPrice, sortKey]);

  const fuelOptions: Array<FuelType | "ALL"> = ["ALL", "EV", "HEV", "PHEV", "MHEV"];
  const segOptions: Array<Segment | "ALL"> = ["ALL", "SUBCOMPACT", "COMPACT", "MIDSIZE"];

  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-card p-4 space-y-4">
        <div className="flex flex-wrap gap-4">
          <div>
            <div className="text-xs font-medium text-muted-foreground mb-1.5">연료</div>
            <div className="flex flex-wrap gap-1.5">
              {fuelOptions.map((f) => (
                <Button
                  key={f}
                  size="sm"
                  variant={fuelFilter === f ? "default" : "outline"}
                  onClick={() => setFuelFilter(f)}
                >
                  {f === "ALL" ? "전체" : FUEL_LABEL[f]}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-medium text-muted-foreground mb-1.5">크기</div>
            <div className="flex flex-wrap gap-1.5">
              {segOptions.map((s) => (
                <Button
                  key={s}
                  size="sm"
                  variant={segmentFilter === s ? "default" : "outline"}
                  onClick={() => setSegmentFilter(s)}
                >
                  {s === "ALL" ? "전체" : SEGMENT_LABEL[s]}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-medium text-muted-foreground mb-1.5">브랜드</div>
            <select
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
              className="h-8 rounded-md border px-2 text-sm bg-background"
            >
              <option value="ALL">전체</option>
              {brands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
          <div>
            <div className="text-xs font-medium text-muted-foreground mb-1.5">정렬</div>
            <select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value as SortKey)}
              className="h-8 rounded-md border px-2 text-sm bg-background"
            >
              <option value="price-asc">가격 낮은순</option>
              <option value="price-desc">가격 높은순</option>
              <option value="range">주행거리 긴순</option>
              <option value="name">이름순</option>
            </select>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-medium text-muted-foreground">
              추천 트림 최대 가격
            </span>
            <span className="text-xs font-semibold">{formatKRW(maxPrice)}</span>
          </div>
          <input
            type="range"
            min={30_000_000}
            max={80_000_000}
            step={1_000_000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="text-sm text-muted-foreground">
        {filtered.length}대 표시
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((v) => (
          <VehicleCard key={v.slug} vehicle={v} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-lg border-2 border-dashed border-border p-8 text-center text-muted-foreground">
          조건에 맞는 차량이 없습니다. 필터를 조정해보세요.
        </div>
      )}
    </div>
  );
}
