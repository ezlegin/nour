"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Stage from "@/components/three/Stage";
import Turntable from "@/components/three/Turntable";
import { GOLD_EDGE_SURCHARGE, catalogue } from "@/data/showcase";
import { useNearViewport } from "@/hooks/useNearViewport";
import { GLAZES } from "@/lib/glazes";
import { modelForProduct } from "@/lib/models";
import type { CardProduct } from "@/lib/types";
import { cn } from "@/lib/utils";

/** Plain white porcelain: the base price. Every glaze below costs more. */
const WHITE = { slug: "white", name_fa: "سفید", hex: "#F2F0EA" };
const TONES = [WHITE, ...GLAZES.map(({ slug, name_fa, hex }) => ({ slug, name_fa, hex }))];

const isSet = (product: CardProduct) => product.categories[0]?.slug === "dinner-sets";

const GROUPS = [
  { key: "sets", title: "سرویس‌ها", unit: "قیمت هر دست", items: catalogue.filter(isSet) },
  { key: "pieces", title: "تک‌قطعه‌ها", unit: "قیمت هر عدد", items: catalogue.filter((item) => !isSet(item)) },
];

const toman = (n: number) => n.toLocaleString("fa-IR");
const fa = (n: number) => n.toLocaleString("fa-IR", { minimumIntegerDigits: 2 });

function meta(product: CardProduct) {
  if (!isSet(product)) return product.categories[0]?.name_fa ?? "";
  if (product.pieceCount && product.pieceCount > 1) return `${toman(product.pieceCount)} پارچه`;
  return "سرویس کامل";
}

