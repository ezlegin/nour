"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Check, Mail, Phone, RotateCcw } from "lucide-react";
import Stage from "@/components/three/Stage";
import Model, { type ModelHandle } from "@/components/three/Model";
import { GLAZES } from "@/lib/glazes";
import type { ModelSpec } from "@/lib/models";
import type { CardProduct } from "@/lib/types";
import { cn } from "@/lib/utils";

type Props = {
  product: CardProduct & { description_fa?: string | null };
  model: ModelSpec;
};

export default function ProductDetail({ product, model }: Props) {
  const [mounted, setMounted] = useState(false);
  const [glaze, setGlaze] = useState(GLAZES[0]);
  const [finish, setFinish] = useState<"gloss" | "matte">(model.finish ?? "gloss");
  const [hasGold, setHasGold] = useState(false);

  useEffect(() => setMounted(true), []);
  const onReady = useCallback((handle: ModelHandle) => setHasGold(handle.goldCount > 0), []);

  return (
    <div className="shell py-8 lg:py-12">
      <nav className="flex items-center gap-2 text-[0.66rem] text-brand-ink/40">
        <Link href="/" className="hover:text-brand-ink">
          خانه
        </Link>
        <span>/</span>
        <Link href="/#products" className="hover:text-brand-ink">
          محصولات
        </Link>
        <span>/</span>
        <span className="text-brand-ink/70">{product.title_fa}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* viewer */}
        <div>
          <div
            className="relative overflow-hidden rounded-sm border border-brand-ink/10"
            style={{
              background: `radial-gradient(80% 80% at 50% 30%, ${glaze.hex}1c 0%, #f8f3e9 62%)`,
            }}
          >
            <div className="aspect-square w-full">
              {mounted ? (
                <Stage
                  className="h-full w-full cursor-grab active:cursor-grabbing"
                  camera={model.camera}
                  fov={30}
                  orbit
                  zoom
                  ariaLabel={`${product.title_fa} در لعاب ${glaze.name_fa}`}
                >
                  <Model
                    src={model.src}
                    color={glaze.hex}
                    finish={finish}
                    goldRim={model.goldRim ?? true}
                    fit={model.fit}
                    onReady={onReady}
                    castShadow
                  />
                </Stage>
              ) : null}
            </div>

            <div className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-brand-ink/10 bg-brand-cream/80 px-4 py-1.5 text-[0.58rem] text-brand-ink/45 backdrop-blur">
              <RotateCcw size={11} />
              بکشید تا بچرخد
            </div>

            {hasGold && (
              <div className="absolute right-4 top-4 rounded-full border border-brand-gold/40 bg-brand-cream/80 px-3 py-1 text-[0.56rem] tracking-wide text-brand-gold backdrop-blur">
                لبه طلا
              </div>
            )}
          </div>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="grid grid-cols-8 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-2.5">
              {GLAZES.map((item) => {
                const active = item.slug === glaze.slug;
                return (
                  <button
                    key={item.slug}
                    type="button"
                    onClick={() => setGlaze(item)}
                    aria-label={item.name_fa}
                    aria-pressed={active}
                    className={cn(
                      "relative h-8 w-8 rounded-full ring-1 ring-inset ring-brand-ink/15 transition-transform hover:scale-105 sm:h-9 sm:w-9",
                      active && "scale-105",
                    )}
                    style={{ backgroundColor: item.hex }}
                  >
                    {active && (
                      <Check
                        size={13}
                        className="absolute inset-0 m-auto text-white mix-blend-difference"
                      />
                    )}
                  </button>
                );
              })}
            </div>
            <div className="flex rounded-full border border-brand-ink/15 p-0.5 text-[0.62rem]">
              {(["gloss", "matte"] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setFinish(value)}
                  className={cn(
                    "rounded-full px-4 py-1.5 transition",
                    finish === value ? "bg-brand-ink text-brand-paper" : "text-brand-ink/50",
                  )}
                >
                  {value === "gloss" ? "براق" : "مات"}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-4 text-[0.7rem] text-brand-ink/45">
            رنگ انتخابی: <span className="text-brand-ink">{glaze.name_fa}</span>
            <span className="mx-2 text-brand-ink/20">·</span>
            {glaze.note_fa}
          </p>
        </div>

        {/* details */}
        <div className="lg:pt-2">
          <div className="flex flex-wrap gap-2">
            {product.categories.map((category) => (
              <Link
                key={category.slug}
                href={`/products?category=${category.slug}`}
                className="rounded-full border border-brand-ink/15 px-3 py-1 text-[0.62rem] text-brand-ink/55 transition hover:border-brand-ink hover:text-brand-ink"
              >
                {category.name_fa}
              </Link>
            ))}
          </div>

          <h1 className="mt-5 text-[2.1rem] font-black leading-[1.25] sm:text-[2.6rem]">
            {product.title_fa}
          </h1>
          {product.subtitle_fa && (
            <p className="mt-3 text-[0.9rem] leading-7 text-brand-ink/55">
              {product.subtitle_fa}
            </p>
          )}

          <p className="mt-6 border-t border-brand-ink/10 pt-6 text-[0.88rem] leading-8 text-brand-ink/60">
            {product.description_fa ??
              "قطعه‌ای از خط تولید پرسلین نور؛ بدنه‌ی مقاوم، لعاب بدون سرب و لبه‌ای که پس از شست‌وشوی روزانه هم می‌ماند. رنگ‌ها در هشت لعاب استاندارد تولید می‌شوند."}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="tel:02435752007"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand-ink px-7 text-[0.78rem] text-brand-paper transition hover:bg-brand-clay"
              dir="ltr"
            >
              <Phone size={14} />
              024-35752007
            </a>
            <a
              href="mailto:info@chininour.com"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-brand-ink/20 px-7 text-[0.76rem] text-brand-ink/70 transition hover:border-brand-ink hover:text-brand-ink"
              dir="ltr"
            >
              <Mail size={14} />
              info@chininour.com
            </a>
          </div>
          <p className="mt-3 text-[0.66rem] text-brand-ink/40">
            برای سفارش عمده و استعلام موجودی با کارخانه تماس بگیرید.
          </p>

          <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-brand-ink/10 bg-brand-ink/10 text-[0.7rem]">
            {[
              ["تعداد پارچه", product.pieceCount ? `${product.pieceCount}` : "—"],
              ["رنگ‌های موجود", "۸ لعاب"],
              ["جنس", "پرسلین"],
              ["فرم", product.categories[0]?.name_fa ?? "—"],
            ].map(([label, value]) => (
              <div key={label} className="bg-brand-cream p-4">
                <dt className="text-[0.58rem] uppercase tracking-[0.16em] text-brand-ink/35">
                  {label}
                </dt>
                <dd className="mt-1 text-brand-ink/75">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
