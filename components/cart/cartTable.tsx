"use client";

import { cartAtom } from "@/store/cart.store";
import { useAtom } from "jotai";
import { CartRow } from "./cartRow";

export const CartTable = () => {
  const [cart] = useAtom(cartAtom);
  return (
    <div className="mb-12 py-6 border-t border-b border-gray-200">
      {cart.map((item, index) => (
        <CartRow item={item} key={index} />
      ))}
    </div>
  );
};
