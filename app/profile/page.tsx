"use client";
import React from "react";
import Sidebar from "../components/general/Sidebar";
import MobileNav from "../components/general/MobileNav";
import Footer from "../components/general/Footer";
import Image from "next/image";
import { user1, user4, user2 } from "@/public/img";
import {
  FaCube,
  FaPenFancy,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { LuFile } from "react-icons/lu";
import Card from "../components/general/Card";
import { convoInfo } from "@/utils/datas";

function page() {
  return (
    <div className="bg-pry text-textCol">
      <div className="flex min-h-screen pt-7">
        <Sidebar />
        <main className="flex-1 w-[calc(100%-250px)] lg:ml-[270px] px-8 overflow-x-auto">
          <section className="relative bg-lightGreen p-2 rounded-4xl w-full h-[250px]">
            <MobileNav />
            <HeroCard />
          </section>

          <section className="grid gap-5 lg:gap-2 grid-cols-1 lg:grid-cols-3 mt-[250px] lg:mt-14">
            <PlatformInfo />
            <ProfileInformation />
            <Conversation />
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
}

export default page;

// This is where the components used in this page stay;
function HeroCard() {
  return (
    <section
      style={{
        boxShadow: "rgba(0, 0, 0, 0.02) 0px 2px 5.5px",
        backdropFilter: "saturate(200%) blur(50px)",
      }}
      className="absolute lg:max-h-[150px] p-6 -bottom-[200px]  lg:-bottom-[30px] grid gap-5 grid-cols-1 lg:grid-cols-2 w-full rounded-4xl bg-profileSec"
    >
      <div className="flex items-center gap-2">
        <div className="h-20 rounded-lg w-20">
          <Image
            src={user1}
            alt="user"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-bold">Esthera Jackson</h2>
          <p className="font-semibold">esthera@simmmple.com</p>
        </div>
      </div>

      <main className="grid gap-5 grid-cols-1 lg:grid-cols-3 place-items-center items-center">
        <div className=" w-full bg-overview  rounded-2xl py-2.5">
          <div className="flex justify-center items-center cursor-pointer gap-1.5">
            <FaCube size={15} />
            <p className="uppercase font-semibold text-sm">overview</p>
          </div>
        </div>
        <div className=" w-full  rounded-2xl py-2.5">
          <div className="flex justify-center items-center cursor-pointer gap-1.5">
            <LuFile size={15} />
            <p className="uppercase font-semibold text-sm">Teams</p>
          </div>
        </div>
        <div className=" w-full  rounded-2xl py-2.5">
          <div className="flex justify-center items-center cursor-pointer gap-1.5">
            <FaPenFancy size={15} />
            <p className="uppercase font-semibold text-sm">Project</p>
          </div>
        </div>
      </main>
    </section>
  );
}

function PlatformInfo() {
  return (
    <Card>
      <h2 className="text-lg font-semibold mt-2">Platform Setting</h2>

      <section className=" mt-4 ">
        <h2 className="text-sm font-semibold">ACCOUNT</h2>
        <div className="mt-6">
          <label className="flex my-4 items-center gap-5 mb-4 cursor-pointer">
            <input type="checkbox" className="toggle-switch" />
            <span className="">Email me when someone...</span>
          </label>
          <label className="flex my-4 items-center gap-5 mb-4 cursor-pointer">
            <input type="checkbox" className="toggle-switch" />
            <span className="">Email me when someone...</span>
          </label>
          <label className="flex my-4 items-center gap-5 mb-4 cursor-pointer">
            <input type="checkbox" className="toggle-switch" />
            <span className="">Email me when someone...</span>
          </label>
        </div>
      </section>

      <section className=" mt-10 ">
        <h2 className="text-sm font-semibold">APPLICATION</h2>
        <div className="mt-6">
          <label className="flex my-4 items-center gap-5 mb-4 cursor-pointer">
            <input type="checkbox" className="toggle-switch" />
            <span className="">New launches and projects</span>
          </label>
          <label className="flex my-4 items-center gap-5 mb-4 cursor-pointer">
            <input type="checkbox" className="toggle-switch" />
            <span className="">Monthly product changes</span>
          </label>
          <label className="flex my-4 items-center gap-5 mb-4 cursor-pointer">
            <input type="checkbox" className="toggle-switch" />
            <span className="">Subscribe to newsletter</span>
          </label>
        </div>
      </section>
    </Card>
  );
}

const ProfileInformation = () => {
  return (
    <Card>
      <div className="w-full mt-2">
        <h2 className="text-lg font-semibold  mb-3">Profile Information</h2>
        <p className="text-base mt-4">
          Hi, I’m Esthera Jackson, Decisions: If you can’t decide, the answer is
          no. If two equally difficult paths, choose the one more painful in the
          short term (pain avoidance is creating an illusion of equality).
        </p>

        <div className="text-sm font-normal space-y-5 mt-8 ">
          <p>
            <span className="font-semibold text-base">Full Name: </span>
            Esthera Jackson
          </p>
          <p>
            <span className="font-semibold text-base">Mobile: </span>
            (44) 123 1234 123
          </p>
          <p>
            <span className="font-semibold text-base">Email: </span>
            esthera@simmple.com
          </p>
          <p>
            <span className="font-semibold text-base">Location: </span>
            United States
          </p>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-base">Social Media: </span>
            <div className="flex gap-1 text-lg text-sec">
              <FaFacebook className="cursor-pointer hover:scale-110 transition" />
              <FaInstagram className="cursor-pointer hover:scale-110 transition" />
              <FaTwitter className="cursor-pointer hover:scale-110 transition" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

function Conversation() {
  return (
    <Card>
      <h2 className="text-lg font-semibold mt-2">Conversations</h2>
      <section className="mt-5 flex gap-7 flex-col">
        {convoInfo.map((convo, ind) => {
          const {name,message,avatar} = convo
          return (
            <div key={ind} className="grid grid-cols-[80%_20%]">
              <div className="grid gap-3 items-center-safe grid-cols-[20%_80%] ">
                <div className="rounded-md w-12 h-12">
                  <Image
                    src={avatar}
                    alt="user"
                    className="rounded-md w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-wrap flex-col">
                  <p className="text-sm font-semibold">{name}</p>
                  <p className="text-xs text-tet truncate w-3/4 ">
                    {message}
                  </p>
                </div>
              </div>
              <div className="text-sec uppercase text-sm font-semibold">
                Reply
              </div>
            </div>
          );
        })}
      </section>
    </Card>
  );
}
