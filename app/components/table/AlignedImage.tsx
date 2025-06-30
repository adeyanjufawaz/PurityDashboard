import React from "react";

function AlignedImage({ total }: { total: number }) {
  if (total == 5) {
    return (
      <div className="relative flex justify-center items-center w-full min-h-6">
        {/* Red Box - 0% from left */}
        <div className="absolute w-[30px] rounded-full h-[30px] bg-red-200 left-[0%] z-1 hover:z-10 hover:scale-110 transition-all duration-200" />

        {/* Blue Box - 20% from left */}
        <div
          className="
    absolute w-[30px] rounded-full h-[30px] bg-blue-500 left-[10%] z-2 hover:z-10 hover:scale-110 transition-all duration-200"
        />

        {/* Green Box - 40% from left */}
        <div
          className="
    absolute w-[30px] rounded-full h-[30px] bg-green-500 
    left-[20%] z-3 hover:z-10 hover:scale-110
    transition-all duration-200
  "
        />

        {/* Yellow Box - 60% from left */}
        <div
          className="
    absolute w-[30px] rounded-full h-[30px] bg-yellow-500 left-[30%] z-4 hover:z-10 hover:scale-110 transition-all duration-200"
        />

        {/* Purple Box - 80% from left */}
        <div
          className="
    absolute w-[30px] rounded-full h-[30px] bg-purple-500 left-[40%] z-10 hover:z-10 hover:scale-110 transition-all duration-200
  "
        />
      </div>
    );
  }
  if (total == 2) {
    return (
      <div className="relative flex justify-center items-center w-full min-h-6">
        {/* Red Box - 0% from left */}
        <div className="absolute w-[30px] rounded-full h-[30px] bg-red-200 left-[0%] z-1 hover:z-10 hover:scale-110 transition-all duration-200" />

        {/* Blue Box - 20% from left */}
        <div
          className="
    absolute w-[30px] rounded-full h-[30px] bg-blue-500 left-[10%] z-2 hover:z-10 hover:scale-110 transition-all duration-200"
        />
      </div>
    );
  }

  if (total == 3) {
    return (
      <div className="relative flex justify-center items-center w-full min-h-6">
        {/* Red Box - 0% from left */}
        <div className="absolute w-[30px] rounded-full h-[30px] bg-red-200 left-[0%] z-1 hover:z-10 hover:scale-110 transition-all duration-200" />

        {/* Blue Box - 20% from left */}
        <div
          className="
    absolute w-[30px] rounded-full h-[30px] bg-blue-500 left-[10%] z-2 hover:z-10 hover:scale-110 transition-all duration-200"
        />

        {/* Green Box - 40% from left */}
        <div
          className="
    absolute w-[30px] rounded-full h-[30px] bg-green-500 
    left-[20%] z-3 hover:z-10 hover:scale-110
    transition-all duration-200
  "
        />
      </div>
    );
  }
}

export default AlignedImage;
