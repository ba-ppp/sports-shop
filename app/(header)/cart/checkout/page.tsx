import { CartTotal } from "@/components/cart/cartTotal"

export default function Page() {
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
                  />
                </div>
                <div className="mb-12">
                  <p className="mb-5 text-sm text-gray-500">
                    You can create an account after checkout
                  </p>
                  <div className="py-4 px-6 rounded-full bg-blue-50">
                    <label className="flex items-center" htmlFor="">
                      <input type="checkbox" />
                      <span className="ml-2 text-sm">
                        Register/Choose a password
                      </span>
                    </label>
                  </div>
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
                  />
                </div>
                <div className="mb-10">
                  <label
                    className="font-bold font-heading text-gray-600"
                    htmlFor=""
                  >
                    Street address 2
                  </label>
                  <input
                    className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                    type="text"
                  />
                </div>
                <div className="mb-10">
                  <label
                    className="font-bold font-heading text-gray-600"
                    htmlFor=""
                  >
                    Country
                  </label>
                  <select
                    className="block w-full mt-4 py-4 px-8 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                    name=""
                    id=""
                  >
                    <option value="1"></option>
                    <option value="2">United States</option>
                    <option value="3">Spain</option>
                    <option value="4">Poland</option>
                  </select>
                </div>
                <div className="mb-10">
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-3/5 px-4 mb-10 md:mb-0">
                      <label
                        className="font-bold font-heading text-gray-600"
                        htmlFor=""
                      >
                        State
                      </label>
                      <select
                        className="block w-full mt-4 py-4 px-8 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                        name=""
                        id=""
                      >
                        <option value="1"></option>
                        <option value="2">United States</option>
                        <option value="3">Spain</option>
                        <option value="4">Poland</option>
                      </select>
                    </div>
                    <div className="w-full md:w-2/5 px-4">
                      <label
                        className="font-bold font-heading text-gray-600"
                        htmlFor=""
                      >
                        Zip Code
                      </label>
                      <input
                        className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                        type="text"
                      />
                    </div>
                    <div className="w-full px-4 mt-8">
                      <label className="flex items-center" htmlFor="">
                        <input type="checkbox" />
                        <span className="ml-2 text-sm">
                          I have a diffrent billing address
                        </span>
                      </label>
                    </div>
                  </div>
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
              <div className="flex mb-12 items-center">
                <span className="flex-shrink-0 inline-flex mr-8 items-center justify-center w-12 h-12 rounded-full bg-orange-300 text-white">
                  3
                </span>
                <h3 className="text-2xl font-bold font-heading">
                  Payment methods
                </h3>
              </div>
              <div className="mb-12">
                <label className="flex items-center mb-6" htmlFor="">
                  <input
                    className="mr-5"
                    type="radio"
                    name="paymentType"
                    value=""
                  />
                  <span className="text-sm">Credit card</span>
                </label>
                <label className="flex items-center" htmlFor="">
                  <input
                    className="mr-5"
                    type="radio"
                    name="paymentType"
                    value=""
                  />
                  <span className="text-sm">Cash on Delivery</span>
                </label>
              </div>
              <div className="mb-8 px-8 py-10 bg-gray-100">
                <div className="mb-8">
                  <label
                    className="font-bold font-heading text-gray-600"
                    htmlFor=""
                  >
                    Name on card
                  </label>
                  <input
                    className="block w-full mt-4 mb-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                    type="text"
                  />
                  <p className="text-sm text-gray-500">
                    Full name as displayed on card
                  </p>
                </div>
                <div className="mb-8">
                  <label
                    className="font-bold font-heading text-gray-600"
                    htmlFor=""
                  >
                    Credit card number
                  </label>
                  <input
                    className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                    type="text"
                  />
                </div>
                <div className="mb-8">
                  <label
                    className="font-bold font-heading text-gray-600"
                    htmlFor=""
                  >
                    Expiration
                  </label>
                  <input
                    className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="font-bold font-heading text-gray-600"
                    htmlFor=""
                  >
                    CVV
                  </label>
                  <input
                    className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4">
              <div className="flex mb-12 items-center">
                <span className="flex-shrink-0 inline-flex mr-8 items-center justify-center w-12 h-12 rounded-full bg-pink-300 text-white">
                  4
                </span>
                <h3 className="text-2xl font-bold font-heading">
                  Order summary
                </h3>
              </div>
              {/* <div className="mb-12 p-6 lg:p-12 bg-blue-300">
                <div className="flex mb-2 justify-between items-center">
                  <span className="text-blue-50">Order subtotal</span>
                  <span className="text-xl font-bold font-heading text-white">
                    $89.67
                  </span>
                </div>
                <div className="flex mb-2 justify-between items-center">
                  <span className="text-blue-50">Shipping</span>
                  <span className="text-xl font-bold font-heading text-white">
                    $11.00
                  </span>
                </div>
                <div className="flex mb-5 justify-between items-center">
                  <span className="text-blue-50">Tax</span>
                  <span className="text-xl font-bold font-heading text-white">
                    $0
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold font-heading text-white">
                    Total
                  </span>
                  <span className="text-xl font-bold font-heading text-white">
                    $100.67
                  </span>
                </div>
              </div> */}
              <CartTotal />
              <div className="mb-10">
                <span className="inline-block mb-4 font-medium">
                  Apply discount code:
                </span>
                <div className="flex mb-12 flex-wrap lg:flex-nowrap items-center">
                  <input
                    className="mb-4 md:mb-0 mr-4 px-4 py-4 placeholder-gray-800 font-bold font-heading border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                    type="text"
                    placeholder="SUMMER30X"
                  />
                  <a
                    className="inline-block mb-4 md:mb-0 px-6 py-4 text-white font-bold font-heading uppercase bg-gray-800 hover:bg-gray-700 rounded-md"
                    href="#"
                  >
                    Apply
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
