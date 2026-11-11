"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Box,
  Droplets,
  Flame,
  Mail,
  Microwave,
  Phone,
  Refrigerator,
  RotateCcw,
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Stage from "@/components/three/Stage";
import Model from "@/components/three/Model";
import { GOLD_EDGE_SURCHARGE } from "@/data/showcase";
import { SPECS } from "@/data/specs";
import { GLAZES } from "@/lib/glazes";
import type { ModelSpec } from "@/lib/models";
import type { CardProduct } from "@/lib/types";
import { cn } from "@/lib/utils";

type Props = {
  product: CardProduct & { description_fa?: string | null };
  model: ModelSpec;
};

/** Plain white porcelain is the base price; every glaze costs more. */
const WHITE = { slug: "white", name_fa: "سفید", hex: "#F2F0EA", note_fa: "پرسلین سفید، بدون لعاب رنگی." };
const TONES = [WHITE, ...GLAZES];

const toman = (n: number) => n.toLocaleString("fa-IR");

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-brand-ink/8 py-3 last:border-b-0">
      <dt className="shrink-0 text-[0.82rem] text-brand-ink/50">{label}</dt>
      <dd className="text-end text-[0.88rem] font-medium leading-7 text-brand-ink/85">{value}</dd>
    </div>
  );
}

function Care({
  icon: Icon,
  label,
  ok,
  note,
}: {
  icon: typeof Flame;
  label: string;
  ok: boolean;
  note?: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-brand-ink/8 bg-brand-paper p-4">
      <span
        className={cn(
          "grid h-9 w-9 shrink-0 place-items-center rounded-xl",
          ok ? "bg-[#4f8a74]/12 text-[#3f7562]" : "bg-brand-clay/12 text-[#9b4a37]",
        )}
      >
        <Icon size={17} />
      </span>
      <div className="min-w-0">
        <p className="text-[0.84rem] font-bold">{label}</p>
        <p className="mt-0.5 text-[0.74rem] leading-6 text-brand-ink/55">{note ?? (ok ? "مناسب" : "مناسب نیست")}</p>
      </div>
    </div>
  );
}

