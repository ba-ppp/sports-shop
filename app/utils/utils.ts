import { IToken } from "../types/types";

export const setTokenLocalStorage = (token: IToken) => {
    localStorage.setItem("access_token", token.access_token);
    localStorage.setItem("refresh_token", token.refresh_token);
}