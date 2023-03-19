import { VirtualTable } from "@/components/admin/VirtualTable";
import { TableRow } from "@/types/types";

export default function Page() {
  const labelList = ["Id", "Name", "Status"];
  const dataList: TableRow[] = [
    {
      id: "1",
      editableCell: {
        Name: "Category 1",
      },
      inforCell: {
        Status: "",
      },
      status: {
        isActive: true,
      },
    },
  ];
  return (
    <VirtualTable
      tableName="Categories"
      labelList={labelList}
      dataList={dataList}
    />
  );
}
