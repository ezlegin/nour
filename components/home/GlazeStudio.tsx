"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Rotate3d } from "lucide-react";
import Stage from "@/components/three/Stage";
import Model, { type ModelHandle } from "@/components/three/Model";
import { GLAZES } from "@/lib/glazes";
import { cn } from "@/lib/utils";

type Piece = {
  key: string;
  name_fa: string;
  meta_fa: string;
  src: string;
  fit: number;
  camera: [number, number, number];
  /** product page, when one exists */
  href?: string;
};

const PIECES: Piece[] = [
  {
    key: "cup",
    name_fa: "فنجان و نعلبکی",
    meta_fa: "۲۲۰ میلی‌لیتر · نعلبکی ۱۴ سانتی",
    src: "/models/single-products-cup.glb",
    fit: 1.5,
    camera: [0, 1.25, 3.9],
    href: "/products/cup-saucer",
  },
  {
    key: "platter",
    name_fa: "دیس ۳۰",
    meta_fa: "قطر ۳۰ سانتی · فرم یکپارچه، بدون لبه",
    src: "/models/single-products-dis-30-studio.glb",
    fit: 1.7,
    camera: [0, 1.6, 4],
    href: "/products/flat-plate-30",
  },
  {
    key: "bowl",
    name_fa: "کاسه پاستا",
    meta_fa: "۱۵٫۵ سانتی · دهانه باز",
    src: "/models/single-products-salad-bowl.glb",
    fit: 1.45,
    camera: [0, 1.2, 3.6],
    href: "/products/salad-bowl-20",
  },
  {
    key: "mug",
    name_fa: "ماگ صبحانه",
    meta_fa: "۳۵۰ میلی‌لیتر · دسته‌کامل",
    src: "/models/single-products-mug.glb",
    fit: 1.3,
    camera: [0, 1.1, 3.4],
    href: "/products/mug-350",
  },
  {
    key: "teapot",
    name_fa: "قوری ۸۰۰",
    meta_fa: "۸۰۰ میلی‌لیتر · دهانه‌ی باریک",
    src: "/models/single-products-teapot.glb",
    fit: 1.7,
    camera: [0, 1.15, 4.2],
    href: "/products/teapot-800",
  },
  {
    key: "salt",
    name_fa: "نمکدان‌ها",
    meta_fa: "نمکدان استوانه‌ای و نمکدان گرد · در کنار هم",
    src: "/models/single-products-salt-pair-studio.glb",
    fit: 1.45,
    camera: [0, 1.2, 3.8],
  },
  {
    key: "sauce",
    name_fa: "سس‌خوری",
    meta_fa: "دسته‌دار · با لبه‌ی ریزش",
    src: "/models/single-products-sauce-studio.glb",
    fit: 1.4,
    camera: [0, 1.3, 3.8],
  },
  {
    key: "warmer",
    name_fa: "وارمر و قوری",
    meta_fa: "قوری روی پایه‌ی وارمر مشبک",
    src: "/models/single-products-warmer-studio.glb",
    fit: 1.6,
    camera: [0, 1.05, 4.2],
  },
];

const fa = (n: number) => n.toLocaleString("fa-IR", { minimumIntegerDigits: 2 });

/** Ink on light glazes, paper on dark ones. */
function readsDark(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const luma = (0.2126 * (n >> 16) + 0.7152 * ((n >> 8) & 255) + 0.0722 * (n & 255)) / 255;
  return luma > 0.52;
}

