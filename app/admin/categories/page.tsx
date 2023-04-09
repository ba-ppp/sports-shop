"use client";
import { VirtualTable } from "@/components/admin/VirtualTable";
import { ROOT_API } from "@/constant/env";
import { routes } from "@/constant/routes";
import { TableRow } from "@/types/types";
import { getAccessToken, handleChangeTableData } from "@/utils/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function Page() {
  const labelList = ["Id", "Name", "Status"];
  const [dataList, setDataList] = useState<TableRow[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("/api/categories");

      setDataList(await res.json());
    };
    fetchCategories();
  }, []);

  const handleEditRow = async (id: string, newValue: string) => {
    const editRow = axios.put(
      `${ROOT_API}/${routes.categories}/${id}`,
      {
        name: newValue,
      },
      {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      }
    );

    toast.promise(editRow, {
      loading: "Updating...",
      success: "Updated!",
      error: "Failed to update",
    });

    await editRow;
  };

  const handleAddNewRow = async () => {
    const newList = [
      ...dataList,
      {
        id: String(dataList.length),
        editableCell: {
          Name: `New Product ${String(dataList.length)}`,
        },
        status: {
          isActive: true,
        },
      },
    ];
    setDataList(newList);
    await axios.post(
      `${ROOT_API}/${routes.categories}`,
      {
        name: `New Product ${String(dataList.length)}`,
      },
      {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      }
    );
  };

  const handleDeleteRow = async (id: string) => {
    const deleteRow = axios.delete(`${ROOT_API}/${routes.categories}/${id}`, {
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

    setDataList((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <>
      <VirtualTable
        tableName="Categories"
        labelList={labelList}
        dataList={dataList}
        handleEditRow={handleEditRow}
        handleAddNewRow={handleAddNewRow}
        handleDeleteRow={handleDeleteRow}
        canEditRow
      />
      <Toaster />
    </>
  );
}
