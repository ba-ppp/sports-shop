import { VirtualTable } from "@/components/admin/VirtualTable";
import { TableRow } from "@/types/types";

type Params = {
  id: string;
};

export default function Page({ params }: { params: Params }) {
  const { id } = params;

  const labelList = ["Id", "Product name", "Price", "Quantity", "Total"];

  const dataList: TableRow[] = [
    {
      id: "1",
      inforCell: {
        "Product name": "Product 1",
        Price: "100$",
        Quantity: "1",
        Total: "100$",
      },
    },
  ];

  return (
    <VirtualTable
      labelList={labelList}
      dataList={dataList}
      tableName={`Billing`}
    />
  );
}
