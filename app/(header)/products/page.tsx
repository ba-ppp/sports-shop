"use client";

import { InputSearch } from "@/components/cart/inputSearch";
import { Loading } from "@/components/loading/Loading";
import { Product } from "@/components/product/product";
import { ROOT_API } from "@/constant/env";
import { routes } from "@/constant/routes";
import { ResponseStatusCode } from "@/enums/enums";
import { FetchData } from "@/types/types";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function Products() {
  const [categories, setCategories] = useState<any>(null);
  const [filterString, setFilterString] = useState<string>("");
  const [isLoading, toggleLoading] = useState<boolean>(false);

  const [activeCategoryId, setActiveCategoryId] = useState<number>();

  async function getCategories(): Promise<any | null> {
    try {
      toggleLoading(true);
      const res = await axios.get(`${ROOT_API}/${routes.categories}`);

      if (res.status !== ResponseStatusCode.OK) return null;
      // This will activate the closest `error.js` Error Boundary
      const data = res.data;
      setCategories(data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch product data");
      return null;
    } finally {
      toggleLoading(false);
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
      {isLoading && <Loading />}
      <Toaster />
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
          </div>
          <div className="w-full lg:w-3/4 px-3">
            <div className="mb-10">
              <InputSearch handleOnChange={handleOnChange} />
            </div>

            <Product
              filter={filterString}
              activeCategoryId={activeCategoryId}
            />
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
