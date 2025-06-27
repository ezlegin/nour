import Table from "@/components/Table";
import { TableCell, TableRow } from "@/components/ui/table";
import { getLang } from "@/lib/getLang";
import { Qualification } from "@/prisma/generated/prisma";

interface Props {
  qualifications: Qualification[];
}

const Qualifications = async ({ qualifications }: Props) => {
  const faLang = (await getLang()) === "FA";

  const renderRows = (data: Qualification) => {
    return (
      <TableRow key={data.metric_en} className="odd:bg-muted/50">
        <TableCell>{faLang ? data.metric_fa : data.metric_en}</TableCell>
        <TableCell className={faLang ? "text-left" : "text-right"}>
          {faLang ? data.value_fa : data.value_en}
        </TableCell>
      </TableRow>
    );
  };

  const columns = [
    {
      label: faLang ? "متریک" : "Metric",
      className: faLang ? "text-right" : "text-left",
    },
    {
      label: faLang ? "مقدار" : "Value",
      className: faLang ? "text-left" : "text-right",
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold">
        {faLang ? "ویژگی ها" : "Qualifications"}
      </h2>
      <div className="pl-3">
        <Table
          columns={columns}
          data={qualifications}
          renderRows={renderRows}
        />
      </div>
    </div>
  );
};

export default Qualifications;
