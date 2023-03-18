import { VirtualTable } from "@/components/admin/VirtualTable";

export default function Page() {
    const labelList = [
        "Id",
        "Name",
        "Status"
    ]
    const dataList = [
        {
            id: 1,
            name: "Category 1",
            status: "Active"
        },
    ]
  return (
    <VirtualTable tableName="Categories" labelList={labelList} dataList={dataList} />
  );
}
