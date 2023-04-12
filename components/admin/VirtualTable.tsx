"use client";

import { TableRow } from "@/types/types";
import dynamic from "next/dynamic";

const VirtualRow = dynamic(
  () => import("./VirtualRow").then((mod) => mod.VirtualRow),
  {
    ssr: false,
  }
);

type Props = {
  tableName: string;
  labelList: string[];
  dataList: TableRow[];
  handleEditRow?: (
    id: string,
    newValue: string,
    newPrice?: string,
    newImg?: File
  ) => void;
  handleDeleteRow?: (id: string) => void;
  handleAddNewRow?: () => void;
  handleChangeStatus?: (id: string) => void;
  hasImageField?: boolean;
  canEditRow?: boolean;
  disabledAdd?: boolean;
};
export const VirtualTable = (props: Props) => {
  const {
    tableName,
    labelList,
    dataList,
    handleEditRow,
    handleDeleteRow,
    handleAddNewRow,
    hasImageField,
    canEditRow,
    handleChangeStatus,
    disabledAdd,
  } = props;

  return (
    <section className="py-3">
      <div className="container px-4 mx-auto">
        <div className="pt-6 pb-8 bg-gray-trizzle-500 rounded-xl">
          <div className="px-6">
            <div className="mb-6">
              <h4 className="text-lg text-gray-trizzle-100 font-semibold mb-6">
                {tableName}
              </h4>
              <div className="md:flex items-center justify-between">
                <div className="inline-flex items-center h-14 max-w-xxs w-full max-w-sm py-4 px-3 border border-gray-trizzle-400 hover:border-white focus-within:border-green-500 rounded-lg">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4733 12.5267L10.9999 10.0734C11.96 8.87633 12.4249 7.35692 12.2991 5.82759C12.1733 4.29826 11.4664 2.87525 10.3236 1.85115C9.18085 0.827062 7.68914 0.279732 6.15522 0.321705C4.62129 0.363679 3.16175 0.991766 2.0767 2.07682C0.991644 3.16187 0.363557 4.62142 0.321583 6.15534C0.27961 7.68926 0.82694 9.18097 1.85103 10.3237C2.87512 11.4665 4.29814 12.1735 5.82747 12.2993C7.3568 12.4251 8.87621 11.9601 10.0733 11.0001L12.5266 13.4534C12.5886 13.5159 12.6623 13.5655 12.7436 13.5993C12.8248 13.6332 12.9119 13.6506 12.9999 13.6506C13.0879 13.6506 13.1751 13.6332 13.2563 13.5993C13.3376 13.5655 13.4113 13.5159 13.4733 13.4534C13.5934 13.3291 13.6606 13.163 13.6606 12.9901C13.6606 12.8172 13.5934 12.651 13.4733 12.5267ZM6.33327 11.0001C5.41029 11.0001 4.50804 10.7264 3.74061 10.2136C2.97318 9.7008 2.37504 8.97197 2.02183 8.11925C1.66862 7.26653 1.57621 6.32821 1.75627 5.42297C1.93634 4.51773 2.38079 3.6862 3.03344 3.03356C3.68608 2.38091 4.5176 1.93646 5.42285 1.75639C6.32809 1.57633 7.2664 1.66874 8.11913 2.02195C8.97185 2.37516 9.70068 2.9733 10.2135 3.74073C10.7262 4.50816 10.9999 5.41041 10.9999 6.33339C10.9999 7.57107 10.5083 8.75805 9.6331 9.63322C8.75793 10.5084 7.57095 11.0001 6.33327 11.0001Z"
                      fill="#3D485B"
                    ></path>
                  </svg>
                  <input
                    className="block w-full ml-2 outline-none bg-transparent text-sm text-gray-trizzle-100 font-medium"
                    id="messagesInput1-1"
                    placeholder={`Search ${tableName}...`}
                    type="search"
                  />
                </div>
                {!disabledAdd && (
                  <div className="w-full sm:w-auto px-4">
                    <div>
                      <a
                        className="inline-block py-2 px-4 mr-3 text-xs text-center font-semibold leading-normal text-gray-trizzle-400 bg-gray-trizzle-600 hover:bg-gray-trizzle-700 rounded-lg transition duration-200"
                        href="#"
                      >
                        Cancel
                      </a>
                      <div
                        className="cursor-pointer inline-block py-2 px-4 text-xs text-center font-semibold leading-normal text-blue-50 bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200"
                        onClick={handleAddNewRow}
                      >
                        Add
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full pb-6 overflow-x-auto">
              <table className="w-full min-w-max">
                <thead>
                  <tr className="text-left">
                    {labelList.map((label, i) => (
                      <th key={i} className="p-0">
                        <div className="flex items-center h-11 py-3 px-6 bg-gray-trizzle-600">
                          <span className="mx-auto text-xs text-gray-trizzle-300 font-semibold">
                            {label}
                          </span>
                        </div>
                      </th>
                    ))}

                    {/* <th className="p-0">
                      <div className="flex items-center h-11 py-3 px-6 bg-gray-trizzle-600">
                        <span className="text-xs text-gray-trizzle-300 font-semibold"></span>
                      </div>
                    </th> */}
                    <th className="p-0">
                      <div className="flex items-center h-11 py-3 px-6 rounded-r-xl bg-gray-trizzle-600"></div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataList.map((data, i) => (
                    <VirtualRow
                      key={i}
                      item={data}
                      handleEditRow={handleEditRow}
                      handleDeleteRow={handleDeleteRow}
                      hasImgField={hasImageField}
                      canEditRow={canEditRow}
                      handleChangeStatus={handleChangeStatus}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
