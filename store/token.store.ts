import { ROOT_API } from "@/constant/env";
import { routes } from "@/constant/routes";
import { UserProfile } from "@/types/types";
import { atom } from "jotai";
import { getAccessToken, getRefreshToken, isSignin } from "utils/utils";
import jwt_decode from "jwt-decode";

export const userAtom = atom<UserProfile>({
  firstName: "",
  lastName: "",
  email: "",
  address: "",
});

export const tokenAtom = atom(
  async (): Promise<string | null> => {
    const isExpired = !isSignin();

    if (!isExpired) {
      const token = getAccessToken();

      return token;
    }

    try {
      const response = await fetch(`${ROOT_API}/${routes.renewToken}`, {
        method: "POST",
        body: JSON.stringify({
          access_token: getAccessToken(),
          refresh_token: getRefreshToken(),
        }),
      });

      const { token } = await response.json();

      return token;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  async (get, set) => {
    const token = await get(tokenAtom);
    const payload: any = jwt_decode(token ?? "");

    const { name, email, address } = payload;

    const [firstName, lastName] = name.split(" ");
    set(userAtom, {
      firstName,
      lastName,
      email,
      address,
    });
  }
);
