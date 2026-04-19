"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Vehicle, Trim, AddOnOption } from "@/data/schema";
import { formatKRW } from "@/lib/format";
import { Sliders, RotateCcw, Star, Check, CircleDot } from "lucide-react";
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
  const [selectedTrim, setSelectedTrim] = useState(
    trims.find((t) => t.priceKRW != null) ?? trims[0]
  );
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2800);
  };

  useEffect(() => () => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
  }, []);

  // 색상·휠 등 단일 선택 그룹을 자동 감지 (데이터에 명시 안 된 경우 heuristic)
  const effectiveGroup = (opt: AddOnOption): string | undefined => {
    if (opt.exclusiveGroup) return opt.exclusiveGroup;
    if (opt.category !== "외관") return undefined;

    const name = opt.name.toLowerCase();
    const id = opt.id.toLowerCase();

    // 제외 패턴: 패키지/악세서리/엠블럼/에디션/F SPORT
    if (/패키지|package|edition|에디션|handling|루프|엠블럼|emblem|rail|dark 테마|크로스바|트리플|led 헤드|스타일|style|black edition|로드|윈터/i.test(opt.name)) {
      return undefined;
    }

    // 휠 감지
    if (/\bwheel\b|휠\b|인치 휠|"\s*[\w\s]*휠/i.test(opt.name) || /^wheels/i.test(id)) {
      return "wheels";
    }

    // 색상 감지
    if (
      /페인트|paint|색상|컬러|color|metallic|pearl|multi-coat|무광|matte/i.test(opt.name) ||
      /^(pearl|marine|diamond|glacier|ultra-red|quicksilver|crystal|onyx|denim|vapour|sand|cloud|aurora|forest|mulberry|snow|matte|sonic|ultrasonic|infrared|grecian|copper|color|exterior-color)/i.test(id) ||
      /\b(white|black|blue|red|grey|gray|silver|green|yellow|iridium|titanium|chrome)\b/i.test(name)
    ) {
      return "exterior-color";
    }

    return undefined;
  };

  const optionsWithGroup = useMemo(
    () => addOnOptions.map((o) => ({ ...o, exclusiveGroup: effectiveGroup(o) })),
    [addOnOptions]
  );

  const optionById = useMemo(() => {
    const map = new Map<string, AddOnOption>();
    for (const o of optionsWithGroup) map.set(o.id, o);
    return map;
  }, [optionsWithGroup]);

  const toggleOption = (id: string) => {
    const option = optionById.get(id);
    setSelectedOptions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        return next;
      }
      if (option?.exclusiveGroup) {
        for (const other of optionsWithGroup) {
          if (other.id !== id && other.exclusiveGroup === option.exclusiveGroup) {
            next.delete(other.id);
          }
        }
      }
      next.add(id);
      return next;
    });
  };

  const resetAll = () => {
    setSelectedOptions(new Set());
    showToast("모든 옵션 선택을 해제했습니다.");
  };

  const selectRecommended = () => {
    const recIds = optionsWithGroup
      .filter((o) => o.recommended && !isIncludedInTrim(o))
      .map((o) => o.id);
    if (recIds.length === 0) {
      showToast("추천 옵션이 없거나 모두 트림에 포함되어 있습니다.");
      return;
    }
    const picked: string[] = [];
    const groupsTaken = new Set<string>();
    for (const id of recIds) {
      const opt = optionById.get(id);
      if (opt?.exclusiveGroup) {
        if (groupsTaken.has(opt.exclusiveGroup)) continue;
        groupsTaken.add(opt.exclusiveGroup);
      }
      picked.push(id);
    }
    setSelectedOptions(new Set(picked));
    showToast(`✅ 추천 옵션 ${picked.length}개가 선택되었습니다.`);
  };

  // 트림에 이미 포함된 옵션인지 감지 (이름 기반 fuzzy match)
  const trimFeatureText = useMemo(() => {
    const parts: string[] = [];
    parts.push(...(selectedTrim.keyFeatures ?? []));
    // 추천 트림의 includedOptionPackages도 고려 (현재 트림과 추천 트림이 같을 때)
    if (selectedTrim.name === vehicle.pricing.recommendedTrim.name) {
      parts.push(...vehicle.pricing.recommendedTrim.includedOptionPackages);
    }
    return parts.join(" ").toLowerCase();
  }, [selectedTrim, vehicle]);

  const isIncludedInTrim = (opt: AddOnOption): boolean => {
    if (!trimFeatureText) return false;
    const keywords = [
      opt.name.toLowerCase(),
      ...(opt.description ? [opt.description.toLowerCase()] : []),
    ];
    // 주요 키워드 추출: 괄호 제거 후 핵심 단어
    for (const kw of keywords) {
      const core = kw.replace(/\([^)]*\)/g, "").trim();
      if (core.length < 3) continue;
      // 옵션 이름의 핵심 부분이 트림 피처 텍스트에 포함되면 true
      const tokens = core.split(/[\s·/]+/).filter((t) => t.length >= 2);
      const hitCount = tokens.filter((t) => trimFeatureText.includes(t)).length;
      if (hitCount >= Math.min(2, tokens.length)) return true;
    }
    return false;
  };

  const optionTotal = useMemo(() => {
    return optionsWithGroup
      .filter((o) => selectedOptions.has(o.id) && !isIncludedInTrim(o))
      .reduce((sum, o) => sum + o.priceKRW, 0);
  }, [optionsWithGroup, selectedOptions, trimFeatureText]);

  const total = (selectedTrim.priceKRW ?? 0) + optionTotal;

  const categories = useMemo(() => {
    const grouped = new Map<AddOnOption["category"], AddOnOption[]>();
    for (const opt of optionsWithGroup) {
      // 트림에 이미 포함된 옵션은 "이미 포함됨" 라벨로 표시 (생략 아님)
      if (!grouped.has(opt.category)) grouped.set(opt.category, []);
      grouped.get(opt.category)!.push(opt);
    }
    return CATEGORY_ORDER.filter((c) => grouped.has(c)).map((c) => ({
      category: c,
      options: grouped.get(c)!,
    }));
  }, [optionsWithGroup]);

  const budgetExceeded = total > 70_000_000;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Sliders className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">나만의 옵션 구성</h3>
          {selectedOptions.size > 0 && (
            <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-primary-foreground">
              {selectedOptions.size}개 선택됨
            </span>
          )}
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
        트림을 선택하고 필요한 옵션을 하나씩 추가해보세요. <strong>색상·휠은 하나만</strong> 선택 가능하고 나머지는 여러 개 가능합니다. 가격이 실시간으로 계산됩니다.
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
                  ? "border-primary bg-primary/10 ring-2 ring-primary/30"
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
          <div className="space-y-5">
            {categories.map(({ category, options }) => {
              // exclusiveGroup별 묶기
              const groupMap = new Map<string, AddOnOption[]>();
              const freeOptions: AddOnOption[] = [];
              for (const opt of options) {
                if (opt.exclusiveGroup) {
                  if (!groupMap.has(opt.exclusiveGroup))
                    groupMap.set(opt.exclusiveGroup, []);
                  groupMap.get(opt.exclusiveGroup)!.push(opt);
                } else {
                  freeOptions.push(opt);
                }
              }
              return (
                <div key={category}>
                  <div className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-1">
                    {category}
                  </div>

                  {/* 단일 선택 그룹들 */}
                  {Array.from(groupMap.entries()).map(([groupName, opts]) => (
                    <div key={groupName} className="mb-3 rounded-md border border-dashed border-primary/30 bg-primary/5 p-2">
                      <div className="mb-1.5 flex items-center gap-1 px-1 text-[11px] font-semibold text-primary">
                        <CircleDot className="h-3 w-3" />
                        {groupName === "exterior-color" && "외장 색상 — 1개만 선택"}
                        {groupName === "interior-color" && "실내 컬러 — 1개만 선택"}
                        {groupName === "wheels" && "휠 — 1개만 선택"}
                        {!["exterior-color", "interior-color", "wheels"].includes(groupName) && `${groupName} — 1개만 선택`}
                      </div>
                      <div className="space-y-1">
                        {opts.map((opt) => {
                          const selected = selectedOptions.has(opt.id);
                          const included = isIncludedInTrim(opt);
                          return (
                            <label
                              key={opt.id}
                              className={`flex items-start gap-3 rounded-md border p-3 cursor-pointer transition-all ${
                                included
                                  ? "border-ev/40 bg-ev/5 opacity-70"
                                  : selected
                                    ? "border-primary bg-primary/10 ring-2 ring-primary/40 shadow-sm"
                                    : "border-border hover:bg-accent"
                              }`}
                            >
                              <input
                                type="radio"
                                checked={selected}
                                disabled={included}
                                onChange={() => toggleOption(opt.id)}
                                className="mt-1 h-4 w-4 accent-primary"
                              />
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className={`text-sm ${selected ? "font-semibold text-primary" : "font-medium"}`}>
                                    {opt.name}
                                  </span>
                                  {included && (
                                    <span className="rounded-full bg-ev/10 px-2 py-0.5 text-xs font-semibold text-ev">
                                      트림 기본 포함
                                    </span>
                                  )}
                                  {!included && opt.recommended && (
                                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                                      추천
                                    </span>
                                  )}
                                  {!included && selected && (
                                    <span className="inline-flex items-center gap-0.5 text-xs text-primary">
                                      <Check className="h-3 w-3" /> 선택됨
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
                                {included
                                  ? "₩0 (포함)"
                                  : opt.priceKRW === 0
                                    ? "무료"
                                    : `+${formatKRW(opt.priceKRW)}`}
                              </div>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  ))}

                  {/* 다중 선택 옵션들 */}
                  {freeOptions.length > 0 && (
                    <div className="space-y-1">
                      {freeOptions.map((opt) => {
                        const selected = selectedOptions.has(opt.id);
                        const included = isIncludedInTrim(opt);
                        return (
                          <label
                            key={opt.id}
                            className={`flex items-start gap-3 rounded-md border p-3 cursor-pointer transition-all ${
                              included
                                ? "border-ev/40 bg-ev/5 opacity-70"
                                : selected
                                  ? "border-primary bg-primary/10 ring-2 ring-primary/40 shadow-sm"
                                  : "border-border hover:bg-accent"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={selected || included}
                              disabled={included}
                              onChange={() => toggleOption(opt.id)}
                              className="mt-1 h-4 w-4 accent-primary"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className={`text-sm ${selected ? "font-semibold text-primary" : "font-medium"}`}>
                                  {opt.name}
                                </span>
                                {included && (
                                  <span className="rounded-full bg-ev/10 px-2 py-0.5 text-xs font-semibold text-ev">
                                    트림 기본 포함
                                  </span>
                                )}
                                {!included && opt.recommended && (
                                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                                    추천
                                  </span>
                                )}
                                {!included && selected && (
                                  <span className="inline-flex items-center gap-0.5 text-xs text-primary">
                                    <Check className="h-3 w-3" /> 선택됨
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
                              {included
                                ? "₩0 (포함)"
                                : opt.priceKRW === 0
                                  ? "무료"
                                  : `+${formatKRW(opt.priceKRW)}`}
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 최종 포함 사양 요약 */}
      <div className="rounded-lg border bg-card p-4">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="text-sm font-semibold">📋 최종 포함 사양</h4>
          <span className="text-xs text-muted-foreground">
            {selectedTrim.name}
          </span>
        </div>
        <div className="space-y-3">
          {/* 트림 기본 포함 */}
          {(selectedTrim.keyFeatures?.length ?? 0) > 0 && (
            <div>
              <div className="text-xs font-semibold text-ev mb-1.5">
                ✓ 트림 기본 포함 ({selectedTrim.keyFeatures?.length})
              </div>
              <ul className="grid gap-1 sm:grid-cols-2 text-xs">
                {selectedTrim.keyFeatures?.map((f, i) => (
                  <li key={i} className="flex gap-1.5">
                    <span className="text-ev">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* 추가 옵션 */}
          {(() => {
            const chosen = optionsWithGroup.filter(
              (o) => selectedOptions.has(o.id) && !isIncludedInTrim(o)
            );
            if (chosen.length === 0) return null;
            return (
              <div className="border-t pt-3">
                <div className="text-xs font-semibold text-primary mb-1.5">
                  + 추가 선택 옵션 ({chosen.length}개 / {formatKRW(optionTotal)})
                </div>
                <ul className="space-y-1 text-xs">
                  {chosen.map((o) => (
                    <li key={o.id} className="flex items-start justify-between gap-2">
                      <span className="flex gap-1.5">
                        <span className="text-primary">•</span>
                        <span>{o.name}</span>
                      </span>
                      <span className="font-medium whitespace-nowrap">
                        {o.priceKRW === 0 ? "무료" : `+${formatKRW(o.priceKRW)}`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })()}
          {selectedOptions.size === 0 && (
            <div className="text-xs text-muted-foreground text-center py-2">
              위에서 옵션을 선택하면 여기에 표시됩니다.
            </div>
          )}
        </div>
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
          {vehicle.fuelType === "EV" && vehicle.subsidy?.totalKRW != null && (
            <div className="border-t pt-2 flex items-center justify-between text-sm">
              <span className="text-ev">보조금 반영 예상가</span>
              <span className="font-bold text-ev">
                {formatKRW(total - vehicle.subsidy.totalKRW)}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* 토스트 */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background shadow-xl animate-in fade-in slide-in-from-bottom-2">
          {toast}
        </div>
      )}
    </div>
  );
}
