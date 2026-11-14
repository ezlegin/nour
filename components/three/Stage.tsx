"use client";

import { Suspense, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, ContactShadows, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Studio from "./Studio";

type Props = {
  children: ReactNode;
  className?: string;
  camera?: [number, number, number];
  fov?: number;
  shadows?: boolean;
  orbit?: boolean;
  zoom?: boolean;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  limited?: boolean;
  dpr?: [number, number];
  margin?: number;
  /** false leaves the camera alone: the children place it themselves */
  frame?: boolean;
  ariaLabel?: string;
  /** keep the drawn frame readable, so the canvas can be captured as a still */
  preserve?: boolean;
  /** stop rendering while the canvas is off screen */
  paused?: boolean;
};

export default function Stage({
  children,
  className,
  camera = [0, 1.1, 3.4],
  fov = 30,
  shadows = false,
  orbit = false,
  zoom = false,
  autoRotate = false,
  autoRotateSpeed = 0.6,
  limited = true,
  dpr = [1, 1.25],
  margin = 1.4,
  frame = true,
  ariaLabel = "نمای سه‌بعدی محصول",
  preserve = false,
  paused = false,
}: Props) {
  return (
    <div className={className} role="img" aria-label={ariaLabel}>
      <Canvas
        dpr={dpr}
        camera={{ position: camera, fov }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "default",
          preserveDrawingBuffer: preserve,
        }}
        shadows
        // draws only when something asks for a frame (motion, controls, loads)
        frameloop={paused ? "never" : "demand"}
        onCreated={({ gl }) => {
          // Neutral keeps glaze hues true. AgX (closest to Blender's Filmic)
          // skews saturated reds and pinks towards orange.
          gl.toneMapping = THREE.NeutralToneMapping;
          gl.toneMappingExposure = 1;
        }}
        style={{ touchAction: orbit ? "pan-y" : "auto", pointerEvents: orbit ? "auto" : "none" }}
      >
        <Suspense fallback={null}>
          <Studio />
          {frame ? (
            <Bounds fit clip observe margin={margin}>
              {children}
            </Bounds>
          ) : (
            children
          )}
          {/* catches the key light so the piece sits on a real surface */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.004, 0]} receiveShadow>
            <planeGeometry args={[40, 40]} />
            <shadowMaterial transparent opacity={0.26} color="#3a2f22" />
          </mesh>
          {shadows && (
            <ContactShadows
              position={[0, -0.002, 0]}
              opacity={0.1}
              scale={8}
              blur={2.4}
              far={2.5}
              resolution={256}
              color="#2a2015"
            />
          )}
          {orbit && (
            <OrbitControls
              makeDefault
              enablePan={false}
              enableZoom={zoom}
              autoRotate={autoRotate}
              autoRotateSpeed={autoRotateSpeed}
              minDistance={2.2}
              maxDistance={5.5}
              minPolarAngle={limited ? Math.PI / 3.4 : 0.2}
              maxPolarAngle={limited ? Math.PI / 2.05 : Math.PI / 1.7}
              dampingFactor={0.06}
              enableDamping
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
