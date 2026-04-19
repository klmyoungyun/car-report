import { DATA_AS_OF } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-muted-foreground space-y-2">
        <p>
          <strong>데이터 기준일:</strong> {DATA_AS_OF} · 가격·보조금·옵션은 제조사/지자체 정책에 따라 변경될 수 있습니다. 실제 구매 전 반드시 공식 홈페이지·딜러 또는 관할 지자체에서 확인하세요.
        </p>
        <p>
          EV 보조금은 국고·지자체 예산 소진 여부에 따라 달라지며, 본 사이트의 수치는 2026-04-19 조사 기준 참고용입니다. 실시간 현황은{" "}
          <a href="https://ev.or.kr" className="underline" target="_blank" rel="noreferrer">
            무공해차 통합누리집
          </a>
          을 확인하세요.
        </p>
        <p>© 2026 SUV 구매 가이드. 비상업적 개인 용도로 제작됨.</p>
      </div>
    </footer>
  );
}
