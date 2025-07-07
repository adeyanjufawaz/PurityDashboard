"use client"
import React from "react";
import Sidebar from "../components/general/Sidebar";
import MobileNav from "../components/general/MobileNav";
import Footer from "../components/general/Footer";
import { FaSearch, FaUser } from "react-icons/fa";
import { MdDarkMode, MdLightMode, MdMenu } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { useProvider } from "../components/general/NavOpenAndThemeProvider";



function page() {
  return (
    <div className="bg-pry text-textCol">
      <div className="flex min-h-screen pt-7">
        <Sidebar />
        <main className="flex-1 w-[calc(100%-250px)] lg:ml-[270px] px-8 overflow-x-auto">
          <div className="bg-sec rounded-4xl w-full h-[300px]">
            
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
}

export default page;
