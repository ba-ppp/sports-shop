"use client";

import { cartCountAtom } from "@/store/cart.store";
import { useAtomValue } from "jotai";

export default function CartAmount() {
  const amount = useAtomValue(cartCountAtom);
  return (
    <span className="inline-block w-6 h-6 text-center bg-orange-300 rounded-full font-semibold font-heading text-white">
      {amount}
    </span>
  );
}
