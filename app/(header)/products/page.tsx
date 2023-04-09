"use client";

import { InputSearch } from "@/components/cart/inputSearch";
import { Product } from "@/components/product/product";
import { ROOT_API } from "@/constant/env";
import { routes } from "@/constant/routes";
import { ResponseStatusCode } from "@/enums/enums";
import { FetchData } from "@/types/types";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Products() {
  const [categories, setCategories] = useState<any>(null);
  const [filterString, setFilterString] = useState<string>("");

  const [activeCategoryId, setActiveCategoryId] = useState<number>();

  async function getCategories(): Promise<any | null> {
    try {
      const res = await axios.get(`${ROOT_API}/${routes.categories}`);

      if (res.status !== ResponseStatusCode.OK) return null;
      // This will activate the closest `error.js` Error Boundary
      const data = res.data;
      setCategories(data);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterString(e.target.value.trim());
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-3 mb-24">
          <div className="w-full lg:hidden px-3">
            <div className="flex flex-wrap -mx-2">
              <div className="w-1/2 md:w-1/3 px-2 mb-4">
                <div className="py-6 px-2 text-center bg-gray-50">
                  <a className="font-bold font-heading" href="#">
                    Category
                  </a>
                  <ul className="hidden text-left mt-6">
                    {categories?.map((category: any, idx: number) => (
                      <li key={idx} className="mb-4">
                        <span onClick={() => console.log("a")}>
                          {category.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 px-2 mb-4">
                <div className="py-6 px-2 text-center bg-gray-50">
                  <a className="font-bold font-heading" href="#">
                    Colors
                  </a>
                  <div className="hidden mt-6 flex-wrap">
                    <button className="mr-4 mb-2 rounded-full border border-blue-300 p-1">
                      <div className="rounded-full bg-blue-300 w-5 h-5"></div>
                    </button>
                    <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                      <div className="rounded-full bg-orange-300 w-5 h-5"></div>
                    </button>
                    <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                      <div className="rounded-full bg-gray-900 w-5 h-5"></div>
                    </button>
                    <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                      <div className="rounded-full bg-red-300 w-5 h-5"></div>
                    </button>
                    <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                      <div className="rounded-full bg-green-300 w-5 h-5"></div>
                    </button>
                    <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                      <div className="rounded-full bg-pink-300 w-5 h-5"></div>
                    </button>
                    <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                      <div className="rounded-full bg-yellow-300 w-5 h-5"></div>
                    </button>
                    <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                      <div className="rounded-full bg-gray-100 w-5 h-5"></div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 px-2 mb-4">
                <div className="py-6 px-4 text-center bg-gray-50">
                  <a className="font-bold font-heading" href="#">
                    Price
                  </a>
                  <div className="hidden mt-6">
                    <input
                      className="w-full mb-4 outline-none appearance-none bg-gray-100 h-1 rounded cursor-pointer"
                      type="range"
                      min="1"
                      max="100"
                    />
                    <div className="flex justify-between">
                      <span className="inline-block text-lg font-bold font-heading text-blue-300">
                        $0
                      </span>
                      <span className="inline-block text-lg font-bold font-heading text-blue-300">
                        $289
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 px-2 mb-4">
                <div className="py-6 px-4 text-center bg-gray-50">
                  <a className="font-bold font-heading" href="#">
                    Size
                  </a>
                  <div className="hidden mt-6 flex-wrap -mx-2 -mb-2">
                    <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                      36
                    </button>
                    <button className="relative mb-2 mr-1 w-16 border rounded-md">
                      37
                      <span className="absolute bottom-0 left-0 w-full py-px bg-blue-300"></span>
                    </button>
                    <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                      38
                    </button>
                    <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                      39
                    </button>
                    <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                      40
                    </button>
                    <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                      41
                    </button>
                    <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                      42
                    </button>
                    <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                      43
                    </button>
                    <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                      44
                    </button>
                  </div>
                  <div className="hidden mt-4 text-right">
                    <a
                      className="inline-flex underline text-blue-300 hover:text-blue-400"
                      href="#"
                    >
                      <span className="mr-2">Show all</span>
                      <svg
                        width="14"
                        height="27"
                        viewBox="0 0 14 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.83901 26.2775L0.151884 19.5904L0.987775 18.7545L6.66766 24.4343L6.66347 0.782814L7.84208 0.782814L7.84626 24.4343L13.1082 19.1724L13.9441 20.0083L7.6749 26.2775C7.44407 26.5083 7.06985 26.5083 6.83901 26.2775Z"
                          fill="#3C60D9"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block w-1/4 px-3">
            <div className="mb-6 py-10 px-12 bg-gray-50">
              <h3 className="mb-8 text-2xl font-bold font-heading">Category</h3>
              <ul>
                {categories?.map((category: any, idx: number) => (
                  <li key={idx} className="mb-4 space-y-3">
                    <span
                      className={
                        activeCategoryId === category?.categoryId
                          ? "border border-solid p-2 border-gray-500"
                          : "cursor-pointer"
                      }
                      onClick={() => setActiveCategoryId(category?.categoryId)}
                    >
                      {category.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6 py-10 px-12 bg-gray-50">
              <h3 className="mb-8 text-2xl font-bold font-heading">Colors</h3>
              <div className="flex flex-wrap">
                <button className="mr-4 mb-2 rounded-full border border-blue-300 p-1">
                  <div className="rounded-full bg-blue-300 w-5 h-5"></div>
                </button>
                <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                  <div className="rounded-full bg-orange-300 w-5 h-5"></div>
                </button>
                <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                  <div className="rounded-full bg-gray-900 w-5 h-5"></div>
                </button>
                <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                  <div className="rounded-full bg-red-300 w-5 h-5"></div>
                </button>
                <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                  <div className="rounded-full bg-green-300 w-5 h-5"></div>
                </button>
                <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                  <div className="rounded-full bg-pink-300 w-5 h-5"></div>
                </button>
                <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                  <div className="rounded-full bg-yellow-300 w-5 h-5"></div>
                </button>
                <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                  <div className="rounded-full bg-gray-100 w-5 h-5"></div>
                </button>
              </div>
            </div>
            <div className="mb-6 py-10 px-12 bg-gray-50">
              <h3 className="mb-8 text-2xl font-bold font-heading">Price</h3>
              <div>
                <input
                  className="w-full mb-4 outline-none appearance-none bg-gray-100 h-1 rounded cursor-pointer"
                  type="range"
                  min="1"
                  max="100"
                />
                <div className="flex justify-between">
                  <span className="inline-block text-lg font-bold font-heading text-blue-300">
                    $0
                  </span>
                  <span className="inline-block text-lg font-bold font-heading text-blue-300">
                    $289
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-6 py-12 pl-12 pr-6 bg-gray-50">
              <h3 className="mb-8 text-2xl font-bold font-heading">Size</h3>
              <div className="flex flex-wrap -mx-2 -mb-2">
                <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                  36
                </button>
                <button className="relative mb-2 mr-1 w-16 border rounded-md">
                  37
                  <span className="absolute bottom-0 left-0 w-full py-px bg-blue-300"></span>
                </button>
                <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                  38
                </button>
                <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                  39
                </button>
                <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                  40
                </button>
                <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                  41
                </button>
                <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                  42
                </button>
                <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                  43
                </button>
                <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                  44
                </button>
              </div>
              <div className="mt-4 text-right">
                <a
                  className="inline-flex underline text-blue-300 hover:text-blue-400"
                  href="#"
                >
                  <span className="mr-2">Show all</span>
                  <svg
                    width="14"
                    height="27"
                    viewBox="0 0 14 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.83901 26.2775L0.151884 19.5904L0.987775 18.7545L6.66766 24.4343L6.66347 0.782814L7.84208 0.782814L7.84626 24.4343L13.1082 19.1724L13.9441 20.0083L7.6749 26.2775C7.44407 26.5083 7.06985 26.5083 6.83901 26.2775Z"
                      fill="#3C60D9"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/4 px-3">
            <div className="mb-10">
              <InputSearch handleOnChange={handleOnChange} />
            </div>

            <Product filter={filterString} activeCategoryId={activeCategoryId} />
          </div>
        </div>
        <div className="text-center">
          <a
            className="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-6 px-8 rounded-md uppercase"
            href="#"
          >
            Show More
          </a>
        </div>
      </div>
    </section>
  );
}
