import { CartItem } from "@/types/types";
import { randomUUID } from "crypto";
import { atom } from "jotai";
import { v4 } from "uuid";

export const cartAtom = atom<CartItem[]>([
  {
    id: v4(),
    name: "Maecenas 0.7 commodo sit",
    price: "100",
    discountPrice: "80",
    quantity: 1,
  },
  {
    id: v4(),
    name: "Maecenas 0.7 commodo sit",
    price: "100",
    discountPrice: "80",
    quantity: 1,
  },
  {
    id: v4(),
    name: "Maecenas 0.7 commodo sit",
    price: "100",
    discountPrice: "80",
    quantity: 1,
  },
]);

export const subTotalPriceAtom = atom((get) => {
  const cart = get(cartAtom);
  return cart.reduce(
    (acc, item) => acc + parseFloat(item.discountPrice) * item.quantity,
    0
  );
});
