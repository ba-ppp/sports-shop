import { VirtualTable } from "@/components/admin/VirtualTable";
import { TableRow } from "@/types/types";

export default function Page() {
  const labelList = ["Id", "Name", "Price", "Status"];
  const dataList: TableRow[] = [
    {
      id: "1",
      editableCell: {
        Price: "100$",
        Name: "Product 1",
      },
      inforCell: {
        Status: "",
      },
      status: {
        isLow: true,
      },
    },
  ];
  return (
    <VirtualTable
      labelList={labelList}
      tableName="Products"
      dataList={dataList}
    />
  );
}
