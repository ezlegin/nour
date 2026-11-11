"use client";

import { useMemo } from "react";
import { Environment, useEnvironment } from "@react-three/drei";
import * as THREE from "three";
import { glazeGrain } from "./glaze-grain";

/**
 * Mirrors the lighting of the Blender source scene (12PCS Tea/Single.blend):
 *   - World: interior.exr (CC0, Poly Haven "hotel_room"), no
 *     rotation. Blender and three.js unwrap equirect maps half a turn apart,
 *     hence the PI yaw below.
 *   - A ring of nine dim area lights around the piece. They add roughly a
 *     fifth more light and no distinct reflections, so they are folded into
 *     the single directional light, which also casts the grounding shadow.
 *   - Blender views it through Filmic; the web uses Neutral tone mapping
 *     instead so glaze hues are not shifted (set in Stage).
 */
const WORLD = "/hdri/interior.exr";

/**
 * The hotel-room HDRI has mixed lighting: tungsten lamps (yellow) on one side
 * and a daylight window (blue) on the other. A global white balance cannot
 * fix that — the lamps still paint yellow highlights and the window blue ones,
 * and both tint the glaze. So the image is graded once at load:
 *   1. white-balanced (its sphere average is R 1.06 / G 0.96 / B 0.86),
 *   2. desaturated to SATURATION, so the light is near-white while the
 *      shapes of the reflections (window, lamps, room) stay exactly the same,
 *   3. clamped at PEAK so the hottest pixels do not alias into hard glints.
 */
const SATURATION = 0.08;
const PEAK = 48;
const GAIN = [0.959 / 1.057, 1, 0.959 / 0.864];

function useGradedWorld() {
  const texture = useEnvironment({ files: WORLD });
  return useMemo(() => {
    if (texture.userData.graded) return texture;
    const data = (texture.image as { data: Uint16Array | Float32Array }).data;
    const half = data instanceof Uint16Array;
    const read = (i: number) => (half ? THREE.DataUtils.fromHalfFloat(data[i]) : data[i]);
    const write = (i: number, v: number) => {
      data[i] = half ? THREE.DataUtils.toHalfFloat(v) : v;
    };
    for (let i = 0; i < data.length; i += 4) {
      const r = read(i) * GAIN[0];
      const g = read(i + 1) * GAIN[1];
      const b = read(i + 2) * GAIN[2];
      const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      write(i, Math.min(luma + (r - luma) * SATURATION, PEAK));
      write(i + 1, Math.min(luma + (g - luma) * SATURATION, PEAK));
      write(i + 2, Math.min(luma + (b - luma) * SATURATION, PEAK));
    }
    texture.userData.graded = true;
    texture.needsUpdate = true;
    return texture;
  }, [texture]);
}

export default function Studio({ intensity = 1 }: { intensity?: number }) {
  const world = useGradedWorld();

  return (
    <>
      <Environment
        map={world}
        background={false}
        environmentIntensity={1.15 * intensity}
        environmentRotation={[0, Math.PI, 0]}
      />

      {/* key: high and to the right, gives form and the grounding shadow */}
      <directionalLight
        position={[2.2, 5.2, 3.6]}
        intensity={0.95 * intensity}
        color="#ffffff"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0004}
        shadow-normalBias={0.015}
        shadow-radius={7}
        shadow-camera-near={0.5}
        shadow-camera-far={20}
        shadow-camera-left={-2.4}
        shadow-camera-right={2.4}
        shadow-camera-top={2.4}
        shadow-camera-bottom={-2.4}
      />
    </>
  );
}

/** Single source of truth for the two finishes (also used by Model). */
export const SURFACE = {
  gloss: { roughness: 0.05, clearcoat: 0, ccRoughness: 0.03, env: 1 },
  matte: { roughness: 0.46, clearcoat: 0.04, ccRoughness: 0.5, env: 0.85 },
} as const;

export const GOLD = { color: "#bf9a52", roughness: 0.34, clearcoat: 0, env: 0.9 } as const;

/**
 * Glazed porcelain, as authored in Blender: one Principled layer, no coat,
 * roughness 0.03, IOR 1.45 with Specular IOR Level 0.6 (about 4% reflectance
 * face-on). Mirror-smooth but only weakly reflective, so
 * the body colour dominates and the room shows as a faint, crisp reflection.
 */
export function porcelainMaterial(color: string, gloss: boolean) {
  const body = new THREE.Color(color);

  const material = new THREE.MeshPhysicalMaterial({
    color: body,
    roughness: gloss ? SURFACE.gloss.roughness : SURFACE.matte.roughness,
    metalness: 0,
    clearcoat: gloss ? SURFACE.gloss.clearcoat : SURFACE.matte.clearcoat,
    clearcoatRoughness: gloss ? SURFACE.gloss.ccRoughness : SURFACE.matte.ccRoughness,
    // The Blender glaze is a bare Principled BSDF: no textures, no bump.
    // Only the matte finish (not in the source file) keeps a faint grain.
    roughnessMap: gloss ? null : glazeGrain(),
    bumpMap: gloss ? null : glazeGrain(),
    bumpScale: 0.00015,
    polygonOffset: true,
    polygonOffsetFactor: 1,
    polygonOffsetUnits: 1,
    // IOR 1.45 with Specular IOR Level 0.6, which Blender's own glTF export
    // writes as a specular colour factor of 1.2.
    ior: 1.45,
    specularIntensity: 1,
    specularColor: new THREE.Color(1, 1, 1),
    sheen: 0,
    envMapIntensity: gloss ? SURFACE.gloss.env : SURFACE.matte.env,
    side: THREE.FrontSide,
  });

  addGlazeShader(material, gloss);
  return material;
}

