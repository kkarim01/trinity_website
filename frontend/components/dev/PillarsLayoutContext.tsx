"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Ctx = { variant: number; cycle: () => void };

const PillarsLayoutContext = createContext<Ctx>({ variant: 0, cycle: () => {} });

export function PillarsLayoutProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState(0);
  const cycle = useCallback(() => setVariant((v) => (v + 1) % 3), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "v" || e.key === "V") cycle();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cycle]);

  return (
    <PillarsLayoutContext.Provider value={{ variant, cycle }}>
      {children}
    </PillarsLayoutContext.Provider>
  );
}

export function usePillarsLayout() {
  return useContext(PillarsLayoutContext);
}