export default function ProductDetail({ product, model }: Props) {
  const [mounted, setMounted] = useState(false);
  const [tone, setTone] = useState(1); // open on the first glaze; 0 = white
  const [finish, setFinish] = useState<"gloss" | "matte">(model.finish ?? "gloss");
  const [gold, setGold] = useState(false);

  useEffect(() => setMounted(true), []);
  const onReady = useCallback(() => undefined, []);

  const spec = SPECS[product.url] ?? {};
  const colour = TONES[tone];
  const coloured = tone > 0;
  const canGold = Boolean(product.goldEdge);
  const edged = gold && canGold;
  const extra = edged ? GOLD_EDGE_SURCHARGE : 0;
  const whitePrice = product.price + extra;
  const colourPrice = (product.priceColor ?? product.price) + extra;
  const price = coloured ? colourPrice : whitePrice;
  const isSet = product.categories[0]?.slug === "dinner-sets";

  return (
    <div className="shell py-8 lg:py-12">
      <nav aria-label="مسیر" className="flex items-center gap-2 text-[0.76rem] text-brand-ink/45">
        <Link href="/" className="transition-colors hover:text-brand-ink">
          خانه
        </Link>
        <span aria-hidden="true">/</span>
        <Link href="/products" className="transition-colors hover:text-brand-ink">
          محصولات
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-brand-ink/75">{product.title_fa}</span>
      </nav>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
        {/* -------------------------------------------------------------- */}
        {/*  viewer                                                         */}
        {/* -------------------------------------------------------------- */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="relative overflow-hidden rounded-[2rem] border border-brand-ink/8 bg-[radial-gradient(120%_90%_at_50%_0%,#ffffff_0%,#f1f1ef_60%,#e6e6e3_100%)]">
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-[0.14] transition-colors duration-700 [mask-image:linear-gradient(to_top,black,transparent)]"
              style={{ backgroundColor: colour.hex }}
              aria-hidden="true"
            />
            <div className="relative aspect-square w-full">
              {mounted && (
                <Stage
                  className="h-full w-full cursor-grab active:cursor-grabbing"
                  camera={model.camera}
                  fov={30}
                  orbit
                  zoom
                  ariaLabel={`${product.title_fa} در رنگ ${colour.name_fa}`}
                >
                  <Model
                    src={model.src}
                    color={colour.hex}
                    finish={finish}
                    goldRim={model.goldRim ?? true}
                    goldEdge={edged}
                    fit={model.fit}
                    onReady={onReady}
                    castShadow
                  />
                </Stage>
              )}
            </div>

            <p className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-brand-ink/10 bg-brand-cream/85 px-4 py-1.5 text-[0.72rem] text-brand-ink/55 backdrop-blur">
              <RotateCcw size={13} />
              بکشید و بچرخانید
            </p>

            {product.pieceCount && product.pieceCount > 1 ? (
              <span className="absolute right-4 top-4 rounded-full bg-brand-ink px-3 py-1 text-[0.74rem] font-medium text-brand-paper">
                {toman(product.pieceCount)} پارچه
              </span>
            ) : null}
          </div>

          <p className="mt-4 px-1 text-[0.8rem] text-brand-ink/50">
            <span className="font-bold text-brand-ink/80">{colour.name_fa}</span>
            <span className="mx-2 text-brand-ink/20">·</span>
            {colour.note_fa}
          </p>
        </div>

        {/* -------------------------------------------------------------- */}
        {/*  details                                                        */}
        {/* -------------------------------------------------------------- */}
        <div>
          <div className="flex flex-wrap gap-2">
            {product.categories.map((category) => (
              <Link
                key={category.slug}
                href={`/products?category=${category.slug}`}
                className="rounded-full border border-brand-ink/15 px-3 py-1 text-[0.74rem] text-brand-ink/60 transition-colors hover:border-brand-ink hover:text-brand-ink"
              >
                {category.name_fa}
              </Link>
            ))}
          </div>

          <h1 className="mt-5 text-[2.1rem] font-black leading-[1.25] sm:text-[2.6rem]">{product.title_fa}</h1>
          {product.subtitle_fa && (
            <p className="mt-3 text-[0.95rem] leading-8 text-brand-ink/60">{product.subtitle_fa}</p>
          )}

          {/* ---------------------------------------------------- price */}
          <div className="mt-7 rounded-3xl border border-brand-ink/10 bg-brand-cream p-5 sm:p-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[0.78rem] text-brand-ink/50">
                  {isSet ? "قیمت هر دست" : "قیمت هر عدد"} ·{" "}
                  {coloured ? `لعاب ${colour.name_fa}` : "پرسلین سفید"}
                  {edged && " · لب طلا"}
                </p>
                <p className="mt-1.5 flex items-baseline gap-2">
                  <span key={price} className="glaze-word text-[2.3rem] font-black leading-none tabular-nums">
                    {toman(price)}
                  </span>
                  <span className="text-[0.85rem] text-brand-ink/50">تومان</span>
                </p>
              </div>
              <dl className="grid grid-cols-2 gap-x-5 text-[0.76rem]">
                <dt className={cn("text-brand-ink/45", !coloured && "font-bold text-brand-ink")}>سفید</dt>
                <dt className={cn("text-brand-ink/45", coloured && "font-bold text-brand-ink")}>رنگی</dt>
                <dd className={cn("mt-0.5 tabular-nums", coloured ? "text-brand-ink/45" : "font-bold")}>{toman(whitePrice)}</dd>
                <dd className={cn("mt-0.5 tabular-nums", coloured ? "font-bold" : "text-brand-ink/45")}>{toman(colourPrice)}</dd>
              </dl>
            </div>

            <div role="group" aria-label="انتخاب رنگ" className="mt-5 flex flex-wrap items-center gap-2">
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
                      "relative h-8 w-8 rounded-full shadow-[inset_0_-3px_6px_rgba(0,0,0,0.14),inset_0_2px_3px_rgba(255,255,255,0.45)] ring-1 ring-inset ring-brand-ink/15 transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-clay sm:h-9 sm:w-9",
                      active && "-translate-y-0.5",
                      i === 0 && "me-2",
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

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="flex rounded-full border border-brand-ink/12 bg-brand-paper p-1 text-[0.8rem]">
                {(["gloss", "matte"] as const).map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setFinish(value)}
                    aria-pressed={finish === value}
                    className={cn(
                      "flex-1 rounded-full py-2 transition-colors",
                      finish === value ? "bg-brand-ink text-brand-paper" : "text-brand-ink/55 hover:text-brand-ink",
                    )}
                  >
                    {value === "gloss" ? "براق" : "مات"}
                  </button>
                ))}
              </div>

              <button
                type="button"
                role="switch"
                aria-checked={edged}
                disabled={!canGold}
                onClick={() => setGold((on) => !on)}
                className={cn(
                  "flex items-center justify-between gap-3 rounded-full border px-4 py-2 text-[0.8rem] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-clay",
                  edged ? "border-brand-gold/60 bg-brand-gold/10" : "border-brand-ink/12 bg-brand-paper",
                  canGold ? "hover:border-brand-gold/60" : "cursor-not-allowed opacity-50",
                )}
              >
                <span>
                  لب طلا
                  <span className="ms-1.5 text-brand-ink/45">
                    {canGold ? `+${toman(GOLD_EDGE_SURCHARGE)}` : "· فقط فرم گرد"}
                  </span>
                </span>
                <span
                  className={cn(
                    "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                    edged ? "bg-brand-gold" : "bg-brand-ink/15",
                  )}
                  aria-hidden="true"
                >
                  <span
                    className={cn(
                      "absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all",
                      edged ? "start-[1.125rem]" : "start-0.5",
                    )}
                  />
                </span>
              </button>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-brand-ink/8 pt-5">
              <a
                href="tel:+982435752007"
                className="group inline-flex h-12 items-center gap-3 rounded-full bg-brand-ink ps-6 pe-1.5 text-[0.86rem] font-medium text-brand-paper transition-colors duration-300 hover:bg-brand-clay"
              >
                سفارش تلفنی
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-paper/12">
                  <Phone size={15} />
                </span>
              </a>
              <Link
                href="/#contact"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-brand-ink/15 px-6 text-[0.86rem] font-medium text-brand-ink/75 transition-colors hover:border-brand-ink/40 hover:text-brand-ink"
              >
                <Mail size={15} />
                استعلام قیمت عمده
              </Link>
            </div>
            <p className="mt-3 text-[0.74rem] leading-6 text-brand-ink/45">
              قیمت‌ها برای خرید تکی است؛ سفارش عمده، رستوران و هتل قیمت جداگانه دارد.
            </p>
          </div>

          {/* ---------------------------------------------- technical */}
          <section className="mt-8" aria-labelledby="spec-title">
            <h2 id="spec-title" className="flex items-center gap-2 text-[1.2rem] font-black">
              <Ruler size={18} className="text-brand-clay" />
              مشخصات فنی
            </h2>
            <dl className="mt-3 rounded-3xl border border-brand-ink/10 bg-brand-cream px-5 py-1 sm:px-6">
              {spec.size && <Row label="ابعاد" value={spec.size} />}
              {spec.capacity && <Row label="حجم" value={spec.capacity} />}
              {spec.serves && <Row label="مناسب برای" value={spec.serves} />}
              {product.pieceCount && product.pieceCount > 1 ? (
                <Row label="تعداد پارچه" value={`${toman(product.pieceCount)} پارچه`} />
              ) : null}
              {spec.form && <Row label="فرم" value={`فرم ${spec.form}`} />}
              <Row label="جنس بدنه" value="پرسلین" />
              <Row label="لعاب" value="بدون سرب، مناسب تماس با مواد غذایی" />
              <Row label="رنگ‌ها" value={`سفید و ${toman(GLAZES.length)} رنگ لعاب`} />
              <Row label="پرداخت سطح" value={model.finish === "matte" ? "مات" : "براق یا مات"} />
              <Row label="لب طلا" value={canGold ? `اختیاری · ${toman(GOLD_EDGE_SURCHARGE)} تومان` : "ندارد"} />
              <Row label="تولید" value="کارخانه چینی نور، زنجان" />
            </dl>

            {spec.contents && (
              <div className="mt-4 rounded-3xl border border-brand-ink/10 bg-brand-cream p-5 sm:p-6">
                <p className="flex items-center gap-2 text-[0.92rem] font-bold">
                  <Box size={16} className="text-brand-clay" />
                  اقلام این سرویس
                </p>
                <ul className="mt-3 grid gap-x-6 sm:grid-cols-2">
                  {spec.contents.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 border-b border-brand-ink/8 py-2.5 text-[0.84rem] text-brand-ink/80"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-clay/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* --------------------------------------------------- care */}
          <section className="mt-8" aria-labelledby="care-title">
            <h2 id="care-title" className="flex items-center gap-2 text-[1.2rem] font-black">
              <ShieldCheck size={18} className="text-brand-clay" />
              استفاده و نگهداری
            </h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <Care
                icon={Droplets}
                label="ماشین ظرفشویی"
                ok
                note={edged ? "مناسب؛ برای ماندگاری لب طلا شست‌وشوی دستی بهتر است" : "مناسب"}
              />
              <Care
                icon={Microwave}
                label="مایکروویو"
                ok={!edged}
                note={edged ? "قطعه‌ی لب طلا را در مایکروویو نگذارید" : "مناسب"}
              />
              <Care icon={Refrigerator} label="یخچال" ok note="مناسب نگهداری غذا" />
              <Care icon={Flame} label="تغییر دمای ناگهانی" ok={false} note="ظرف داغ را مستقیم روی سطح سرد یا آب سرد نگذارید" />
            </div>
          </section>

          <Link
            href="/#pricing"
            className="group mt-8 flex items-center justify-between gap-4 rounded-3xl border border-brand-ink/10 px-5 py-4 text-[0.86rem] text-brand-ink/70 transition-colors hover:border-brand-ink/30 hover:text-brand-ink sm:px-6"
          >
            <span className="flex items-center gap-2">
              <Sparkles size={16} className="text-brand-gold" />
              فهرست قیمت همه‌ی محصولات
            </span>
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
