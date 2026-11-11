import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CeramicArt from "@/components/brand/CeramicArt";
import SectionHeading from "@/components/shop/SectionHeading";

const shapes = [
  {
    slug: "plates-round",
    index: "۰۱",
    title: "بشقاب گرد",
    blurb:
      "لبه‌ی بلند و گودی ملایم؛ بشقاب اصلی سفره. در ۱۹، ۲۴ و ۲۶ سانتی‌متر.",
    variant: "plate" as const,
    color: "#D88080",
  },
  {
    slug: "plates-flat",
    index: "۰۲",
    title: "بشقاب تخت",
    blurb:
      "سطح پهن و کم‌عمق؛ برای سرو غذاهای اصلی، پیش‌غذا و دیس‌های میز. در ۲۵ و ۳۰ سانتی‌متر.",
    variant: "platter" as const,
    color: "#5B5B5E",
  },
];

const rest = [
  { slug: "bowls", label: "کاسه", meta: "سالاد، سوپ، دسر" },
  { slug: "mugs-jugs", label: "ماگ و قوری", meta: "۳۵۰ تا ۸۰۰ میلی‌لیتر" },
  { slug: "dinner-sets", label: "سرویس‌های کامل", meta: "۱۵ تا ۳۰ پارچه" },
];

export default function Collections() {
  return (
    <section id="collections" className="shell scroll-mt-24 py-20 lg:py-28">
      <SectionHeading
        index="۰۳"
        eyebrow="خانواده‌های محصول"
        title={
          <>
            دو خانواده بشقاب،
            <br />
            یک زبان رنگی.
          </>
        }
        description="خط تولید نور بر پایه‌ی دو فرم بشقاب بنا شده است: گرد و تخت. بقیه‌ی قطعه‌ها — کاسه، ماگ، قوری و سرویس‌ها — با همان فرم و همان هشت لعاب ساخته می‌شوند."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {shapes.map((shape) => (
          <Link
            key={shape.slug}
            href={`/products?category=${shape.slug}`}
            className="group relative overflow-hidden rounded-sm border border-brand-ink/10 bg-brand-cream"
          >
            <div className="grid gap-6 p-7 sm:grid-cols-[1fr_0.9fr] sm:items-center sm:p-9">
              <div>
                <p className="numeral text-[0.62rem] tracking-[0.2em] text-brand-ink/35">
                  {shape.index}
                </p>
                <h3 className="mt-3 text-[1.7rem] font-black">{shape.title}</h3>
                <p className="mt-3 max-w-xs text-[0.8rem] leading-7 text-brand-ink/55">
                  {shape.blurb}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[0.72rem] text-brand-ink/65">
                  <span className="underline-grow">دیدن این خانواده</span>
                  <ArrowLeft size={13} className="transition group-hover:-translate-x-1" />
                </span>
              </div>
              <div
                className="relative aspect-square rounded-full"
                style={{
                  background: `radial-gradient(80% 80% at 50% 40%, ${shape.color}22 0%, transparent 70%)`,
                }}
              >
                <div className="absolute inset-2 grid place-items-center">
                  <CeramicArt variant={shape.variant} color={shape.color} pattern="plain" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-5 grid gap-px overflow-hidden rounded-sm border border-brand-ink/10 bg-brand-ink/10 sm:grid-cols-3">
        {rest.map((item) => (
          <Link
            key={item.slug}
            href={`/products?category=${item.slug}`}
            className="group flex items-center justify-between gap-4 bg-brand-paper px-6 py-6 transition hover:bg-brand-cream"
          >
            <div>
              <p className="text-[0.95rem] font-semibold">{item.label}</p>
              <p className="mt-1 text-[0.66rem] text-brand-ink/40">{item.meta}</p>
            </div>
            <ArrowLeft
              size={15}
              className="text-brand-ink/30 transition group-hover:-translate-x-1 group-hover:text-brand-ink"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
