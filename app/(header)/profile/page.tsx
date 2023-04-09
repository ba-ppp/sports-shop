"use client";

import { ROOT_API } from "@/constant/env";
import { routes } from "@/constant/routes";
import { tokenAtom, userAtom } from "@/store/token.store";
import {
  getAccessToken,
  removeTokenLocalStorage,
  setTokenLocalStorage,
} from "@/utils/utils";
import axios from "axios";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function Page() {
  const [userProfile, setUserProfile] = useAtom(userAtom);
  const [form, setForm] = useState(userProfile);
  const [token] = useAtom(tokenAtom);

  const router = useRouter();

  useEffect(() => {
    
    setForm(userProfile);
  }, [userProfile, token]);

  const handleSave = async () => {
    try {
      const updateProfile = axios.put(
        `${ROOT_API}/${routes.changeInfo}`,
        {
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          address: form.address,
        },
        {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        }
      );

      toast.promise(updateProfile, {
        loading: "Updating profile...",
        success: "Updated profile successfully",
        error: "Failed to update profile",
      });

      const res = await updateProfile;
      setTokenLocalStorage(res.data);

      setUserProfile(form);

    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    removeTokenLocalStorage();
    setUserProfile({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      role: 'user'
    });
    router.push("/signin");
  };

  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <section className="py-3">
      <Toaster />

      <div className="container px-4 mx-auto">
        <div className="p-8 bg-gray-trizzle-500 rounded-xl">
          <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-trizzle-400 border-opacity-20">
            <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
              <h4 className="text-2xl font-bold tracking-wide text-white mb-1">
                Personal info
              </h4>
              <p className="text-sm text-gray-trizzle-300">
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <div className="w-full sm:w-auto px-4">
              <div>
                {/* <a
                  className="inline-block py-2 px-4 mr-3 text-xs text-center font-semibold leading-normal text-gray-trizzle-400 bg-gray-trizzle-600 hover:bg-gray-trizzle-700 rounded-lg transition duration-200"
                  href="#"
                >
                  Cancel
                </a> */}
                <button
                  className="inline-block py-2 px-4 text-xs text-center font-semibold leading-normal text-blue-50 bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
          <form action="">
            <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-trizzle-400 border-opacity-20">
              <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
                <span className="text-sm font-medium text-gray-trizzle-100">
                  Name
                </span>
              </div>
              <div className="w-full sm:w-2/3 px-4">
                <div className="max-w-xl">
                  <div className="flex flex-wrap items-center -mx-3">
                    <div className="w-full sm:w-1/2 px-3 mb-3 sm:mb-0">
                      <input
                        className="block py-4 px-3 w-full text-sm text-gray-trizzle-50 placeholder-gray-trizzle-50 font-medium outline-none bg-transparent border border-gray-trizzle-400 hover:border-white focus:border-green-500 rounded-lg"
                        id="formInput1-1"
                        type="text"
                        placeholder=""
                        name={"firstName"}
                        value={form.firstName ?? ""}
                        onChange={handleChangeForm}
                      />
                    </div>
                    <div className="w-full sm:w-1/2 px-3">
                      <input
                        className="block py-4 px-3 w-full text-sm text-gray-trizzle-50 placeholder-gray-trizzle-50 font-medium outline-none bg-transparent border border-gray-trizzle-400 hover:border-white focus:border-green-500 rounded-lg"
                        id="formInput1-2"
                        type="text"
                        placeholder=""
                        name="lastName"
                        value={form.lastName ?? ""}
                        onChange={handleChangeForm}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-trizzle-400 border-opacity-20">
              <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
                <span className="text-sm font-medium text-gray-trizzle-100">
                  Email address
                </span>
              </div>
              <div className="w-full sm:w-2/3 px-4">
                <div className="max-w-xl">
                  <input
                    className="block py-4 px-3 w-full text-sm text-gray-trizzle-50 placeholder-gray-trizzle-50 font-medium outline-none bg-transparent border border-gray-trizzle-400 hover:border-white focus:border-green-500 rounded-lg"
                    id="formInput1-3"
                    type="text"
                    placeholder="johndoe@email.ui"
                    value={form.email}
                    name="email"
                    onChange={handleChangeForm}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-start -mx-4">
              <div className="w-full sm:w-1/3 px-4 mb-8 sm:mb-0">
                <span className="block mt-5 text-sm font-medium text-gray-trizzle-100">
                  Address
                </span>
              </div>
              <div className="w-full sm:w-2/3 px-4">
                <div className="max-w-xl">
                  <div className="flex flex-wrap -mx-4 -mb-10">
                    <div className="w-full px-4 mb-10">
                      <div className="relative w-full h-14 py-4 px-3 border border-gray-trizzle-400 hover:border-white focus-within:border-green-500 rounded-lg">
                        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-trizzle-300 px-1 bg-gray-trizzle-500">
                          Street address
                        </span>
                        <input
                          className="block w-full outline-none bg-transparent text-gray-trizzle-50 placeholder-gray-trizzle-50 font-semibold"
                          id="formInput2-11"
                          type="text"
                          name="address"
                          value={form.address}
                          onChange={handleChangeForm}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-5 flex justify-end p-3">
          <button
            onClick={handleLogout}
            className="inline-block py-2 px-4 mr-3 text-xs text-center font-semibold leading-normal text-white bg-gray-trizzle-300 hover:bg-gray-trizzle-700 rounded-lg transition duration-200"
          >
            Log out
          </button>
        </div>
      </div>
    </section>
  );
}
