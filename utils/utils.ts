import { CartItem, IToken } from "../types/types";

export const setTokenLocalStorage = (token: IToken) => {
    localStorage.setItem("access_token", token.access_token);
    localStorage.setItem("refresh_token", token.refresh_token);
}

export const setCartLocalStorage = (cart: CartItem[]) => {
    localStorage.setItem("cart", JSON.stringify(cart));
}

export const getCartLocalStorage = (): CartItem[] => {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem("cart") || "[]");
}