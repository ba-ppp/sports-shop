"use client";

import { ROOT_API } from "@/constant/env";
import { routes } from "@/constant/routes";
import { cartAtom } from "@/store/cart.store";
import { ProductItem } from "@/types/types";
import { getCartLocalStorage } from "@/utils/utils";
import axios from "axios";
import { useAtom, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Loading } from "../loading/Loading";
import { ProductCard } from "./productCard";

type Props = {
  filter?: string;
  activeCategoryId?: number;
};
export const Product = (props: Props) => {
  const setAtom = useSetAtom(cartAtom);

  const [orgProducts, setOrgProducts] = useState<ProductItem[]>([]);
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [isLoading, toggleLoading] = useState<boolean>(false);

  const fetchProducts = async () => {
    try {
      toggleLoading(true);
      const res = await axios.get(`${ROOT_API}/${routes.products}`);
      const data = await res.data;
  
      const newData = data?.filter((i: any) => i?.quantity > 0);
      setProducts(newData);
      setOrgProducts(newData);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      toggleLoading(false);

    }
  };

  useEffect(() => {
    if (!props.filter && !props.activeCategoryId) {
      setProducts(orgProducts);
      return;
    }
    
    const newData = orgProducts?.filter(
      (i) =>
        i?.categoryId === props.activeCategoryId &&
        i?.name?.toLowerCase().includes(props.filter?.toLowerCase() ?? "")
    );

    setProducts(newData);
  }, [props.filter, props.activeCategoryId, orgProducts]);

  useEffect(() => {
    setAtom(getCartLocalStorage());
    fetchProducts();
  }, []);
  return (
    <>
    {isLoading && <Loading />}
    <div className="flex flex-wrap -mx-3">
      {products.map((item, i) => (
        <ProductCard item={item} key={i} />
      ))}
    </div>
    </>
  );
};
