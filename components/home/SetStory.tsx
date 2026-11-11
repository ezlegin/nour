"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useGLTF } from "@react-three/drei";
import { ArrowLeft, Rotate3d } from "lucide-react";
import Stage from "@/components/three/Stage";
import Model from "@/components/three/Model";
import { useNearViewport } from "@/hooks/useNearViewport";
import { GLAZES } from "@/lib/glazes";
import { cn } from "@/lib/utils";

type FormKey = "round" | "flat";

type Service = {
  key: FormKey;
  name: string;
  tagline: string;
  body: string;
  src: string;
  /** the flat service is only made with a matte glaze */
  finish: "gloss" | "matte";
  /** glaze shown first, index into GLAZES */
  glaze: number;
  /** [piece, size] — sizes measured from the models */
  pieces: [string, string][];
  href?: string;
};

const SERVICES: Service[] = [
  {
    key: "round",
    name: "فرم گرد",
    tagline: "منحنیِ پیوسته، بدون لبه",
    body: "بدنه از کف تا دهانه با یک قوس نرم بالا می‌آید. همان فرمی که در فنجان و دیسِ بالای صفحه دیدید؛ گرم، خانگی و همه‌کاره.",
    src: "/models/set-round.glb",
    finish: "gloss",
    glaze: 3,
    pieces: [
      ["دیس", "۳۰ سانتی"],
      ["بشقاب غذاخوری", "۲۴٫۵ سانتی"],
      ["پیش‌دستی", "۱۹٫۵ سانتی"],
      ["بشقاب کوچک", "۱۸٫۵ سانتی"],
      ["کاسه بزرگ", "۲۳٫۵ سانتی"],
      ["کاسه کوچک", "۱۳٫۵ سانتی"],
      ["فنجان و نعلبکی", "۱۴ سانتی"],
      ["سس‌خوری", "دسته‌دار"],
      ["نمکدان", "۵٫۵ سانتی"],
    ],
    href: "/products/dinner-set-30",
  },
  {
    key: "flat",
    name: "فرم تخت",
    tagline: "لبه‌ی پهن، کفِ صاف",
    body: "لبه‌ای تخت و پهن دور یک کفِ صاف، با خط‌هایی مشخص و دیواره‌های زاویه‌دار. رسمی‌تر و معمارانه‌تر؛ برای میزهایی که چیدمان در آن‌ها دیده می‌شود.",
    src: "/models/set-flat.glb",
    finish: "matte",
    glaze: 1,
    pieces: [
      ["دیس", "۳۰ سانتی"],
      ["بشقاب غذاخوری", "۲۶٫۵ سانتی"],
      ["بشقاب کوچک", "۲۱ سانتی"],
      ["کاسه بزرگ", "۲۳٫۵ سانتی"],
      ["بشقاب گود", "۲۰٫۵ سانتی"],
      ["کاسه کوچک", "۱۲ سانتی"],
      ["شیرخوری", "دسته‌دار"],
      ["نمکدان", "۶ سانتی"],
    ],
    href: "/products/dinner-set-flat",
  },
];

const fa = (n: number) => n.toLocaleString("fa-IR", { minimumIntegerDigits: 2 });

