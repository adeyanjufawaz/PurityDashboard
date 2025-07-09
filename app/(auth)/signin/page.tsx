"use client";
import React from "react";
import Footer from "@/app/components/general/Footer";
import { useRouter } from "next/navigation";
import { FaBars, FaFile, FaHome, FaRocket, FaUser } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
import { useProvider } from "@/app/components/general/NavOpenAndThemeProvider";
import Sidebar from "@/app/components/general/Sidebar";

export function NAV() {
  const router = useRouter();
  const { toggleIsOpen } = useProvider();
  return (
    <>
      {/* // Desktop */}
      <nav className=" hidden lg:flex absolute top-3 justify-between shadow-lg items-center bg-pry rounded-2xl px-4 py-6 mx-auto w-full">
        <h2
          onClick={() => router.push("/dash")}
          className="font-semibold cursor-pointer text-base uppercase"
        >
          PURITY UI DASHBOARD
        </h2>
        <nav className="flex gap-5">
          <div
            onClick={() => router.push("/dash")}
            className="flex font-semibold text-sm cursor-pointer gap-1.5 items-center"
          >
            <FaHome size={12} />
            <h2>Dashboard</h2>
          </div>
          <div
            onClick={() => router.push("/profile")}
            className="flex font-semibold text-sm cursor-pointer gap-1.5 items-center"
          >
            <FaUser size={12} />
            <h2>Profile</h2>
          </div>
          <div
            onClick={() => router.push("/signup")}
            className="flex font-semibold text-sm cursor-pointer gap-1.5 items-center"
          >
            <FaRocket size={12} />
            <h2>Sign Up</h2>
          </div>
          <div
            onClick={() => router.push("/signin")}
            className="flex font-semibold text-sm cursor-pointer gap-1.5 items-center"
          >
            <FaFile size={12} />
            <h2>Sign In</h2>
          </div>
        </nav>
        <button className="cursor-pointer bg-gradient-to-r px-8 py-3 rounded-full text-xs text-white from-blue-950 to-black/85 font-bold">
          Free Download
        </button>
      </nav>

      {/* // Mobile */}
      <nav className="lg:hidden flex absolute top-3 justify-between shadow-lg items-center bg-pry rounded-2xl px-4 py-6 mx-auto w-full">
        <h2
          onClick={() => router.push("/dash")}
          className="font-semibold cursor-pointer text-base uppercase"
        >
          PURITY UI DASHBOARD
        </h2>

        <div onClick={toggleIsOpen}>
          <FaBars size={20} />
        </div>
      </nav>
    </>
  );
}

function SignIn() {
  return (
    <div>
      <div className="lg:hidden">
        <Sidebar />
      </div>
      <div className="w-4/5 relative mx-auto">
        <NAV />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-10">
        <div className="min-h-[70vh] lg:min-h-[80vh] flex justify-center items-center h-full">
          <div className=" w-1/2 mt-30">
            <h2 className="text-sec text-lg font-semibold">Welcome Back</h2>
            <h2 className="font-semibold text-sm text-tet">
              Enter your email and password to sign in
            </h2>
            <div className="mt-7 flex flex-col w-full gap-5">
              <div className="flex gap-2 flex-col">
                <p className="text-sm">Email:</p>
                <input
                  type="text"
                  placeholder="Your email address"
                  className="p-2.5 text-sm rounded-lg border border-tet outline-0  w-full"
                  name=""
                  id=""
                />
              </div>
              <div className="flex gap-2 flex-col">
                <p className="text-sm">Password:</p>
                <input
                  type="text"
                  placeholder="Your Password"
                  className="p-2.5 text-sm rounded-lg border border-tet outline-0  w-full"
                  name=""
                  id=""
                />
              </div>

              <label className="flex mt-3 items-center gap-3 mb-4 cursor-pointer">
                <input type="checkbox" className="toggle-switch" />
                <span className="">Remember me</span>
              </label>

              <button className="bg-sec/90 rounded-lg w-full text-[10px] font-semibold py-3.5 text-white uppercase ">
                Sign in
              </button>

              <h2 className="text-center text-tet font-semibold">
                Don't have an account? <span className="text-sec">Sign Up</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="hidden bg-sec rounded-l-4xl md:flex justify-center items-center h-full">
          <div className="flex items-center text-white gap-3">
            <SiChakraui size={40} />
            <h2 className="text-4xl font-bold">Chakra</h2>
          </div>
        </div>
      </div>
      <div className="w-full md:w-3/4 mx-auto">
        <Footer />
      </div>
    </div>
  );
}

export default SignIn;
