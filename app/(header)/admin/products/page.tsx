import { VirtualTable } from "@/components/admin/VirtualTable";

export default function Page() {
  const labelList = ["Id", "Name", "Price", "Status"];
  const dataList = [
    {
      id: 1,
      name: "Category 1",
      price: "100",
      isLow: true,
    },
  ];
  return (
    <VirtualTable
      isProduct
      tableName="Products"
      labelList={labelList}
      dataList={dataList}
    />
  );
}
