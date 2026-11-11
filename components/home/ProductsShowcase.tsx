import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProductGrid from "@/components/shop/ProductGrid";
import { catalogue, showcaseProducts } from "@/data/showcase";
import { GLAZES } from "@/lib/glazes";

const fa = (n: number) => n.toLocaleString("fa-IR");

export default function ProductsShowcase() {
  return (
    <section id="products" className="scroll-mt-24 bg-brand-cream py-20 lg:py-28">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <div>
            <p className="eyebrow">
              <span>۰۳</span>
              محصولات
            </p>
            <h2 className="mt-5 text-[2.2rem] font-black leading-[1.22] sm:text-[2.8rem] lg:text-[3.2rem]">
              آنچه در کارخانه
              <br />
              <span className="text-brand-clay">ساخته می‌شود</span>.
            </h2>
          </div>
          <p className="max-w-[26rem] text-[0.92rem] leading-8 text-brand-ink/60">
            بشقاب گرد و تخت، کاسه، ماگ، قوری و سرویس‌های کامل؛ هر قطعه در هشت لعاب.
            رنگ را همین‌جا روی هر کارت عوض کنید.
          </p>
        </div>

        <ProductGrid products={showcaseProducts} className="mt-12" />

        <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-5 border-t border-brand-ink/10 pt-7 lg:mt-16">
          <p className="flex items-center gap-3 text-[0.84rem] text-brand-ink/55">
            <span className="flex ps-1.5" aria-hidden="true">
              {GLAZES.map((glaze) => (
                <span
                  key={glaze.slug}
                  className="-ms-1.5 h-[1.125rem] w-[1.125rem] rounded-full ring-2 ring-brand-cream"
                  style={{ backgroundColor: glaze.hex }}
                />
              ))}
            </span>
            {fa(catalogue.length)} محصول، هر کدام در {fa(GLAZES.length)} رنگ لعاب
          </p>
          <Link
            href="/products"
            className="group ms-auto inline-flex h-12 items-center gap-3 rounded-full bg-brand-ink ps-6 pe-1.5 text-[0.84rem] font-medium text-brand-paper transition-colors duration-300 hover:bg-brand-clay"
          >
            همه‌ی محصولات
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-paper/12 transition-transform duration-300 group-hover:-translate-x-0.5">
              <ArrowLeft size={15} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
