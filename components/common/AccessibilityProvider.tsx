"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type FontSize = "default" | "large" | "xlarge";

interface A11yContextValue {
  fontSize: FontSize;
  setFontSize: (s: FontSize) => void;
  highContrast: boolean;
  toggleHighContrast: () => void;
}

const A11yContext = createContext<A11yContextValue | null>(null);

const STORAGE_KEY = "report-car:a11y";

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSize] = useState<FontSize>("default");
  const [highContrast, setHighContrast] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.fontSize) setFontSize(parsed.fontSize);
        if (typeof parsed.highContrast === "boolean") setHighContrast(parsed.highContrast);
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ fontSize, highContrast }));
    } catch {}
  }, [fontSize, highContrast, mounted]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("font-size-default", "font-size-large", "font-size-xlarge");
    root.classList.add(`font-size-${fontSize}`);
    root.classList.toggle("high-contrast", highContrast);
  }, [fontSize, highContrast]);

  const toggleHighContrast = () => setHighContrast((v) => !v);

  return (
    <A11yContext.Provider
      value={{ fontSize, setFontSize, highContrast, toggleHighContrast }}
    >
      {children}
    </A11yContext.Provider>
  );
}

export function useA11y() {
  const ctx = useContext(A11yContext);
  if (!ctx) throw new Error("useA11y must be used within AccessibilityProvider");
  return ctx;
}
