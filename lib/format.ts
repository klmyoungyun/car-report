export function formatKRW(amount: number | null | undefined, opts?: { unit?: "원" | "만원" }): string {
  if (amount == null) return "정보 없음";
  const unit = opts?.unit ?? "만원";
  if (unit === "만원") {
    const man = Math.round(amount / 10000);
    return `${man.toLocaleString("ko-KR")}만원`;
  }
  return `${amount.toLocaleString("ko-KR")}원`;
}

export function formatKRWFull(amount: number | null | undefined): string {
  if (amount == null) return "정보 없음";
  return `${amount.toLocaleString("ko-KR")}원`;
}

export function formatNumber(value: number | null | undefined, unit = ""): string {
  if (value == null) return "—";
  return `${value.toLocaleString("ko-KR")}${unit}`;
}
