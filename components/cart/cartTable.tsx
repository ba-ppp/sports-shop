"use client";

import { cartAtom } from "@/store/cart.store";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { CartRow } from "./cartRow";

export const CartTable = () => {
  const [cart, ] = useAtom(cartAtom);
  const [isLoading, toggleLoading] = useState(true);

  useEffect(() => {
    toggleLoading(false);
  }, [])
  return (
    <div className="mb-12 py-6 border-t border-b border-gray-200">
      {!isLoading && cart.map((item, index) => (
        <CartRow item={item} key={index} />
      ))}
    </div>
  );
};
