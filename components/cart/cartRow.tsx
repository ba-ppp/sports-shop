"use client";

import { cartAtom, subTotalPriceAtom } from "@/store/cart.store";
import { CartItem } from "@/types/types";
import { useAtom, useSetAtom } from "jotai";
import { useState } from "react";

type Props = {
  item: CartItem;
};
export const CartRow = (props: Props) => {
  const { id, name, price, discountPrice, imageURL, quantity } = props.item;
 console.log(id)

  const setCart = useSetAtom(cartAtom);

  const setQuantity = (newValue: number) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: newValue };
        }
        return item;
      });
    })
  }

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuantity(parseInt(value));
  };

  const handleClickQuantity = (type: "inc" | "des") => {
    if (type === "inc") {
      setQuantity(quantity + 1);
    } else {
      if (quantity === 1) return;
      setQuantity(quantity - 1);
    }
  };

  const totalItemPrice = (quantity * parseFloat(discountPrice)).toFixed(2);
  return (
    <div className="flex flex-wrap items-center -mx-4 mb-6 md:mb-3">
      <div className="w-full md:w-4/6 lg:w-6/12 px-4 mb-6 md:mb-0">
        <div className="flex -mx-4 flex-wrap items-center">
          <div className="w-full md:w-1/3 px-4 mb-3">
            <div className="flex items-center justify-center w-full md:w-24 h-32 bg-gray-100">
              <img
                className="h-full object-contain"
                src={imageURL ?? "https://loremflickr.com/320/240/dog"}
                alt=""
              />
            </div>
          </div>
          <div className="w-2/3 px-4">
            <h3 className="mb-2 text-xl font-bold font-heading">{name}</h3>
            <p className="text-gray-500">Maecenas 0.7 commodo sit</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-2/12 px-4">
        <p className="text-lg text-blue-500 font-bold font-heading">
          ${discountPrice}
        </p>
        <span className="text-xs text-gray-500 line-through">${price}</span>
      </div>
      <div className="w-auto md:w-1/6 lg:w-2/12 px-4">
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
      <div className="w-auto md:w-1/6 lg:w-2/12 px-4 text-right">
        <p className="text-lg text-blue-500 font-bold font-heading">
          ${totalItemPrice}
        </p>
      </div>
    </div>
  );
};
