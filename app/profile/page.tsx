"use client"
import React from "react";
import Sidebar from "../components/general/Sidebar";
import MobileNav from "../components/general/MobileNav";
import Footer from "../components/general/Footer";
import { FaSearch, FaUser } from "react-icons/fa";
import { MdDarkMode, MdLightMode, MdMenu } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { useProvider } from "../components/general/NavOpenAndThemeProvider";

function Nav () {
  const { toggleIsOpen, isDark, toggleTheme } = useProvider();
  return(
    <div className="flex px-3 justify-end gap-3 items-center bg-pry  h-10 md:20">
          <div className="w-1/3 max-w-52 h-full relative ">
            <input
              type="text"
              className="pl-[30%] md:pl-[15%] text-xs w-full  h-full rounded-lg text-textCol outline-0 border-[.5px] border-textCol"
              placeholder="Type here..."
            />
            <FaSearch className="absolute h-7/8 top-[7%] left-2 text-textCol"/>
          </div>
          <div className="flex gap-2 ">
            <button className=" text-textGreyCol" onClick={toggleIsOpen}>
              <FaUser />
            </button>
            <button className=" text-textGreyCol" onClick={toggleIsOpen}>
              <MdMenu />
            </button>
            <button className=" text-textGreyCol" onClick={toggleTheme}>
              {isDark ? <MdLightMode /> : <MdDarkMode />}
            </button>
            <button className=" text-textGreyCol" onClick={toggleIsOpen}>
              <IoMdNotifications />
            </button>
          </div>
        </div>
  )
}

function page() {
  return (
    <div className="bg-pry text-textCol">
      <div className="flex min-h-screen pt-7">
        <Sidebar />
        <main className="flex-1 w-[calc(100%-250px)] lg:ml-[270px] overflow-x-auto">
          <div className="bg-sec w-full h-[400px]">
            <Nav/>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
}

export default page;
