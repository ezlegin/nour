import EditButton from "@/components/EditButton";
import AdminForm from "@/components/forms/AdminForm";
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
import { Admin } from "@/prisma/generated/prisma";

interface Props {
  admins: Admin[];
  totalAdmins: number;
  pageSize: number;
}

const AdminsList = ({ admins: categories, totalAdmins, pageSize }: Props) => {
  return (
    <div className="card">
      <Table columns={columns} data={categories} renderRows={renderRows} />
      <Pagination pageSize={pageSize} totalItems={totalAdmins} />
    </div>
  );
};

const renderRows = (admin: Admin) => {
  return (
    <TableRow key={admin.id} className="odd:bg-muted">
      <TableCell className="text-left">{admin.name}</TableCell>
      <TableCell className="text-left">{admin.email}</TableCell>

      <TableCell className="flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <EditButton />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="space-y-6">
              <DialogTitle>Edit Admin</DialogTitle>
              <AdminForm admin={admin} />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  );
};

const columns = [
  { label: "Full Name", className: "" },
  {
    label: "Actions",
    className: "text-right w-[60px]",
  },
];

export default AdminsList;
