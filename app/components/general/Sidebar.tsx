"use client";
import Link from "next/link";
import { IconType } from "react-icons";
import {
  FiHome,
  FiBarChart2,
  FiCreditCard,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import { FaUser } from "react-icons/fa";

import { IoHome } from "react-icons/io5";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useProvider } from "./NavOpenAndThemeProvider";
import { IoMdLogIn } from "react-icons/io";
import { FaRocket } from "react-icons/fa6";

interface MenuItem {
  icon: IconType;
  title: string;
  path: string;
}

const Sidebar = () => {
  const { isDark, toggleTheme, isOpen, toggleIsOpen } = useProvider();

  const menuItems: MenuItem[] = [
    { icon: FiHome, title: "Dashboard", path: "/dash" },
    { icon: FiBarChart2, title: "Table", path: "/dash/tables" },
    { icon: FiCreditCard, title: "Billings", path: "/dash/billings" },
    { icon: FiUser, title: "RTL", path: "/dash/rtl" },
  ];

  const profileMenu: MenuItem[] = [
    { icon: FaUser, title: "Profile", path: "/profile" },
    { icon: IoMdLogIn, title: "Sign in", path: "/signin" },
    { icon: FaRocket, title: "Sign up", path: "/signup" },
  ];

  const pathname = usePathname();

  return (
    <>
      {/* Mobile Screen */}
      <div
        className={`fixed  flex flex-col transition-transform duration-700  justify-start items-start top-[2%] left-[5%] h-[95%] p-3 shadow-2xl rounded-md  z-999 bg-card text-textCol
          w-3/5 md:w-1/3 ${isOpen ? `translate-x-0 ` : "-translate-x-[120%]"}`}
      >
        <button
          className=" absolute right-5 top-5 text-lg text-textCol"
          onClick={toggleIsOpen}
        >
          X
        </button>

        {/* FIrst Nav */}
        <div className="mt-14 text-sm font-semibold  pb-3">
          <h2>PURITY UI DASHBOARD</h2>
        </div>

        <nav className="mt-6 ">
          {menuItems.map((item) => {
            const isActive = pathname == item.path;
            return (
              <Link
                key={item.title}
                href={item.path}
                className={`flex w-full items-center rounded-lg p-3 transition-colors ${
                  isActive ? "bg-pry" : ""
                }`}
              >
                <item.icon
                  className={`h-8 w-8 p-2  ${
                    isActive ? "bg-sec text-white  rounded-xl" : "text-textCol"
                  }`}
                />
                <span
                  className={` ml-3 ${
                    isActive ? "text-textCol font-semibold" : ""
                  }`}
                >
                  {item.title}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Second Nav */}
        <div className="mt-8 ">
          <h2>PURITY DASHBOARD</h2>
        </div>
        <nav className="mt-6 ">
          {profileMenu.map((item) => {
            const isActive = pathname == item.path;
            return (
              <Link
                key={item.title}
                href={item.path}
                className={`flex items-center rounded-lg p-3 transition-colors `}
              >
                <item.icon
                  className={`h-8 w-8 p-2  ${
                    isActive ? "bg-sec text-white  rounded-xl" : "text-textCol"
                  }`}
                />
                <span
                  className={` ml-3 ${
                    isActive ? "text-textCol font-semibold" : ""
                  }`}
                >
                  {item.title}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Large Screen */}
      <div className="hidden w-[250px] fixed lg:flex flex-col px-2 justify-start items-center left-0 top-0 bg-card h-screen ">
        {/* FIrst Nav */}
        <div className="mt-8 text-sm font-semibold  pb-3">
          <h2>PURITY UI DASHBOARD</h2>
        </div>
         <nav className="mt-4 w-full ">
          {menuItems.map((item) => {
            const isActive = pathname == item.path;
            return (
              <Link
                key={item.title}
                href={item.path}
                className={`flex w-full items-center rounded-lg p-3 transition-colors ${
                  isActive ? "bg-pry" : ""
                }`}
              >
                <item.icon
                  className={`h-8 w-8 p-2  ${
                    isActive ? "bg-sec text-white  rounded-xl" : "text-textCol"
                  }`}
                />
                <span
                  className={` ml-3 ${
                    isActive ? "text-textCol font-semibold" : ""
                  }`}
                >
                  {item.title}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
