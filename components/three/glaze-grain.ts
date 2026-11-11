"use client";

import * as THREE from "three";

let noiseTexture: THREE.Texture | null = null;

/**
 * A tiny tileable grain, drawn once per session. Real glaze is never perfectly
 * uniform: this breaks up the highlight so the surface reads as fired clay
 * rather than moulded plastic.
 */
export function glazeGrain(): THREE.Texture {
  if (noiseTexture) return noiseTexture;

  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d")!;
  const image = context.createImageData(size, size);

  let seed = 1337;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      // smooth-ish value noise: average a few samples to avoid TV static
      let value = 0;
      for (let i = 0; i < 3; i++) value += random();
      value = value / 3;
      const shade = 0.72 + value * 0.28;
      const index = (y * size + x) * 4;
      const channel = Math.round(shade * 255);
      image.data[index] = channel;
      image.data[index + 1] = channel;
      image.data[index + 2] = channel;
      image.data[index + 3] = 255;
    }
  }

  context.putImageData(image, 0, 0);
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(3, 3);
  texture.anisotropy = 2;
  noiseTexture = texture;
  return texture;
}
