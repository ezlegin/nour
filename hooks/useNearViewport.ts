"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * True once the element has come near the viewport. Used to defer the heavy
 * WebGL canvases until they are actually about to be seen.
 */
export function useNearViewport(
  ref: RefObject<HTMLElement | null>,
  rootMargin = "240px",
) {
  const [near, setNear] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || near) return;

    if (typeof IntersectionObserver === "undefined") {
      setNear(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, rootMargin, near]);

  return near;
}
