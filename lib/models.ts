import type { CardProduct } from "@/lib/types";

export type ModelSpec = {
  src: string;
  fit: number;
  camera: [number, number, number];
  /**
   * Composed to be seen from the front (plates standing at the back): on a
   * card it swings to either side instead of turning its back to the camera.
   */
  frontal?: boolean;
  /** the flat service is only made with a matte glaze */
  finish?: "gloss" | "matte";
  /** false glazes the parts the model marks as metal */
  goldRim?: boolean;
};

/**
 * Which studio model stands in for a product. Every model shares the same
 * glaze shader, so any piece can take any of the eight colours.
 */
const MODELS: Record<string, ModelSpec> = {
  "dinner-set-30": {
    src: "/models/set-round.glb",
    fit: 1.9,
    camera: [0, 1.7, 5.6],
    frontal: true,
  },
  "dinner-set-flat": {
    src: "/models/set-flat.glb",
    fit: 1.9,
    camera: [0, 1.7, 5.6],
    frontal: true,
    finish: "matte",
  },
  "round-plate-26": {
    src: "/models/single.glb",
    fit: 1.6,
    camera: [0, 1.4, 4.4],
  },
  "flat-plate-30": {
    src: "/models/single-products-dis-30-studio.glb",
    fit: 1.6,
    camera: [0, 1.4, 4.4],
  },
  "salad-bowl-20": {
    src: "/models/single-products-salad-bowl.glb",
    fit: 1.5,
    camera: [0, 1.25, 4],
  },
  "soup-bowl-14": {
    src: "/models/single-products-bowl.glb",
    fit: 1.5,
    camera: [0, 1.25, 4],
  },
  "mug-350": {
    src: "/models/single-products-mug.glb",
    fit: 1.35,
    camera: [0, 1.15, 3.8],
  },
  "teapot-800": {
    src: "/models/single-products-teapot.glb",
    fit: 1.6,
    camera: [0, 1.2, 4.2],
  },
  "tea-set-15": {
    src: "/models/15pcs.glb",
    fit: 1.7,
    camera: [0, 1.4, 4.6],
  },
  "tea-set-17": {
    src: "/models/17pcs-desk.glb",
    fit: 1.8,
    camera: [0, 1.4, 4.8],
    frontal: true,
  },
  "tea-set-18": {
    src: "/models/18pcs-desk.glb",
    fit: 1.8,
    camera: [0, 1.4, 4.8],
    frontal: true,
  },
  "dinner-set-33": {
    src: "/models/33-pcs-gray.glb",
    fit: 1.9,
    camera: [0, 1.7, 5.6],
    frontal: true,
  },
  "fruit-plate-19": {
    src: "/models/single-products-miveh-19.glb",
    fit: 1.5,
    camera: [0, 1.3, 4.2],
  },
  "khoresh-bowl-20": {
    src: "/models/single-products-khoresh-20.glb",
    fit: 1.6,
    camera: [0, 1.3, 4.4],
  },
  "yogurt-bowl-14": {
    src: "/models/single-products-mast-14.glb",
    fit: 1.5,
    camera: [0, 1.25, 4],
  },
  "cup-saucer": {
    src: "/models/single-products-cup.glb",
    fit: 1.5,
    camera: [0, 1.25, 3.9],
  },
  "teapot-warmer": {
    src: "/models/single-products-warmer-studio.glb",
    fit: 1.6,
    camera: [0, 1.05, 4.2],
  },
  creamer: {
    src: "/models/creamer.glb",
    fit: 1.3,
    camera: [0, 1.15, 3.8],
  },
  "sauce-boat": {
    src: "/models/single-products-sauce-studio.glb",
    fit: 1.4,
    camera: [0, 1.3, 3.8],
  },
  "salt-shakers": {
    src: "/models/single-products-salt-pair-studio.glb",
    fit: 1.45,
    camera: [0, 1.2, 3.8],
  },
};

const BY_CATEGORY: Record<string, ModelSpec> = {
  "dinner-sets": MODELS["dinner-set-30"],
  "plates-round": MODELS["round-plate-26"],
  "plates-flat": MODELS["flat-plate-30"],
  bowls: MODELS["salad-bowl-20"],
  "mugs-jugs": MODELS["mug-350"],
};

export function modelForProduct(
  product: Pick<CardProduct, "url" | "categories">,
): ModelSpec {
  const direct = MODELS[product.url];
  if (direct) return direct;
  const category = product.categories[0]?.slug;
  return (category && BY_CATEGORY[category]) || MODELS["round-plate-26"];
}
