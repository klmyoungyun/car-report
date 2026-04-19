import { z } from "zod";

export const FuelTypeSchema = z.enum(["EV", "HEV", "PHEV", "MHEV"]);
export const SegmentSchema = z.enum(["SUBCOMPACT", "COMPACT", "MIDSIZE"]);
export const OriginSchema = z.enum(["DOMESTIC", "IMPORT"]);
export const EssentialStatusSchema = z.enum(["기본", "옵션", "없음"]);

export const SpecsSchema = z.object({
  length_mm: z.number().nullable(),
  width_mm: z.number().nullable(),
  height_mm: z.number().nullable(),
  wheelbase_mm: z.number().nullable(),
  weight_kg: z.number().nullable(),
  trunk_liters: z.number().nullable(),
  seats: z.number(),
  drivetrain: z.string(),
  powerHp: z.number().nullable(),
  torqueNm: z.number().nullable(),
  efficiency: z.string(),
  range_km: z.number().nullable().optional(),
  battery_kwh: z.number().nullable().optional(),
  charging: z.string().nullable().optional(),
});

export const TrimSchema = z.object({
  name: z.string(),
  priceKRW: z.number().nullable(),
  keyFeatures: z.array(z.string()).optional(),
  drivetrain: z.string().optional(),
  note: z.string().optional(),
});

export const AddOnOptionSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.enum(["안전", "편의", "외관", "실내", "오디오", "ADAS", "기타"]),
  priceKRW: z.number(),
  description: z.string().optional(),
  recommended: z.boolean().optional(),
  /**
   * 같은 exclusiveGroup 값을 가진 옵션들은 단일 선택만 가능.
   * 예: "exterior-color" — 색상은 한 번에 하나만, "wheels" — 휠 한 세트만.
   */
  exclusiveGroup: z.string().optional(),
});

export const PricingSchema = z.object({
  baseTrim: z.object({
    name: z.string(),
    priceKRW: z.number().nullable(),
  }),
  recommendedTrim: z.object({
    name: z.string(),
    priceKRW: z.number().nullable(),
    includedOptionPackages: z.array(z.string()),
  }),
  fullOption: z.object({
    priceKRW: z.number().nullable(),
  }),
  essentials: z.object({
    surroundView: EssentialStatusSchema,
    rearCamera: EssentialStatusSchema,
    carplayAndroidAuto: EssentialStatusSchema,
    adas: EssentialStatusSchema,
  }),
  allTrims: z.array(TrimSchema).optional(),
  addOnOptions: z.array(AddOnOptionSchema).optional(),
});

export const SubsidySchema = z.object({
  nationalKRW: z.number().nullable(),
  seongnamKRW: z.number().nullable(),
  totalKRW: z.number().nullable(),
  realPurchasePriceKRW: z.number().nullable(),
  note: z.string().optional(),
});

export const TaxesSchema = z.object({
  acquisitionTaxKRW: z.number().nullable(),
  estimatedRegistrationKRW: z.number().nullable(),
  evExemptions: z.array(z.string()).optional(),
});

export const MediaSchema = z.object({
  youtube: z.array(
    z.object({
      videoId: z.string(),
      title: z.string(),
      channel: z.string(),
    })
  ),
  blogs: z.array(
    z.object({
      url: z.string(),
      title: z.string(),
      source: z.string(),
    })
  ),
  officialUrl: z.string(),
});

export const VehicleSchema = z.object({
  slug: z.string(),
  name: z.string(),
  brand: z.string(),
  segment: SegmentSchema,
  fuelType: FuelTypeSchema,
  origin: OriginSchema,
  images: z.object({
    hero: z.string(),
    thumbnail: z.string().optional(),
  }),
  specs: SpecsSchema,
  pricing: PricingSchema,
  subsidy: SubsidySchema.optional(),
  taxes: TaxesSchema,
  media: MediaSchema,
  pros: z.array(z.string()),
  cons: z.array(z.string()),
  dataAsOf: z.string(),
  researchNotes: z.string().optional(),
});

export type FuelType = z.infer<typeof FuelTypeSchema>;
export type Segment = z.infer<typeof SegmentSchema>;
export type Origin = z.infer<typeof OriginSchema>;
export type EssentialStatus = z.infer<typeof EssentialStatusSchema>;
export type Trim = z.infer<typeof TrimSchema>;
export type AddOnOption = z.infer<typeof AddOnOptionSchema>;
export type Vehicle = z.infer<typeof VehicleSchema>;
