"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import Model, { type ModelHandle } from "./Model";

type Props = {
  src: string;
  color: string;
  finish?: "gloss" | "matte";
  goldRim?: boolean;
  goldEdge?: boolean;
  /** turn speed, radians per second; 0 holds the piece still */
  speed?: number;
  /** instead of a full turn, swing this far to either side of the yaw, radians */
  sway?: number;
  /** resting yaw, radians */
  yaw?: number;
  /** camera height above the table, degrees */
  elevation?: number;
  /**
   * how far the camera rises and falls around its elevation, degrees. A plate
   * or bowl looks the same from every side, so the turn alone reads as
   * stillness; the changing height is what shows it is a 3D object.
   */
  bob?: number;
  /** breathing room around the piece (1 = touching the frame) */
  margin?: number;
  onReady?: () => void;
};

type Extent = { radius: number; height: number };

const SAMPLES = 4000;

/**
 * How far the piece reaches from its turning axis, and how tall it is. Measured
 * from the vertices rather than the bounding box, so the framing holds for the
 * whole turn: a mug's handle or a teapot's spout never swings out of frame.
 */
function measure(group: THREE.Object3D): Extent {
  group.updateWorldMatrix(true, true);
  const point = new THREE.Vector3();
  let radius = 0;
  let top = 0;

  group.traverse((object) => {
    const mesh = object as THREE.Mesh;
    const position = mesh.isMesh ? mesh.geometry?.attributes.position : null;
    if (!position) return;
    const stride = Math.max(1, Math.floor(position.count / SAMPLES));
    for (let i = 0; i < position.count; i += stride) {
      point.fromBufferAttribute(position, i).applyMatrix4(mesh.matrixWorld);
      radius = Math.max(radius, Math.hypot(point.x, point.z));
      top = Math.max(top, point.y);
    }
  });

  return { radius: radius || 1, height: top };
}

/**
 * A piece on a slow turntable, seen from above eye level. No controls: the
 * camera is placed once from the piece's own size, so every model — a single
 * plate or a thirty-piece service — sits in its frame the same way.
 */
export default function Turntable({
  src,
  color,
  finish = "gloss",
  goldRim = true,
  goldEdge = false,
  speed = 0.32,
  sway = 0,
  yaw = -0.5,
  elevation = 31,
  bob = 9,
  margin = 1.16,
  onReady,
}: Props) {
  const camera = useThree((state) => state.camera) as THREE.PerspectiveCamera;
  const aspect = useThree((state) => state.size.width / Math.max(1, state.size.height));
  const invalidate = useThree((state) => state.invalidate);
  const [extent, setExtent] = useState<Extent | null>(null);
  const orbit = useRef<{ centre: number; distance: number } | null>(null);

  const handleReady = useCallback(
    (handle: ModelHandle) => {
      setExtent(measure(handle.group));
      onReady?.();
    },
    [onReady],
  );

  useEffect(() => {
    if (!extent) return;
    const centre = extent.height / 2;
    // sphere around the swept volume, fitted to the tighter of the two fovs
    const sphere = Math.hypot(extent.radius, centre);
    const vertical = THREE.MathUtils.degToRad(camera.fov) / 2;
    const half = Math.min(vertical, Math.atan(Math.tan(vertical) * aspect));
    const distance = (sphere * margin) / Math.sin(half);
    const tilt = THREE.MathUtils.degToRad(elevation);

    orbit.current = { centre, distance };
    camera.position.set(0, centre + Math.sin(tilt) * distance, Math.cos(tilt) * distance);
    // generous clip planes: the measured extent can undershoot the drawn piece
    camera.near = 0.01;
    camera.far = distance * 4 + sphere * 20;
    camera.lookAt(0, centre, 0);
    camera.updateProjectionMatrix();
    invalidate();
  }, [extent, aspect, camera, elevation, margin, invalidate]);

  useFrame((state) => {
    if (!orbit.current || !speed || !bob) return;
    const { centre, distance } = orbit.current;
    // offset by the yaw so neighbouring cards do not rise and fall together
    const tilt = THREE.MathUtils.degToRad(
      elevation + Math.sin(state.clock.elapsedTime * 0.55 + yaw * 2) * bob,
    );
    camera.position.set(0, centre + Math.sin(tilt) * distance, Math.cos(tilt) * distance);
    camera.lookAt(0, centre, 0);
    state.invalidate();
  });

  return (
    <Model
      src={src}
      color={color}
      finish={finish}
      goldRim={goldRim}
      goldEdge={goldEdge}
      fit={1.5}
      rotationY={yaw}
      spin={sway ? 0 : speed}
      sway={speed ? sway : 0}
      quality="plain"
      castShadow
      onReady={handleReady}
    />
  );
}
