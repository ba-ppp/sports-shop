import { CartTable } from "@/components/cart/cartTable";
import dynamic from "next/dynamic";

const CartTotal = dynamic(() => import("@/components/cart/cartTotal"), {
  ssr: false,
});

export default function Page() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="p-8 lg:p-20 bg-white">
          <h2 className="mb-8 text-4xl font-bold font-heading">
            Shopping Cart
          </h2>
          <CartTable />
          <CartTotal />
          <div className="text-right">
            <a
              className="inline-block mb-4 md:mb-0 mr-6 w-full md:w-auto px-8 py-4 bg-gray-100 hover:bg-gray-200 text-center font-bold font-heading uppercase rounded-md transition duration-200"
              href="/products"
            >
              Continue Shopping
            </a>
            <a
              className="inline-block w-full md:w-auto px-8 py-4 bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading uppercase rounded-md transition duration-200"
              href="/cart/checkout"
            >
              Go to Checkout
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
