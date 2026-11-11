import type { CardCategory, CardProduct } from "@/lib/types";
import { GLAZES } from "@/lib/glazes";

/**
 * Static catalogue. The site ships as a fully static build: everything the
 * storefront shows lives in this file — no database, no admin.
 */
const palette = GLAZES.map((glaze) => ({
  slug: glaze.slug,
  name_en: glaze.name_en,
  name_fa: glaze.name_fa,
  hex: glaze.hex,
}));

const cats = {
  round: { slug: "plates-round", name_en: "Round plates", name_fa: "بشقاب گرد" },
  flat: { slug: "plates-flat", name_en: "Flat plates", name_fa: "بشقاب تخت" },
  bowls: { slug: "bowls", name_en: "Bowls", name_fa: "کاسه" },
  mugs: { slug: "mugs-jugs", name_en: "Mugs & pots", name_fa: "ماگ و قوری" },
  serving: { slug: "serving", name_en: "Serving", name_fa: "سرو و چاشنی" },
  sets: { slug: "dinner-sets", name_en: "Sets", name_fa: "سرویس" },
} satisfies Record<string, CardCategory>;

/**
 * [url, title, subtitle, categories, white price, coloured price, pieces, home]
 *
 * PLACEHOLDER PRICES, in toman — not the real price list of the factory.
 * A coloured glaze costs more than plain white.
 * pieces: null = a service whose piece count is not known yet.
 */
type Row = [
  url: string,
  title_fa: string,
  subtitle_fa: string,
  categories: CardCategory[],
  white: number,
  colour: number,
  pieces?: number | null,
  featured?: boolean,
];

const rows: Row[] = [
  // services
  ["dinner-set-30", "سرویس غذاخوری ۳۰ پارچه", "یک سفره کامل برای شش نفر؛ بشقاب، کاسه، دیس، فنجان و نمکدان در فرم گرد.", [cats.sets, cats.round, cats.bowls], 7_800_000, 8_900_000, 30, true],
  ["dinner-set-flat", "سرویس غذاخوری فرم تخت", "لبه‌ی پهن و کفِ صاف، با لعاب مات؛ دیس، بشقاب، کاسه، شیرخوری و نمکدان.", [cats.sets, cats.flat], 8_600_000, 9_800_000, null, true],
  ["dinner-set-33", "سرویس غذاخوری ۳۳ پارچه", "سرویس غذاخوری کامل به‌همراه سس‌خوری، نمکدان و فلفل‌دان.", [cats.sets, cats.round], 8_400_000, 9_600_000, 33],
  ["tea-set-15", "سرویس چای ۱۵ پارچه", "شش فنجان، شش نعلبکی و قوری، روی پایه‌ی فلزی.", [cats.sets, cats.mugs], 2_150_000, 2_480_000, 15],
  ["tea-set-17", "سرویس چای ۱۷ پارچه", "فنجان و نعلبکی، قوری، قندان و شیرخوری.", [cats.sets, cats.mugs], 2_450_000, 2_800_000, 17],
  ["tea-set-18", "سرویس چای ۱۸ پارچه", "سرویس چای کامل با قوری، قندان، شیرخوری و سس‌خوری.", [cats.sets, cats.mugs], 2_600_000, 2_980_000, 18],

  // plates
  ["flat-plate-30", "بشقاب تخت ۳۰ سانتی", "بشقاب تخت و پهن؛ برای سرو غذاهای اصلی و دیس‌های میز.", [cats.flat], 420_000, 480_000, 1, true],
  ["round-plate-26", "بشقاب گرد ۲۶ سانتی", "بشقاب گرد روزمره با لبه‌ی بلند و فرمی که سال‌ها می‌ماند.", [cats.round], 285_000, 330_000],
  ["fruit-plate-19", "بشقاب میوه‌خوری ۱۹ سانتی", "پیش‌دستی ۱۹ سانتی برای میوه، دسر و پیش‌غذا.", [cats.round], 195_000, 225_000],

  // bowls
  ["salad-bowl-20", "کاسه سالاد ۲۰ سانتی", "کاسه‌ی عمیق برای سالاد، میوه و سروهای خانوادگی.", [cats.bowls], 340_000, 390_000, 1, true],
  ["soup-bowl-14", "کاسه سوپ ۱۴ سانتی", "کاسه‌ی سوپ با دهانه‌ی باز و لبه‌ی نازک.", [cats.bowls], 170_000, 195_000, 1, true],
  ["khoresh-bowl-20", "خورش‌خوری ۲۰ سانتی", "بشقاب گود ۲۰ سانتی برای خورش و غذاهای آب‌دار.", [cats.bowls], 260_000, 300_000],
  ["yogurt-bowl-14", "ماست‌خوری ۱۴ سانتی", "کاسه‌ی کوچک و کم‌عمق برای ماست، ترشی و مخلفات.", [cats.bowls], 120_000, 138_000],

  // mugs & pots
  ["mug-350", "ماگ ۳۵۰ میلی‌لیتر", "ماگ ۳۵۰ میلی‌لیتری با دسته‌ی کامل و دیواره‌ی ضخیم.", [cats.mugs], 220_000, 255_000, 1, true],
  ["teapot-800", "قوری ۸۰۰ میلی‌لیتر", "قوری ۸۰۰ میلی‌لیتری با دهانه‌ی باریک و درپوش دقیق.", [cats.mugs], 690_000, 790_000, 1, true],
  ["cup-saucer", "فنجان و نعلبکی", "فنجان ۲۲۰ میلی‌لیتری با نعلبکی ۱۴ سانتی.", [cats.mugs], 240_000, 275_000, 1, true],
  ["teapot-warmer", "قوری و وارمر", "قوری ۸۰۰ میلی‌لیتری روی پایه‌ی وارمر مشبک.", [cats.mugs, cats.serving], 980_000, 1_120_000],

  // serving
  ["creamer", "شیرخوری", "شیرخوری گرد با لبه‌ی ریزش، هم‌فرمِ سرویس چای.", [cats.serving], 210_000, 240_000],
  ["sauce-boat", "سس‌خوری", "سس‌خوری دسته‌دار با لبه‌ی ریزش.", [cats.serving], 230_000, 265_000],
  ["salt-shakers", "نمکدان", "نمکدان استوانه‌ای و نمکدان گرد؛ قیمت برای هر عدد.", [cats.serving], 95_000, 110_000],
];

/**
 * "Lab-tala": a gold band on the lip. Only the round form takes it, and the
 * mug does not. PLACEHOLDER surcharge, in toman, on top of either price.
 */
export const GOLD_EDGE_SURCHARGE = 200_000;

const GOLD_EDGE = new Set([
  "dinner-set-30",
  "dinner-set-33",
  "round-plate-26",
  "fruit-plate-19",
  "salad-bowl-20",
  "soup-bowl-14",
  "khoresh-bowl-20",
  "yogurt-bowl-14",
  "cup-saucer",
]);

export const catalogue: CardProduct[] = rows.map(
  ([url, title_fa, subtitle_fa, categories, white, colour, pieces = 1, featured = false], index) => ({
    id: -(index + 1),
    url,
    title_en: url,
    title_fa,
    subtitle_en: null,
    subtitle_fa,
    price: white,
    priceColor: colour,
    goldEdge: GOLD_EDGE.has(url),
    compareAtPrice: null,
    stock: 20,
    pieceCount: pieces,
    featured,
    bestseller: false,
    images: [],
    colors: palette,
    categories,
  }),
);

/** The eight pieces shown on the home page. */
export const showcaseProducts = catalogue.filter((product) => product.featured);

export const showcaseColors = palette;
