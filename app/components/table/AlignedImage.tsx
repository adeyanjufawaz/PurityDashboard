import { user1, user2, user3, user4, user5 } from "@/public/img";
import Image from "next/image";
import React from "react";

function AlignedImage({ total }: { total: number }) {
  if (total == 5) {
    return (
      <div className="relative flex justify-center items-center w-full min-h-6">
        {/* Red Box - 0% from left */}
        <div className="absolute w-[30px] object-cover cursor-pointer rounded-full h-[30px] bg-red-200 left-[0%] z-1 hover:z-10 hover:scale-110 transition-all duration-200" >
          <Image src={user1} alt="user" className="w-full rounded-full h-full"/>
        </div>

        {/* Blue Box - 20% from left */}
        <div
          className="
    absolute w-[30px] object-cover cursor-pointer rounded-full h-[30px] bg-blue-500 left-[15%] z-2 hover:z-10 hover:scale-110 transition-all duration-200"
        >
           <Image src={user2} alt="user2" className="w-full rounded-full h-full"/>
        </div>

        {/* Green Box - 40% from left */}
        <div
          className="
    absolute w-[30px] object-cover cursor-pointer rounded-full h-[30px] bg-green-500 
    left-[30%] z-3 hover:z-10 hover:scale-110
    transition-all duration-200
  "
        >
           <Image src={user4} alt="user3" className="w-full rounded-full h-full"/>
        </div>

        {/* Yellow Box - 60% from left */}
        <div
          className="
    absolute w-[30px] object-cover cursor-pointer rounded-full h-[30px] bg-yellow-500 left-[45%] z-4 hover:z-10 hover:scale-110 transition-all duration-200"
        >
           <Image src={user5} alt="user2" className="w-full rounded-full h-full"/>
        </div>

        {/* Purple Box - 80% from left */}
        <div
          className="
    absolute w-[30px] object-cover cursor-pointer rounded-full h-[30px] bg-purple-500 left-[60%] z-10 hover:z-10 hover:scale-110 transition-all duration-200
  "
        >
           <Image src={user1} alt="user1" className="w-full rounded-full h-full"/>
        </div>
      </div>
    );
  }

  if (total == 2) {
    return (
      <div className="relative flex justify-center items-center w-full min-h-6">
        {/* Red Box - 0% from left */}
        <div className="absolute w-[30px] object-cover cursor-pointer rounded-full h-[30px] bg-red-200 left-[0%] z-1 hover:z-10 hover:scale-110 transition-all duration-200" >
           <Image src={user1} alt="user1" className="w-full rounded-full h-full"/>
        </div>

        {/* Blue Box - 20% from left */}
        <div
          className="
    absolute w-[30px] object-cover cursor-pointer rounded-full h-[30px] bg-blue-500 left-[15%] z-2 hover:z-10 hover:scale-110 transition-all duration-200"
        >
           <Image src={user2} alt="user1" className="w-full rounded-full h-full"/>
        </div>
      </div>
    );
  }

  if (total == 3) {
    return (
      <div className="relative flex justify-center items-center w-full min-h-6">
        {/* Red Box - 0% from left */}
        <div className="absolute w-[30px] object-cover cursor-pointer rounded-full h-[30px] bg-red-200 left-[0%] z-1 hover:z-10 hover:scale-110 transition-all duration-200" >
           <Image src={user1} alt="user1" className="w-full rounded-full h-full"/>
        </div>

        {/* Blue Box - 20% from left */}
        <div
          className="
    absolute w-[30px] object-cover cursor-pointer rounded-full h-[30px] bg-blue-500 left-[15%] z-2 hover:z-10 hover:scale-110 transition-all duration-200"
        >
           <Image src={user2} alt="user1" className="w-full rounded-full h-full"/>
        </div>

        {/* Green Box - 40% from left */}
        <div
          className="
    absolute w-[30px] object-cover cursor-pointer rounded-full h-[30px] bg-green-500 
    left-[30%] z-3 hover:z-10 hover:scale-110
    transition-all duration-200
  "
        >
           <Image src={user5} alt="user1" className="w-full rounded-full h-full"/>
        </div>
      </div>
    );
  }
}

export default AlignedImage;
