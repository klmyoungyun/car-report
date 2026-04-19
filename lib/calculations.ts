import type { Vehicle } from "@/data/schema";
import {
  ACQUISITION_TAX_RATE,
  EV_TAX_EXEMPTIONS_2026,
  NATIONAL_EV_SUBSIDY_2026,
} from "./constants";

export interface PurchaseCostBreakdown {
  vehiclePriceKRW: number;
  nationalSubsidyKRW: number;
  localSubsidyKRW: number;
  totalSubsidyKRW: number;
  acquisitionTaxKRW: number;
  acquisitionTaxExemptionKRW: number;
  realPurchasePriceKRW: number;
  notes: string[];
}

export function calculateRealPrice(
  vehicle: Vehicle,
  opts?: { localSubsidyKRW?: number | null; includeAcquisitionTax?: boolean }
): PurchaseCostBreakdown {
  const priceKRW = vehicle.pricing.recommendedTrim.priceKRW ?? 0;
  const includeAcqTax = opts?.includeAcquisitionTax ?? false;

  const isEV = vehicle.fuelType === "EV";

  let nationalSubsidy = 0;
  let localSubsidy = 0;
  let acquisitionTaxExemption = 0;
  const notes: string[] = [];

  if (isEV && vehicle.subsidy) {
    nationalSubsidy = vehicle.subsidy.nationalKRW ?? 0;
    localSubsidy = opts?.localSubsidyKRW ?? vehicle.subsidy.seongnamKRW ?? 0;

    acquisitionTaxExemption = EV_TAX_EXEMPTIONS_2026.acquisitionMaxKRW;
    if (vehicle.subsidy.nationalKRW == null) {
      notes.push("국고보조금 2026년 확정 금액 확인 불가. 값은 참고용입니다.");
    }
    if (vehicle.subsidy.seongnamKRW == null) {
      notes.push("성남시 시비 단일 금액이 공개되지 않아 추정치 적용.");
    }
  }

  const totalSubsidy = nationalSubsidy + localSubsidy;

  const grossAcqTax = priceKRW * ACQUISITION_TAX_RATE;
  const acquisitionTax = isEV
    ? Math.max(0, grossAcqTax - acquisitionTaxExemption)
    : grossAcqTax;

  const realPrice = includeAcqTax
    ? priceKRW - totalSubsidy + acquisitionTax
    : priceKRW - totalSubsidy;

  return {
    vehiclePriceKRW: priceKRW,
    nationalSubsidyKRW: nationalSubsidy,
    localSubsidyKRW: localSubsidy,
    totalSubsidyKRW: totalSubsidy,
    acquisitionTaxKRW: acquisitionTax,
    acquisitionTaxExemptionKRW: acquisitionTaxExemption,
    realPurchasePriceKRW: realPrice,
    notes,
  };
}

export function subsidyRateForPrice(priceKRW: number): number {
  for (const tier of NATIONAL_EV_SUBSIDY_2026.tiers) {
    if (priceKRW < tier.priceLessThan) return tier.rate;
  }
  return 0;
}
