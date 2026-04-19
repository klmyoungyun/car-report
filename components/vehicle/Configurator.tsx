"use client";

import { useMemo, useState } from "react";
import type { Vehicle, Trim, AddOnOption } from "@/data/schema";
import { formatKRW } from "@/lib/format";
import { Sliders, RotateCcw, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const CATEGORY_ORDER: AddOnOption["category"][] = [
  "ADAS",
  "안전",
  "편의",
  "실내",
  "외관",
  "오디오",
  "기타",
];

export function Configurator({
  vehicle,
  trims,
  addOnOptions,
}: {
  vehicle: Vehicle;
  trims: Trim[];
  addOnOptions: AddOnOption[];
}) {
  const budget = trims.find((t) => t.priceKRW != null)?.priceKRW ?? 0;
  const [selectedTrim, setSelectedTrim] = useState(
    trims.find((t) => t.priceKRW != null) ?? trims[0]
  );
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());

  const toggleOption = (id: string) => {
    setSelectedOptions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const resetAll = () => {
    setSelectedOptions(new Set());
  };

  const selectRecommended = () => {
    setSelectedOptions(
      new Set(addOnOptions.filter((o) => o.recommended).map((o) => o.id))
    );
  };

  const optionTotal = useMemo(() => {
    return addOnOptions
      .filter((o) => selectedOptions.has(o.id))
      .reduce((sum, o) => sum + o.priceKRW, 0);
  }, [addOnOptions, selectedOptions]);

  const total = (selectedTrim.priceKRW ?? 0) + optionTotal;

  const categories = useMemo(() => {
    const grouped = new Map<AddOnOption["category"], AddOnOption[]>();
    for (const opt of addOnOptions) {
      if (!grouped.has(opt.category)) grouped.set(opt.category, []);
      grouped.get(opt.category)!.push(opt);
    }
    return CATEGORY_ORDER.filter((c) => grouped.has(c)).map((c) => ({
      category: c,
      options: grouped.get(c)!,
    }));
  }, [addOnOptions]);

  const budgetExceeded = total > 70_000_000;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Sliders className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">나만의 옵션 구성</h3>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={selectRecommended}>
            <Star className="h-3.5 w-3.5" /> 추천 옵션 자동 선택
          </Button>
          <Button size="sm" variant="ghost" onClick={resetAll}>
            <RotateCcw className="h-3.5 w-3.5" /> 초기화
          </Button>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        트림을 선택하고 필요한 옵션을 하나씩 추가해보세요. 실시간으로 가격이 계산됩니다.
      </p>

      <div className="rounded-lg border bg-card p-4">
        <div className="text-sm font-medium mb-2">1. 트림 선택</div>
        <div className="grid gap-2 sm:grid-cols-2">
          {trims.map((t) => (
            <button
              key={t.name}
              onClick={() => setSelectedTrim(t)}
              disabled={t.priceKRW == null}
              className={`text-left rounded-md border p-3 transition-colors ${
                selectedTrim.name === t.name
                  ? "border-primary bg-primary/5"
                  : "hover:bg-accent"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-sm font-bold whitespace-nowrap">
                  {formatKRW(t.priceKRW)}
                </div>
              </div>
              {t.drivetrain && (
                <div className="mt-0.5 text-xs text-muted-foreground">{t.drivetrain}</div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-lg border bg-card p-4">
        <div className="text-sm font-medium mb-2">2. 옵션 추가</div>
        {categories.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            이 차량은 트림 단일 구성이라 추가 옵션이 적습니다.
          </p>
        ) : (
          <div className="space-y-4">
            {categories.map(({ category, options }) => (
              <div key={category}>
                <div className="text-xs font-semibold text-muted-foreground mb-1.5">
                  {category}
                </div>
                <div className="space-y-1">
                  {options.map((opt) => {
                    const selected = selectedOptions.has(opt.id);
                    return (
                      <label
                        key={opt.id}
                        className={`flex items-start gap-3 rounded-md border p-3 cursor-pointer transition-colors ${
                          selected
                            ? "border-primary/50 bg-primary/5"
                            : "hover:bg-accent"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selected}
                          onChange={() => toggleOption(opt.id)}
                          className="mt-1 h-4 w-4"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-medium">{opt.name}</span>
                            {opt.recommended && (
                              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                                추천
                              </span>
                            )}
                          </div>
                          {opt.description && (
                            <div className="mt-0.5 text-xs text-muted-foreground">
                              {opt.description}
                            </div>
                          )}
                        </div>
                        <div className="text-sm font-semibold whitespace-nowrap">
                          {opt.priceKRW === 0 ? "무료" : `+${formatKRW(opt.priceKRW)}`}
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="sticky bottom-20 md:bottom-4 rounded-lg border-2 border-primary/40 bg-card p-4 shadow-lg">
        <div className="grid gap-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">선택한 트림</span>
            <span className="font-medium">{formatKRW(selectedTrim.priceKRW)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">
              추가 옵션 {selectedOptions.size}개
            </span>
            <span className="font-medium">+{formatKRW(optionTotal)}</span>
          </div>
          <div className="border-t pt-2 flex items-center justify-between">
            <span className="font-semibold text-lg">예상 차량가</span>
            <span
              className={`text-xl font-bold ${
                budgetExceeded ? "text-red-600" : "text-primary"
              }`}
            >
              {formatKRW(total)}
            </span>
          </div>
          {budgetExceeded && (
            <div className="text-xs text-red-600">
              ⚠️ 예산(7천만원)을 {formatKRW(total - 70_000_000)} 초과합니다
            </div>
          )}
          {vehicle.fuelType === "EV" && vehicle.subsidy && (
            <div className="border-t pt-2 flex items-center justify-between text-sm">
              <span className="text-ev">보조금 반영 예상가</span>
              <span className="font-bold text-ev">
                {formatKRW(total - (vehicle.subsidy.totalKRW ?? 0))}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
