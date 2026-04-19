export const DATA_AS_OF = "2026-04-19";

export const BUDGET_KRW = 70_000_000;

export const ACQUISITION_TAX_RATE = 0.07;

export const EV_TAX_EXEMPTIONS_2026 = {
  individualConsumptionMaxKRW: 3_000_000,
  educationMaxKRW: 900_000,
  acquisitionMaxKRW: 1_400_000,
  totalBenefitApproxKRW: 5_690_000,
} as const;

export const NATIONAL_EV_SUBSIDY_2026 = {
  baseMaxKRW: 5_800_000,
  conversionBonusMaxKRW: 1_000_000,
  totalMaxWithConversionKRW: 6_800_000,
  tiers: [
    { priceLessThan: 53_000_000, rate: 1.0 },
    { priceLessThan: 85_000_000, rate: 0.5 },
    { priceLessThan: Infinity, rate: 0 },
  ],
} as const;

export const SEONGNAM_SUBSIDY_NOTE =
  "성남시 시비 단일 확정 금액은 공개 자료에 없습니다. 국비+시비 합산 추정 상한 880만원, 실시간 현황은 무공해차 통합누리집 참고.";
export const SEONGNAM_NATIONAL_PLUS_LOCAL_ESTIMATE_KRW = 8_800_000;

export const FUEL_LABEL: Record<"EV" | "HEV" | "PHEV" | "MHEV", string> = {
  EV: "전기",
  HEV: "하이브리드",
  PHEV: "플러그인 하이브리드",
  MHEV: "마일드 하이브리드",
};

export const SEGMENT_LABEL: Record<"SUBCOMPACT" | "COMPACT" | "MIDSIZE", string> = {
  SUBCOMPACT: "소형",
  COMPACT: "준중형",
  MIDSIZE: "중형",
};

export const ORIGIN_LABEL: Record<"DOMESTIC" | "IMPORT", string> = {
  DOMESTIC: "국산",
  IMPORT: "수입",
};
