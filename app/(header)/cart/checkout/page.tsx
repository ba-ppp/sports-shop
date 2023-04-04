"use client";
import { userAtom } from "@/store/token.store";
import { UserProfile } from "@/types/types";
import { useAtom } from "jotai";
// import { CartTotal } from ""
import dynamic from "next/dynamic";
import { useState } from "react";

const CartTotal = dynamic(() => import("@/components/cart/cartTotal"), {
  ssr: false,
});

export default function Page() {
  const [userInfo, _] = useAtom(userAtom);

  
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="p-8 lg:p-20 bg-white">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
              <div className="flex mb-12 items-center">
                <span className="flex-shrink-0 inline-flex mr-8 items-center justify-center w-12 h-12 rounded-full bg-blue-300 text-white">
                  1
                </span>
                <h3 className="text-2xl font-bold font-heading">
                  Shipping address
                </h3>
              </div>
              <form action="">
                <div className="mb-10">
                  <label
                    className="font-bold font-heading text-gray-600"
                    htmlFor=""
                  >
                    Email address
                  </label>
                  <input
                    className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                    type="email"
                    name="email"
                    value={userInfo.email}
                    disabled
                  />
                </div>

                <div className="mb-10">
                  <label
                    className="font-bold font-heading text-gray-600"
                    htmlFor=""
                  >
                    First name
                  </label>
                  <input
                    className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                    type="text"
                    name="firstName"
                    value={userInfo.firstName}
                    disabled
                  />
                </div>
                <div className="mb-10">
                  <label
                    className="font-bold font-heading text-gray-600"
                    htmlFor=""
                  >
                    Last name
                  </label>
                  <input
                    className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                    type="text"
                    name="lastName"
                    value={userInfo.lastName}
                    disabled
                  />
                </div>
                <div className="mb-10">
                  <label
                    className="font-bold font-heading text-gray-600"
                    htmlFor=""
                  >
                    Street address
                  </label>
                  <input
                    className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                    type="text"
                    name="address"
                    value={userInfo.address}
                    disabled
                  />
                </div>
              </form>
            </div>
            <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
              <div className="flex mb-12 items-center">
                <span className="flex-shrink-0 inline-flex mr-8 items-center justify-center w-12 h-12 rounded-full bg-purple-300 text-white">
                  2
                </span>
                <h3 className="text-2xl font-bold font-heading">
                  Shipping methods
                </h3>
              </div>
              <div className="mb-12 pb-10 border-b">
                <p className="mb-3 font-bold font-heading text-gray-600">
                  Flat Rate
                </p>
                <div className="mb-6">
                  <label className="flex items-center" htmlFor="">
                    <input className="mr-5" type="checkbox" />
                    <span>Fixed $0.00</span>
                  </label>
                </div>
                <p className="mb-3 font-bold font-heading text-gray-600">
                  Flat Rate
                </p>
                <div>
                  <label className="flex items-center" htmlFor="">
                    <input className="mr-5" type="checkbox" />
                    <span>Fixed $0.00</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4">
              <div className="flex mb-12 items-center">
                <span className="flex-shrink-0 inline-flex mr-8 items-center justify-center w-12 h-12 rounded-full bg-pink-300 text-white">
                  3
                </span>
                <h3 className="text-2xl font-bold font-heading">
                  Order summary
                </h3>
              </div>

              <CartTotal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
