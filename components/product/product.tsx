"use client";

import { ROOT_API } from "@/constant/env";
import { routes } from "@/constant/routes";
import { cartAtom } from "@/store/cart.store";
import { ProductItem } from "@/types/types";
import { getCartLocalStorage } from "@/utils/utils";
import axios from "axios";
import { useAtom, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { ProductCard } from "./productCard";

export const Product = () => {
  const setAtom = useSetAtom(cartAtom);

  const [products, setProducts] = useState<ProductItem[]>([])

  const fetchProducts = async () => {
    const res = await axios.get(`${ROOT_API}/${routes.products}`)
    const data = await res.data

    const newData = data?.filter((i: any) => i?.quantity > 0)
    setProducts(newData)
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
