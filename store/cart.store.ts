import { CartItem } from "@/types/types";
import { getCartLocalStorage } from "@/utils/utils";
import { atom } from "jotai";

export const cartAtom = atom<CartItem[]>(getCartLocalStorage());

export const cartCountAtom = atom((get) => {
  const cart = get(cartAtom);
  return cart.reduce((acc, item) => acc + item.quantity, 0);
});

export const subTotalPriceAtom = atom((get) => {
  const cart = get(cartAtom);
  return cart.reduce(
    (acc, item) => acc + parseFloat(item?.price ?? '0') * item.quantity,
    0
  );
});


