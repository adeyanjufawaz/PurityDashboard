"use client";
import React from "react";

import { FaSearch, FaUser } from "react-icons/fa";
import { MdDarkMode, MdLightMode, MdMenu } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { useProvider } from "./NavOpenAndThemeProvider";
import Notification from "../notification/notification";
import { usePathname,useRouter } from "next/navigation";

function MobileNav() {
  const {
    toggleIsOpen,
    isDark,
    toggleTheme,
    isNotficationOpen,
    toggleIsNotficationOpen,
  } = useProvider();

  const pathname = usePathname(); 
  const lastSegment = pathname.split("/").filter(Boolean).pop();
  const router = useRouter()

  return (
    <div className="flex flex-col md:flex-row mt-4 px-8 justify-between gap-4 items-start md:items-center  h-10">
       <div className="flex flex-col gap-2">
        <h2 className="capitalize">Page / {lastSegment == "dash" ? "Dashbaord" : lastSegment} </h2>
        <p className="capitalize"> {lastSegment == "dash" ? "Dashbaord" : lastSegment}</p>
      </div>

      <div className="flex gap-4 h-full">
        <div className="md:w-[200px] h-full relative ">
          <input
            type="text"
            className="pl-[30%] md:pl-[15%] text-xs w-full  h-full rounded-lg text-textCol outline-0 border-[.5px] border-textCol"
            placeholder="Type here..."
          />
          <FaSearch className="absolute h-7/8 top-[7%] left-2 text-textCol" />
        </div>
        <div className="flex items-center gap-2 ">
          <div onClick={()=>router.push("/profile")} className="cursor-pointer text-textGreyCol">
            <FaUser />
          </div>
          <div onClick={()=>router.push("/signin")} className="hidden lg:block cursor-pointer text-textGreyCol font-semibold">
            Sign in
          </div>
          <div
            onClick={toggleIsOpen}
            className=" lg:hidden cursor-pointer text-textGreyCol font-semibold"
          >
            <MdMenu />
          </div>
          <div
            className=" cursor-pointer text-textGreyCol"
            onClick={toggleTheme}
          >
            {isDark ? <MdLightMode /> : <MdDarkMode />}
          </div>
          <div className="relative">
            <div
              className="cursor-pointer text-textGreyCol"
              onClick={toggleIsNotficationOpen}
            >
              <IoMdNotifications />
            </div>
            <div
              className={` absolute top-[200%] right-[5%] transition-transform duration-400  ${
                isNotficationOpen ? ` scale-100 h-full` : "scale-0 h-0"
              }`}
            >
              <Notification />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
