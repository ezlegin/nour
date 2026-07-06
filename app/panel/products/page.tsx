import NewButton from "@/components/NewButton";
import { prisma } from "@/prisma/client";
import { globalPageSize, pagination } from "@/utils/pagination";
import ProductsList from "./ProductsList";
interface Props {
  searchParams: Promise<{ page: string }>;
}

const page = async ({ searchParams }: Props) => {
  const { page } = await searchParams;
  const { skip, take } = pagination(page);

  const products = await prisma.product.findMany({
    include: {
      image: true,
      categories: { include: { category: true } },
      qualifications: true,
    },
    orderBy: { id: "desc" },

    skip,
    take,
  });
  const totalProducts = await prisma.product.count();

  return (
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-2 sm:justify-between sm:items-center">
        <h3 className="text-2xl font-semibold">{totalProducts} Post</h3>
        <div className="flex gap-3 justify-between items-center">
          <NewButton href="/panel/products/new" title="New Product" />
        </div>
      </div>

      <ProductsList
        products={products}
        totalProducts={totalProducts}
        pageSize={globalPageSize}
      />
    </div>
  );
};

export default page;
