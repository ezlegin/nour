import Image from "@/components/Image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getLang } from "@/lib/getLang";
import { prisma } from "@/prisma/client";
import Link from "next/link";

const ProductsGrid = async () => {
  const faLang = (await getLang()) === "FA";

  const categories = await prisma.category.findMany();

  const products = await prisma.product.findMany({
    where: { status: "PUBLISHED" },
    include: {
      categories: true,
      image: true,
    },
  });

  if (products.length === 0)
    return (
      <div className="text-xs text-muted-foreground" dir="ltr">
        No Products Yet...
      </div>
    );

  return (
    <Tabs defaultValue={categories[0]?.name_en} className="w-full">
      <TabsList
        dir={faLang ? "rtl" : "ltr"}
        className="w-full bg-transparent gap-10 max-w-sm mx-auto mb-8"
      >
        {categories.map((category) => (
          <TabsTrigger key={category.id} value={category.name_en}>
            {faLang ? category.name_fa : category.name_en}
          </TabsTrigger>
        ))}
      </TabsList>

      {categories.map((category) => {
        const categoryProducts = products.filter((product) =>
          product.categories.some((cat) => cat.categoryId === category.id),
        );

        return (
          <TabsContent key={category.id} value={category.name_en}>
            {categoryProducts.length > 0 ? (
              <div
                dir={faLang ? "rtl" : "ltr"}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
              >
                {categoryProducts.map((product) => (
                  <Link href={`/products/${product.url}`} key={product.id}>
                    <div className="bg-muted rounded-md aspect-square text-muted-foreground flex items-center justify-center overflow-hidden">
                      <Image
                        alt={product.title_en}
                        src={product.image?.url} // fallback if no image
                        size={400}
                        className="rounded-md object-cover w-full h-full"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground mt-4">
                {faLang
                  ? "محصولی در این دسته وجود ندارد."
                  : "No products in this category."}
              </p>
            )}
          </TabsContent>
        );
      })}
    </Tabs>
  );
};

export default ProductsGrid;
