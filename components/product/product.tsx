"use client";

import { cartAtom } from "@/store/cart.store";
import { getCartLocalStorage } from "@/utils/utils";
import { useAtom, useSetAtom } from "jotai";
import { useEffect } from "react";
import { ProductCard } from "./productCard";

export const Product = () => {
  const setAtom = useSetAtom(cartAtom);

  useEffect(() => {
    setAtom(getCartLocalStorage());
  }, []);
  return (
    <div className="flex flex-wrap -mx-3">
      {Array(10)
        .fill({
          id: 1,
          name: "Product Name",
          price: 100,
          discountPrice: 90,
        })
        .map((item, i) => (
          <ProductCard item={item} key={i} />
        ))}
    </div>
  );
};