/** Cross-section of each plate form: the whole difference in one line. */
function Profile({ form, className }: { form: FormKey; className?: string }) {
  return (
    <svg viewBox="0 0 100 44" fill="none" className={className} aria-hidden="true">
      <path
        d={
          form === "round"
            ? "M5 10C16 31 31 37 50 37C69 37 84 31 95 10"
            : "M4 13H23C28 13 27 33 34 33H66C73 33 72 13 77 13H96"
        }
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M22 42H78" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

export default function SetStory() {
  const section = useRef<HTMLElement>(null);
  const near = useNearViewport(section, "400px");
  const [form, setForm] = useState<FormKey>("round");
  const [glazes, setGlazes] = useState<Record<FormKey, number>>({
    round: SERVICES[0].glaze,
    flat: SERVICES[1].glaze,
  });
  const [ready, setReady] = useState<Record<FormKey, boolean>>({ round: false, flat: false });

  const service = SERVICES.find((item) => item.key === form)!;
  const glaze = GLAZES[glazes[form]];
  const onReady = useCallback(() => setReady((state) => ({ ...state, [form]: true })), [form]);

  // once the first service is on screen, fetch the other one in the background
  useEffect(() => {
    if (ready.round || ready.flat) SERVICES.forEach((item) => useGLTF.preload(item.src));
  }, [ready.round, ready.flat]);

  return (
    <section ref={section} id="set" className="relative overflow-hidden bg-brand-paper py-20 lg:py-28">
      <div className="shell">
        {/* heading */}
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <div>
            <p className="eyebrow">
              <span>{fa(2)}</span>
              سرویس‌ها
            </p>
            <h2 className="mt-5 text-[2.2rem] font-black leading-[1.22] sm:text-[2.8rem] lg:text-[3.2rem]">
              دو فرم، <span className="text-brand-clay">یک سفره</span>.
            </h2>
          </div>
          <p className="max-w-[26rem] text-[0.92rem] leading-8 text-brand-ink/60">
            سرویس غذاخوری نور در دو فرم ساخته می‌شود: گرد و تخت. قطعه‌ها یکی‌اند،
            خطِ لبه فرق می‌کند. هر دو را در هر هشت رنگ لعاب ببینید.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.78fr_1.5fr] lg:items-stretch">
          {/* -------------------------------------------------------- */}
          {/*  form switch + details                                    */}
          {/* -------------------------------------------------------- */}
          <div className="flex flex-col gap-5">
            <div role="tablist" aria-label="فرم سرویس" className="grid grid-cols-2 gap-3">
              {SERVICES.map((item) => {
                const active = item.key === form;
                return (
                  <button
                    key={item.key}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setForm(item.key)}
                    className={cn(
                      "group flex flex-col items-start rounded-3xl border p-5 text-start transition-colors duration-500",
                      active
                        ? "border-brand-ink bg-brand-ink text-brand-paper"
                        : "border-brand-ink/10 bg-brand-cream text-brand-ink hover:border-brand-ink/35",
                    )}
                  >
                    <Profile
                      form={item.key}
                      className={cn(
                        "h-12 w-full max-w-[9rem] transition-colors duration-500",
                        active ? "text-brand-gold" : "text-brand-ink/45 group-hover:text-brand-ink/70",
                      )}
                    />
                    <span className="mt-5 text-[1.25rem] font-black">{item.name}</span>
                    <span
                      className={cn(
                        "mt-1.5 text-[0.8rem] leading-6",
                        active ? "text-brand-paper/65" : "text-brand-ink/55",
                      )}
                    >
                      {item.tagline}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-1 flex-col rounded-3xl border border-brand-ink/10 bg-brand-cream p-6">
              <p key={service.key} className="fade-in-soft text-[0.92rem] leading-8 text-brand-ink/70">
                {service.body}
              </p>

              <p className="mt-6 flex items-center gap-3 text-[0.78rem] text-brand-ink/45">
                قطعه‌های این سرویس
                <span className="h-px flex-1 bg-brand-ink/10" />
                <span className="tabular-nums">{fa(service.pieces.length)}</span>
              </p>
              <ul key={`${service.key}-list`} className="fade-in-soft mt-2 grid grid-cols-2 gap-x-6">
                {service.pieces.map(([name, size]) => (
                  <li
                    key={name}
                    className="flex items-baseline justify-between gap-3 border-b border-brand-ink/8 py-2.5 text-[0.84rem]"
                  >
                    <span className="font-medium text-brand-ink/85">{name}</span>
                    <span className="shrink-0 text-[0.74rem] text-brand-ink/45">{size}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
                <Link
                  href="/#contact"
                  className="group inline-flex h-12 items-center gap-3 rounded-full bg-brand-ink ps-6 pe-1.5 text-[0.84rem] font-medium text-brand-paper transition-colors duration-300 hover:bg-brand-clay"
                >
                  استعلام قیمت این سرویس
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-paper/12 transition-transform duration-300 group-hover:-translate-x-0.5">
                    <ArrowLeft size={15} />
                  </span>
                </Link>
                {service.href && (
                  <Link
                    href={service.href}
                    className="inline-flex h-12 items-center rounded-full border border-brand-ink/15 px-6 text-[0.84rem] font-medium text-brand-ink/75 transition-colors hover:border-brand-ink/40 hover:text-brand-ink"
                  >
                    {service.key === "round" ? "سرویس ۳۰ پارچه" : "صفحه‌ی سرویس تخت"}
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/*  the table                                                */}
          {/* -------------------------------------------------------- */}
          <div className="relative order-first flex flex-col overflow-hidden rounded-[2rem] border border-brand-ink/8 bg-[radial-gradient(120%_90%_at_50%_0%,#ffffff_0%,#f1f1ef_60%,#e6e6e3_100%)] lg:order-none lg:min-h-[38rem]">
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-[0.12] transition-colors duration-1000 [mask-image:linear-gradient(to_top,black,transparent)]"
              style={{ backgroundColor: glaze.hex }}
              aria-hidden="true"
            />

            {/* ghosted profile of the chosen form */}
            <div key={form} className="glaze-word pointer-events-none absolute inset-x-0 top-6 flex justify-center" aria-hidden="true">
              <Profile form={form} className="w-[62%] text-brand-ink/[0.06]" />
            </div>

            <div className="relative z-10 flex items-center justify-between p-5 sm:p-6">
              <p className="text-[1.05rem] font-bold">
                {service.name}
                <span className="ms-2.5 text-[0.82rem] font-normal text-brand-ink/50">
                  در لعاب {glaze.name_fa}
                  {service.finish === "matte" ? " · مات" : " · براق"}
                </span>
              </p>
              <p className="hidden items-center gap-2 text-[0.76rem] text-brand-ink/45 sm:flex">
                <Rotate3d size={15} className="text-brand-clay" />
                بکشید و بچرخانید
              </p>
            </div>

            <div className="relative aspect-[4/3.4] w-full lg:aspect-auto lg:min-h-0 lg:flex-1">
              {!ready[form] && (
                <div className="absolute inset-0 grid place-items-center">
                  <div className="flex flex-col items-center gap-4 text-[0.8rem] text-brand-ink/45">
                    <span className="h-9 w-9 animate-spin rounded-full border-2 border-brand-ink/15 border-t-brand-clay" />
                    در حال چیدن سرویس…
                  </div>
                </div>
              )}
              {near && (
                <Stage
                  key={service.src}
                  className={cn(
                    "relative h-full w-full cursor-grab transition-opacity duration-700 active:cursor-grabbing",
                    ready[form] ? "opacity-100" : "opacity-0",
                  )}
                  camera={[0, 2.1, 5.2]}
                  fov={28}
                  margin={0.84}
                  orbit
                  zoom={false}
                  limited
                  ariaLabel={`سرویس ${service.name} در لعاب ${glaze.name_fa}`}
                >
                  <Model
                    src={service.src}
                    color={glaze.hex}
                    goldRim={false}
                    finish={service.finish}
                    fit={2}
                    quality="hero"
                    castShadow
                    onReady={onReady}
                  />
                </Stage>
              )}
            </div>

            {/* glaze dock */}
            <div className="relative z-10 flex justify-center p-5 sm:p-6">
              <div
                role="group"
                aria-label="انتخاب رنگ لعاب"
                className="soft-shadow flex items-center gap-2 rounded-full border border-brand-ink/10 bg-brand-cream/85 p-2 backdrop-blur sm:gap-2.5 sm:p-2.5"
              >
                {GLAZES.map((item, i) => {
                  const active = i === glazes[form];
                  return (
                    <button
                      key={item.slug}
                      type="button"
                      onClick={() => setGlazes((state) => ({ ...state, [form]: i }))}
                      aria-label={item.name_fa}
                      aria-pressed={active}
                      title={item.name_fa}
                      className={cn(
                        "relative h-8 w-8 rounded-full shadow-[inset_0_-3px_6px_rgba(0,0,0,0.14),inset_0_2px_3px_rgba(255,255,255,0.45)] ring-1 ring-inset ring-brand-ink/15 transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-clay sm:h-9 sm:w-9",
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
      </div>
    </section>
  );
}
