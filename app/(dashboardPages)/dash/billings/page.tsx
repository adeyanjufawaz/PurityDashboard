import Card from "@/app/components/general/Card";
import React from "react";
import BillingInfo from "./BillingInfo";
import TransactionInfo from "./TransactionInfo";
import Invoice from "./Invoice";
import { FaWallet } from "react-icons/fa6";
import { FaPaypal } from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { RiVisaLine } from "react-icons/ri";

export default function Billings() {
  return (
    <>
      <section className="mt-10 grid gap-5 grid-cols-1 md:grid-cols-[1.5fr_1fr] p-4">
        <section>
          <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
            <div className="h-[230px]">
              <div className=" bg-gradient-to-r from-[#0d0a3b] to-[#08062a] max-w-[400px] mxau py-2 px-4 text-white mb-6 shadow-lg  rounded-sm flex flex-col items-start">
                <div className="flex mt-6 items-center justify-between w-full">
                  <h2 className=" text-lg font-semibold">Purity UI</h2>
                  <div>
                    <RiMastercardFill size={50} color="#777" />
                  </div>
                </div>
                <div className="mt-10">
                  <div className="text-xl font-bold tracking-wider">
                    7812 2139 0823
                    <div className="">XXXX</div>
                  </div>
                </div>
                <div className="flex mt-4 gap-8 text-xs text-right">
                  <div className="opacity-70">VALID THRU</div>
                  <div>
                    <h2>09x</h2>
                    <div className="opacity-70 mt-1">CVV</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid h-[230px]  grid-cols-2 gap-5 lg:gap-3">
              <div>
                <Card>
                  <div className="flex flex-col justify-center text-center items-center">
                    <div className="bg-sec flex justify-center items-center w-14 h-14 rounded-md ">
                      <FaWallet size={30} color="white" />
                    </div>
                    <div className="mt-5 pb-5 border-b ">
                      <h2 className="text-textGreyCol font-semibold">Salary</h2>
                      <p className="text-sm text-tet">Belong interactive </p>
                    </div>
                    <div className="mt-5">
                      <h2 className="text-xl font-semibold">%2000</h2>
                    </div>
                  </div>
                </Card>
              </div>
              <div>
                <Card>
                  <div className="flex flex-col justify-center text-center items-center">
                    <div className="bg-sec flex justify-center items-center w-14 h-14 rounded-md ">
                      <FaPaypal size={30} color="white" />
                    </div>
                    <div className="mt-5 pb-5 border-b ">
                      <h2 className="text-textGreyCol font-semibold">Paypal</h2>
                      <p className="text-sm text-tet">Freelance Payment </p>
                    </div>
                    <div className="mt-5">
                      <h2 className="text-xl font-semibold">%4550</h2>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Card>
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-lg">Payment Method</h2>
                  <button className="px-4 rounded-xl text-xs uppercase font-semibold cursor-pointer py-2 bg-gray-800 text-white">
                    Add new card
                  </button>
                </div>
                <div className="grid mt-10 grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="border flex justify-between items-center border-textCol p-3">
                    <div className="flex gap-4 justify-start items-center">
                      <RiMastercardFill size={20}/>
                      <div className="flex lg:flex-col">
                        <h2>7812 2139 0823</h2>
                        <span>XXXX</span>
                      </div>
                    </div>
                    <div>
                      <MdModeEdit size={30}/>
                    </div>
                  </div>

                  <div className="border flex justify-between items-center border-textCol p-3">
                    <div className="flex gap-4 justify-start items-center">
                      <RiVisaLine size={20} color="blue"/>
                      <div className="flex lg:flex-col">
                        <h2>7812 2139 0823</h2>
                        <span>XXXX</span>
                      </div>
                    </div>
                    <div>
                      <MdModeEdit size={30}/>
                    </div>
                  </div>
                  
                </div>
              </div>
            </Card>
          </div>
        </section>

        <Card>
          <Invoice />
        </Card>
      </section>

      <section className="mt-10 grid gap-5 grid-cols-1 lg:grid-cols-[1.3fr_1fr] p-4">
        <div>
          <Card>
            <h2 className="text-lg font-semibold">Billing Information</h2>
            <BillingInfo />
          </Card>
        </div>
        <div className="">
          <Card>
            <TransactionInfo />
          </Card>
        </div>
      </section>
    </>
  );
}
