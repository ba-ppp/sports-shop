"use client";

import { VirtualTable } from "@/components/admin/VirtualTable";
import { ROOT_API } from "@/constant/env";
import { routes } from "@/constant/routes";
import { TableRow } from "@/types/types";
import { getAccessToken } from "@/utils/utils";
import { useEffect, useState } from "react";

export default function Page() {
  const labelList = ["Id", "Name", "Price", "Image", "Status"];

  const [dataList, setDataList] = useState<TableRow[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("/api/products");

      setDataList(await res.json());
    };
    fetchCategories();
  }, []);

  const handleEditRow = async (id: string, newValue: string, newPrice?: string, newImg?: File) => {
    const formData = new FormData();
    formData.append("name", newValue);
    formData.append("quality", "100");
    formData.append("price", newPrice || "0");
    formData.append("image", newImg || new File([""], "empty"));
    formData.append("description", "test");
    formData.append("categoryId", "1");

    await fetch(`${ROOT_API}/${routes.products}/${id}`, {
      method: "PUT",
      body: formData,
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  };

  const handleAddNewRow = async () => {
    const newList = [
      ...dataList,
      {
        id: String(dataList.length),
        inforCell: {
          Status: "",
        },
        status: {
          isLow: true,
        },
        editableCell: {
          Name: `New Product ${String(dataList.length)}`,
          Price: '100'
        },
      },
    ];
    setDataList(newList);

    const formData = new FormData();
    formData.append("name", `New Product ${String(dataList.length)}`);
    formData.append("quality", "100");
    formData.append("file", new File([""], "empty"));
    formData.append("description", "test");
    formData.append("categoryId", "1");
    formData.append("price", "200");

    await fetch(`${ROOT_API}/${routes.products}`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  };

  const handleDeleteRow = async (id: string) => {
    await fetch(`${ROOT_API}/${routes.products}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      }
    });
  };
  return (
    <VirtualTable
      labelList={labelList}
      tableName="Products"
      dataList={dataList}
      handleAddNewRow={handleAddNewRow}
      handleEditRow={handleEditRow}
      handleDeleteRow={handleDeleteRow}
    />
  );
}
