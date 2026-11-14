"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import type { CardProduct } from "@/lib/types";
import { cn } from "@/lib/utils";

interface Props {
  product: CardProduct;
  className?: string;
  index?: number;
}

const fa = (n: number) => n.toLocaleString("fa-IR", { minimumIntegerDigits: 2 });

/** Pre-rendered stills from scripts/capture-cards.cjs: no 3D in the grid. */
const photo = (product: string, glaze: string) => `/cards/${product}/${glaze}.webp`;

export default function ProductCard({ product, className, index = 0 }: Props) {
  const [glaze, setGlaze] = useState(index % Math.max(1, product.colors.length));
  const color = product.colors[glaze] ?? product.colors[0];
  const href = `/products/${product.url}`;

  return (
    <article className={cn("group relative flex flex-col", className)}>
      <div
        className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-brand-ink/8 bg-[radial-gradient(120%_90%_at_50%_0%,#ffffff_0%,#f1f1ef_60%,#e6e6e3_100%)] transition-[box-shadow,transform,border-color] duration-500 group-hover:-translate-y-1 group-hover:border-brand-ink/15 group-hover:shadow-[0_34px_60px_-42px_rgba(29,27,23,0.5)]"
      >
        {/* the glaze, pooled on the floor of the frame */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 opacity-[0.16] transition-colors duration-700 [mask-image:radial-gradient(75%_100%_at_50%_100%,black,transparent)]"
          style={{ backgroundColor: color?.hex }}
          aria-hidden="true"
        />

        {color && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={color.slug}
            src={photo(product.url, color.slug)}
            alt={`${product.title_fa} در لعاب ${color.name_fa}`}
            width={720}
            height={720}
            loading={index < 4 ? "eager" : "lazy"}
            decoding="async"
            className="absolute inset-0 h-full w-full object-contain p-2 transition-transform duration-700 group-hover:scale-[1.04]"
          />
        )}

        <div className="pointer-events-none absolute inset-x-4 top-4 flex items-center justify-between">
          <span className="text-[0.72rem] font-medium tabular-nums text-brand-ink/35">{fa(index + 1)}</span>
          {product.pieceCount && product.pieceCount > 1 ? (
            <span className="rounded-full bg-brand-ink px-3 py-1 text-[0.7rem] font-medium text-brand-paper">
              {product.pieceCount.toLocaleString("fa-IR")} پارچه
            </span>
          ) : null}
        </div>

        <span className="absolute bottom-4 left-4 grid h-10 w-10 translate-y-2 [@media(hover:none)]:hidden place-items-center rounded-full bg-brand-ink text-brand-paper opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
          <ArrowLeft size={16} />
        </span>

        <Link href={href} aria-label={product.title_fa} className="absolute inset-0 z-10 rounded-[1.75rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-clay" />
      </div>

      <div className="mt-4 flex flex-1 flex-col px-1">
        <p className="text-[0.74rem] text-brand-ink/50">{product.categories[0]?.name_fa}</p>
        <h3 className="mt-1 text-[1rem] font-bold leading-7">
          <Link href={href} className="transition-colors hover:text-brand-clay">
            {product.title_fa}
          </Link>
        </h3>

        <div className="mt-auto flex items-center justify-between gap-3 pt-3">
          <div role="group" aria-label="رنگ لعاب" className="grid w-full grid-cols-8 sm:-ms-1 sm:flex sm:w-auto sm:shrink-0 sm:items-center">
            {product.colors.map((item, i) => {
              const active = i === glaze;
              return (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => setGlaze(i)}
                  aria-label={item.name_fa}
                  aria-pressed={active}
                  title={item.name_fa}
                  className="group/dot grid h-8 place-items-center sm:h-7 sm:w-6 rounded-full focus-visible:outline-2 focus-visible:outline-brand-clay"
                >
                  <span
                    className={cn(
                      "relative block h-3.5 w-3.5 rounded-full sm:h-4 sm:w-4 shadow-[inset_0_-2px_3px_rgba(0,0,0,0.14),inset_0_1px_2px_rgba(255,255,255,0.45)] ring-1 ring-inset ring-brand-ink/15 transition-transform duration-300 group-hover/dot:scale-110",
                      active && "scale-110",
                    )}
                    style={{ backgroundColor: item.hex }}
                  >
                    <span
                      className={cn(
                        "absolute -inset-[3.5px] rounded-full border border-brand-ink/70 transition-all duration-300",
                        active ? "scale-100 opacity-100" : "scale-75 opacity-0",
                      )}
                    />
                  </span>
                </button>
              );
            })}
          </div>
          <span className="hidden min-w-0 truncate text-[0.74rem] text-brand-ink/50 sm:block">{color?.name_fa}</span>
        </div>
      </div>
    </article>
  );
}
