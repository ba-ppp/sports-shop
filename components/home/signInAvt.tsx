"use client";

import { tokenAtom, userAtom } from "@/store/token.store";
import { isSignin } from "@/utils/utils";
import { useAtom } from "jotai";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ImageURL } from "../shared/imageURL";

export default function SignInAvt() {
  const [token, setToken] = useAtom(tokenAtom);
  const [userProfile, _] = useAtom(userAtom);

  const router = useRouter();

  const handleClickAvt = () => {
    router.push("/profile");
  };

  useEffect(() => {
    setToken();
  }, [token]);

  return (
    <>
      {(token && userProfile.email) ? (
        <span
          onClick={handleClickAvt}
          className="cursor-pointer flex items-center"
        >
          <ImageURL
            url={`https://ui-avatars.com/api/?name=${userProfile.firstName}&background=0D8ABC&color=fff`}
            height={36}
            width={36}
          />
          <span className="mr-2 font-medium">{userProfile.firstName}</span>
          <span>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.66797 1.66699L5.0013 5.00033L8.33464 1.66699"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
        </span>
      ) : (
        <a
          className="inline-flex items-center font-semibold font-heading"
          href="/signin"
        >
          <Image
            className="object-cover mr-3"
            src="/avatar-none.svg"
            alt=""
            width={32}
            height={31}
          />
          <span className="text-white">Sign&nbsp;In</span>
        </a>
      )}
    </>
  );
}
