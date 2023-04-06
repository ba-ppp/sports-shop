"use client";

import { ROOT_API } from "@/constant/env";
import { routes } from "@/constant/routes";
import { cartAtom, subTotalPriceAtom } from "@/store/cart.store";
import { CartItem } from "@/types/types";
import { getAccessToken } from "@/utils/utils";
import axios from "axios";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

type Props = {
  hasCheckoutBtn?: boolean;
};
export default function CartTotal(props: Props) {
  const { hasCheckoutBtn } = props;

  const [subTotal] = useAtom(subTotalPriceAtom);
  const [cart, setCart] = useAtom(cartAtom);
  // const setCart = useSetAtom(cartAtom);

  const router = useRouter();

  const handleApply = async () => {
    const payload: any = [];
    cart.forEach((item) => {
      payload.push({
        productSizeId: item.id,
        quantity: item.quantity,
      });
    });

    try {
      const submitCart = axios.post(
        `${ROOT_API}/${routes.histories}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        }
      );

      toast.promise(submitCart, {
        loading: "Ordering...",
        success: "Ordered successfully",
        error: "Failed to submit cart",
      });
      await submitCart;

      setCart([] as CartItem[]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Toaster />

      <div className="mb-10">
        <div className="py-3 px-10 bg-gray-100 rounded-full">
          <div className="flex justify-between">
            <span className="font-medium">Subtotal</span>
            <span className="font-bold font-heading">{subTotal} đ</span>
          </div>
        </div>
        <div className="py-3 px-10 rounded-full">
          <div className="flex justify-between">
            <span className="font-medium">Shipping</span>
            <span className="font-bold font-heading">0 đ</span>
          </div>
        </div>
        <div className="py-3 px-10 bg-gray-100 rounded-full">
          <div className="flex justify-between">
            <span className="font-medium">Tax</span>
            <span className="font-bold font-heading">0</span>
          </div>
        </div>
        <div className="py-3 px-10 rounded-full">
          <div className="flex justify-between">
            <span className="text-base md:text-xl font-bold font-heading">
              Order Total
            </span>
            <span className="font-bold font-heading">{subTotal} đ</span>
          </div>
        </div>
      </div>
      {hasCheckoutBtn && (
        <div
          className="cursor-pointer block w-full py-4 bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading uppercase rounded-md transition duration-200"
          onClick={() => router.push("/cart/checkout")}
        >
          Apply
        </div>
      )}
    </>
  );
}