export default function GlazeStudio() {
  const [mounted, setMounted] = useState(false);
  const [piece, setPiece] = useState(PIECES[0]);
  const [index, setIndex] = useState(0);
  const [finish, setFinish] = useState<"gloss" | "matte">("gloss");
  const [hasGold, setHasGold] = useState(false);
  const onReady = useCallback((handle: ModelHandle) => setHasGold(handle.goldCount > 0), []);
  const glaze = GLAZES[index];

  useEffect(() => setMounted(true), []);

  return (
    <section id="studio" className="relative overflow-hidden bg-brand-cream py-20 lg:py-28">
      <div className="shell relative">
        {/* heading */}
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <div>
            <p className="eyebrow">
              <span>{fa(1)}</span>
              استودیوی رنگ
            </p>
            <h2 className="mt-5 max-w-[36rem] text-[2.2rem] font-black leading-[1.22] sm:text-[2.8rem] lg:text-[3.2rem]">
              لعاب را عوض کنید،
              <br />
              <span className="transition-colors duration-700" style={{ color: readsDark(glaze.hex) ? "var(--clay)" : glaze.hex }}>
                سفره
              </span>{" "}
              عوض می‌شود.
            </h2>
          </div>
          <p className="max-w-[25rem] text-[0.92rem] leading-8 text-brand-ink/60">
            یک قطعه انتخاب کنید و از روی کارت‌های رنگ، لعابش را عوض کنید. همه‌چیز
            همین‌جا سه‌بعدی است: بچرخانید و سطح را براق یا مات ببینید.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.3fr_0.7fr] lg:items-stretch">
          {/* -------------------------------------------------------- */}
          {/*  the stage                                                */}
          {/* -------------------------------------------------------- */}
          <div className="relative flex flex-col overflow-hidden rounded-[2rem] border border-brand-ink/8 bg-[radial-gradient(120%_90%_at_50%_0%,#ffffff_0%,#f1f1ef_60%,#e6e6e3_100%)] lg:h-[min(44rem,calc(100svh-8rem))] lg:min-h-[34rem]">
            {/* a wash of the chosen glaze, rising from the floor */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-[0.14] transition-colors duration-1000 [mask-image:linear-gradient(to_top,black,transparent)]"
              style={{ backgroundColor: glaze.hex }}
              aria-hidden="true"
            />

            {/* piece tabs */}
            <div className="relative z-10 flex items-center gap-3 p-4 sm:p-5">
              <div
                role="tablist"
                aria-label="انتخاب قطعه"
                className="flex min-w-0 flex-1 gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {PIECES.map((item) => {
                  const active = item.key === piece.key;
                  return (
                    <button
                      key={item.key}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setPiece(item)}
                      className={cn(
                        "shrink-0 rounded-full px-4 py-2.5 text-[0.82rem] font-medium transition-colors duration-300",
                        active
                          ? "bg-brand-ink text-brand-paper"
                          : "text-brand-ink/55 hover:bg-brand-ink/5 hover:text-brand-ink",
                      )}
                    >
                      {item.name_fa}
                    </button>
                  );
                })}
              </div>

              <div className="hidden shrink-0 rounded-full border border-brand-ink/10 bg-white/60 p-1 text-[0.78rem] sm:flex">
                {(["gloss", "matte"] as const).map((value) => (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={finish === value}
                    onClick={() => setFinish(value)}
                    className={cn(
                      "rounded-full px-4 py-1.5 font-medium transition-colors duration-300",
                      finish === value
                        ? "bg-brand-ink text-brand-paper"
                        : "text-brand-ink/55 hover:text-brand-ink",
                    )}
                  >
                    {value === "gloss" ? "براق" : "مات"}
                  </button>
                ))}
              </div>
            </div>

            {/* canvas */}
            <div className="relative aspect-square w-full lg:aspect-auto lg:min-h-0 lg:flex-1">
              {/* big index behind the piece */}
              <span
                key={glaze.slug}
                aria-hidden="true"
                className="glaze-word pointer-events-none absolute left-6 top-0 select-none text-[clamp(6rem,13vw,11rem)] font-black leading-none text-brand-ink/[0.05]"
              >
                {fa(index + 1)}
              </span>

              {mounted ? (
                <Stage
                  key={piece.src}
                  className="fade-in-soft relative h-full w-full cursor-grab active:cursor-grabbing"
                  camera={piece.camera}
                  fov={30}
                  orbit
                  zoom={false}
                  ariaLabel={`${piece.name_fa} در لعاب ${glaze.name_fa}`}
                >
                  <Model
                    src={piece.src}
                    color={glaze.hex}
                    goldRim
                    finish={finish}
                    onReady={onReady}
                    fit={piece.fit}
                    quality="hero"
                    castShadow
                  />
                </Stage>
              ) : (
                <div className="grid h-full place-items-center">
                  <div className="h-48 w-48 animate-pulse rounded-full bg-brand-ink/5" />
                </div>
              )}
            </div>

            {/* caption bar */}
            <div className="relative z-10 flex flex-wrap items-end justify-between gap-4 p-5 sm:p-6">
              <div>
                <p className="flex items-center gap-2.5 text-[1.15rem] font-bold">
                  {piece.name_fa}
                  {hasGold && (
                    <span className="rounded-full border border-brand-gold/60 px-2.5 py-0.5 text-[0.7rem] font-medium text-brand-gold">
                      لبه طلا
                    </span>
                  )}
                </p>
                <p className="mt-1.5 text-[0.8rem] text-brand-ink/55">{piece.meta_fa}</p>
              </div>

              <div className="flex items-center gap-4">
                <p className="hidden items-center gap-2 text-[0.76rem] text-brand-ink/45 md:flex">
                  <Rotate3d size={15} className="text-brand-clay" />
                  بکشید و بچرخانید
                </p>
                <Link
                  href={piece.href ?? "/#products"}
                  className="group inline-flex h-11 items-center gap-2.5 rounded-full bg-brand-ink ps-5 pe-1.5 text-[0.82rem] font-medium text-brand-paper transition-colors duration-300 hover:bg-brand-clay"
                >
                  {piece.href ? "مشاهده محصول" : "همه محصولات"}
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-paper/12 transition-transform duration-300 group-hover:-translate-x-0.5">
                    <ArrowLeft size={14} />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/*  the glaze deck: eight colour cards, like a fan of chips   */}
          {/* -------------------------------------------------------- */}
          <div
            role="radiogroup"
            aria-label="انتخاب رنگ لعاب"
            className="flex h-[34rem] flex-col gap-1.5 lg:h-auto"
          >
            {GLAZES.map((item, i) => {
              const active = i === index;
              const dark = readsDark(item.hex);
              return (
                <button
                  key={item.slug}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setIndex(i)}
                  style={{ backgroundColor: item.hex }}
                  className={cn(
                    "group relative min-h-0 overflow-hidden rounded-2xl px-5 text-start shadow-[inset_0_1px_0_rgba(255,255,255,0.28),inset_0_-10px_20px_-12px_rgba(0,0,0,0.18)] transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ink",
                    dark ? "text-brand-ink" : "text-white",
                    active ? "grow-[4.2]" : "grow hover:grow-[1.5]",
                  )}
                >
                  {/* always-visible row */}
                  <span className="absolute inset-x-5 top-0 flex h-11 items-center justify-between gap-3">
                    <span className="flex items-baseline gap-3">
                      <span className="text-[0.72rem] tabular-nums opacity-60">{fa(i + 1)}</span>
                      <span
                        className={cn(
                          "font-bold transition-[font-size] duration-500",
                          active ? "text-[1.05rem]" : "text-[0.88rem]",
                        )}
                      >
                        {item.name_fa}
                      </span>
                    </span>
                    <span dir="ltr" className="font-display text-[1.1rem] italic opacity-70">
                      {item.name_en}
                    </span>
                  </span>

                  {/* revealed when chosen */}
                  <span
                    className={cn(
                      "absolute inset-x-5 bottom-4 flex items-end justify-between gap-4 transition-opacity duration-500",
                      active ? "opacity-100 delay-200" : "opacity-0",
                    )}
                    aria-hidden={!active}
                  >
                    <span className="max-w-[15rem] text-[0.88rem] leading-7 opacity-85">
                      {item.note_fa}
                    </span>
                    <span dir="ltr" className="text-[0.7rem] tabular-nums tracking-wider opacity-55">
                      {item.hex.toUpperCase()}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* finish toggle for small screens */}
        <div className="mt-5 flex justify-center sm:hidden">
          <div className="flex rounded-full border border-brand-ink/10 bg-white/60 p-1 text-[0.8rem]">
            {(["gloss", "matte"] as const).map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={finish === value}
                onClick={() => setFinish(value)}
                className={cn(
                  "rounded-full px-5 py-2 font-medium transition-colors",
                  finish === value ? "bg-brand-ink text-brand-paper" : "text-brand-ink/55",
                )}
              >
                {value === "gloss" ? "براق" : "مات"}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