export default function Pricing() {
  const section = useRef<HTMLElement>(null);
  const near = useNearViewport(section, "300px");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(catalogue[0]);
  const [tone, setTone] = useState(0); // 0 = white
  const [gold, setGold] = useState(false); // gold edge, where the piece takes one
  const [ready, setReady] = useState(false);
  const intent = useRef<ReturnType<typeof setTimeout> | null>(null);

  const spec = modelForProduct(selected);
  const colour = TONES[tone];
  const coloured = tone > 0;
  const canGold = Boolean(selected.goldEdge);
  const edged = gold && canGold;
  const extra = (product: CardProduct) => (gold && product.goldEdge ? GOLD_EDGE_SURCHARGE : 0);
  const white = (product: CardProduct) => product.price + extra(product);
  const tinted = (product: CardProduct) => (product.priceColor ?? product.price) + extra(product);
  const onReady = useCallback(() => setReady(true), []);

  const select = useCallback((product: CardProduct) => {
    setSelected((current) => {
      if (current.url !== product.url) setReady(false);
      return product;
    });
  }, []);

  // hovering down the list should not load every model on the way
  const hover = (product: CardProduct) => {
    if (intent.current) clearTimeout(intent.current);
    intent.current = setTimeout(() => select(product), 160);
  };
  const leave = () => {
    if (intent.current) clearTimeout(intent.current);
  };

  useEffect(() => {
    const element = section.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={section} id="pricing" className="scroll-mt-24 bg-brand-paper py-20 lg:py-28">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <div>
            <p className="eyebrow">
              <span>۰۴</span>
              قیمت‌ها
            </p>
            <h2 className="mt-5 text-[2.2rem] font-black leading-[1.22] sm:text-[2.8rem] lg:text-[3.2rem]">
              سفید یا <span className="text-brand-clay">رنگی</span>؛
              <br />
              قیمت هر قطعه.
            </h2>
          </div>
          <p className="max-w-[26rem] text-[0.92rem] leading-8 text-brand-ink/60">
            هر قطعه دو قیمت دارد: پرسلین سفید، و همان قطعه در یکی از هشت لعاب رنگی.
            ظروف فرم گرد را با لب طلا هم می‌توانید سفارش دهید. روی هر ردیف بروید تا
            قطعه را ببینید.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.4fr_0.9fr] lg:items-start">
          {/* -------------------------------------------------------- */}
          {/*  price list                                               */}
          {/* -------------------------------------------------------- */}
          <div className="flex flex-col gap-5">
            {GROUPS.map((group) => (
              <div key={group.key} className="rounded-3xl border border-brand-ink/10 bg-brand-cream p-3 sm:p-4">
                <div className="grid grid-cols-[1fr_4.7rem_4.7rem] items-end gap-x-2 px-3 pb-3 pt-2 sm:grid-cols-[1fr_7.5rem_7.5rem] sm:gap-x-4 sm:px-4">
                  <div>
                    <h3 className="text-[1.15rem] font-black">{group.title}</h3>
                    <p className="mt-1 text-[0.74rem] text-brand-ink/45">
                      {group.unit} · تومان
                    </p>
                  </div>
                  {[
                    ["سفید", !coloured, WHITE.hex],
                    ["رنگی", coloured, coloured ? colour.hex : GLAZES[0].hex],
                  ].map(([label, active, hex]) => (
                    <p
                      key={label as string}
                      className={cn(
                        "flex items-center justify-end gap-2 text-[0.78rem] transition-colors duration-300",
                        active ? "font-bold text-brand-ink" : "text-brand-ink/45",
                      )}
                    >
                      <span
                        className="h-2.5 w-2.5 rounded-full ring-1 ring-inset ring-brand-ink/20 transition-colors duration-500"
                        style={{ backgroundColor: hex as string }}
                      />
                      {label}
                    </p>
                  ))}
                </div>

                <ul>
                  {group.items.map((product) => {
                    const active = product.url === selected.url;
                    return (
                      <li key={product.url} className="border-t border-brand-ink/8">
                        <button
                          type="button"
                          onClick={() => select(product)}
                          onMouseEnter={() => hover(product)}
                          onMouseLeave={leave}
                          onFocus={() => select(product)}
                          aria-pressed={active}
                          className={cn(
                            "relative grid w-full grid-cols-[1fr_4.7rem_4.7rem] items-center gap-x-2 rounded-2xl px-3 py-3.5 text-start transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-brand-clay sm:grid-cols-[1fr_7.5rem_7.5rem] sm:gap-x-4 sm:px-4",
                            active ? "bg-brand-ink text-brand-paper" : "hover:bg-brand-ink/[0.04]",
                          )}
                        >
                          <span className="min-w-0">
                            <span className="flex items-center gap-2 text-[0.88rem] font-bold leading-6 sm:text-[0.95rem]">
                              <span className="sm:truncate">{product.title_fa}</span>
                              {gold && product.goldEdge && (
                                <span
                                  className="h-3 w-3 shrink-0 rounded-full border-2 border-brand-gold"
                                  title="با لب طلا"
                                  aria-label="با لب طلا"
                                />
                              )}
                            </span>
                            <span
                              className={cn(
                                "mt-0.5 block text-[0.72rem]",
                                active ? "text-brand-paper/55" : "text-brand-ink/45",
                              )}
                            >
                              {meta(product)}
                            </span>
                          </span>
                          {[
                            [white(product), !coloured],
                            [tinted(product), coloured],
                          ].map(([price, lit], i) => (
                            <span
                              key={i}
                              className={cn(
                                "text-end text-[0.84rem] tabular-nums transition-opacity duration-300 sm:text-[0.95rem]",
                                lit ? "font-bold" : "opacity-45",
                                lit && active && "text-brand-gold",
                              )}
                            >
                              {toman(price as number)}
                            </span>
                          ))}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            <p className="px-1 text-[0.78rem] leading-7 text-brand-ink/50">
              قیمت‌ها به تومان و برای خرید تکی است. برای سفارش عمده، ست‌های سازمانی و
              رستوران و هتل، قیمت جداگانه استعلام بگیرید.
            </p>
          </div>

          {/* -------------------------------------------------------- */}
          {/*  the chosen piece                                         */}
          {/* -------------------------------------------------------- */}
          <div className="order-first lg:sticky lg:top-24 lg:order-none">
            <div className="relative flex flex-col overflow-hidden rounded-[2rem] border border-brand-ink/8 bg-[radial-gradient(120%_90%_at_50%_0%,#ffffff_0%,#f1f1ef_60%,#e6e6e3_100%)]">
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-[0.12] transition-colors duration-1000 [mask-image:linear-gradient(to_top,black,transparent)]"
                style={{ backgroundColor: colour.hex }}
                aria-hidden="true"
              />

              <div className="relative z-10 flex items-start justify-between gap-4 p-5 sm:p-6">
                <div className="min-w-0">
                  <p className="text-[0.74rem] text-brand-ink/50">{meta(selected)}</p>
                  <p key={selected.url} className="fade-in-soft mt-1 text-[1.15rem] font-black leading-8">
                    {selected.title_fa}
                  </p>
                </div>
                <span className="shrink-0 text-[0.72rem] tabular-nums text-brand-ink/35">
                  {fa(catalogue.indexOf(selected) + 1)} / {fa(catalogue.length)}
                </span>
              </div>

              <div className="relative aspect-[4/3] w-full sm:aspect-[4/3.1]">
                {!ready && (
                  <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
                    <span className="h-8 w-8 animate-spin rounded-full border-2 border-brand-ink/12 border-t-brand-clay" />
                  </div>
                )}
                {near && (
                  <Stage
                    className={cn(
                      "absolute inset-0 transition-opacity duration-500",
                      ready ? "opacity-100" : "opacity-0",
                    )}
                    fov={24}
                    frame={false}
                    paused={!visible}
                    ariaLabel={`${selected.title_fa} در رنگ ${colour.name_fa}`}
                  >
                    <Turntable
                      src={spec.src}
                      color={colour.hex}
                      finish={spec.finish}
                      goldRim={spec.goldRim}
                      goldEdge={edged}
                      sway={spec.frontal ? 0.55 : 0}
                      yaw={spec.frontal ? 0 : -0.5}
                      margin={spec.frontal ? 1.02 : 1.2}
                      onReady={onReady}
                    />
                  </Stage>
                )}
              </div>

              <div className="relative z-10 p-5 pt-2 sm:p-6 sm:pt-2">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[0.76rem] text-brand-ink/50">
                      {coloured ? `لعاب ${colour.name_fa}` : "پرسلین سفید"}
                      {edged && " · لب طلا"}
                    </p>
                    <p className="mt-1 flex items-baseline gap-2">
                      <span
                        key={`${selected.url}-${coloured}-${edged}`}
                        className="glaze-word text-[1.9rem] font-black leading-none tabular-nums"
                      >
                        {toman(coloured ? tinted(selected) : white(selected))}
                      </span>
                      <span className="text-[0.8rem] text-brand-ink/50">تومان</span>
                    </p>
                  </div>
                  {selected.priceColor && (
                    <p className="text-end text-[0.74rem] leading-6 text-brand-ink/50">
                      {coloured ? "سفید" : "رنگی"}
                      <br />
                      <span className="tabular-nums text-brand-ink/75">
                        {toman(coloured ? white(selected) : tinted(selected))}
                      </span>
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  role="switch"
                  aria-checked={edged}
                  disabled={!canGold}
                  onClick={() => setGold((on) => !on)}
                  className={cn(
                    "mt-5 flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-start transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-clay",
                    edged ? "border-brand-gold/60 bg-brand-gold/10" : "border-brand-ink/10 bg-brand-cream/70",
                    canGold ? "hover:border-brand-gold/60" : "cursor-not-allowed opacity-55",
                  )}
                >
                  <span
                    className={cn(
                      "h-7 w-7 shrink-0 rounded-full border-[3px] bg-brand-cream transition-colors duration-300",
                      edged ? "border-brand-gold" : "border-brand-ink/15",
                    )}
                    aria-hidden="true"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.9rem] font-bold">لب طلا</span>
                    <span className="block text-[0.74rem] leading-6 text-brand-ink/55">
                      {canGold
                        ? `خط طلایی دور لبه · ${toman(GOLD_EDGE_SURCHARGE)} تومان بیشتر`
                        : "فقط برای ظروف فرم گرد"}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "relative h-6 w-11 shrink-0 rounded-full transition-colors duration-300",
                      edged ? "bg-brand-gold" : "bg-brand-ink/15",
                    )}
                    aria-hidden="true"
                  >
                    <span
                      className={cn(
                        "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all duration-300",
                        edged ? "start-[1.375rem]" : "start-0.5",
                      )}
                    />
                  </span>
                </button>

                <div
                  role="group"
                  aria-label="انتخاب رنگ"
                  className="mt-3 flex items-center justify-between gap-1 rounded-full border border-brand-ink/10 bg-brand-cream/85 p-2 backdrop-blur"
                >
                  {TONES.map((item, i) => {
                    const active = i === tone;
                    return (
                      <button
                        key={item.slug}
                        type="button"
                        onClick={() => setTone(i)}
                        aria-label={item.name_fa}
                        aria-pressed={active}
                        title={item.name_fa}
                        className={cn(
                          "relative h-7 w-7 shrink-0 rounded-full shadow-[inset_0_-3px_6px_rgba(0,0,0,0.14),inset_0_2px_3px_rgba(255,255,255,0.45)] ring-1 ring-inset ring-brand-ink/15 transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-clay sm:h-8 sm:w-8",
                          active && "-translate-y-0.5",
                          // white is the base price: set it apart from the glazes
                          i === 0 && "me-1.5 sm:me-2.5",
                        )}
                        style={{ backgroundColor: item.hex }}
                      >
                        <span
                          className={cn(
                            "absolute -inset-[4px] rounded-full border-[1.5px] border-brand-ink/70 transition-all duration-300",
                            active ? "scale-100 opacity-100" : "scale-75 opacity-0",
                          )}
                        />
                      </button>
                    );
                  })}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Link
                    href="/#contact"
                    className="group inline-flex h-12 items-center gap-3 rounded-full bg-brand-ink ps-6 pe-1.5 text-[0.84rem] font-medium text-brand-paper transition-colors duration-300 hover:bg-brand-clay"
                  >
                    استعلام قیمت عمده
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-paper/12 transition-transform duration-300 group-hover:-translate-x-0.5">
                      <ArrowLeft size={15} />
                    </span>
                  </Link>
                  <Link
                    href={`/products/${selected.url}`}
                    className="inline-flex h-12 items-center rounded-full border border-brand-ink/15 px-6 text-[0.84rem] font-medium text-brand-ink/75 transition-colors hover:border-brand-ink/40 hover:text-brand-ink"
                  >
                    صفحه‌ی محصول
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
