import { user1, user4, user5 } from "@/public/img";
import Image from "next/image";
import { MdAccessTimeFilled } from "react-icons/md";
import { useProvider } from "../general/NavOpenAndThemeProvider";

function Notification() {
  const {toggleIsNotficationOpen} = useProvider()
  return (
    <div className="p-4  bg-notification z-999999 w-[270px] md:w-[300px] flex flex-col gap-5">
      <div onClick={toggleIsNotficationOpen} className="z-999999 w-full hover:bg-gray-600 cursor-pointer p-2 flex gap-4">
        <div className="w-1/5 rounded-md ">
          <Image src={user1} alt="user" className="w-full rounded-md h-full object-cover"/>
        </div>
        <div className="w-full flex flex-col gap-1">
          <h2 className="text-sm"><span className="text-base font-bold">New message</span> from Alice</h2>
          <div className="flex items-center gap-3">
            <MdAccessTimeFilled size={15}/>
            <p className="text-xs">13 minutes ago</p>
          </div>
        </div>
      </div>

      <div onClick={toggleIsNotficationOpen} className="z-999999 w-full hover:bg-gray-600 cursor-pointer p-2 flex gap-4">
        <div className="w-1/5 rounded-md ">
          <Image src={user5} alt="user" className="w-full rounded-md h-full object-cover"/>
        </div>
        <div className="w-full flex flex-col gap-1">
          <h2 className="text-sm"><span className="text-base font-bold">New Album</span> by Josh Henry</h2>
          <div className="flex items-center gap-3">
            <MdAccessTimeFilled size={15}/>
            <p className="text-xs">2 days ago</p>
          </div>
        </div>
      </div>

      <div onClick={toggleIsNotficationOpen} className="z-999999 w-full hover:bg-gray-600 cursor-pointer p-2 flex gap-4">
        <div className="w-1/5 rounded-md ">
          <Image src={user4} alt="user" className="w-full rounded-md h-full object-cover"/>
        </div>
        <div className="w-full flex flex-col gap-1">
          <h2 className="text-sm">Payment successfully completed</h2>
          <div className="flex items-center gap-3">
            <MdAccessTimeFilled size={15}/>
            <p className="text-xs">3 days ago</p>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Notification;
