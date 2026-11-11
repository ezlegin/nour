export type Glaze = {
  slug: string;
  name_fa: string;
  name_en: string;
  hex: string;
  /** Short poetic line used in the colour story. */
  note_fa: string;
};

/**
 * The real glaze palette, lifted from the studio scenes' own colour guides.
 * Hex values are sRGB, taken from the Principled BSDF base colours in Blender.
 */
export const GLAZES: Glaze[] = [
  {
    slug: "blush",
    name_fa: "صورتی کهنه",
    name_en: "Blush",
    hex: "#D88080",
    note_fa: "رنگِ گل محمدی خشک‌شده در آفتاب.",
  },
  {
    slug: "ash",
    name_fa: "خاکستری دودی",
    name_en: "Ash",
    hex: "#5B5B5E",
    note_fa: "سنگِ کوه در غروبِ ابری.",
  },
  {
    slug: "bone",
    name_fa: "استخوانی",
    name_en: "Bone",
    hex: "#D3D3D3",
    note_fa: "سفیدیِ آرامِ صدف، نه سفیدِ خالی.",
  },
  {
    slug: "sage",
    name_fa: "مریم‌گلی",
    name_en: "Sage",
    hex: "#85BEA9",
    note_fa: "برگِ تازه بعد از باران.",
  },
  {
    slug: "sand",
    name_fa: "شنی",
    name_en: "Sand",
    hex: "#DCC9A3",
    note_fa: "خاکِ باغچه در تیرماه.",
  },
  {
    slug: "azure",
    name_fa: "لاجوردی",
    name_en: "Azure",
    hex: "#7180A4",
    note_fa: "آبیِ محوِ کاشیِ قدیمی.",
  },
  {
    slug: "clay",
    name_fa: "گلبهی",
    name_en: "Clay",
    hex: "#DF8069",
    note_fa: "گلِ ساده پیش از لعاب.",
  },
  {
    slug: "jet",
    name_fa: "ذغالی",
    name_en: "Jet",
    hex: "#2A3136",
    note_fa: "شبِ کویر، بی‌ماه.",
  },
];

export const GOLD = {
  slug: "gold",
  name_fa: "لبه طلا",
  hex: "#C9A227",
} as const;

export function glazeBySlug(slug: string): Glaze {
  return GLAZES.find((glaze) => glaze.slug === slug) ?? GLAZES[0];
}

/** Materials that must never take a glaze colour (metal trims, liquids, wood). */
export function isMetalMaterial(name: string): boolean {
  return /gold|brass|metal|spoon|silver|chrome|steel|rim/i.test(name);
}
