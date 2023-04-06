import { CartItem } from "@/types/types";
import { getCartLocalStorage, setCartLocalStorage } from "@/utils/utils";
import { atom } from "jotai";

export const cartAtom = atom(getCartLocalStorage());

export const cartCountAtom = atom((get) => {
  const cart = get(cartAtom);
  return cart.reduce((acc, item) => acc + item.quantity, 0);
});

export const removeCartItemAtom = atom(null, (get, set, id: number) => {
  const cart = get(cartAtom);
  const newCart = cart.filter((item) => item.id !== id);
  setCartLocalStorage(newCart);
  set(cartAtom, newCart);
})

export const subTotalPriceAtom = atom((get) => {
  const cart = get(cartAtom);
  return cart.reduce(
    (acc, item) => acc + parseFloat(item?.price ?? '0') * item.quantity,
    0
  );
});


