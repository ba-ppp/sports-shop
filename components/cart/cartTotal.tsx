"use client";

import { subTotalPriceAtom } from "@/store/cart.store";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  hasCheckoutBtn?: boolean;
};
export default function CartTotal(props: Props) {
  const { hasCheckoutBtn } = props;

  const [subTotal] = useAtom(subTotalPriceAtom);
  const router = useRouter();
  const [isLoading, toggleLoading] = useState(true);

  // useEffect(() => {
  //   toggleLoading(false);
  // }, [])
  
  // if (isLoading) return null;

  return (
    <div className="p-6 md:p-12 bg-blue-300">
      <div className="flex mb-8 items-center justify-between pb-5 border-b border-blue-100">
        <span className="text-blue-50">Subtotal</span>
        <span className="text-xl font-bold font-heading text-white">
          ${subTotal}
        </span>
      </div>
      <h4 className="mb-2 text-xl font-bold font-heading text-white">
        Shipping
      </h4>
      <div className="flex mb-2 justify-between items-center">
        <span className="text-blue-50">Next day</span>
        <span className="text-xl font-bold font-heading text-white">${11}</span>
      </div>
      <div className="flex mb-10 justify-between items-center">
        <span className="text-blue-50">Shipping to United States</span>
        <span className="text-xl font-bold font-heading text-white">-</span>
      </div>
      <div className="flex mb-10 justify-between items-center">
        <span className="text-xl font-bold font-heading text-white">
          Order total
        </span>
        <span className="text-xl font-bold font-heading text-white">
          ${subTotal + 11}
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
  );
};
