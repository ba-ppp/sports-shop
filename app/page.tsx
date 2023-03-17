import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="bg-blue-300 bg-opacity-20">
        <div className="py-2 bg-[#1c3fb7]">
          <div className="flex items-center justify-center">
            <svg
              className="mr-2"
              width="18"
              height="11"
              viewBox="0 0 18 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="3.07129"
                width="4"
                height="10"
                rx="2"
                transform="rotate(-45 0 3.07129)"
                fill="white"
              ></rect>
              <rect
                x="8"
                y="2.82861"
                width="4"
                height="10"
                rx="2"
                transform="rotate(-45 8 2.82861)"
                fill="white"
              ></rect>
            </svg>
            <p className="text-xs font-bold font-heading text-blue-200">
              Hi, you’ re new here! Get 20% off card!
            </p>
          </div>
        </div>
        <nav className="relative flex justify-between bg-[#5475e5] bg-opacity-70">
          <div className="px-12 py-8 flex w-full items-center">
            <a
              className="flex-shrink-0 text-3xl font-bold font-heading"
              href="#"
            >
              <div className="flex items-center">
                <Image
                  className="h-9"
                  src="/yofte-logo-white.svg"
                  alt=""
                  width={56}
                  height={500}
                  quality={75}
                />
                <div className="text-xl text-white">Sport Shop</div>
              </div>
            </a>
            <ul className="hidden lg:flex absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:items-center lg:w-auto">
              <li>
                <a
                  className="inline-block w-28 mr-3 py-2 text-center hover:text-white bg-white hover:bg-gray-900 rounded-full font-bold font-heading transition duration-200"
                  href="/products"
                >
                  Category
                </a>
              </li>
              <li>
                <a
                  className="inline-block w-28 mr-3 py-2 text-center hover:text-white bg-white hover:bg-gray-900 rounded-full font-bold font-heading transition duration-200"
                  href="/products"
                >
                  Collection
                </a>
              </li>
              <li>
                <a
                  className="inline-block w-28 mr-3 py-2 text-center hover:text-white bg-white hover:bg-gray-900 rounded-full font-bold font-heading transition duration-200"
                  href="/products"
                >
                  Story
                </a>
              </li>
              <li>
                <a
                  className="inline-block w-28 mr-3 py-2 text-center hover:text-white bg-white hover:bg-gray-900 rounded-full font-bold font-heading transition duration-200"
                  href="/products"
                >
                  Brand
                </a>
              </li>
              <li>
                <a
                  className="inline-block w-28 mr-3 py-2 text-center hover:text-white bg-white hover:bg-gray-900 rounded-full font-bold font-heading transition duration-200"
                  href="/products"
                >
                  Photos
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden xl:flex items-center justify-end mr-12">
            <a className="mr-10" href="#">
              <svg
                width="23"
                height="20"
                viewBox="0 0 23 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
            <a className="flex items-center" href="/cart">
              <svg
                className="mr-3"
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span className="inline-block w-6 h-6 text-center bg-orange-300 rounded-full font-semibold font-heading text-white">
                3
              </span>
            </a>
          </div>
          <button className="flex-shrink-0 hidden xl:block px-8 border-l">
            {/* <div className="flex items-center">
              <Image
                className="w-9 h-9 object-cover mr-2"
                src="/avatar.svg"
                alt=""
                width={36}
                height={36}
              />
              <span className="mr-2 font-medium">Robert</span>
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
            </div> */}
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
          </button>
          <a
            className="xl:hidden flex mr-6 items-center text-gray-900"
            href="#"
          >
            <svg
              className="mr-2"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="inline-block w-6 h-6 text-center text-white bg-orange-300 rounded-full font-semibold font-heading">
              3
            </span>
          </a>
          <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </nav>
        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold font-heading" href="#">
                <Image
                  className="h-9"
                  src="/yofte-logo.svg"
                  alt=""
                  width={144}
                  height={36}
                />
              </a>
              <button className="navbar-close">
                <svg
                  className="h-2 w-2 text-gray-500 cursor-pointer"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00002 1L1 9.00002M1.00003 1L9.00005 9.00002"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex mb-8 justify-between">
              <button>
                <div className="flex items-center">
                  <Image
                    className="w-9 h-9 object-cover mr-2"
                    src="/avatar.svg"
                    alt=""
                    width={36}
                    height={36}
                  />
                  <span className="mr-2 font-medium">Robert</span>
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
                </div>
              </button>
              <div className="flex items-center">
                <a className="mr-10" href="#">
                  <svg
                    width="23"
                    height="20"
                    viewBox="0 0 23 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
                <a className="flex items-center" href="#">
                  <svg
                    className="mr-3"
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span className="inline-block w-6 h-6 text-center bg-gray-100 rounded-full font-semibold font-heading">
                    3
                  </span>
                </a>
              </div>
            </div>
            <input
              className="block mb-10 py-5 px-8 bg-gray-100 rounded-md border-transparent focus:ring-blue-300 focus:border-blue-300 focus:outline-none"
              type="search"
              placeholder="Search"
            />
            <ul className="text-3xl font-bold font-heading">
              <li className="mb-8">
                <a href="#">Category</a>
              </li>
              <li className="mb-8">
                <a href="#">Collection</a>
              </li>
              <li className="mb-8">
                <a href="#">Story</a>
              </li>
              <li className="mb-8">
                <a href="#">Brand</a>
              </li>
              <li>
                <a href="#">Photos</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="container mx-auto px-4 pb-16">
          <div className="flex flex-wrap pt-8 pb-10 items-center">
            <div className="flex w-full justify-between items-center">
              <div className="font-semibold font-heading mb-10 lg:mb-0 mr-14">
                Search items:
              </div>
              <div className="flex mr-auto mb-10 lg:mb-0 items-center pl-8 bg-white rounded-lg">
                <span className="mr-3">
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 17.6719L12.5042 12.4961"
                      stroke="black"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M7.27524 14.4082C10.8789 14.4082 13.8002 11.486 13.8002 7.88134C13.8002 4.27666 10.8789 1.35449 7.27524 1.35449C3.67159 1.35449 0.750244 4.27666 0.750244 7.88134C0.750244 11.486 3.67159 14.4082 7.27524 14.4082Z"
                      stroke="black"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <input
                  className="border-0 focus:ring-transparent focus:outline-none"
                  type="search"
                />
                <button className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-md">
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.125 6.00252L0 1.87752L1.17801 0.699219L6.48102 6.00252L1.17801 11.3058L0 10.1275L4.125 6.00252Z"
                      fill="white"
                    ></path>
                  </svg>
                </button>
              </div>
              <div>
                <a
                  className="inline-flex items-center justify-center w-12 h-12 mr-2 bg-blue-600 rounded-full"
                  href="#"
                >
                  <svg
                    className="w-4 h-4"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M17.0064 0.554688H0.992752C0.444397 0.554962 -0.000137297 0.999771 3.181e-08 1.54826V17.5619C0.00027469 18.1103 0.445084 18.5548 0.993576 18.5547H17.0064C17.5551 18.5548 17.9999 18.1102 18 17.5615C18 17.5614 18 17.5612 18 17.5611V1.54744C17.9997 0.999084 17.5549 0.55455 17.0064 0.554688Z"
                        fill="white"
                      ></path>
                      <path
                        d="M12.4277 18.555V11.5941H14.7744L15.126 8.86946H12.4277V7.13417C12.4277 6.34714 12.6462 5.81087 13.7748 5.81087H15.2051V3.38055C14.9562 3.34746 14.1025 3.27344 13.109 3.27344C11.0348 3.27344 9.61523 4.53906 9.61523 6.86432V8.86946H7.27734V11.5941H9.61523V18.555H12.4277Z"
                        fill="#5475E5"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 0.554688)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  className="inline-flex items-center justify-center w-12 h-12 mr-2 bg-indigo-600 rounded-full"
                  href="#"
                >
                  <svg
                    className="w-4 h-4"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M17.9825 5.84674C17.9403 4.89033 17.7857 4.2328 17.5641 3.66305C17.3356 3.05827 16.9839 2.51682 16.5232 2.0667C16.0731 1.60958 15.5281 1.25438 14.9303 1.02939C14.3573 0.807834 13.7032 0.653172 12.7468 0.611003C11.7832 0.565264 11.4773 0.554688 9.03349 0.554688C6.58966 0.554688 6.28377 0.565264 5.32379 0.607432C4.36738 0.6496 3.70985 0.804401 3.14024 1.02582C2.53532 1.25438 1.99387 1.60601 1.54375 2.0667C1.08663 2.51682 0.731567 3.06185 0.50644 3.65962C0.284885 4.2328 0.130222 4.88676 0.0880542 5.84317C0.0423147 6.80672 0.0317383 7.11261 0.0317383 9.55645C0.0317383 12.0003 0.0423147 12.3062 0.0844829 13.2662C0.126651 14.2226 0.281451 14.8801 0.503006 15.4498C0.731567 16.0546 1.08663 16.5961 1.54375 17.0462C1.99387 17.5033 2.5389 17.8585 3.13667 18.0835C3.70985 18.3051 4.36381 18.4597 5.32035 18.5019C6.2802 18.5442 6.58622 18.5546 9.03006 18.5546C11.4739 18.5546 11.7798 18.5442 12.7398 18.5019C13.6962 18.4597 14.3537 18.3051 14.9233 18.0835C16.133 17.6158 17.0894 16.6594 17.5571 15.4498C17.7785 14.8767 17.9333 14.2226 17.9755 13.2662C18.0177 12.3062 18.0282 12.0003 18.0282 9.55645C18.0282 7.11261 18.0247 6.80672 17.9825 5.84674ZM16.3616 13.1958C16.3228 14.0749 16.1752 14.5496 16.0521 14.8661C15.7496 15.6502 15.1273 16.2726 14.3431 16.5751C14.0267 16.6981 13.5485 16.8458 12.6729 16.8844C11.7235 16.9267 11.4387 16.9371 9.03707 16.9371C6.6354 16.9371 6.34709 16.9267 5.40112 16.8844C4.52204 16.8458 4.04734 16.6981 3.73087 16.5751C3.34064 16.4308 2.98544 16.2023 2.69713 15.9034C2.39824 15.6115 2.16968 15.2599 2.02546 14.8696C1.90239 14.5532 1.75473 14.0749 1.71613 13.1994C1.67383 12.25 1.66339 11.9651 1.66339 9.56345C1.66339 7.16178 1.67383 6.87347 1.71613 5.92764C1.75473 5.04856 1.90239 4.57386 2.02546 4.25739C2.16968 3.86703 2.39824 3.51196 2.7007 3.22351C2.99244 2.92463 3.34408 2.69607 3.73444 2.55198C4.05091 2.42891 4.52918 2.28125 5.40469 2.24252C6.35409 2.20035 6.63897 2.18977 9.0405 2.18977C11.4457 2.18977 11.7305 2.20035 12.6764 2.24252C13.5555 2.28125 14.0302 2.42891 14.3467 2.55198C14.7369 2.69607 15.0921 2.92463 15.3804 3.22351C15.6793 3.51539 15.9079 3.86703 16.0521 4.25739C16.1752 4.57386 16.3228 5.052 16.3616 5.92764C16.4037 6.87704 16.4143 7.16178 16.4143 9.56345C16.4143 11.9651 16.4037 12.2464 16.3616 13.1958Z"
                        fill="white"
                      ></path>
                      <path
                        d="M9.03362 4.93262C6.48086 4.93262 4.40967 7.00367 4.40967 9.55657C4.40967 12.1095 6.48086 14.1805 9.03362 14.1805C11.5865 14.1805 13.6576 12.1095 13.6576 9.55657C13.6576 7.00367 11.5865 4.93262 9.03362 4.93262ZM9.03362 12.556C7.37752 12.556 6.03418 11.2128 6.03418 9.55657C6.03418 7.90033 7.37752 6.55713 9.03362 6.55713C10.6899 6.55713 12.0331 7.90033 12.0331 9.55657C12.0331 11.2128 10.6899 12.556 9.03362 12.556Z"
                        fill="white"
                      ></path>
                      <path
                        d="M14.9198 4.74989C14.9198 5.34602 14.4365 5.82937 13.8402 5.82937C13.2441 5.82937 12.7607 5.34602 12.7607 4.74989C12.7607 4.15363 13.2441 3.67041 13.8402 3.67041C14.4365 3.67041 14.9198 4.15363 14.9198 4.74989Z"
                        fill="white"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 0.554688)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full"
                  href="#"
                >
                  <svg
                    className="w-4 h-4"
                    width="18"
                    height="15"
                    viewBox="0 0 18 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 1.97356C17.3306 2.26719 16.6174 2.46181 15.8737 2.55631C16.6388 2.09956 17.2226 1.38181 17.4971 0.516687C16.7839 0.941937 15.9964 1.24231 15.1571 1.40994C14.4799 0.688813 13.5146 0.242188 12.4616 0.242188C10.4186 0.242188 8.77387 1.90044 8.77387 3.93331C8.77387 4.22581 8.79862 4.50706 8.85938 4.77481C5.7915 4.62519 3.07687 3.15481 1.25325 0.914938C0.934875 1.46731 0.748125 2.09956 0.748125 2.78019C0.748125 4.05819 1.40625 5.19106 2.38725 5.84694C1.79437 5.83569 1.21275 5.66356 0.72 5.39244C0.72 5.40369 0.72 5.41831 0.72 5.43294C0.72 7.22619 1.99912 8.71569 3.6765 9.05881C3.37612 9.14094 3.04875 9.18031 2.709 9.18031C2.47275 9.18031 2.23425 9.16681 2.01038 9.11731C2.4885 10.5787 3.84525 11.6531 5.4585 11.6879C4.203 12.6701 2.60888 13.2618 0.883125 13.2618C0.5805 13.2618 0.29025 13.2483 0 13.2112C1.63462 14.2653 3.57188 14.8672 5.661 14.8672C12.4515 14.8672 16.164 9.24219 16.164 4.36644C16.164 4.20331 16.1584 4.04581 16.1505 3.88944C16.8829 3.36969 17.4982 2.72056 18 1.97356Z"
                      fill="white"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-8/12 px-4 mb-6 lg:mb-0">
              <div className="relative h-full bg-white overflow-hidden">
                <Image
                  className="absolute right-0 top-0 w-1/2 h-full"
                  src="/women.png"
                  width={3840}
                  height={1714}
                  style={{ objectFit: "cover" }}
                  alt=""
                  quality={100}
                />
                <div className="hidden lg:flex absolute right-0 top-1/2 pr-10 transform -translate-y-1/2 flex-col items-center">
                  <div className="mb-5 h-16 w-px bg-gray-100"></div>
                  <button className="mb-5">
                    <Image src="/circle.svg" alt="" width={24} height={24} />
                  </button>
                  <button className="mb-6 w-1 h-1 bg-blue-500 rounded-full"></button>
                  <button className="mb-6 w-1 h-1 bg-blue-500 rounded-full"></button>
                  <div className="h-16 w-px bg-gray-100"></div>
                </div>
                <div className="relative max-w-xl pl-6 lg:pl-20 pt-32 pb-24">
                  <span className="px-3 py-1 border border-blue-500 rounded-full text-xs text-blue-500 font-bold font-heading uppercase">
                    Bestseller
                  </span>
                  <h2 className="mt-6 mb-8 text-5xl lg:text-6xl font-bold font-heading">
                    <div>Don’t stop.</div>
                    <span className="text-blue-500">Create </span>
                    <span>yourself.</span>
                  </h2>
                  <p className="mb-20 text-lg text-gray-600">
                    Discover more products and inspiration.
                  </p>
                  <a
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold font-heading py-6 px-8 rounded-md uppercase transition duration-200"
                    href="/products"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <a href="#">
                <Image
                  className="mb-6"
                  src="/placeholder1.png"
                  width={668}
                  height={462}
                  alt=""
                />
              </a>
              <a href="#">
                <Image
                  width={668}
                  height={462}
                  src="/placeholder2.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="py-12 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h4 className="lg:ml-16 mb-6 font-bold font-heading text-gray-500 text-xs">
              TRUSTED BY BRANDS ALL OVER THE WORLD
            </h4>
            <div className="flex flex-wrap -mx-3 -mb-3">
              <div className="w-full md:w-1/2 lg:w-1/6 p-3">
                <div className="h-28 flex items-center bg-white shadow-xl">
                  <Image
                    className="mx-auto"
                    src="/exxon.svg"
                    alt=""
                    width={97}
                    height={37}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/6 p-3">
                <div className="h-28 flex items-center bg-white shadow-xl">
                  <Image
                    className="mx-auto"
                    src="/ea-sports.svg"
                    alt=""
                    width={97}
                    height={37}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/6 p-3">
                <div className="h-28 flex items-center bg-white shadow-xl">
                  <Image
                    className="mx-auto"
                    src="/eurosport.svg"
                    alt=""
                    width={97}
                    height={37}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/6 p-3">
                <div className="h-28 flex items-center bg-white shadow-xl">
                  <Image
                    className="mx-auto"
                    src="/nike.svg"
                    alt=""
                    width={97}
                    height={37}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/6 p-3">
                <div className="h-28 flex items-center bg-white shadow-xl">
                  <Image
                    className="mx-auto"
                    src="/aol.svg"
                    alt=""
                    width={97}
                    height={37}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/6 p-3">
                <div className="h-28 flex items-center bg-white shadow-xl">
                  <Image
                    className="mx-auto"
                    src="/north-face.svg"
                    alt=""
                    width={97}
                    height={37}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold font-heading" href="#">
                <Image
                  className="h-9"
                  src="/yofte-logo-white.svg"
                  alt=""
                  width={144}
                  height={36}
                />
              </a>
              <button className="navbar-close">
                <svg
                  className="h-2 w-2 text-gray-500 cursor-pointer"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00002 1L1 9.00002M1.00003 1L9.00005 9.00002"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex mb-8 justify-between">
              <a
                className="inline-flex items-center font-semibold font-heading"
                href="#"
              >
                <svg
                  className="mr-3"
                  width="32"
                  height="31"
                  viewBox="0 0 32 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0006 16.3154C19.1303 16.3154 21.6673 13.799 21.6673 10.6948C21.6673 7.59064 19.1303 5.07422 16.0006 5.07422C12.871 5.07422 10.334 7.59064 10.334 10.6948C10.334 13.799 12.871 16.3154 16.0006 16.3154Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M24.4225 23.8963C23.6678 22.3507 22.4756 21.0445 20.9845 20.1298C19.4934 19.2151 17.7647 18.7295 15.9998 18.7295C14.2349 18.7295 12.5063 19.2151 11.0152 20.1298C9.52406 21.0445 8.33179 22.3507 7.57715 23.8963"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>Sign&nbsp;In</span>
              </a>
              <div className="flex items-center">
                <a className="mr-10" href="#">
                  <svg
                    width="23"
                    height="20"
                    viewBox="0 0 23 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
                <a className="flex items-center" href="#">
                  <svg
                    className="mr-3"
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span className="inline-block w-6 h-6 text-center bg-gray-100 rounded-full font-semibold font-heading">
                    3
                  </span>
                </a>
              </div>
            </div>
            <input
              className="block mb-10 py-5 px-8 bg-gray-100 rounded-md border-transparent focus:ring-blue-300 focus:border-blue-300 focus:outline-none"
              type="search"
              placeholder="Search"
            />
            <ul className="text-3xl font-bold font-heading">
              <li className="mb-8">
                <a href="/products">Category</a>
              </li>
              <li className="mb-8">
                <a href="/products">Collection</a>
              </li>
              <li className="mb-8">
                <a href="/products">Story</a>
              </li>
              <li className="mb-8">
                <a href="/products">Story</a>
              </li>
              <li>
                <a href="/products">Photos</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <section className="py-20 bg-[#010206] overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 lg:mb-0">
              <div className="relative h-full text-center pt-16 border border-gray-500">
                <Image
                  className="hidden md:block absolute z-10 top-0 left-1/2 ml-16 lg:ml-8 mt-16"
                  src="/dots.svg"
                  alt=""
                  width={205}
                  height={98}
                />
                <div className="pb-12 mx-10 border-b border-gray-500">
                  <span className="inline-flex mb-16 items-center justify-center w-20 h-20 bg-blue-600 rounded-full">
                    <svg
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M34.9845 11.6702C33.7519 10.3368 32 9.60814 30.0543 9.60814H24.9767V6.75543C24.9767 6.2438 24.5581 5.8252 24.0465 5.8252H0.930233C0.418605 5.8252 0 6.2438 0 6.75543V27.2128C0 27.7244 0.418605 28.143 0.930233 28.143H4.63566C4.93798 29.864 6.43411 31.174 8.24031 31.174C10.0465 31.174 11.5426 29.864 11.845 28.143H24.0465H26.0853C26.3876 29.864 27.8837 31.174 29.6899 31.174C31.4961 31.174 32.9922 29.864 33.2946 28.143H36.0698C36.5814 28.143 37 27.7244 37 27.2128V17.6004C36.9922 15.143 36.3023 13.0888 34.9845 11.6702ZM1.86047 7.68566H23.1163V10.5384V26.2903H11.6822C11.1783 24.8795 9.82171 23.864 8.24031 23.864C6.65892 23.864 5.30233 24.8795 4.79845 26.2903H1.86047V7.68566ZM8.24031 29.3136C7.24806 29.3136 6.44186 28.5074 6.44186 27.5151C6.44186 26.5229 7.24806 25.7167 8.24031 25.7167C9.23256 25.7167 10.0388 26.5229 10.0388 27.5151C10.0388 28.5074 9.23256 29.3136 8.24031 29.3136ZM29.6899 29.3136C28.6977 29.3136 27.8915 28.5074 27.8915 27.5151C27.8915 26.5229 28.6977 25.7167 29.6899 25.7167C30.6822 25.7167 31.4884 26.5229 31.4884 27.5151C31.4884 28.5074 30.6822 29.3136 29.6899 29.3136ZM35.1318 26.2826H33.1318C32.6279 24.8717 31.2713 23.8562 29.6899 23.8562C28.1085 23.8562 26.7519 24.8717 26.2481 26.2826H24.9845V11.4686H30.062C33.1938 11.4686 35.1395 13.8174 35.1395 17.6004V26.2826H35.1318Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="mb-4 text-xl font-bold font-heading text-white">
                    Free Shipping
                  </h3>
                  <p className="text-white">From $45</p>
                </div>
                <div className="pt-12 px-14 pb-14 text-center">
                  <p className="text-lg text-gray-300">
                    Ante ipsum primis in faucibus orci luctus.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 lg:mb-0">
              <div className="relative h-full text-center pt-16 border border-gray-500">
                <Image
                  className="hidden lg:block absolute z-10 top-0 left-1/2 ml-16 lg:ml-8 mt-16"
                  src="/dots.svg"
                  alt=""
                  width={205}
                  height={98}
                />
                <div className="pb-12 mx-10 border-b border-gray-500">
                  <span className="inline-flex mb-16 items-center justify-center w-20 h-20 bg-indigo-600 rounded-full">
                    <svg
                      width="39"
                      height="36"
                      viewBox="0 0 39 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.7601 5.67776C30.3819 2.38616 25.8883 0.572266 21.1139 0.572266C16.2512 0.572266 11.7014 2.44089 8.30713 5.83414C7.93802 6.20161 7.94604 6.79581 8.32318 7.16329C8.70032 7.52294 9.31017 7.51512 9.68731 7.14765C12.7205 4.12188 16.7727 2.45653 21.1139 2.45653C29.9165 2.44871 37.0742 9.42284 37.0742 17.9998C37.0742 26.5767 29.9165 33.5508 21.1139 33.5508C12.3113 33.5508 5.15359 26.5767 5.15359 17.9998V17.8043L6.7424 19.3524C6.92696 19.5322 7.17571 19.626 7.42446 19.626C7.67322 19.626 7.91395 19.5322 8.10653 19.3524C8.48367 18.9849 8.48367 18.3907 8.10653 18.0232L4.88077 14.8724C4.50363 14.5049 3.89378 14.5049 3.51664 14.8724L0.282856 18.0232C-0.0942853 18.3907 -0.0942853 18.9849 0.282856 19.3524C0.467414 19.5322 0.716167 19.626 0.96492 19.626C1.21367 19.626 1.4544 19.5322 1.64698 19.3524L3.23579 17.8043V17.9998C3.23579 22.6518 5.09742 27.0302 8.47565 30.3218C11.8539 33.6134 16.3475 35.4273 21.1219 35.4273C25.8964 35.4273 30.39 33.6134 33.7682 30.3218C37.1464 27.0302 39 22.6518 39 17.9998C39 13.3477 37.1384 8.96937 33.7601 5.67776Z"
                        fill="white"
                      ></path>
                      <path
                        d="M20.4014 8C17.272 8 14.7283 10.4785 14.7283 13.5277V16.1938H12.9629C12.4333 16.1938 12 16.616 12 17.132V26.4908C12 27.0068 12.4333 27.429 12.9629 27.429H27.848C28.3776 27.429 28.8109 27.0068 28.8109 26.4908V17.1399C28.8109 16.6238 28.3776 16.2016 27.848 16.2016H26.0826V13.5355C26.0826 10.4863 23.5309 8 20.4014 8ZM16.6541 13.5355C16.6541 11.5183 18.3392 9.88427 20.4014 9.88427C22.4637 9.88427 24.1488 11.5262 24.1488 13.5355V16.2016H16.6541V13.5355ZM26.885 25.5526H13.9258V18.0703H26.885V25.5526Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="mb-4 text-xl font-bold font-heading text-white">
                    Secure Shopping
                  </h3>
                  <p className="text-white">100% Guarantee</p>
                </div>
                <div className="pt-12 px-14 pb-14 text-center">
                  <p className="text-lg text-gray-300">
                    Fusce pharetra lectus felis, eget temp.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 md:mb-0">
              <div className="relative h-full text-center pt-16 border border-gray-500">
                <Image
                  className="hidden md:block absolute z-10 top-0 left-1/2 ml-16 lg:ml-8 mt-16"
                  src="/dots.svg"
                  alt=""
                  width={205}
                  height={98}
                />
                <div className="pb-12 mx-10 border-b border-gray-500">
                  <span className="inline-flex mb-16 items-center justify-center w-20 h-20 bg-pink-600 rounded-full">
                    <svg
                      width="31"
                      height="37"
                      viewBox="0 0 31 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.59532 15.0855C9.59532 14.5814 9.18285 14.1689 8.67872 14.1689H1.33066C0.826531 14.1689 0.414062 14.5814 0.414062 15.0855C0.414062 15.5897 0.826531 16.0021 1.33066 16.0021H8.67872C9.18285 16.0021 9.59532 15.5897 9.59532 15.0855Z"
                        fill="white"
                      ></path>
                      <path
                        d="M29.669 14.1689H22.3209C21.8168 14.1689 21.4043 14.5814 21.4043 15.0855C21.4043 15.5897 21.8168 16.0021 22.3209 16.0021H29.669C30.1731 16.0021 30.5856 15.5897 30.5856 15.0855C30.5856 14.5814 30.1807 14.1689 29.669 14.1689Z"
                        fill="white"
                      ></path>
                      <path
                        d="M15.4996 9.18126C16.0037 9.18126 16.4162 8.76879 16.4162 8.26466V0.916598C16.4162 0.412469 16.0037 0 15.4996 0C14.9955 0 14.583 0.412469 14.583 0.916598V8.26466C14.583 8.76879 14.9955 9.18126 15.4996 9.18126Z"
                        fill="white"
                      ></path>
                      <path
                        d="M20.3199 11.1823C20.5567 11.1823 20.7858 11.0906 20.9691 10.915L26.1708 5.71327C26.5298 5.35427 26.5298 4.77376 26.1708 4.41476C25.8118 4.05576 25.2313 4.05576 24.8723 4.41476L19.6706 9.61645C19.3116 9.97545 19.3116 10.556 19.6706 10.915C19.8539 11.0906 20.0907 11.1823 20.3199 11.1823Z"
                        fill="white"
                      ></path>
                      <path
                        d="M10.0305 10.915C10.2062 11.0906 10.443 11.1823 10.6798 11.1823C10.9166 11.1823 11.1457 11.0906 11.329 10.915C11.688 10.556 11.688 9.97545 11.329 9.61645L6.12733 4.41476C5.76833 4.05576 5.18782 4.05576 4.82882 4.41476C4.46982 4.77376 4.46982 5.35427 4.82882 5.71327L10.0305 10.915Z"
                        fill="white"
                      ></path>
                      <path
                        d="M26.5146 20.8684C25.8195 20.2726 24.9411 19.9442 24.0474 19.9442H23.2149H20.2206H18.7999V16.2396C18.7999 14.4675 18.2729 13.1766 17.2264 12.4051C15.5765 11.1983 13.3385 11.8781 13.2392 11.9086C12.8573 12.0309 12.5976 12.3822 12.5976 12.7794V17.2478C12.5976 18.6074 11.9483 19.7608 10.6575 20.6851C9.67976 21.3878 8.67914 21.7086 8.54929 21.7468L8.45763 21.7697C8.1139 21.3802 7.60978 21.1357 7.04454 21.1357H3.56147C2.52266 21.1357 1.6748 21.9836 1.6748 23.0224V34.4493C1.6748 35.4881 2.52266 36.336 3.56147 36.336H7.05982C7.51812 36.336 7.94586 36.1679 8.26667 35.893C8.9694 36.5804 9.92419 37.0005 10.9554 37.0005H14.4308H14.7898H21.9011C23.001 37.0005 23.971 36.7332 24.712 36.2367C25.6591 35.5951 26.2473 34.5792 26.4153 33.2807L27.8284 24.4966C28.0499 23.137 27.5458 21.7468 26.5146 20.8684ZM7.11329 34.4493C7.11329 34.4799 7.09037 34.5028 7.05982 34.5028H3.56147C3.53092 34.5028 3.508 34.4799 3.508 34.4493V23.0224C3.508 22.9918 3.53092 22.9689 3.56147 22.9689H7.05982C7.09037 22.9689 7.11329 22.9918 7.11329 23.0224V34.4493ZM26.0181 24.214L24.605 33.0133C24.605 33.021 24.605 33.0362 24.5974 33.0515C24.5363 33.5786 24.3377 35.175 21.9011 35.175H14.7898H14.4308H10.9554C9.97765 35.175 9.12216 34.4417 8.9694 33.4716C8.96176 33.4334 8.95412 33.3952 8.94648 33.3647V23.5418L8.99995 23.5265C9.01523 23.5265 9.02287 23.5189 9.03814 23.5189C9.09161 23.5036 10.3901 23.137 11.681 22.2127C13.476 20.9371 14.4308 19.2185 14.4308 17.2478V13.5356C14.9349 13.4821 15.63 13.5051 16.1418 13.8793C16.6917 14.2842 16.9667 15.0785 16.9667 16.2319V20.8531C16.9667 21.3572 17.3792 21.7697 17.8833 21.7697H20.2206H23.2149H24.0474C24.5057 21.7697 24.9564 21.9454 25.323 22.2509C25.873 22.7245 26.1327 23.4731 26.0181 24.214Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="mb-4 text-xl font-bold font-heading text-white">
                    Customer Satisfaction
                  </h3>
                  <p className="text-white">100% Positive Feedbacks</p>
                </div>
                <div className="pt-12 px-14 pb-14 text-center">
                  <p className="text-lg text-gray-300">
                    Praesent ultrices ac lectus non placerat!
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-3">
              <div className="relative h-full text-center pt-16 border border-gray-500">
                <div className="pb-12 mx-10 border-b border-gray-500">
                  <span className="inline-flex mb-16 items-center justify-center w-20 h-20 bg-orange-600 rounded-full">
                    <svg
                      width="35"
                      height="37"
                      viewBox="0 0 35 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.0586 14.0693V12.6468C30.0586 9.24223 28.8538 6.07857 26.6695 3.73109C24.4309 1.32143 21.3527 0 17.9947 0H16.821C13.463 0 10.3849 1.32143 8.14622 3.73109C5.96197 6.07857 4.75714 9.24223 4.75714 12.6468V14.0693C2.10651 14.2481 0 16.4557 0 19.1529V21.3761C0 24.1821 2.28529 26.4674 5.09139 26.4674H7.95966C8.47269 26.4674 8.89244 26.0477 8.89244 25.5347V14.9866C8.89244 14.4735 8.47269 14.0538 7.95966 14.0538H6.62269V12.6468C6.62269 6.49832 11.0067 1.86555 16.8132 1.86555H17.987C23.8013 1.86555 28.1775 6.49832 28.1775 12.6468V14.0538H26.8405C26.3275 14.0538 25.9078 14.4735 25.9078 14.9866V25.5269C25.9078 26.0399 26.3275 26.4597 26.8405 26.4597H28.1464C27.7655 31.3256 24.4153 32.4527 22.8607 32.7092C22.4332 31.3956 21.1973 30.4473 19.7437 30.4473H17.4118C15.6084 30.4473 14.1393 31.9164 14.1393 33.7197C14.1393 35.5231 15.6084 37 17.4118 37H19.7515C21.2595 37 22.5265 35.9739 22.9074 34.5903C23.6691 34.4815 24.8739 34.2095 26.071 33.5099C27.7578 32.5227 29.7555 30.5095 30.0197 26.4519C32.6859 26.2887 34.8002 24.0733 34.8002 21.3683V19.1452C34.808 16.4557 32.7092 14.2403 30.0586 14.0693ZM7.04244 24.5941H5.10693C3.32689 24.5941 1.88109 23.1483 1.88109 21.3683V19.1452C1.88109 17.3651 3.32689 15.9193 5.10693 15.9193H7.04244V24.5941ZM19.7515 35.1345H17.4118C16.6345 35.1345 16.0048 34.5048 16.0048 33.7275C16.0048 32.9502 16.6345 32.3206 17.4118 32.3206H19.7515C20.5288 32.3206 21.1584 32.9502 21.1584 33.7275C21.1584 34.5048 20.5288 35.1345 19.7515 35.1345ZM32.9424 21.3683C32.9424 23.1483 31.4966 24.5941 29.7166 24.5941H27.7811V15.9193H29.7166C31.4966 15.9193 32.9424 17.3651 32.9424 19.1452V21.3683Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="mb-4 text-xl font-bold font-heading text-white">
                    Support
                  </h3>
                  <p className="text-white">Online Support 24/7</p>
                </div>
                <div className="pt-12 px-14 pb-14 text-center">
                  <p className="text-lg text-gray-300">
                    Ante ipsum primis in faucibus orci luctus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-100 overflow-x-hidden">
        <div className="container px-4 mx-auto relative">
          <div className="absolute inset-0 bg-blue-400 my-8 -ml-4 -mr-4"></div>
          <div className="relative bg-blue-600 overflow-hidden">
            <Image
              className="absolute top-0 left-0 xl:-ml-40 w-full h-full"
              src="/cta-lines.svg"
              alt=""
              width={205}
              height={98}
            />
            <div className="relative flex flex-wrap items-center">
              <div className="w-full md:w-4/6 p-10 lg:pl-40">
                <span className="text-xl md:text-2xl text-white">
                  New Products
                </span>
                <h2 className="mt-4 mb-14 text-4xl md:text-5xl font-bold font-heading text-white">
                  Check our new collection
                </h2>
                <a
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                  href="#"
                >
                  More
                </a>
              </div>
              <Image
                className="relative ml-auto w-full md:w-2/6 h-96 object-cover"
                src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"
                alt=""
                width={245}
                height={384}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-20 md:py-32 bg-[#081132] overflow-x-hidden">
        <Image
          className="absolute h-24 md:h-auto top-0 left-0 right-0"
          src="/line-top.svg"
          alt=""
          width={1366}
          height={127}
        />
        <div className="relative container px-4 mx-auto mb-20 lg:mb-40">
          <div className="flex flex-wrap items-center">
            <h2 className="mb-10 lg:mb-0 w-full lg:w-auto text-5xl text-white font-bold font-heading">
              What Customers Say
            </h2>
            <div className="flex w-full lg:w-auto lg:ml-auto">
              <a
                className="mr-5 flex items-center justify-center w-12 h-12 bg-orange-400 hover:bg-orange-400 rounded-md"
                href="#"
              >
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.02344 5.99748L7.14844 10.1225L5.97043 11.3008L0.66742 5.99748L5.97043 0.694179L7.14844 1.87248L3.02344 5.99748Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
              <a
                className="flex items-center justify-center w-12 h-12 bg-blue-400 hover:bg-blue-400 rounded-md"
                href="#"
              >
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.97656 6.00252L0.851562 1.87752L2.02957 0.699219L7.33258 6.00252L2.02957 11.3058L0.851562 10.1275L4.97656 6.00252Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center">
          <div className="hidden lg:block opacity-50 flex-shrink-0 w-full max-w-md px-3">
            <div className="px-8 py-16 border border-white">
              <div className="relative px-4 mx-auto">
                <Image
                  className="absolute top-0 left-0"
                  src="/quote.svg"
                  alt=""
                  width={18}
                  height={11}
                />
                <Image
                  className="absolute top-0 right-0"
                  src="/quote.svg"
                  alt=""
                  width={18}
                  height={11}
                />
                <div className="px-4 md:px-10">
                  <h3 className="mb-8 text-xl font-bold font-heading text-white">
                    Thanks, feugiat tellus a sad tincidunt ultrices. Phasellus
                    non libero tempus odio vestibulum ultricies.
                  </h3>
                  <div className="flex flex-wrap items-center">
                    <Image
                      className="w-16 h-16 mb-4 md:mb-0 mr-6 rounded-full"
                      src="/placeholder-portrait.png"
                      alt=""
                      width={64}
                      height={64}
                    />
                    <p className="mb-6 md:mb-0 text-gray-300">
                      Alice Kenowski, NYC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-full lg:max-w-md px-3 lg:mt-20 mb-6 lg:mb-0">
            <div className="px-8 py-16 border border-white">
              <div className="relative px-4 mx-auto">
                <Image
                  className="absolute top-0 left-0"
                  src="/quote.svg"
                  alt=""
                  width={18}
                  height={11}
                />
                <Image
                  className="absolute top-0 right-0"
                  src="/quote.svg"
                  alt=""
                  width={18}
                  height={11}
                />
                <div className="px-4 md:px-10">
                  <h3 className="mb-8 text-xl font-bold font-heading text-white">
                    Tonight I had interdum at ante porta, eleifend feugiat nunc.
                    In semper euismod me a accumsan. Thanks! 👏💥
                  </h3>
                  <div className="flex flex-wrap items-center">
                    <Image
                      className="w-16 h-16 mb-4 md:mb-0 mr-6 rounded-full"
                      src="/placeholder-portrait.png"
                      alt=""
                      width={64}
                      height={64}
                    />
                    <p className="mb-6 md:mb-0 text-gray-300">
                      TIA O’Halleran, NYC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-full lg:max-w-md px-3 mb-6 lg:mb-0">
            <div className="px-8 py-16 border border-white">
              <div className="relative px-4 mx-auto">
                <Image
                  className="absolute top-0 left-0"
                  src="/quote.svg"
                  alt=""
                  width={18}
                  height={11}
                />
                <Image
                  className="absolute top-0 right-0"
                  src="/quote.svg"
                  alt=""
                  width={18}
                  height={11}
                />
                <div className="px-4 md:px-10">
                  <h3 className="mb-8 text-xl font-bold font-heading text-white">
                    Thanks, feugiat tellus a sad tincidunt ultrices. Phasellus
                    non libero tempus odio vestibulum ultricies.
                  </h3>
                  <div className="flex flex-wrap items-center">
                    <Image
                      className="w-16 h-16 mb-4 md:mb-0 mr-6 rounded-full"
                      src="/placeholder-young.png"
                      alt=""
                      width={64}
                      height={64}
                    />
                    <p className="mb-6 md:mb-0 text-gray-300">
                      Alice Kenowski, NYC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-full lg:max-w-md px-3 lg:mt-20 mb-6 lg:mb-0">
            <div className="px-8 py-16 border border-white">
              <div className="relative px-4 mx-auto">
                <Image
                  className="absolute top-0 left-0"
                  src="/quote.svg"
                  alt=""
                  width={18}
                  height={11}
                />
                <Image
                  className="absolute top-0 right-0"
                  src="/quote.svg"
                  alt=""
                  width={18}
                  height={11}
                />
                <div className="px-4 md:px-10">
                  <h3 className="mb-8 text-xl font-bold font-heading text-white">
                    This time ut augue ut magna rutrum ultricies nec nec leo.
                    Proin tempor, mauris sad senne lorem.
                  </h3>
                  <div className="flex flex-wrap items-center">
                    <Image
                      className="w-16 h-16 mb-4 md:mb-0 mr-6 rounded-full"
                      src="/placeholder-anna.png"
                      alt=""
                      width={64}
                      height={64}
                    />
                    <p className="mb-6 md:mb-0 text-gray-300">
                      Lea Diamse, NYC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block opacity-50 flex-shrink-0 w-full max-w-md px-3">
            <div className="px-8 py-16 border border-white">
              <div className="relative px-4 mx-auto">
                <Image
                  className="hidden md:block absolute top-0 left-0"
                  src="/quote.svg"
                  alt=""
                  width={18}
                  height={11}
                />
                <Image
                  className="hidden md:block absolute top-0 right-0"
                  src="/quote.svg"
                  alt=""
                  width={18}
                  height={11}
                />
                <div className="px-4 md:px-10">
                  <h3 className="mb-8 text-xl font-bold font-heading text-white">
                    Thanks, feugiat tellus a sad tincidunt ultrices. Phasellus
                    non libero tempus odio vestibulum ultricies.
                  </h3>
                  <div className="flex flex-wrap items-center">
                    <Image
                      className="w-16 h-16 mr-6 rounded-full"
                      src="/placeholder-portrait.png"
                      alt=""
                      width={64}
                      height={64}
                    />
                    <p className="mb-6 md:mb-0 text-gray-300">
                      TIA O’Halleran, NYC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#081132]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 pb-6 lg:pb-16 border-b border-gray-400">
            <div className="w-full lg:w-3/5 px-4 mb-20">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10 lg:mb-0">
                  <h3 className="mb-8 text-xl font-bold font-heading text-white">
                    Information
                  </h3>
                  <ul>
                    <li className="mb-6">
                      <a className="text-gray-400 hover:text-gray-300" href="#">
                        Newsroom
                      </a>
                    </li>
                    <li className="mb-6">
                      <a className="text-gray-400 hover:text-gray-300" href="#">
                        Story
                      </a>
                    </li>
                    <li className="mb-6">
                      <a className="text-gray-400 hover:text-gray-300" href="#">
                        Sport Shop
                      </a>
                    </li>
                    <li className="mb-6">
                      <a className="text-gray-400 hover:text-gray-300" href="#">
                        Investor Relations
                      </a>
                    </li>
                    <li className="mb-6">
                      <a className="text-gray-400 hover:text-gray-300" href="#">
                        Reward program
                      </a>
                    </li>
                    <li className="mb-6">
                      <a className="text-gray-400 hover:text-gray-300" href="#">
                        Delivery information
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-400 hover:text-gray-300" href="#">
                        Paying by invoice
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10 lg:mb-0">
                  <h3 className="mb-8 text-xl font-bold font-heading text-white">
                    Customer Services
                  </h3>
                  <ul>
                    <li className="mb-6">
                      <a className="text-gray-400 hover:text-gray-300" href="#">
                        Return an order
                      </a>
                    </li>
                    <li className="mb-6">
                      <a className="text-gray-400 hover:text-gray-300" href="#">
                        Search Terms
                      </a>
                    </li>
                    <li className="mb-6">
                      <a className="text-gray-400 hover:text-gray-300" href="#">
                        Advanced Search
                      </a>
                    </li>
                    <li className="mb-6">
                      <a className="text-gray-400 hover:text-gray-300" href="#">
                        Orders and Returns
                      </a>
                    </li>
                    <li className="mb-6">
                      <a className="text-gray-400 hover:text-gray-300" href="#">
                        FAQs
                      </a>
                    </li>
                    <li className="mb-6">
                      <a className="text-gray-400 hover:text-gray-300" href="#">
                        Store Location
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-400 hover:text-gray-300" href="#">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                  <h3 className="mb-8 text-xl text-white font-bold font-heading">
                    Contact Us
                  </h3>
                  <ul>
                    <li className="mb-6">
                      <h4 className="mb-2 text-gray-400">Mobile</h4>
                      <a className="text-white hover:underline" href="#">
                        +39 4097 533 32 331
                      </a>
                    </li>
                    <li className="mb-6">
                      <h4 className="mb-2 text-gray-400">Email</h4>
                      <a className="text-white hover:underline" href="#">
                        hi@sportstore.com
                      </a>
                    </li>
                    <li>
                      <h4 className="mb-2 text-gray-400">Live Chat</h4>
                      <a className="text-white hover:underline" href="#">
                        sportstore
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/5 px-4 order-first lg:order-1 mb-20">
              <h3 className="mb-6 text-xl text-white font-bold font-heading">
                Join our Newsletter
              </h3>
              <p className="mb-8 text-xl text-orange-400 font-bold font-heading">
                News, sales:
              </p>
              <div className="mb-6 relative lg:max-w-xl lg:mx-auto bg-white rounded-lg">
                <div className="relative flex flex-wrap items-center justify-between">
                  <div className="relative flex-1">
                    <span className="absolute top-0 left-0 ml-8 mt-4 font-semibold font-heading text-xs text-gray-400">
                      Drop your e-mail
                    </span>
                    <input
                      className="inline-block w-full pt-8 pb-4 px-8 placeholder-gray-900 border-0 focus:ring-transparent focus:outline-none rounded-md"
                      type="text"
                      placeholder="steven@example.dev"
                    />
                  </div>
                  <a
                    className="inline-block w-auto bg-orange-400 hover:bg-orange-500 text-white font-bold font-heading py-6 px-8 rounded-md uppercase text-center"
                    href="#"
                  >
                    Join
                  </a>
                </div>
              </div>
              <p className="text-gray-300">
                The brown fox jumps over the lazy dog.
              </p>
            </div>
            <div className="w-full px-4 flex flex-wrap justify-between lg:order-last">
              <div className="w-full md:w-auto mb-4 md:mb-0 flex flex-wrap">
                <Image
                  className="mr-4 mb-2"
                  src="/visa.svg"
                  alt=""
                  width={95}
                  height={46}
                />
                <Image
                  className="mr-4 mb-2"
                  src="/paypal.svg"
                  alt=""
                  width={95}
                  height={46}
                />
                <Image
                  className="mb-2"
                  src="/mastercard.svg"
                  alt=""
                  width={95}
                  height={46}
                />
              </div>
              <div className="w-full md:w-auto flex">
                <a
                  className="inline-flex items-center justify-center w-12 h-12 mr-2 bg-blue-500 rounded-full"
                  href="#"
                >
                  <Image
                    src="/facebook-circle.svg"
                    alt=""
                    width={48}
                    height={48}
                  />
                </a>
                <a
                  className="inline-flex items-center justify-center w-12 h-12 mr-2 bg-indigo-300 rounded-full"
                  href="#"
                >
                  <Image
                    src="/instagram-circle.svg"
                    alt=""
                    width={48}
                    height={48}
                  />
                </a>
                <a
                  className="inline-flex items-center justify-center w-12 h-12 bg-blue-300 rounded-full"
                  href="#"
                >
                  <Image
                    src="/twitter-circle.svg"
                    alt=""
                    width={48}
                    height={48}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-14 flex items-center justify-center">
            <a
              className="inline-block mr-4 text-white text-2xl font-bold font-heading"
              href="#"
            >
              <div className="flex items-center">
                <Image
                  className="h-7"
                  src="/yofte-logo-white.svg"
                  alt=""
                  width="48"
                  height={500}
                />
                <div className="text-xl text-white">Sport Shop</div>
              </div>
            </a>
            <p className="inline-block text-sm text-gray-400">
              © Copyright 2021
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
