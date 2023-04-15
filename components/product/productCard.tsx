"use client";

import { cartAtom } from "@/store/cart.store";
import { ProductItem } from "@/types/types";
import { setCartLocalStorage } from "@/utils/utils";
import { useSetAtom } from "jotai";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  item: ProductItem;
};

export const ProductCard = (props: Props) => {
  const { id, name, price, url } = props.item;
  const setCartAtom = useSetAtom(cartAtom);

  const handleAddToCart = () => {
    setCartAtom((prev) => {
      const isExist = prev.find((item) => item.id === id);
      let newCart = [];
      if (isExist) {
        newCart = prev.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      } else {
        newCart = [
          ...prev,
          {
            id,
            name,
            price: price.toString(),
            imageURL: url,
            quantity: 1,
            sizes: props.item.sizes
          },
        ];
      }

      setCartLocalStorage(newCart);
      return newCart;
    });
    toast.success("Added to cart");
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
      <div className="p-6 bg-gray-50">
        <a className="block px-6 mt-6 mb-2" href="#">
          <img
            className="mb-5 mx-auto h-56 w-full object-contain"
            src={url ?? "https://loremflickr.com/320/240/dog"}
            alt=""
          />
          <h3 className="mb-2 text-xl font-bold font-heading">{name}</h3>
          <div className="text-lg font-bold font-heading text-blue-500">
            <span>{price} đ</span>
            {/* <span className="text-xs text-gray-500 font-semibold font-heading line-through">
              ${price}
            </span> */}
          </div>
        </a>
        <div
          className="cursor-pointer ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
          onClick={handleAddToCart}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="5" width="2" height="12" fill="#161616"></rect>
            <rect
              x="12"
              y="5"
              width="2"
              height="12"
              transform="rotate(90 12 5)"
              fill="#161616"
            ></rect>
          </svg>
        </div>
      </div>
      <Toaster />
    </div>
  );
};
