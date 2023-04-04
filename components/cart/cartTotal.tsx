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

      const submitCart = axios.post(`${ROOT_API}/${routes.histories}`, payload, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      });
  
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

      <div className="p-5 md:p-12 bg-blue-300">
        <div className="flex mb-8 items-center justify-between pb-5 border-b border-blue-100">
          <span className="text-blue-50">Subtotal</span>
          <span className="text-xl font-bold font-heading text-white">
            đ{subTotal}
          </span>
        </div>
        <h4 className="mb-2 text-xl font-bold font-heading text-white">
          Shipping
        </h4>
        <div className="flex mb-2 justify-between items-center">
          <span className="text-blue-50">Next day</span>
          <span className="text-xl font-bold font-heading text-white">
            đ{10000}
          </span>
        </div>

        <div className="flex mb-2 justify-between items-center">
          <span className="text-xl font-bold font-heading text-white">
            Order total
          </span>
          <span className="text-xl font-bold font-heading text-white">
            đ{subTotal + 10000}
          </span>
        </div>
        {hasCheckoutBtn && (
          <div
            className="cursor-pointer block w-full py-4 bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading uppercase rounded-md transition duration-200"
            onClick={() => router.push("/cart/checkout")}
          >
            Go to Checkout
          </div>
        )}
      </div>
      {!hasCheckoutBtn && (
        <div onClick={handleApply} className="mb-10">
          <div className="cursor-pointer w-full text-xl bg-gray-800 p-5 rounded-md text-white text-center mt-5">
            Apply
          </div>
        </div>
      )}
    </>
  );
}
