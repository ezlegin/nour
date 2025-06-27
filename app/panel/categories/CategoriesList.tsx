import EditButton from "@/components/EditButton";
import CategoryForm from "@/components/forms/CategoryForm";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { Category } from "@/prisma/generated/prisma";

interface Props {
  categories: Category[];
  totalCategories: number;
  pageSize: number;
}

const CategoriesList = ({ categories, totalCategories, pageSize }: Props) => {
  return (
    <div className="card">
      <Table columns={columns} data={categories} renderRows={renderRows} />
      <Pagination pageSize={pageSize} totalItems={totalCategories} />
    </div>
  );
};

const renderRows = (category: Category) => {
  return (
    <TableRow key={category.id} className="odd:bg-muted">
      <TableCell className="text-left">{category.name_en}</TableCell>
      <TableCell className="text-left">{category.name_fa}</TableCell>

      <TableCell className="flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <EditButton />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="space-y-6">
              <DialogTitle>New Category</DialogTitle>
              <CategoryForm type="UPDATE" category={category} />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  );
};

const columns = [
  { label: "Name En", className: "" },
  { label: "Name Fa", className: "" },
  {
    label: "Actions",
    className: "text-right w-[60px]",
  },
];

export default CategoriesList;
