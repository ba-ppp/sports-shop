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
  const [dataList, setDataList] = useState<TableRow[]>([]);

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
          },
          editableCell: {
            delete: true,
          },
        };
      });
      console.log("newData", newData);
      setDataList(newData);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

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
  };

  const handleChangeStatus = async (id: string) => {
    try {
      const changeStatus = fetch(`${ROOT_API}/${routes.histories}/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      });

      toast.promise(changeStatus, {
        loading: "Changing status...",
        success: "Changed successfully!",
        error: "Failed to change",
      });

      await changeStatus;

      const newDataList = dataList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status: {
                isDelivered: true
            }
          };
        }
        return item;
      });
        setDataList(newDataList);
    } catch (err) {
      console.log("err", err);
    }
  };
  return (
    <>
      <VirtualTable
        labelList={labelList}
        dataList={dataList}
        tableName="Users' Billing"
        handleDeleteRow={handleDeleteRow}
        handleChangeStatus={handleChangeStatus}
      />
      <Toaster />
    </>
  );
}
