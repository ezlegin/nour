import AdminForm from "@/components/forms/AdminForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import AdminsList from "./AdminsList";
import { prisma } from "@/prisma/client";
import { globalPageSize, pagination } from "@/utils/pagination";

interface Props {
  searchParams: Promise<{ page: string }>;
}

const page = async ({ searchParams }: Props) => {
  const { page } = await searchParams;
  const { skip, take } = pagination(page);

  const admins = await prisma.admin.findMany({
    skip,
    take,
    orderBy: { id: "desc" },
  });
  const totalAdmins = await prisma.admin.count();
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-2xl font-semibold">Admins</h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button>New Admin</Button>
          </DialogTrigger>
          <DialogContent dir="ltr">
            <DialogTitle>Create Admin</DialogTitle>
            <AdminForm />
          </DialogContent>
        </Dialog>
      </div>

      <AdminsList
        admins={admins}
        pageSize={globalPageSize}
        totalAdmins={totalAdmins}
      />
    </div>
  );
};

export default page;
