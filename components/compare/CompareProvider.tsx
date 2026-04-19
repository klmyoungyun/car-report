"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface CompareContextValue {
  ids: string[];
  add: (id: string) => void;
  remove: (id: string) => void;
  toggle: (id: string) => void;
  clear: () => void;
  isSelected: (id: string) => boolean;
  canAdd: boolean;
}

const CompareContext = createContext<CompareContextValue | null>(null);

const STORAGE_KEY = "report-car:compare";
const MAX = 3;

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setIds(parsed.slice(0, MAX));
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch {
      // ignore
    }
  }, [ids, mounted]);

  const add = (id: string) =>
    setIds((prev) => (prev.includes(id) || prev.length >= MAX ? prev : [...prev, id]));
  const remove = (id: string) =>
    setIds((prev) => prev.filter((x) => x !== id));
  const toggle = (id: string) =>
    setIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= MAX) return prev;
      return [...prev, id];
    });
  const clear = () => setIds([]);
  const isSelected = (id: string) => ids.includes(id);

  return (
    <CompareContext.Provider
      value={{ ids, add, remove, toggle, clear, isSelected, canAdd: ids.length < MAX }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const ctx = useContext(CompareContext);
  if (!ctx) throw new Error("useCompare must be used within CompareProvider");
  return ctx;
}
