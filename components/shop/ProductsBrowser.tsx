"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ProductGrid from "./ProductGrid";
import type { CardProduct } from "@/lib/types";
import { cn } from "@/lib/utils";

type Chip = { slug: string; name_fa: string };

interface Props {
  products: CardProduct[];
  chips: Chip[];
}

/**
 * The page is built as static HTML, so the server never sees `?category=`.
 * The filter is read from the URL in the browser instead.
 */
export default function ProductsBrowser({ products, chips }: Props) {
  const category = useSearchParams().get("category") ?? "";
  const known = chips.some((chip) => chip.slug === category) ? category : "";

  const list = known
    ? products.filter((item) => item.categories.some((entry) => entry.slug === known))
    : products;

  return (
    <>
      <div className="mt-10 flex flex-wrap items-center gap-2">
        {chips.map((chip) => {
          const active = known === chip.slug;
          return (
            <Link
              key={chip.slug}
              href={chip.slug ? `/products?category=${chip.slug}` : "/products"}
              scroll={false}
              aria-current={active ? "true" : undefined}
              className={cn(
                "rounded-full border px-4 py-2 text-[0.72rem] transition",
                active
                  ? "border-brand-ink bg-brand-ink text-brand-paper"
                  : "border-brand-ink/15 text-brand-ink/60 hover:border-brand-ink/40",
              )}
            >
              {chip.name_fa}
              <span className={cn("ms-2 tabular-nums", active ? "text-brand-paper/55" : "text-brand-ink/35")}>
                {(chip.slug
                  ? products.filter((item) => item.categories.some((entry) => entry.slug === chip.slug)).length
                  : products.length
                ).toLocaleString("fa-IR")}
              </span>
            </Link>
          );
        })}
      </div>

      {/* keyed so the cards restart their numbering and glaze for each filter */}
      <ProductGrid key={known} products={list} className="mt-10" />
    </>
  );
}
