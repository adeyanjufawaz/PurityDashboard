"use client";
import React from "react";

import { FaSearch, FaUser } from "react-icons/fa";
import { MdDarkMode, MdLightMode, MdMenu } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { useProvider } from "./NavOpenAndThemeProvider";
import Notification from "../notification/notification";

function MobileNav() {
  const {
    toggleIsOpen,
    isDark,
    toggleTheme,
    isNotficationOpen,
    toggleIsNotficationOpen,
  } = useProvider();

  return (
    <div className="flex px-3 justify-end gap-3 items-center bg-pry  h-10 md:20">
      <div className="w-1/3 max-w-52 h-full relative ">
        <input
          type="text"
          className="pl-[30%] md:pl-[15%] text-xs w-full  h-full rounded-lg text-textCol outline-0 border-[.5px] border-textCol"
          placeholder="Type here..."
        />
        <FaSearch className="absolute h-7/8 top-[7%] left-2 text-textCol" />
      </div>
      <div className="flex items-center gap-2 ">
        <div className="cursor-pointer text-textGreyCol">
          <FaUser />
        </div>
        <div className="hidden lg:block cursor-pointer text-textGreyCol font-semibold">
          Sign in
        </div>
        <div onClick={toggleIsOpen} className=" lg:hidden cursor-pointer text-textGreyCol font-semibold">
          <MdMenu/>
        </div>
        <div className=" cursor-pointer text-textGreyCol" onClick={toggleTheme}>
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
  );
}

export default MobileNav;
