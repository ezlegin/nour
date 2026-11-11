"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

type Options = {
  /** start reading progress before the section reaches the top (0-1 of viewport) */
  start?: number;
  /** finish before the section leaves (0-1) */
  end?: number;
};

/**
 * Scroll progress (0 → 1) for a tall section with a sticky inner stage.
 * The value lives in a ref so the 3D loop can read it every frame without
 * re-rendering React, while a coarse `step` state drives copy changes.
 */
export function useScrollProgress(
  ref: RefObject<HTMLElement | null>,
  { start = 0.85, end = 0.15 }: Options = {},
) {
  const progress = useRef(0);
  const [step, setStep] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame = 0;
    const measure = () => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const travelled = -rect.top;
      const next = total > 0 ? Math.min(1, Math.max(0, travelled / total)) : 0;
      progress.current = next;

      const bucket = next < 0.35 ? 0 : next < 0.7 ? 1 : 2;
      setStep((current) => (current === bucket ? current : bucket));
      setValue((current) => (Math.abs(current - next) > 0.01 ? next : current));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref, start, end]);

  return { progress, step, value };
}
