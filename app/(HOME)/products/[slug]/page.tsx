import Image from "@/components/Image";
import { Badge } from "@/components/ui/badge";
import { getLang } from "@/lib/getLang";
import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import ProductBreadCrumb from "./components/ProductBreadCrumb";
import Qualifications from "./components/Qualifications";

interface Props {
  params: Promise<{ slug: string }>;
}

const page = async ({ params }: Props) => {
  const faLang = (await getLang()) === "FA";
  const { slug } = await params;

  const product = await prisma.product.findUnique({
    where: { url: slug },
    include: {
      qualifications: true,
      categories: {
        include: {
          category: true,
        },
      },
      image: true,
    },
  });

  if (!product) return notFound();

  return (
    <div>
      <ProductBreadCrumb
        productTitle={faLang ? product.title_fa : product.title_en}
      />

      <div className="mt-4 space-y-8 lg:space-y-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <Image
              alt="pic"
              src={product.image?.url}
              size={650}
              className="aspect-square w-full rounded-md object-cover"
            />
          </div>

          {/* Details */}
          <div className="w-full space-y-5 lg:w-1/2">
            <div className="flex flex-wrap gap-2">
              {product.categories.map((category, idx) => (
                <Badge key={idx} className="text-sm">
                  {faLang
                    ? category.category.name_fa
                    : category.category.name_en}
                </Badge>
              ))}
            </div>

            <h1 className="text-2xl font-bold lg:text-3xl">
              {faLang ? product.title_fa : product.title_en}
            </h1>

            <hr />

            <div className="space-y-6">
              <Qualifications qualifications={product.qualifications} />

              <div className="space-y-3">
                <h2 className="text-lg font-semibold">
                  {faLang ? "توضیحات" : "Description"}
                </h2>

                <p className="text-muted-foreground leading-7 lg:pl-3">
                  {faLang ? product.description_fa : product.description_en}
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="space-y-3">
          <h2 className="text-lg font-semibold">
            {faLang ? "تصاویر" : "Images"}
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
            {/* <ImageDialog images={["", "", ""]} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const product = await prisma.product.findUnique({
    where: { url: slug },
  });

  if (!product) return {};

  return {
    title: product.title_en,
    description: product.description_en,
  };
}
