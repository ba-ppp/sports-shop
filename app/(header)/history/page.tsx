import { VirtualTable } from "@/components/admin/VirtualTable";
import { TableRow } from "@/types/types";

export default function Page() {
  const labelList = ["Id", "User", "Date", "Status"];
  const dataList: TableRow[] = [
    {
      id: "1",
      inforCell: {
        User: "name",
        Date: "23-9-2023",
        Status: "",
      },
      status: {
        isPending: true,
      },
    },
  ];
  return (
    <VirtualTable
      labelList={labelList}
      dataList={dataList}
      tableName="History purcharse"
    />
  );
}
