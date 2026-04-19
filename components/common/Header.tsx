import Link from "next/link";
import { Car } from "lucide-react";
import { AccessibilityToggle } from "./AccessibilityToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Car className="h-5 w-5 text-primary" />
          <span className="hidden sm:inline">SUV 구매 가이드 2026</span>
          <span className="sm:hidden">SUV 가이드</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <Link href="/" className="rounded-md px-2 sm:px-3 py-1.5 hover:bg-accent">
            <span className="hidden sm:inline">전체 차량</span>
            <span className="sm:hidden">차량</span>
          </Link>
          <Link href="/compare" className="rounded-md px-2 sm:px-3 py-1.5 hover:bg-accent">
            비교
          </Link>
          <Link href="/calculator" className="rounded-md px-2 sm:px-3 py-1.5 hover:bg-accent">
            <span className="hidden sm:inline">보조금 계산기</span>
            <span className="sm:hidden">계산기</span>
          </Link>
          <AccessibilityToggle />
        </nav>
      </div>
    </header>
  );
}
