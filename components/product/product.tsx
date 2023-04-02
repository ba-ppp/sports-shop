"use client";

import { ROOT_API } from "@/constant/env";
import { routes } from "@/constant/routes";
import { cartAtom } from "@/store/cart.store";
import { ProductItem } from "@/types/types";
import { getCartLocalStorage } from "@/utils/utils";
import { useAtom, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { ProductCard } from "./productCard";

export const Product = () => {
  const setAtom = useSetAtom(cartAtom);

  const [products, setProducts] = useState<ProductItem[]>([])

  const fetchProducts = async () => {
    const res = await fetch(`${ROOT_API}/${routes.products}`)
    const data = await res.json()
    setProducts(data)
  }

  useEffect(() => {
    setAtom(getCartLocalStorage());
    fetchProducts()
  }, []);
  return (
    <div className="flex flex-wrap -mx-3">
      {products 
        .map((item, i) => (
          <ProductCard item={item} key={i} />
        ))}
    </div>
  );
};
