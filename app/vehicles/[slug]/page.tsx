import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { VEHICLES, getVehicleBySlug } from "@/data/vehicles";
import { VEHICLE_OPTIONS } from "@/data/vehicle-options";
import { SpecTable } from "@/components/vehicle/SpecTable";
import { PriceTable } from "@/components/vehicle/PriceTable";
import { EssentialsChecklist } from "@/components/vehicle/EssentialsChecklist";
import { SubsidyCard } from "@/components/vehicle/SubsidyCard";
import { YoutubeEmbed } from "@/components/vehicle/YoutubeEmbed";
import { BlogLinkCard } from "@/components/vehicle/BlogLinkCard";
import { ProsConsList } from "@/components/vehicle/ProsConsList";
import { TrimList } from "@/components/vehicle/TrimList";
import { Configurator } from "@/components/vehicle/Configurator";
import { FuelBadge, Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SEGMENT_LABEL, ORIGIN_LABEL } from "@/lib/constants";
import { formatKRW } from "@/lib/format";
import { ExternalLink, ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return VEHICLES.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) return {};
  return {
    title: `${vehicle.name} — SUV 구매 가이드 2026`,
    description: `${vehicle.name} 상세 정보 · 가격 · 옵션 · 보조금 · 후기`,
  };
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> 전체 차량으로 돌아가기
      </Link>

      <header className="mt-4 space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <FuelBadge fuelType={vehicle.fuelType} />
          <Badge variant="outline">{SEGMENT_LABEL[vehicle.segment]}</Badge>
          <Badge variant="outline">{ORIGIN_LABEL[vehicle.origin]}</Badge>
          <Badge variant="muted">{vehicle.brand}</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{vehicle.name}</h1>
      </header>

      <div className="mt-4 relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-muted">
        {vehicle.images.hero && (
          <Image
            src={vehicle.images.hero}
            alt={vehicle.name}
            fill
            sizes="(max-width: 768px) 100vw, 70vw"
            className="object-cover"
            priority
            unoptimized
          />
        )}
      </div>

      <div className="mt-6">
        <ProsConsList pros={vehicle.pros} cons={vehicle.cons} />
      </div>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">가격 구성 (요약)</h2>
        <PriceTable vehicle={vehicle} />
        <p className="text-xs text-muted-foreground">
          ※ 가격은 {vehicle.dataAsOf} 기준. 친환경차 세제혜택(해당 시) 적용가이며, 실제 판매가는 프로모션에 따라 다를 수 있습니다.
        </p>
      </section>

      {VEHICLE_OPTIONS[vehicle.slug] && (
        <>
          <section className="mt-8 space-y-3">
            <h2 className="text-xl font-semibold">모든 트림 구성</h2>
            <p className="text-sm text-muted-foreground">
              트림별 기본 탑재 옵션과 가격 차이를 확인하세요.
            </p>
            <TrimList
              trims={VEHICLE_OPTIONS[vehicle.slug].trims}
              recommendedName={vehicle.pricing.recommendedTrim.name}
            />
            {VEHICLE_OPTIONS[vehicle.slug].notes && (
              <p className="text-xs text-muted-foreground italic">
                {VEHICLE_OPTIONS[vehicle.slug].notes}
              </p>
            )}
          </section>

          <section className="mt-8">
            <Configurator
              vehicle={vehicle}
              trims={VEHICLE_OPTIONS[vehicle.slug].trims}
              addOnOptions={VEHICLE_OPTIONS[vehicle.slug].addOnOptions}
            />
          </section>
        </>
      )}

      {vehicle.fuelType === "EV" && vehicle.subsidy && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-3">보조금 & 실구매가</h2>
          <SubsidyCard vehicle={vehicle} />
        </section>
      )}

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">필수 옵션 체크</h2>
        <p className="text-sm text-muted-foreground">
          첫차 구매자를 위한 대중적 필수옵션이 추천 트림에 포함되어 있는지 표시합니다.
        </p>
        <EssentialsChecklist vehicle={vehicle} />
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">제원</h2>
        <SpecTable vehicle={vehicle} />
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">세금 & 등록비 참고</h2>
        <div className="rounded-lg border bg-card p-4 text-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">취득세 (7%{vehicle.fuelType === "EV" ? ", EV 최대 140만원 감면" : ""})</span>
            <span className="font-medium">{formatKRW(vehicle.taxes.acquisitionTaxKRW)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">등록 부대비용 (추정)</span>
            <span className="font-medium">{formatKRW(vehicle.taxes.estimatedRegistrationKRW)}</span>
          </div>
          {vehicle.taxes.evExemptions && vehicle.taxes.evExemptions.length > 0 && (
            <div className="border-t pt-2 mt-2">
              <div className="text-xs text-muted-foreground mb-1">적용 세제혜택</div>
              <ul className="list-disc ml-4 text-xs space-y-0.5">
                {vehicle.taxes.evExemptions.map((ex, i) => (
                  <li key={i}>{ex}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {vehicle.media.youtube.length > 0 && (
        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">📺 참고 영상</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {vehicle.media.youtube.map((v) => (
              <YoutubeEmbed key={v.videoId} {...v} />
            ))}
          </div>
        </section>
      )}

      {vehicle.media.blogs.length > 0 && (
        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">📝 후기·기사</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {vehicle.media.blogs.map((b, i) => (
              <BlogLinkCard key={i} {...b} />
            ))}
          </div>
        </section>
      )}

      <section className="mt-8">
        <a
          href={vehicle.media.officialUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-block"
        >
          <Button variant="outline">
            공식 홈페이지에서 최신 정보 확인
            <ExternalLink className="h-4 w-4" />
          </Button>
        </a>
      </section>

      {vehicle.researchNotes && (
        <aside className="mt-8 rounded-lg border border-dashed bg-muted/30 p-4 text-xs text-muted-foreground">
          <strong className="text-foreground">참고:</strong> {vehicle.researchNotes}
        </aside>
      )}
    </div>
  );
}
