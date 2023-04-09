"use client";
import { VirtualTable } from "@/components/admin/VirtualTable";
import { ROOT_API } from "@/constant/env";
import { routes } from "@/constant/routes";
import { userAtom } from "@/store/token.store";
import { TableRow } from "@/types/types";
import { getAccessToken } from "@/utils/utils";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function Page() {
  const labelList = ["Id", "User", "Date", "Status"];
  const [dataList, setDateList] = useState<TableRow[]>([]);

  const [userProfile, _] = useAtom(userAtom);
  const fetchData = async () => {
    
    try {
      const res = await fetch("/api/histories", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      });
      // const res = await fetch(`${ROOT_API}/api/${routes.histories}`)
      const data = await res.json();
      const newData = data?.map((item: any) => {
        return {
          ...item,
          inforCell: {
            ...item?.inforCell,
            User: userProfile.firstName
          },
          editableCell: {
            delete: true
          }
          
        };
      });
      setDateList(newData);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    if (!userProfile.firstName) return;
    fetchData();
  }, [userProfile]);

  const handleDeleteRow = async (id: string) => {
    const deleteRow = fetch(`${ROOT_API}/${routes.histories}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });

    toast.promise(deleteRow, {
      loading: "Deleting...",
      success: "Deleted!",
      error: "Failed to delete",
    });

    await deleteRow;
  }
  return (
    <>
    <VirtualTable
      labelList={labelList}
      dataList={dataList}
      tableName="History purcharse"
      handleDeleteRow={handleDeleteRow}
    />
    <Toaster />
    </>
  );
}
