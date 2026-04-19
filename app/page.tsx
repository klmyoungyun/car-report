import { VEHICLES } from "@/data/vehicles";
import { FilterableVehicleGrid } from "@/components/filters/FilterBar";

export default function HomePage() {
  const evCount = VEHICLES.filter((v) => v.fuelType === "EV").length;
  const hevCount = VEHICLES.filter((v) => v.fuelType === "HEV" || v.fuelType === "PHEV").length;
  const mhevCount = VEHICLES.filter((v) => v.fuelType === "MHEV").length;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
      <section className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border bg-accent/50 px-3 py-1 text-xs font-medium">
          <span className="h-2 w-2 rounded-full bg-primary" />
          성남시 정자동 거주 · 1~2인 가구 · 차량가 7천만원 예산
        </div>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
          SUV 구매 가이드 2026
        </h1>
        <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">
          예산 7천만원 이내에서 고를 수 있는 SUV 10대를 비교합니다. 추천 트림은 서라운드 뷰·ADAS·CarPlay·후방카메라 등 대중적 옵션이 포함된 구성을 기준으로 선정했습니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <div className="rounded-lg border bg-card px-4 py-2">
            <div className="text-xs text-muted-foreground">전기차</div>
            <div className="font-bold text-ev">{evCount}대</div>
          </div>
          <div className="rounded-lg border bg-card px-4 py-2">
            <div className="text-xs text-muted-foreground">하이브리드</div>
            <div className="font-bold text-hev">{hevCount}대</div>
          </div>
          <div className="rounded-lg border bg-card px-4 py-2">
            <div className="text-xs text-muted-foreground">마일드 하이브리드</div>
            <div className="font-bold text-mhev">{mhevCount}대</div>
          </div>
        </div>
      </section>

      <FilterableVehicleGrid vehicles={VEHICLES} />
    </div>
  );
}
