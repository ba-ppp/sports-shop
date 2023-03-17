import { Product } from "@/components/product/product";
import { ROOT_API } from "@/constant/env";
import { routes } from "@/constant/routes";
import { ResponseStatusCode } from "@/enums/enums";

async function getCategories() {
  try {
    const res = await fetch(`${ROOT_API}/${routes.categories}`);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (res.status === ResponseStatusCode.OK) {
      // This will activate the closest `error.js` Error Boundary
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

export default async function Products() {
  const categories = await getCategories();
  console.log(categories);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 mb-20 items-center justify-between">
          <div className="w-full lg:w-auto px-4 flex flex-wrap items-center">
            <a
              className="inline-block mr-3 h-full p-4 bg-white rounded-md border"
              href="#"
            >
              <svg
                width="20"
                height="24"
                viewBox="0 0 20 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="4" height="4" rx="2" fill="#2B51C6"></rect>
                <rect x="8" width="4" height="4" rx="2" fill="#2B51C6"></rect>
                <rect x="16" width="4" height="4" rx="2" fill="#2B51C6"></rect>
                <rect y="10" width="4" height="4" rx="2" fill="#2B51C6"></rect>
                <rect
                  x="8"
                  y="10"
                  width="4"
                  height="4"
                  rx="2"
                  fill="#2B51C6"
                ></rect>
                <rect
                  x="16"
                  y="10"
                  width="4"
                  height="4"
                  rx="2"
                  fill="#2B51C6"
                ></rect>
                <rect y="20" width="4" height="4" rx="2" fill="#2B51C6"></rect>
                <rect
                  x="8"
                  y="20"
                  width="4"
                  height="4"
                  rx="2"
                  fill="#2B51C6"
                ></rect>
                <rect
                  x="16"
                  y="20"
                  width="4"
                  height="4"
                  rx="2"
                  fill="#2B51C6"
                ></rect>
              </svg>
            </a>
            <a
              className="inline-block h-full p-4 hover:bg-white border rounded-md group"
              href="#"
            >
              <svg
                className="text-gray-200 group-hover:text-blue-300"
                width="28"
                height="24"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="4" height="4" rx="2" fill="currentColor"></rect>
                <rect
                  x="8"
                  width="4"
                  height="4"
                  rx="2"
                  fill="currentColor"
                ></rect>
                <rect
                  x="16"
                  width="4"
                  height="4"
                  rx="2"
                  fill="currentColor"
                ></rect>
                <rect
                  x="24"
                  width="4"
                  height="4"
                  rx="2"
                  fill="currentColor"
                ></rect>
                <rect
                  y="10"
                  width="4"
                  height="4"
                  rx="2"
                  fill="currentColor"
                ></rect>
                <rect
                  x="8"
                  y="10"
                  width="4"
                  height="4"
                  rx="2"
                  fill="currentColor"
                ></rect>
                <rect
                  x="16"
                  y="10"
                  width="4"
                  height="4"
                  rx="2"
                  fill="currentColor"
                ></rect>
                <rect
                  x="24"
                  y="10"
                  width="4"
                  height="4"
                  rx="2"
                  fill="currentColor"
                ></rect>
                <rect
                  y="20"
                  width="4"
                  height="4"
                  rx="2"
                  fill="currentColor"
                ></rect>
                <rect
                  x="8"
                  y="20"
                  width="4"
                  height="4"
                  rx="2"
                  fill="currentColor"
                ></rect>
                <rect
                  x="16"
                  y="20"
                  width="4"
                  height="4"
                  rx="2"
                  fill="currentColor"
                ></rect>
                <rect
                  x="24"
                  y="20"
                  width="4"
                  height="4"
                  rx="2"
                  fill="currentColor"
                ></rect>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-24">
          <div className="w-full lg:hidden px-3">
            <div className="flex flex-wrap -mx-2">
              <div className="w-1/2 md:w-1/3 px-2 mb-4">
                <div className="py-6 px-2 text-center bg-gray-50">
                  <a className="font-bold font-heading" href="#">
                    Category {categories?.id}
                  </a>
                  <ul className="hidden text-left mt-6">
                    <li className="mb-4">
                      <a href="#">New in</a>
                    </li>
                    <li className="mb-4">
                      <a href="#">Activewear</a>
                    </li>
                    <li className="mb-4">
                      <a href="#">Hoodies &amp; Sweatshirts</a>
                    </li>
                    <li className="mb-4">
                      <a href="#">Jackets</a>
                    </li>
                    <li className="mb-4">
                      <a href="#">Multipacks</a>
                    </li>
                    <li className="mb-4">
                      <a href="#">Bags</a>
                    </li>
                    <li className="mb-4">
                      <a href="#">Sports</a>
                    </li>
                    <li className="mb-4">
                      <a href="#">Gifts</a>
                    </li>
                    <li>
                      <a href="#">Notes</a>
                    </li>
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
                <li className="mb-4">
                  <a className="text-lg" href="#">
                    New in
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-lg" href="#">
                    Activewear
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-lg" href="#">
                    Hoodies &amp; Sweatshirts
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-lg" href="#">
                    Jackets
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-lg" href="#">
                    Multipacks
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-lg" href="#">
                    Bags
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-lg" href="#">
                    Sports
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-lg" href="#">
                    Gifts
                  </a>
                </li>
                <li>
                  <a className="text-lg" href="#">
                    Notes
                  </a>
                </li>
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
            <Product />
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
