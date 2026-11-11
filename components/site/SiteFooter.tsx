import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { GLAZES } from "@/lib/glazes";

const pages = [
  ["محصولات", "/#products"],
  ["قیمت‌ها", "/#pricing"],
  ["استودیوی رنگ", "/#studio"],
  ["سرویس‌ها", "/#set"],
  ["کارخانه", "/#factory"],
  ["تماس", "/#contact"],
];

const catalogue = [
  ["همه‌ی محصولات", "/products"],
  ["سرویس‌ها", "/products?category=dinner-sets"],
  ["بشقاب گرد", "/products?category=plates-round"],
  ["کاسه", "/products?category=bowls"],
  ["ماگ و قوری", "/products?category=mugs-jugs"],
  ["سرو و چاشنی", "/products?category=serving"],
];

function Column({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <p className="text-[0.74rem] font-bold text-brand-ink/40">{title}</p>
      <ul className="mt-4 space-y-3 text-[0.86rem] text-brand-ink/65">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link href={href} className="transition-colors hover:text-brand-clay">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-brand-ink/10 bg-brand-cream">
      {/* the eight glazes, as one band */}
      <div className="flex h-1" aria-hidden="true">
        {GLAZES.map((glaze) => (
          <span key={glaze.slug} className="flex-1" style={{ backgroundColor: glaze.hex }} />
        ))}
      </div>

      <div className="shell grid gap-12 py-14 lg:grid-cols-[1.25fr_0.6fr_0.6fr_1fr] lg:gap-12 lg:py-20">
        <div>
          <Link href="/" aria-label="چینی نور، صفحه‌ی اصلی" className="inline-block">
            <Image src="/nour-logo.svg" alt="چینی نور" width={150} height={90} className="h-14 w-auto" />
          </Link>
          <p className="mt-6 max-w-sm text-[0.88rem] leading-8 text-brand-ink/60">
            کارخانه‌ی چینی نور، تولیدکننده‌ی پرسلین غذاخوری در زنجان؛ سرویس‌های گرد و
            تخت، بشقاب، کاسه، ماگ و قوری در هشت رنگ لعاب، با لب طلا.
          </p>
          <Link
            href="/#contact"
            className="group mt-7 inline-flex h-11 items-center gap-3 rounded-full bg-brand-ink ps-5 pe-1.5 text-[0.82rem] font-medium text-brand-paper transition-colors duration-300 hover:bg-brand-clay"
          >
            استعلام قیمت عمده
            <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-paper/12">
              <Phone size={13} />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:col-span-2">
          <Column title="صفحه‌ها" links={pages} />
          <Column title="محصولات" links={catalogue} />
        </div>

        <div>
          <p className="text-[0.74rem] font-bold text-brand-ink/40">تماس</p>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href="tel:+982435752007"
                className="flex items-center gap-3 rounded-2xl border border-brand-ink/10 bg-brand-paper px-4 py-3 transition-colors hover:border-brand-ink/30"
              >
                <Phone size={16} className="shrink-0 text-brand-clay" />
                <span dir="ltr" className="flex-1 text-end text-[0.9rem] font-bold tabular-nums">
                  024-35752007
                </span>
              </a>
            </li>
            <li>
              <a
                href="mailto:info@chininour.com"
                className="flex items-center gap-3 rounded-2xl border border-brand-ink/10 bg-brand-paper px-4 py-3 transition-colors hover:border-brand-ink/30"
              >
                <Mail size={16} className="shrink-0 text-brand-clay" />
                <span dir="ltr" className="min-w-0 flex-1 truncate text-end text-[0.84rem]">
                  info@chininour.com
                </span>
              </a>
            </li>
            <li className="flex gap-3 px-4 pt-1 text-[0.82rem] leading-7 text-brand-ink/60">
              <MapPin size={16} className="mt-1.5 shrink-0 text-brand-clay" />
              زنجان، کیلومتر ۲۵ جاده ابهر، کارخانه چینی نور
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-ink/10">
        <div className="shell flex flex-wrap items-center justify-between gap-4 py-5 text-[0.76rem] text-brand-ink/45">
          <p>© {new Date().getFullYear().toLocaleString("fa-IR", { useGrouping: false })} چینی نور · تمام حقوق محفوظ است.</p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-full border border-brand-ink/10 px-4 py-2 transition-colors hover:border-brand-ink/30 hover:text-brand-ink"
          >
            بازگشت به بالا
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
