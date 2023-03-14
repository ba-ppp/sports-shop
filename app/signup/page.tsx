"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ResponseStatusCode } from "../enums/enums";
import { setTokenLocalStorage } from "../utils/utils";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, toggleDisabled] = useState(true);

  const router = useRouter();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    }
    
    if (name === "password") {
      setPassword(value);
    }

    if (name === "repeat_password") {
      if (value === password) {
        toggleDisabled(false);
      } else {
        toggleDisabled(true);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/signup", {
        email,
        password,
      });
      if (res.status === ResponseStatusCode.OK) {
        setTokenLocalStorage(res.data);
        router.push("/");
      } else {
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-20 bg-blue-800 overflow-x-hidden">
      <div className="relative container px-4 mx-auto">
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 border border-gray-300 my-24 -ml-4 -mr-4"></div>
          <div className="relative mx-auto py-28 px-4 bg-blue-800 border border-white text-center">
            <a
              className="flex justify-center space-x-3 mb-12 text-3xl font-bold font-heading text-white"
              href="#"
            >
              <img
                className="h-9"
                src="/yofte-logo-white.svg"
                alt=""
                width="auto"
              />
            </a>
            <h2 className="mb-14 text-4xl text-white font-bold font-heading">
              Sign up with
            </h2>
            <div className="relative max-w-xl mx-auto">
              <img
                className="hidden md:block absolute top-0 -right-1/2 -mr-16"
                src="yofte-assets/elements/white-sign-line.svg"
                alt=""
              />
              <img
                className="hidden md:block absolute bottom-0 -left-1/2 -ml-24"
                src="yofte-assets/elements/orange-sign-line.svg"
                alt=""
              />
              <img
                className="hidden md:block absolute bottom-0 -right-1/2 -mb-12 -mr-40"
                src="yofte-assets/elements/purple-sign-line.svg"
                alt=""
              />
              <div className="flex flex-wrap -mx-2 mb-10 justify-between pb-16 border-b border-gray-500">
                <div className="w-full md:w-1/3 px-2 mb-2 md:mb-0">
                  <a
                    className="inline-flex items-center justify-center w-full h-16 border-2 border-gray-500 hover:border-gray-400 rounded-md"
                    href="#"
                  >
                    <img src="yofte-assets/brands/google.svg" alt="" />
                    <span className="ml-4 text-white uppercase font-bold font-heading">
                      Google
                    </span>
                  </a>
                </div>
                <div className="w-full md:w-1/3 px-2 mb-2 md:mb-0">
                  <a
                    className="inline-flex items-center justify-center w-full h-16 border-2 border-gray-500 hover:border-gray-400 rounded-md"
                    href="#"
                  >
                    <img src="yofte-assets/brands/apple.svg" alt="" />
                    <span className="ml-4 text-white uppercase font-bold font-heading">
                      Apple
                    </span>
                  </a>
                </div>
                <div className="w-full md:w-1/3 px-2">
                  <a
                    className="inline-flex items-center justify-center w-full h-16 border-2 border-gray-500 hover:border-gray-400 rounded-md"
                    href="#"
                  >
                    <img src="yofte-assets/brands/facebook2.svg" alt="" />
                    <span className="ml-4 text-white uppercase font-bold font-heading">
                      Facebook
                    </span>
                  </a>
                </div>
              </div>
              <div className="max-w-md mx-auto">
                <h2 className="mb-10 text-xl text-white font-bold font-heading">
                  Sign up with Email:
                </h2>
                <form action="" onSubmit={handleSubmit}>
                  <input
                    className="w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                    type="text"
                    placeholder="steven@example.dev"
                    name="email"
                    onChange={handleInput}
                  />
                  <input
                    className="w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleInput}
                  />
                  <input
                    className="w-full mb-10 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                    type="password"
                    placeholder="Repeat password"
                    name="repeat_password"
                    onChange={handleInput}
                  />
                  <label className="flex" htmlFor="">
                    <input className="mr-4 mt-1" type="checkbox" />
                    <span className="text-sm text-gray-100 text-center">
                      Agree to our Terms, Data Policy and Cookies.
                    </span>
                  </label>
                  <button
                    disabled={isDisabled}
                    className="mt-12 md:mt-16 bg-orange-400 hover:bg-orange-500 text-white font-bold font-heading py-5 px-8 rounded-md uppercase disabled:bg-gray-600"
                  >
                    JOIN yofte
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
