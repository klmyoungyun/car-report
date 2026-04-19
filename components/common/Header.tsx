import Link from "next/link";
import { Car } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Car className="h-5 w-5 text-primary" />
          <span>SUV 구매 가이드 2026</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <Link
            href="/"
            className="rounded-md px-3 py-1.5 hover:bg-accent"
          >
            전체 차량
          </Link>
          <Link
            href="/compare"
            className="rounded-md px-3 py-1.5 hover:bg-accent"
          >
            비교하기
          </Link>
          <Link
            href="/calculator"
            className="rounded-md px-3 py-1.5 hover:bg-accent"
          >
            보조금 계산기
          </Link>
        </nav>
      </div>
    </header>
  );
}
