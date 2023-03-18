import { CartTable } from "@/components/cart/cartTable";
import dynamic from "next/dynamic";

const CartTotal = dynamic(() => import('@/components/cart/cartTotal'), {
  ssr: false
})

export default function Page() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="p-8 lg:p-20 bg-white">
          <h2 className="mb-20 text-5xl font-bold font-heading">Your cart</h2>
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full xl:w-8/12 mb-8 xl:mb-0 px-4">
              <div className="hidden lg:flex w-full">
                <div className="w-full lg:w-3/6">
                  <h4 className="mb-6 font-bold font-heading text-gray-500">
                    Description
                  </h4>
                </div>
                <div className="w-full lg:w-1/6">
                  <h4 className="mb-6 font-bold font-heading text-gray-500">
                    Price
                  </h4>
                </div>
                <div className="w-full lg:w-1/6 text-center">
                  <h4 className="mb-6 font-bold font-heading text-gray-500">
                    Quantity
                  </h4>
                </div>
                <div className="w-full lg:w-1/6 text-right">
                  <h4 className="mb-6 font-bold font-heading text-gray-500">
                    Subtotal
                  </h4>
                </div>
              </div>
              <CartTable />
              <div className="flex flex-wrap items-center lg:-mb-4">
                <span className="mr-12 mb-4 font-medium">
                  Apply discount code:
                </span>
                <input
                  className="flex-1 md:flex-none mr-6 sm:mr-0 md:mr-6 mb-4 px-8 py-4 placeholder-gray-800 font-bold font-heading border rounded-md"
                  type="text"
                  placeholder="SUMMER30X"
                />
                <a
                  className="flex-1 md:flex-none inline-block mb-4 px-8 py-4 text-center text-white font-bold font-heading uppercase bg-gray-800 hover:bg-gray-700 rounded-md"
                  href="#"
                >
                  Apply
                </a>
              </div>
            </div>
            <div className="w-full xl:w-4/12 px-4">
              <CartTotal hasCheckoutBtn />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
