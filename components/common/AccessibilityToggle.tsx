"use client";

import { useA11y } from "./AccessibilityProvider";
import { Button } from "@/components/ui/button";
import { Eye, Type } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function AccessibilityToggle() {
  const { fontSize, setFontSize, highContrast, toggleHighContrast } = useA11y();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setOpen((v) => !v)}
        aria-label="잘보이기 모드 설정"
        className="gap-1.5"
      >
        <Eye className="h-4 w-4" />
        <span className="hidden sm:inline">잘보이기</span>
      </Button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-60 rounded-lg border bg-card p-3 shadow-lg z-50">
          <div className="text-sm font-semibold mb-2">어르신 모드</div>
          <p className="text-xs text-muted-foreground mb-3">
            글자 크기와 색상 대비를 높여 편하게 보실 수 있습니다.
          </p>

          <div className="mb-3">
            <div className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1">
              <Type className="h-3 w-3" /> 글자 크기
            </div>
            <div className="grid grid-cols-3 gap-1">
              {(["default", "large", "xlarge"] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className={`rounded-md border px-2 py-1.5 text-xs transition-colors ${
                    fontSize === size
                      ? "bg-primary text-primary-foreground border-primary"
                      : "hover:bg-accent"
                  }`}
                >
                  {size === "default" && "보통"}
                  {size === "large" && "크게"}
                  {size === "xlarge" && "더 크게"}
                </button>
              ))}
            </div>
          </div>

          <label className="flex items-center justify-between cursor-pointer rounded-md p-2 hover:bg-accent">
            <span className="text-sm">고대비 모드</span>
            <input
              type="checkbox"
              checked={highContrast}
              onChange={toggleHighContrast}
              className="h-4 w-4"
            />
          </label>
        </div>
      )}
    </div>
  );
}
