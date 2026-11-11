"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { isMetalMaterial } from "@/lib/glazes";
import { GOLD, NO_LIP, SURFACE, goldMaterial, porcelainMaterial } from "./Studio";

export type ModelHandle = {
  group: THREE.Group;
  meshes: THREE.Mesh[];
  goldCount: number;
};

type GlazeEntry = {
  material: THREE.MeshPhysicalMaterial;
  original: THREE.Color;
  primary: boolean;
};

/** Pieces whose lip can take a gold edge: plates, bowls, saucers and cups. */
const LIPPED = /^(circle|naalbaki|cup)/i;

/**
 * Give every vertex its depth below the top of its own piece, in metres. Each
 * piece keeps its own transform in the models, with its axis along local Y, so
 * the top of its bounding box is its lip however the piece is tilted.
 */
function markLip(mesh: THREE.Mesh) {
  const geometry = mesh.geometry;
  if (!geometry || geometry.getAttribute("aLip")) return;
  const position = geometry.attributes.position;
  const lip = new Float32Array(position.count).fill(NO_LIP);
  if (LIPPED.test(mesh.name)) {
    geometry.computeBoundingBox();
    const top = geometry.boundingBox!.max.y;
    for (let i = 0; i < position.count; i++) {
      lip[i] = (top - position.getY(i)) * Math.abs(mesh.scale.y);
    }
  }
  geometry.setAttribute("aLip", new THREE.BufferAttribute(lip, 1));
}

type Props = {
  src: string;
  /** base glaze colour, sRGB hex */
  color: string;
  /** false folds the gold trim into the body glaze */
  goldRim?: boolean;
  /** a band of gold on the lip of plates, bowls, saucers and cups */
  goldEdge?: boolean;
  /** gloss = kiln glaze, matte = raw porcelain */
  finish?: "gloss" | "matte";
  /** keep the original colour of secondary pieces (e.g. a grey saucer) */
  preserveAccents?: boolean;
  /** longest edge in scene units */
  fit?: number;
  /** fixed presentation yaw, radians */
  rotationY?: number;
  /** constant spin, radians per second */
  spin?: number;
  /** slow turn to either side of rotationY and back, radians */
  sway?: number;
  /** pointer parallax in radians */
  parallax?: number;
  /** vertical breathing motion */
  float?: boolean;
  onReady?: (handle: ModelHandle) => void;
  castShadow?: boolean;
  quality?: "hero" | "plain";
};

