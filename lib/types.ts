export type ArtVariant = "plate" | "bowl" | "mug" | "platter" | "set";

export type CardColor = {
  slug: string;
  name_en: string;
  name_fa: string;
  hex: string;
};

export type CardCategory = {
  slug: string;
  name_en: string;
  name_fa: string;
};

export type CardProduct = {
  id: number;
  url: string;
  title_en: string;
  title_fa: string;
  subtitle_en: string | null;
  subtitle_fa: string | null;
  /** toman, in plain white */
  price: number;
  /** toman, in any coloured glaze */
  priceColor?: number;
  /** can be ordered with a gold edge ("lab-tala"): round-form plates, bowls and cups */
  goldEdge?: boolean;
  compareAtPrice: number | null;
  stock: number;
  pieceCount: number | null;
  sku?: string | null;
  featured: boolean;
  bestseller: boolean;
  images: { url: string; alt?: string | null }[];
  colors: CardColor[];
  categories: CardCategory[];
  createdAt?: Date | string;
};

export function artVariantFor(categories: CardCategory[]): ArtVariant {
  const first = categories[0]?.slug;
  switch (first) {
    case "bowls":
      return "bowl";
    case "mugs-jugs":
      return "mug";
    case "serving":
      return "platter";
    case "dinner-sets":
      return "set";
    default:
      return "plate";
  }
}

export function primaryColor(product: {
  colors: CardColor[];
}): CardColor {
  return (
    product.colors[0] ?? {
      slug: "bone",
      name_en: "Bone",
      name_fa: "استخوانی",
      hex: "#EDE4D3",
    }
  );
}
