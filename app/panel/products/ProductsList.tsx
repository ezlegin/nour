import EditButton from "@/components/EditButton";
import Image from "@/components/Image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ViewButton from "@/components/ViewButton";
import {
  Category,
  Image as ImageType,
  Product,
  ProductCategory,
  Qualification,
} from "@/prisma/generated/prisma";
import { placeHolder } from "@/public";
import { formatMiladiDate } from "@/utils/format";
import Link from "next/link";

export interface CategoriesType {
  category: Category;
  postId: number;
  categoryId: number;
}
export interface ProductCategoryType extends ProductCategory {
  category: Category;
}

export interface ProductType extends Product {
  image: ImageType | null;
  categories: ProductCategoryType[];
  qualifications: Qualification[];
}

interface Props {
  product: ProductType[];
  totalProducts: number;
  pageSize: number;
}

const ProductsList = async ({ product, totalProducts, pageSize }: Props) => {
  return (
    <div className="card">
      <Table columns={columns} data={product} renderRows={renderRows} />
      <Pagination pageSize={pageSize} totalItems={totalProducts} />
    </div>
  );
};

const renderRows = (product: ProductType) => {
  return (
    <TableRow key={product.id} className="odd:bg-muted/40">
      <TableCell>
        <Link
          href={`/panel/products/${product.id}`}
          className="flex gap-2 items-center text-primary"
        >
          <Image
            alt="product"
            src={product.image?.url || placeHolder}
            size={50}
            className="rounded-sm aspect-square object-cover hidden lg:block bg-muted"
          />
          <span dir="rtl">
            <Tooltip>
              <TooltipTrigger>{product.title_en}</TooltipTrigger>
              <TooltipContent>{product.title_fa}</TooltipContent>
            </Tooltip>
          </span>
        </Link>
      </TableCell>
      <TableCell className="text-center hidden xl:table-cell">
        <Badge
          variant={product.status === "DRAFT" ? "secondary" : "green"}
          className="w-[100px]"
        >
          {product.status}
        </Badge>
      </TableCell>
      <TableCell className="text-center" dir="rtl">
        {product.categories &&
          product.categories
            .map((item) => item.category.name_en)
            .slice(0, 2)
            .join(", ") +
            (product.categories.length > 2
              ? `، ${product?.categories?.length - 2} دیگر...`
              : "")}
      </TableCell>
      <TableCell className="text-center hidden xl:table-cell">
        {formatMiladiDate(product.createdAt)}
      </TableCell>
      <TableCell className="lg:flex gap-2 hidden ">
        <EditButton href={`/panel/products/${product.id}`} />
        <ViewButton
          href={`${process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BASE_URL : "http://localhost:3000"}/products/${product?.url}`}
        />
      </TableCell>
    </TableRow>
  );
};

const columns = [
  { label: "Title", className: "w-[550px]" },
  { label: "Status", className: "text-center hidden xl:table-cell" },
  { label: "Category", className: "text-center" },
  { label: "Published", className: "text-center hidden xl:table-cell" },
  {
    label: "Actions",
    className: "text-right w-[60px] hidden lg:table-cell",
  },
];

export default ProductsList;
