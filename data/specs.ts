/**
 * Technical data shown on each product page.
 *
 * Sizes come from the factory's 3D models (Blender scenes, real-world scale)
 * or from the product name where the model is a stand-in. Anything not known
 * yet is left out rather than guessed: add weights, firing data or exact
 * capacities here as the factory supplies them.
 */
export type Spec = {
  /** e.g. "قطر ۳۰ × ارتفاع ۳٫۸ سانتی‌متر" */
  size?: string;
  capacity?: string;
  /** what a set contains */
  contents?: string[];
  serves?: string;
  /** "round" or "flat" form family */
  form?: "گرد" | "تخت";
};

const ROUND_SET = [
  "دیس ۳۰ سانتی",
  "بشقاب غذاخوری ۲۴٫۵ سانتی",
  "پیش‌دستی ۱۹٫۵ سانتی",
  "بشقاب کوچک ۱۸٫۵ سانتی",
  "کاسه بزرگ ۲۳٫۵ سانتی",
  "کاسه کوچک ۱۳٫۵ سانتی",
  "فنجان و نعلبکی ۱۴ سانتی",
  "سس‌خوری",
  "نمکدان ۵٫۵ سانتی",
];

const FLAT_SET = [
  "دیس ۳۰ سانتی",
  "بشقاب غذاخوری ۲۶٫۵ سانتی",
  "بشقاب کوچک ۲۱ سانتی",
  "کاسه بزرگ ۲۳٫۵ سانتی",
  "بشقاب گود ۲۰٫۵ سانتی",
  "کاسه کوچک ۱۲ سانتی",
  "شیرخوری",
  "نمکدان ۶ سانتی",
];

export const SPECS: Record<string, Spec> = {
  "dinner-set-30": { form: "گرد", serves: "۶ نفر", contents: ROUND_SET },
  "dinner-set-flat": { form: "تخت", contents: FLAT_SET },
  "dinner-set-33": { form: "گرد", serves: "۶ نفر", contents: [...ROUND_SET, "فلفل‌دان"] },
  "tea-set-15": { contents: ["۶ فنجان", "۶ نعلبکی", "قوری ۸۰۰ میلی‌لیتر", "پایه‌ی فلزی"], serves: "۶ نفر" },
  "tea-set-17": { contents: ["فنجان و نعلبکی", "قوری", "قندان", "شیرخوری"], serves: "۶ نفر" },
  "tea-set-18": { contents: ["فنجان و نعلبکی", "قوری", "قندان", "شیرخوری", "سس‌خوری"], serves: "۶ نفر" },

  "flat-plate-30": { form: "تخت", size: "قطر ۳۰ × ارتفاع ۳٫۸ سانتی‌متر" },
  "round-plate-26": { form: "گرد", size: "قطر ۲۶ سانتی‌متر" },
  "fruit-plate-19": { form: "گرد", size: "قطر ۱۹٫۵ × ارتفاع ۲٫۴ سانتی‌متر" },

  "salad-bowl-20": { form: "گرد", size: "قطر ۲۰ سانتی‌متر" },
  "soup-bowl-14": { form: "گرد", size: "قطر ۱۴ سانتی‌متر" },
  "khoresh-bowl-20": { form: "گرد", size: "قطر ۲۰ سانتی‌متر" },
  "yogurt-bowl-14": { form: "گرد", size: "قطر ۱۳٫۵ × ارتفاع ۲٫۹ سانتی‌متر" },

  "mug-350": { capacity: "۳۵۰ میلی‌لیتر", size: "ارتفاع ۱۰٫۵ سانتی‌متر" },
  "teapot-800": { capacity: "۸۰۰ میلی‌لیتر", size: "طول با لوله ۲۱٫۶ سانتی‌متر" },
  "cup-saucer": { form: "گرد", capacity: "فنجان ۲۲۰ میلی‌لیتر", size: "نعلبکی قطر ۱۴ سانتی‌متر" },
  "teapot-warmer": { capacity: "قوری ۸۰۰ میلی‌لیتر" },

  creamer: {},
  "sauce-boat": {},
  "salt-shakers": { size: "ارتفاع ۵٫۵ سانتی‌متر" },
};