export default function Model({
  src,
  color,
  goldRim = true,
  goldEdge = false,
  finish = "gloss",
  preserveAccents = false,
  fit = 1.4,
  rotationY = 0,
  spin = 0,
  sway = 0,
  parallax = 0,
  float = false,
  onReady,
  castShadow = false,
  quality = "hero",
}: Props) {
  const gltf = useGLTF(src);
  const root = useRef<THREE.Group>(null);
  const spinner = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const { scene, glazeEntries, goldMats } = useMemo(() => {
    const clone = gltf.scene.clone(true);
    const byName = new Map<string, THREE.Material>();
    const glazeList: GlazeEntry[] = [];
    const goldList: THREE.MeshPhysicalMaterial[] = [];
    const usage = new Map<string, number>();
    const originals = new Map<string, THREE.Color>();

    clone.traverse((object) => {
      const mesh = object as THREE.Mesh;
      if (!mesh.isMesh) return;
      const source = mesh.material as THREE.Material | THREE.Material[];
      const list = Array.isArray(source) ? source : [source];

      for (const material of list) {
        const count = mesh.geometry?.index
          ? mesh.geometry.index.count
          : (mesh.geometry?.attributes.position?.count ?? 0);
        usage.set(material.name, (usage.get(material.name) ?? 0) + count);
        if (!originals.has(material.name)) {
          originals.set(
            material.name,
            (material as THREE.MeshStandardMaterial).color.clone(),
          );
        }
      }

      markLip(mesh);
      mesh.material = list.length === 1 ? resolve(list[0]) : list.map(resolve);
      mesh.castShadow = castShadow;
      mesh.receiveShadow = true;

      function resolve(material: THREE.Material) {
        const key = material.name || "Glaze";
        const cached = byName.get(key);
        if (cached) return cached;

        const source = material as THREE.MeshStandardMaterial;
        const metal =
          isMetalMaterial(key) ||
          (typeof source.metalness === "number" && source.metalness > 0.55);

        const next = metal
          ? goldMaterial()
          : porcelainMaterial(color, finish === "gloss");
        next.name = key;
        if (metal) {
          goldList.push(next as THREE.MeshPhysicalMaterial);
        } else {
          glazeList.push({
            material: next as THREE.MeshPhysicalMaterial,
            original: originals.get(key)?.clone() ?? new THREE.Color("#cfc7b8"),
            primary: false,
          });
        }
        byName.set(key, next);
        return next;
      }
    });

    // the body is whichever glaze covers the most triangles; everything else
    // is an accent piece and can keep its own colour
    let primaryKey: string | null = null;
    let max = -1;
    for (const entry of glazeList) {
      const count = usage.get(entry.material.name) ?? 0;
      if (count > max) {
        max = count;
        primaryKey = entry.material.name;
      }
    }
    for (const entry of glazeList) {
      entry.primary = entry.material.name === primaryKey;
    }

    clone.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(clone);
    const size = box.getSize(new THREE.Vector3());
    const centre = box.getCenter(new THREE.Vector3());
    const longest = Math.max(size.x, size.y, size.z) || 1;
    const scale = fit / longest;

    const wrapper = new THREE.Group();
    clone.position.set(-centre.x, -box.min.y, -centre.z);
    wrapper.add(clone);
    wrapper.scale.setScalar(scale);
    wrapper.updateMatrixWorld(true);

    return { scene: wrapper, glazeEntries: glazeList, goldMats: goldList };
  }, [gltf, fit, quality, castShadow, finish]);

  useEffect(() => {
    const surface = SURFACE[finish];
    for (const entry of glazeEntries) {
      const material = entry.material;
      if (preserveAccents && !entry.primary) {
        material.color.copy(entry.original);
      } else {
        material.color.set(color);
      }
      material.roughness = surface.roughness;
      material.clearcoat = surface.clearcoat;
      material.clearcoatRoughness = surface.ccRoughness;
      material.envMapIntensity = surface.env;
    }
  }, [color, finish, glazeEntries, preserveAccents]);

  useEffect(() => {
    for (const entry of glazeEntries) {
      const edge = entry.material.userData.goldEdge as { value: number } | undefined;
      if (edge) edge.value = goldEdge ? 1 : 0;
    }
  }, [goldEdge, glazeEntries]);

  useEffect(() => {
    for (const material of goldMats) {
      if (goldRim) {
        material.metalness = 1;
        material.roughness = GOLD.roughness;
        material.clearcoat = GOLD.clearcoat;
        material.color.set(GOLD.color);
      } else {
        const surface = SURFACE[finish];
        material.metalness = 0;
        material.roughness = surface.roughness;
        material.clearcoat = surface.clearcoat;
        material.clearcoatRoughness = surface.ccRoughness;
        material.color.set(color);
      }
    }
  }, [goldRim, color, goldMats, finish]);

  useEffect(() => {
    if (!root.current) return;
    const handle: ModelHandle = {
      group: root.current,
      meshes: [],
      goldCount: goldMats.length,
    };
    root.current.traverse((object) => {
      if ((object as THREE.Mesh).isMesh) handle.meshes.push(object as THREE.Mesh);
    });
    onReady?.(handle);
  }, [scene, onReady, goldMats]);

  useEffect(() => {
    if (!parallax) return;
    const handlePointer = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", handlePointer, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointer);
  }, [parallax]);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    if (spinner.current && spin) spinner.current.rotation.y += spin * dt;
    if (spinner.current && sway) {
      spinner.current.rotation.y = rotationY + Math.sin(state.clock.elapsedTime * 0.4) * sway;
    }
    if (spinner.current && parallax) {
      const targetY = rotationY + pointer.current.x * parallax;
      const targetX = pointer.current.y * parallax * 0.3;
      spinner.current.rotation.y += (targetY - spinner.current.rotation.y) * Math.min(1, dt * 2);
      spinner.current.rotation.x += (targetX - spinner.current.rotation.x) * Math.min(1, dt * 2);
    }
    if (root.current && float) {
      root.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.008;
    }
  });

  return (
    <group ref={root}>
      <group ref={spinner} rotation={[0, rotationY, 0]}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/single-products-cup.glb");
