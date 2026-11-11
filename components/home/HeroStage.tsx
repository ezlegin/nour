"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { ArrowDown, ArrowLeft, Rotate3d } from "lucide-react";
import Stage from "@/components/three/Stage";
import Model from "@/components/three/Model";
import { GLAZES } from "@/lib/glazes";
import { cn } from "@/lib/utils";

const HERO_MODEL = "/models/single-products-cup.glb";

const FACTS = [
  { value: "۸", label: "رنگ لعاب" },
  { value: "۲", label: "فرم بشقاب: گرد و تخت" },
  { value: "۱", label: "کارخانه، از خاک تا بسته‌بندی" },
];

const fa = (n: number) => n.toLocaleString("fa-IR", { minimumIntegerDigits: 2 });
const delay = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

export default function HeroStage() {
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);
  const glaze = GLAZES[index];

  useEffect(() => setMounted(true), []);

  return (
    <section
      id="top"
      className="relative grain flex flex-col overflow-hidden lg:min-h-[calc(100svh-4rem)]"
    >
      {/* ambient light, tinted by the chosen glaze */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute -left-[12%] top-[8%] h-[46rem] w-[46rem] rounded-full opacity-[0.06] blur-[110px] transition-colors duration-1000"
          style={{ backgroundColor: glaze.hex }}
        />
        <div className="absolute -right-[10%] -top-[30%] h-[36rem] w-[36rem] rounded-full bg-brand-cream opacity-80 blur-[90px]" />
      </div>

      <div className="shell relative grid flex-1 items-center gap-10 pb-10 pt-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pb-8 lg:pt-4">
        {/* ---------------------------------------------------------- */}
        {/*  the pitch                                                  */}
        {/* ---------------------------------------------------------- */}
        <div className="relative z-10 max-w-[40rem]">
          <p className="eyebrow rise" style={delay(0.05)}>
            چینی نور · پرسلین غذاخوری
          </p>

          <h1
            className="rise mt-6 text-[2.4rem] font-black leading-[1.25] tracking-[-0.015em] sm:text-[2.9rem] lg:text-[3.3rem] xl:text-[3.7rem]"
            style={delay(0.15)}
          >
            هر سفره،
            <br />
            <span className="relative inline-block text-brand-clay">
              رنگِ خودش را دارد
              <svg
                viewBox="0 0 220 18"
                preserveAspectRatio="none"
                className="absolute -bottom-2 right-0 h-3.5 w-full text-brand-gold/80"
                fill="none"
                aria-hidden="true"
              >
                <path
                  className="draw-stroke"
                  pathLength={1}
                  d="M218 9C120 3 48 4 2 12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="text-brand-gold">.</span>
          </h1>

          <p
            className="rise mt-7 max-w-[27rem] text-[0.92rem] leading-[2] text-brand-ink/65"
            style={delay(0.3)}
          >
            بشقاب گرد و تخت، کاسه، ماگ و سرویس‌های کامل — در هشت رنگ لعاب و با
            ظرفیت تولید انبوه. هر قطعه از شکل‌دهی تا کنترل کیفیت نهایی، در یک
            کارخانه ساخته می‌شود.
          </p>

          <div
            className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={delay(0.42)}
          >
            <Link
              href="/#products"
              className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-brand-ink ps-7 pe-1.5 text-[0.84rem] font-medium text-brand-paper shadow-[0_18px_36px_-18px_rgba(29,27,23,0.55)] transition-colors duration-300 hover:bg-brand-clay"
            >
              دیدن محصولات
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-paper/12 transition-transform duration-300 group-hover:-translate-x-1">
                <ArrowLeft size={16} />
              </span>
            </Link>
            <Link
              href="/#studio"
              className="group inline-flex h-12 items-center justify-center gap-3 rounded-full border border-brand-ink/15 bg-brand-cream/50 px-6 text-[0.84rem] font-medium text-brand-ink/80 transition-colors duration-300 hover:border-brand-ink/40 hover:text-brand-ink"
            >
              <span className="flex -space-x-1.5" dir="ltr" aria-hidden="true">
                {GLAZES.slice(0, 3).map((item) => (
                  <span
                    key={item.slug}
                    className="h-4 w-4 rounded-full ring-2 ring-brand-paper"
                    style={{ backgroundColor: item.hex }}
                  />
                ))}
              </span>
              استودیوی رنگ
            </Link>
          </div>

          <dl
            className="rise mt-10 hidden max-w-[30rem] grid-cols-3 gap-6 border-t border-brand-ink/10 pt-6 sm:grid"
            style={delay(0.55)}
          >
            {FACTS.map((fact) => (
              <div key={fact.label} className="flex items-center gap-3.5">
                <dd className="text-[1.9rem] font-black leading-none text-brand-ink">
                  {fact.value}
                </dd>
                <dt className="text-[0.74rem] leading-5 text-brand-ink/55">{fact.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        {/* ---------------------------------------------------------- */}
        {/*  the object                                                 */}
        {/* ---------------------------------------------------------- */}
        <div className="rise relative flex flex-col items-center" style={delay(0.25)}>
          <div className="relative aspect-square w-full max-w-[34rem] lg:max-w-[clamp(22rem,calc(100svh-19rem),38rem)]">
            {/* halo: «نور» means light */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="absolute inset-[7%] rounded-full bg-[radial-gradient(circle_at_50%_28%,#ffffff_0%,#f3f3f1_55%,#e3e3e0_100%)] shadow-[inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-24px_48px_-32px_rgba(29,27,23,0.12),0_40px_80px_-50px_rgba(29,27,23,0.45)]" />
              <div
                className="absolute inset-[7%] rounded-full border-[1.5px] opacity-60 transition-colors duration-1000"
                style={{ borderColor: glaze.hex }}
              />
              <div className="absolute inset-[1.5%] rounded-full border border-brand-ink/10" />
              <div className="spin-slow absolute -inset-[4%] rounded-full border border-dashed border-brand-ink/10" />

              {/* glaze name, set large behind the piece */}
              <div className="absolute inset-x-0 top-[13%] flex justify-center overflow-hidden">
                <span
                  key={glaze.slug}
                  dir="ltr"
                  className="glaze-word font-display whitespace-nowrap text-[clamp(4.5rem,9vw,8.5rem)] italic leading-none text-brand-ink/[0.09]"
                >
                  {glaze.name_en}
                </span>
              </div>
            </div>

            {/* rotating maker's seal */}
            <div
              className="pointer-events-none absolute left-[2%] top-[4%] z-10 hidden h-[6.5rem] w-[6.5rem] sm:block"
              aria-hidden="true"
            >
              <svg viewBox="0 0 100 100" className="spin-slow h-full w-full" style={{ direction: "ltr" }}>
                <defs>
                  <path id="hero-seal" d="M50 50m-38 0a38 38 0 1 1 76 0a38 38 0 1 1-76 0" />
                </defs>
                <text
                  className="font-display fill-brand-ink/60"
                  fontSize="8.4"
                  letterSpacing="2.6"
                >
                  <textPath href="#hero-seal">NOUR PORCELAIN · FINE TABLEWARE · IRAN ·</textPath>
                </text>
              </svg>
              <span className="absolute inset-[26%] grid place-items-center rounded-full bg-brand-ink text-brand-paper">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M12 2c1.9 6.6 3.4 8.1 10 10-6.6 1.9-8.1 3.4-10 10-1.9-6.6-3.4-8.1-10-10 6.6-1.9 8.1-3.4 10-10Z" />
                </svg>
              </span>
            </div>

            {mounted ? (
              <Stage
                className="fade-in-soft relative h-full w-full cursor-grab active:cursor-grabbing"
                camera={[0, 2.2, 4]}
                fov={30}
                orbit
                zoom={false}
                limited
                margin={1.4}
              >
                <Model
                  src={HERO_MODEL}
                  color={glaze.hex}
                  fit={1.32}
                  rotationY={-1.54}
                  parallax={0.32}
                  preserveAccents
                  quality="hero"
                  castShadow
                />
              </Stage>
            ) : (
              <div className="relative grid h-full place-items-center">
                <div className="h-40 w-40 animate-pulse rounded-full bg-brand-sand/70" />
              </div>
            )}

            <p className="pointer-events-none absolute bottom-[9%] right-0 z-10 hidden items-center gap-2 text-[0.74rem] text-brand-ink/50 sm:flex">
              <Rotate3d size={15} className="text-brand-clay" />
              بکشید و بچرخانید
            </p>
          </div>

          {/* glaze dock */}
          <div className="relative z-10 -mt-3 flex flex-col items-center gap-3">
            <p className="flex items-baseline gap-3 text-[0.8rem] text-brand-ink/50" aria-live="polite">
              <span className="tabular-nums">
                {fa(index + 1)} / {fa(GLAZES.length)}
              </span>
              <span className="h-px w-6 self-center bg-brand-ink/20" />
              <span key={glaze.slug} className="fade-in-soft text-[0.95rem] font-bold text-brand-ink">
                {glaze.name_fa}
              </span>
            </p>

            <div
              role="group"
              aria-label="انتخاب رنگ لعاب"
              className="soft-shadow flex items-center gap-2 rounded-full border border-brand-ink/10 bg-brand-cream/85 p-2 backdrop-blur sm:gap-2.5 sm:p-2.5"
            >
              {GLAZES.map((item, i) => {
                const active = i === index;
                return (
                  <button
                    key={item.slug}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={item.name_fa}
                    aria-pressed={active}
                    title={item.name_fa}
                    className={cn(
                      "relative h-8 w-8 rounded-full shadow-[inset_0_-3px_6px_rgba(0,0,0,0.14),inset_0_2px_3px_rgba(255,255,255,0.45)] ring-1 ring-inset ring-brand-ink/15 transition-transform duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-clay sm:h-9 sm:w-9",
                      active && "-translate-y-0.5",
                    )}
                    style={{ backgroundColor: item.hex }}
                  >
                    <span
                      className={cn(
                        "absolute -inset-[5px] rounded-full border-[1.5px] border-brand-ink/70 transition-all duration-300",
                        active ? "scale-100 opacity-100" : "scale-75 opacity-0",
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------ */}
      {/*  footer strip of the first view                               */}
      {/* ------------------------------------------------------------ */}
      <div className="shell relative pb-6">
        <div className="flex items-center justify-between gap-6 border-t border-brand-ink/10 pt-5 text-[0.8rem] text-brand-ink/55">
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-2">
            {["بشقاب", "کاسه", "ماگ", "سرویس کامل"].map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span className="h-1 w-1 rotate-45 bg-brand-clay" />
                {item}
              </li>
            ))}
            <li className="hidden items-center gap-2.5 md:flex">
              <span className="h-1 w-1 rotate-45 bg-brand-clay" />
              کنترل کیفیت در هر مرحله
            </li>
          </ul>

          <Link
            href="/#studio"
            className="group hidden shrink-0 items-center gap-3 text-brand-ink/60 transition-colors hover:text-brand-ink lg:flex"
          >
            ادامه
            <span className="grid h-9 w-9 place-items-center rounded-full border border-brand-ink/15 transition-colors group-hover:border-brand-ink/40">
              <ArrowDown size={14} className="animate-bounce" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
