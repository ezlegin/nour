import ProductCard from "./ProductCard";
import type { CardProduct } from "@/lib/types";
import { cn } from "@/lib/utils";

interface Props {
  products: CardProduct[];
  className?: string;
  columns?: 3 | 4;
}

export default function ProductGrid({ products, className, columns = 4 }: Props) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:gap-x-7 lg:gap-y-14",
        columns === 4 ? "md:grid-cols-3 xl:grid-cols-4" : "md:grid-cols-3",
        className,
      )}
    >
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
