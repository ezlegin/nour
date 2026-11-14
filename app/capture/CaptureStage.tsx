"use client";

import { useCallback, useEffect, useState } from "react";
import Stage from "@/components/three/Stage";
import Turntable from "@/components/three/Turntable";
import { catalogue } from "@/data/showcase";
import { modelForProduct } from "@/lib/models";

type Shot = { product: string; glaze: string; margin?: number };

declare global {
  interface Window {
    /** set a shot; resolves once its frame is drawn */
    __shoot?: (shot: Shot) => Promise<void>;
  }
}

export default function CaptureStage() {
  const [shot, setShot] = useState<Shot | null>(null);
  const [ready, setReady] = useState<(() => void) | null>(null);

  useEffect(() => {
    window.__shoot = (next) =>
      new Promise<void>((resolve) => {
        setReady(() => resolve);
        setShot(next);
      });
  }, []);

  const product = shot && catalogue.find((item) => item.url === shot.product);
  const color = product?.colors.find((item) => item.slug === shot?.glaze);
  const spec = product ? modelForProduct(product) : null;

  const onReady = useCallback(() => {
    // let the new glaze and framing reach the canvas before reading it back
    let n = 0;
    const tick = () => (++n < 6 ? requestAnimationFrame(tick) : ready?.());
    requestAnimationFrame(tick);
  }, [ready]);

  return (
    <div style={{ width: 1000, height: 1000, background: "transparent" }}>
      {product && color && spec && (
        <Stage
          key={product.url}
          className="h-full w-full"
          fov={24}
          frame={false}
          dpr={[1.6, 1.6]}
          preserve
        >
          <Turntable
            key={`${color.slug}-${shot?.margin}`}
            src={spec.src}
            color={color.hex}
            finish={spec.finish}
            goldRim={spec.goldRim}
            speed={0}
            bob={0}
            yaw={spec.frontal ? 0 : -0.5}
            margin={shot?.margin ?? 1.6}
            onReady={onReady}
          />
        </Stage>
      )}
    </div>
  );
}
