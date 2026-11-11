import { notFound } from "next/navigation";
import ProductDetail from "@/components/shop/ProductDetail";
import ProductGrid from "@/components/shop/ProductGrid";
import SectionHeading from "@/components/shop/SectionHeading";
import { modelForProduct } from "@/lib/models";
import { catalogue } from "@/data/showcase";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return catalogue.map((product) => ({ slug: product.url }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = catalogue.find((item) => item.url === slug);
  if (!product) notFound();

  const model = modelForProduct(product);
  const related = catalogue
    .filter(
      (item) =>
        item.url !== product.url &&
        item.categories.some((category) =>
          product.categories.some((entry) => entry.slug === category.slug),
        ),
    )
    .slice(0, 4);

  return (
    <>
      <ProductDetail product={product} model={model} />

      {related.length > 0 && (
        <section className="shell pb-20 pt-6 lg:pb-28">
          <SectionHeading
            index="۰۵"
            eyebrow="در همین خانواده"
            title={<>قطعه‌های مرتبط.</>}
            description="با همان فرم و همان هشت لعاب."
          />
          <ProductGrid products={related} className="mt-10" />
        </section>
      )}
    </>
  );
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = catalogue.find((item) => item.url === slug);
  if (!product) return {};
  return {
    title: product.title_fa,
    description: product.subtitle_fa ?? product.title_fa,
  };
}
