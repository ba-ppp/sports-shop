import jwt_decode from "jwt-decode";
import { CartItem, IToken, TableRow } from "../types/types";

export const setTokenLocalStorage = (token: IToken) => {
  localStorage.setItem("access_token", token.access_token);
  localStorage.setItem("refresh_token", token.refresh_token);
};

export const removeTokenLocalStorage = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};

export const getAccessToken = (): string => {
  if (typeof window === "undefined") return "";
  return localStorage.getItem("access_token") || "";
};

export const getRefreshToken = (): string => {
  if (typeof window === "undefined") return "";
  return localStorage.getItem("refresh_token") || "";
};

export const isSignin = (): boolean => {
  if (typeof window === "undefined") return false;
  const token = localStorage.getItem("access_token") || "";

  if (!token) return false;

  const decoded = jwt_decode(token);
  const { exp } = decoded as any;
  const now = new Date().getTime() / 1000;

  return now < exp;
};

export const setCartLocalStorage = (cart: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getCartLocalStorage = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("cart") || "[]");
};

export const getAmountCartLocalStorage = (): number => {
  const cart = getCartLocalStorage();
  return cart.reduce((pre, item) => {
    return pre + item.quantity;
  }, 0);
};

export const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const handleChangeTableData = (data: any): TableRow[] => {
  return data.map((item: any) => {
    return {
      id: item?.categoryId,
      editableCell: {
        Name: item?.name,
      },
      inforCell: {
        Status: "",
      },
      status: {
        isActive: true,
      },
    };
  });
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);

  return formattedDate;
};

export const handleChangeHistoriesData = (data: any): TableRow[] => {
  return data.map((item: any) => {
    return {
      id: item?.id,
      editableCell: {
        Name: item?.name,
      },
      inforCell: {
        User: item?.userId,
        Address: item?.address,
        Date: formatDate(item?.updatedDate),
      },
      status: {
        isPending: !item?.onDelivery,
        isDelivered: item?.onDelivery,
      },
    };
  });
};

export const handleChangeProductData = (data: any): TableRow[] => {
  console.log("data", data);
  return data.map((item: any) => {
    return {
      id: item?.id,
      editableCell: {
        Name: item?.name,
        Price: item?.price,
      },
      inforCell: {
        Status: "",
        Image: item?.url,
      },
      status: {
        isActive: true,
      },
    };
  });
};
