"use client";

import Link from "next/link";
import { useCompare } from "./CompareProvider";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CompareFloatingBar() {
  const { ids, remove, clear } = useCompare();
  if (ids.length === 0) return null;

  const href = `/compare?ids=${ids.join(",")}`;

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[min(calc(100%-2rem),40rem)] -translate-x-1/2 rounded-xl border bg-card p-3 shadow-lg">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2 flex-1">
          <span className="text-sm font-medium">비교 ({ids.length}/3)</span>
          {ids.map((id) => (
            <button
              key={id}
              onClick={() => remove(id)}
              className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs hover:bg-muted/70"
            >
              {id}
              <X className="h-3 w-3" />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={clear}>
            초기화
          </Button>
          <Link href={href}>
            <Button size="sm" disabled={ids.length < 2}>
              비교하기 →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
