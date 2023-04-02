"use client";
import { VirtualTable } from "@/components/admin/VirtualTable";
import { ROOT_API } from "@/constant/env";
import { routes } from "@/constant/routes";
import { TableRow } from "@/types/types";
import { getAccessToken } from "@/utils/utils";
import { useEffect, useState } from "react";

export default function Page() {
  const labelList = ["Id", "User", "Date", "Status"];
  const [dataList, setDateList] = useState<TableRow[]>([]);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/histories", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      });
      // const res = await fetch(`${ROOT_API}/api/${routes.histories}`)
      // const data = await res.json()
      // setDateList(data)
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <VirtualTable
      labelList={labelList}
      dataList={dataList}
      tableName="History purcharse"
    />
  );
}
