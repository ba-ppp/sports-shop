"use client";

import { TableRow } from "@/types/types";
import { isEmpty, map } from "lodash";
import { useRef, useState } from "react";

type Props = {
  item: TableRow;
  handleDeleteRow?: (id: string) => void;
  handleEditRow?: (id: string, newValue: string) => void;
};
export const VirtualRow = (props: Props) => {
  const { item, handleDeleteRow, handleEditRow } = props;

  const [isEditing, toggleEditing] = useState(false);
  const [newValue, setNewValue] = useState(item?.editableCell?.Name || "");

  const inputRef = useRef<any>(null);

  const handleOnClickEditRow = () => {
    if (isEditing) {
      // Save the changes
      handleEditRow?.(item?.id, newValue);
      toggleEditing(false);
      return;
    }
    toggleEditing(true);
  };

  const handleOnClickDeleteRow = () => {
    // Delete the row
    handleDeleteRow?.(item?.id);
  };

  return (
    <tr>
      <>
        <td className="p-0">
          <div className="flex justify-center items-center h-16 px-6">
            <div className="flex h-full items-center mx-auto">
              {/* <img
              className="w-8 h-8 ml-4 mr-3 rounded-full object-cover"
              src="/trizzle-assets/images/avatar-men-circle-border.png"
              alt=""
            /> */}
              <span className="text-sm font-medium text-gray-trizzle-100">
                {item?.id}
              </span>
            </div>
          </div>
        </td>

        {map(item.editableCell, (value, key) => (
          <td className="p-0" key={key}>
            <div className="flex justify-center items-center h-16 px-6">
              {isEditing ? (
                <input
                  className="flex-1 md:flex-none px-2 py-2 placeholder-gray-800 font-normal font-heading border rounded-md"
                  type="text"
                  value={newValue}
                  onChange={(e) => setNewValue(e.target.value)}
                />
              ) : (
                <span className="text-sm font-medium text-gray-trizzle-100">
                  {newValue}
                </span>
              )}
            </div>
          </td>
        ))}

        {map(item?.inforCell, (value, key) => {
          if (key !== "Status")
            return (
              <td className="p-0" key={key}>
                <div className="flex justify-center items-center h-16 px-6">
                  <span className="text-sm font-medium text-gray-trizzle-100">
                    {value}
                  </span>
                </div>
              </td>
            );
        })}

        <td className="p-0">
          <div className="flex justify-center items-center h-16 px-6">
            {item?.status?.isActive && (
              <span className="inline-block py-1 px-2 text-xs leading-5 font-medium text-green-500 bg-green-800 rounded-full">
                ACTIVE
              </span>
            )}
            {item?.status?.isLow && (
              <span className="inline-block py-1 px-2 text-xs leading-5 font-medium text-yellow-500 bg-yellow-900 rounded-full">
                LOW STOCK
              </span>
            )}
            {item?.status?.isOut && (
              <span className="inline-block py-1 px-2 text-xs leading-5 font-medium text-red-500 bg-red-900 rounded-full">
                OUT OF STOCK
              </span>
            )}

            {item?.status?.isIn && (
              <span className="inline-block py-1 px-2 text-xs leading-5 font-medium text-green-500 bg-green-800 rounded-full">
                IN STOCK
              </span>
            )}
            {item?.status?.isDelivered && (
              <span className="inline-block py-1 px-2 text-xs leading-5 font-medium text-green-500 bg-green-800 rounded-full">
                Delivered
              </span>
            )}
            {item?.status?.isPending && (
              <span className="inline-block py-1 px-2 text-xs leading-5 font-medium text-purple-500 bg-purple-800 rounded-full">
                Pending
              </span>
            )}
            {item?.status?.isIn && (
              <span className="inline-block py-1 px-2 text-xs leading-5 font-medium text-green-500 bg-green-800 rounded-full">
                IN STOCK
              </span>
            )}
          </div>
        </td>
        {!isEmpty(item.editableCell) && (
          <td className="p-0">
            <div
              onClick={handleOnClickEditRow}
              className="cursor-pointer inline-flex h-9 px-4 mr-2 items-center justify-center bg-gray-trizzle-600 hover:bg-gray-trizzle-700 rounded-lg transition duration-200"
            >
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0002 7.50012C12.8234 7.50012 12.6538 7.57036 12.5288 7.69538C12.4037 7.82041 12.3335 7.98998 12.3335 8.16679V12.1668C12.3335 12.3436 12.2633 12.5132 12.1382 12.6382C12.0132 12.7632 11.8436 12.8335 11.6668 12.8335H2.3335C2.15669 12.8335 1.98712 12.7632 1.86209 12.6382C1.73707 12.5132 1.66683 12.3436 1.66683 12.1668V2.83346C1.66683 2.65664 1.73707 2.48708 1.86209 2.36205C1.98712 2.23703 2.15669 2.16679 2.3335 2.16679H6.3335C6.51031 2.16679 6.67988 2.09655 6.8049 1.97153C6.92992 1.8465 7.00016 1.67693 7.00016 1.50012C7.00016 1.32331 6.92992 1.15374 6.8049 1.02872C6.67988 0.903693 6.51031 0.833455 6.3335 0.833455H2.3335C1.80306 0.833455 1.29436 1.04417 0.919283 1.41924C0.54421 1.79431 0.333496 2.30302 0.333496 2.83346V12.1668C0.333496 12.6972 0.54421 13.2059 0.919283 13.581C1.29436 13.9561 1.80306 14.1668 2.3335 14.1668H11.6668C12.1973 14.1668 12.706 13.9561 13.081 13.581C13.4561 13.2059 13.6668 12.6972 13.6668 12.1668V8.16679C13.6668 7.98998 13.5966 7.82041 13.4716 7.69538C13.3465 7.57036 13.177 7.50012 13.0002 7.50012ZM3.00016 8.00679V10.8335C3.00016 11.0103 3.0704 11.1798 3.19543 11.3049C3.32045 11.4299 3.49002 11.5001 3.66683 11.5001H6.4935C6.58123 11.5006 6.66821 11.4838 6.74943 11.4506C6.83066 11.4175 6.90454 11.3686 6.96683 11.3068L11.5802 6.68679L13.4735 4.83346C13.536 4.77148 13.5856 4.69775 13.6194 4.61651C13.6533 4.53527 13.6707 4.44813 13.6707 4.36012C13.6707 4.27211 13.6533 4.18498 13.6194 4.10374C13.5856 4.0225 13.536 3.94876 13.4735 3.88679L10.6468 1.02679C10.5849 0.964303 10.5111 0.914707 10.4299 0.880861C10.3486 0.847015 10.2615 0.82959 10.1735 0.82959C10.0855 0.82959 9.99835 0.847015 9.91711 0.880861C9.83587 0.914707 9.76214 0.964303 9.70016 1.02679L7.82016 2.91346L3.1935 7.53346C3.13171 7.59575 3.08283 7.66963 3.04965 7.75085C3.01647 7.83208 2.99966 7.91905 3.00016 8.00679ZM10.1735 2.44012L12.0602 4.32679L11.1135 5.27346L9.22683 3.38679L10.1735 2.44012ZM4.3335 8.28012L8.28683 4.32679L10.1735 6.21346L6.22016 10.1668H4.3335V8.28012Z"
                  fill="#3D485B"
                ></path>
              </svg>
              <span className="ml-2 text-xs text-gray-trizzle-200 font-semibold">
                {isEditing ? "Save" : "Edit"}
              </span>
            </div>
            <div
              className="inline-flex h-9 px-4 items-center justify-center bg-gray-trizzle-600 hover:bg-gray-trizzle-700 rounded-lg transition duration-200"
              onClick={handleOnClickDeleteRow}
            >
              <svg
                width="12"
                height="15"
                viewBox="0 0 12 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3333 3.49992H8.66667V2.83325C8.66667 2.30282 8.45595 1.79411 8.08088 1.41904C7.70581 1.04397 7.1971 0.833252 6.66667 0.833252H5.33333C4.8029 0.833252 4.29419 1.04397 3.91912 1.41904C3.54405 1.79411 3.33333 2.30282 3.33333 2.83325V3.49992H0.666667C0.489856 3.49992 0.320286 3.57016 0.195262 3.69518C0.0702379 3.8202 0 3.98977 0 4.16658C0 4.3434 0.0702379 4.51297 0.195262 4.63799C0.320286 4.76301 0.489856 4.83325 0.666667 4.83325H1.33333V12.1666C1.33333 12.697 1.54405 13.2057 1.91912 13.5808C2.29419 13.9559 2.8029 14.1666 3.33333 14.1666H8.66667C9.1971 14.1666 9.70581 13.9559 10.0809 13.5808C10.456 13.2057 10.6667 12.697 10.6667 12.1666V4.83325H11.3333C11.5101 4.83325 11.6797 4.76301 11.8047 4.63799C11.9298 4.51297 12 4.3434 12 4.16658C12 3.98977 11.9298 3.8202 11.8047 3.69518C11.6797 3.57016 11.5101 3.49992 11.3333 3.49992ZM4.66667 2.83325C4.66667 2.65644 4.7369 2.48687 4.86193 2.36185C4.98695 2.23682 5.15652 2.16659 5.33333 2.16659H6.66667C6.84348 2.16659 7.01305 2.23682 7.13807 2.36185C7.2631 2.48687 7.33333 2.65644 7.33333 2.83325V3.49992H4.66667V2.83325ZM9.33333 12.1666C9.33333 12.3434 9.2631 12.513 9.13807 12.638C9.01305 12.763 8.84348 12.8333 8.66667 12.8333H3.33333C3.15652 12.8333 2.98695 12.763 2.86193 12.638C2.7369 12.513 2.66667 12.3434 2.66667 12.1666V4.83325H9.33333V12.1666Z"
                  fill="#3D485B"
                ></path>
              </svg>
              <span className="ml-2 text-xs text-gray-trizzle-200 font-semibold">
                Delete
              </span>
            </div>
          </td>
        )}
      </>
    </tr>
  );
};
