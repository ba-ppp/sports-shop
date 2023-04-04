"use client";
import { VirtualTable } from "@/components/admin/VirtualTable";
import { ROOT_API } from "@/constant/env";
import { routes } from "@/constant/routes";
import { TableRow } from "@/types/types";
import { getAccessToken } from "@/utils/utils";
import { useEffect, useState } from "react";

type Params = {
  id: string;
};

export default function Page({ params }: { params: Params }) {
  const { id } = params;

  const labelList = ["Id", "Product name", "Price", "Quantity", "Total"];

  const handleGetDetail = async () => {
    try {
      const res = await fetch(`${ROOT_API}/${routes.histories}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      });
      // const res = await fetch(`${ROOT_API}/api/${routes.histories}`)
      const data = await res.json();
      const foundIndex = data?.findIndex(
        (item: any) => item.id === parseInt(id)
      );

      if (foundIndex === -1) return;

      const newData = data[foundIndex]?.historyProducts.map((item: any) => {
        return {
          id: item.historyId,
          inforCell: {
            "Product name": item?.productSize?.product?.name,
            Price: item?.productSize?.price,
            Quantity: item?.quantity,
            Total: item?.productSize?.price * item?.quantity,
          },
        };
      });

      setDataList(newData);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    handleGetDetail();
  }, []);

  const [dataList, setDataList] = useState<TableRow[]>([]);

  return (
    <VirtualTable
      labelList={labelList}
      dataList={dataList}
      tableName={`Billing`}
    />
  );
}