/**
 * Real glaze is never optically perfect: it settles with a faint waviness
 * ("orange peel") and its sheen varies slightly from spot to spot. The models
 * carry no UVs, so this is done procedurally in the shader from the mesh's own
 * coordinates (metres), which keeps the scale true on every piece.
 *   wave  — how far the surface normal wobbles (radians, roughly)
 *   sheen — how much the roughness varies around its base value
 */
export const GLAZE_NOISE = { wave: 0.015, waveSize: 0.0035, sheen: 0.62, sheenSize: 0.0009 };

const NOISE_GLSL = /* glsl */ `
  varying vec3 vGlazePos;
  uniform mat3 normalMatrix;
  float glazeHash(vec3 p) {
    p = fract(p * 0.3183099 + 0.1);
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }
  float glazeNoise(vec3 x) {
    vec3 i = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(glazeHash(i), glazeHash(i + vec3(1, 0, 0)), f.x),
          mix(glazeHash(i + vec3(0, 1, 0)), glazeHash(i + vec3(1, 1, 0)), f.x), f.y),
      mix(mix(glazeHash(i + vec3(0, 0, 1)), glazeHash(i + vec3(1, 0, 1)), f.x),
          mix(glazeHash(i + vec3(0, 1, 1)), glazeHash(i + vec3(1, 1, 1)), f.x), f.y),
      f.z);
  }
`;

/**
 * "Lab-tala": a band of gold fired onto the lip of a round piece. In Blender it
 * is a painted mask, which the exported models do not carry, so it is drawn
 * here instead. Model gives every vertex its depth below the top of its own
 * piece (aLip, metres); the band is whatever lies within GOLD_EDGE.width of it.
 */
export const GOLD_EDGE = { width: 0.00018, color: "#ffd166", roughness: 0.08 };

/** Depth given to pieces that take no gold edge: far below any band. */
export const NO_LIP = 1;

function addGlazeShader(material: THREE.MeshPhysicalMaterial, noise: boolean) {
  const { wave, waveSize, sheen, sheenSize } = GLAZE_NOISE;
  const f = (n: number) => n.toFixed(5);
  const edge = { value: 0 };
  const edgeColor = { value: new THREE.Color(GOLD_EDGE.color) };
  material.userData.goldEdge = edge;

  material.onBeforeCompile = (shader) => {
    shader.uniforms.uGoldEdge = edge;
    shader.uniforms.uGoldEdgeColor = edgeColor;

    shader.vertexShader = shader.vertexShader
      .replace(
        "#include <common>",
        "#include <common>\nattribute float aLip;\nvarying float vLip;\nvarying vec3 vGlazePos;",
      )
      .replace(
        "#include <begin_vertex>",
        "#include <begin_vertex>\nvGlazePos = position;\nvLip = aLip;",
      );

    shader.fragmentShader = shader.fragmentShader
      .replace(
        "#include <common>",
        `#include <common>
        varying float vLip;
        uniform float uGoldEdge;
        uniform vec3 uGoldEdgeColor;
        float goldEdge() {
          float soft = fwidth(vLip) + 0.00004;
          return uGoldEdge * (1.0 - smoothstep(${f(GOLD_EDGE.width)} - soft, ${f(GOLD_EDGE.width)} + soft, vLip));
        }
${NOISE_GLSL}`,
      )
      .replace(
        "#include <color_fragment>",
        `#include <color_fragment>
        diffuseColor.rgb = mix(diffuseColor.rgb, uGoldEdgeColor, goldEdge());`,
      )
      .replace(
        "#include <roughnessmap_fragment>",
        `#include <roughnessmap_fragment>
        ${
          noise
            ? `{
          float speck = glazeNoise(vGlazePos / ${f(sheenSize)});
          roughnessFactor = clamp(roughnessFactor * (1.0 + (speck - 0.5) * 2.0 * ${f(sheen)}), 0.0, 1.0);
        }`
            : ""
        }
        roughnessFactor = mix(roughnessFactor, ${f(GOLD_EDGE.roughness)}, goldEdge());`,
      )
      .replace(
        "#include <metalnessmap_fragment>",
        `#include <metalnessmap_fragment>
        metalnessFactor = mix(metalnessFactor, 1.0, goldEdge());`,
      );

    if (noise) {
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <normal_fragment_maps>",
        `#include <normal_fragment_maps>
        {
          vec3 q = vGlazePos / ${f(waveSize)};
          vec3 wobble = vec3(glazeNoise(q), glazeNoise(q + 31.7), glazeNoise(q + 74.3)) - 0.5;
          normal = normalize(normal + normalMatrix * wobble * ${f(wave * 2)});
        }`,
      );
    }
  };
  material.customProgramCacheKey = () =>
    `glaze-${noise}-${wave}-${waveSize}-${sheen}-${sheenSize}-${GOLD_EDGE.width}`;
}

export function goldMaterial() {
  return new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(GOLD.color),
    metalness: 1,
    roughness: GOLD.roughness,
    clearcoat: GOLD.clearcoat,
    envMapIntensity: GOLD.env,
    side: THREE.FrontSide,
  });
}
