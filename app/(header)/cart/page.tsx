"use client";
import { CartTable } from "@/components/cart/cartTable";
import { cartAtom } from "@/store/cart.store";
import { userAtom } from "@/store/token.store";
import { useAtom } from "jotai";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";

const CartTotal = dynamic(() => import("@/components/cart/cartTotal"), {
  ssr: false,
});

export default function Page() {
  const [cart] = useAtom(cartAtom);
  const [profile] = useAtom(userAtom);

  const router = useRouter();
  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    if (profile.email === "") {
      toast.error("You must be logged in to checkout");
      return;
    }
    router.push("/cart/checkout");
  };
  return (
    <section className="py-20 bg-gray-100">
      <Toaster />
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
            <div
              className="cursor-pointer inline-block w-full md:w-auto px-8 py-4 bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading uppercase rounded-md transition duration-200"
              onClick={handleCheckout}
            >
              Go to Checkout
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
