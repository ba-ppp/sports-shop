"use client";

import { cartAtom, removeCartItemAtom, subTotalPriceAtom } from "@/store/cart.store";
import { CartItem } from "@/types/types";
import { setCartLocalStorage } from "@/utils/utils";
import { useAtom, useSetAtom } from "jotai";
import { useState } from "react";

type Props = {
  item: CartItem;
};
export const CartRow = (props: Props) => {
  const { id, name, price, discountPrice, imageURL, quantity } = props.item;

  const setCart = useSetAtom(cartAtom);
  const [_,removeCart] = useAtom(removeCartItemAtom)

  const setQuantity = (newValue: number) => {
    setCart((prev) => {
      const newCart = prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: newValue };
        }
        return item;
      });

      setCartLocalStorage(newCart);

      return newCart;
    });
  };

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const valueNumber = parseInt(value);
    setQuantity(valueNumber < 1 ? 1 : valueNumber);
  };

  const handleClickQuantity = (type: "inc" | "des") => {
    if (type === "inc") {
      setQuantity(quantity + 1);
    } else {
      if (quantity === 1) return;
      setQuantity(quantity - 1);
    }
  };

  const handleRemoveItem = () => {
    removeCart(id);
  }

  const totalItemPrice = (quantity * parseFloat(price)).toFixed(0);
  return (
    <div className="flex mb-8 flex-wrap items-center justify-between">
      <div className="w-full lg:w-auto mb-8 xl:mb-0 flex flex-wrap items-center">
        <div className="flex items-center justify-center h-32 mb-4 lg:mb-0 bg-gray-100">
          <img
            className="h-full object-contain"
            src="yofte-assets/images/waterbottle.png"
            alt=""
          />
        </div>
        <div className="w-full md:w-auto md:pl-4">
          <h3 className="mb-2 text-xl font-bold font-heading">{name}</h3>
          <p className="mb-8 text-gray-500">Maecenas 0.7 commodo sit</p>
          <p className="text-gray-500">In Stock</p>
        </div>
      </div>
      <div className="w-full lg:w-auto flex flex-wrap -mx-4 items-center">
        <div className="order-0 w-1/2 md:w-1/3 px-4 mb-4 md:mb-0">
          <div className="inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md">
            <button
              onClick={() => handleClickQuantity("des")}
              className="py-2 hover:text-gray-700"
            >
              <svg
                width="12"
                height="2"
                viewBox="0 0 12 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.35">
                  <rect
                    x="12"
                    width="2"
                    height="12"
                    transform="rotate(90 12 0)"
                    fill="currentColor"
                  ></rect>
                </g>
              </svg>
            </button>
            <input
              className="w-12 m-0 px-2 py-4 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md"
              type="number"
              placeholder="1"
              value={quantity}
              onChange={handleChangeQuantity}
            />
            <button
              onClick={() => handleClickQuantity("inc")}
              className="py-2 hover:text-gray-700"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.35">
                  <rect x="5" width="2" height="12" fill="currentColor"></rect>
                  <rect
                    x="12"
                    y="5"
                    width="2"
                    height="12"
                    transform="rotate(90 12 5)"
                    fill="currentColor"
                  ></rect>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="order-2 md:order-1 w-full md:w-1/3 px-4">
          <div
            className="cursor-pointer inline-block mr-16 px-8 py-4 text-white font-bold font-heading uppercase bg-red-300 hover:bg-red-400 rounded-md"
            onClick={handleRemoveItem}
          >
            Remove
          </div>
        </div>
        <div className="order-1 md:order-2 w-1/2 md:w-1/3 px-4 text-right mb-4 md:mb-0">
          <span className="text-lg font-bold font-heading text-blue-300">
            {totalItemPrice} đ
          </span>
        </div>
      </div>
    </div>
  );
};
