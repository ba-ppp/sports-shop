"use client";

import { cartAtom } from "@/store/cart.store";
import { useSetAtom } from "jotai";

type Props = {
  item: ProductCardItem;
};
type ProductCardItem = {
  id: string;
  name: string;
  price: string;
  discountPrice: string;
  imageURL?: string;
};
export const ProductCard = (props: Props) => {
  const { id, name, price, discountPrice, imageURL } = props.item;
  const setCartAtom = useSetAtom(cartAtom);

  const handleAddToCart = () => {
    setCartAtom((prev) => {
      const isExist = prev.find((item) => item.id === id);
      if (isExist) {
        return prev.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      }
      return [
        ...prev,
        {
          id,
          name,
          price,
          discountPrice,
          imageURL,
          quantity: 1,
        },
      ];
    });
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
      <div className="p-6 bg-gray-50">
        <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">
          -15%
        </span>
        <a className="block px-6 mt-6 mb-2" href="#">
          <img
            className="mb-5 mx-auto h-56 w-full object-contain"
            src={imageURL ?? "https://loremflickr.com/320/240/dog"}
            alt=""
          />
          <h3 className="mb-2 text-xl font-bold font-heading">{name}</h3>
          <p className="text-lg font-bold font-heading text-blue-500">
            <span>${discountPrice}</span>
            <span className="text-xs text-gray-500 font-semibold font-heading line-through">
              ${price}
            </span>
          </p>
        </a>
        <div
          className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
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
    </div>
  );
};
