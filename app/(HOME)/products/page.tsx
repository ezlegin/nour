import { Suspense } from "react";
import ProductGrid from "@/components/shop/ProductGrid";
import ProductsBrowser from "@/components/shop/ProductsBrowser";
import SectionHeading from "@/components/shop/SectionHeading";
import { catalogue } from "@/data/showcase";

export const dynamic = "force-static";

export const metadata = {
  title: "محصولات",
  description:
    "بشقاب گرد و تخت، کاسه، ماگ، قوری و سرویس‌های کامل — پرسلین نور در هشت رنگ لعاب.",
};

const CHIPS = [
  { slug: "", name_fa: "همه" },
  { slug: "plates-round", name_fa: "بشقاب گرد" },
  { slug: "plates-flat", name_fa: "بشقاب تخت" },
  { slug: "bowls", name_fa: "کاسه" },
  { slug: "mugs-jugs", name_fa: "ماگ و قوری" },
  { slug: "serving", name_fa: "سرو و چاشنی" },
  { slug: "dinner-sets", name_fa: "سرویس" },
];

export default function ProductsPage() {
  return (
    <div className="shell py-12 lg:py-16">
      <SectionHeading
        index="۰۱"
        eyebrow="محصولات"
        title={
          <>
            همه‌ی قطعه‌ها،
            <br />
            در هشت لعاب.
          </>
        }
        description="هر قطعه در چند رنگ تولید می‌شود؛ رنگ را در صفحه‌ی محصول روی مدل سه‌بعدی امتحان کنید."
      />

      <Suspense fallback={<ProductGrid products={catalogue} className="mt-10" />}>
        <ProductsBrowser products={catalogue} chips={CHIPS} />
      </Suspense>
    </div>
  );
}
