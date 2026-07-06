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

      <div className="space-y-10">
        <div className="flex gap-10 mt-4">
          <div className="w-1/2">
            <Image
              alt="pic"
              src={product.image?.url}
              size={650}
              className="rounded-md aspect-square w-full"
            />
          </div>
          <div className="space-y-5 w-1/2">
            {product.categories.map((category, idx) => (
              <Badge key={idx} className="text-sm">
                {faLang ? category.category.name_fa : category.category.name_en}
              </Badge>
            ))}
            <h1 className="text-2xl font-bold">
              {faLang ? product.title_fa : product.title_en}
            </h1>

            <hr />

            <div className="space-y-6">
              <Qualifications qualifications={product.qualifications} />

              <div className="space-y-3">
                <h2 className="text-lg font-semibold">
                  {faLang ? "توضیحات" : "Description"}
                </h2>
                <p className="text-muted-foreground pl-3">
                  {faLang ? product.description_fa : product.description_en}
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="space-y-3">
          <div className="grid grid-cols-5 gap-4">
            {faLang ? "تصاویر" : "Images"}
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
