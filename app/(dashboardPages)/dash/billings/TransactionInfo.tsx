import React from "react";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { AiOutlineExclamation } from "react-icons/ai";
import { CgCalendar } from "react-icons/cg";

function TransactionInfo() {
  const transactions: {
      name: string,
      date: string,
      icon: any
      time: string,
      amount: number,
    }[ ]= [
    {
      name: "Netflix",
      date: "27 March 2021",
      icon: BiDownArrowAlt,
      time: "12:30 PM",
      amount: -2500,
    },
    {
      name: "Apple",
      date: "27 March 2021",
      icon: BiUpArrowAlt,
      time: "12:30 PM",
      amount: +2500,
    },
    {
      name: "Stripe",
      date: "26 March 2021",
      icon: BiDownArrowAlt,
      time: "1:45 PM",
      amount: -800,
    },
    {
      name: "HubSpot",
      date: "26 March 2021",
      icon: BiUpArrowAlt,
      time: "12:30 PM",
      amount: +1700,
    },
    {
      name: "Amazon",
      icon: BiDownArrowAlt,
      date: "25 March 2021",
      time: "4:00 PM",
      amount: -1200,
    },
    {
      name: "Google",
      date: "25 March 2021",
      icon: BiUpArrowAlt,
      time: "3:00 PM",
      amount: +3000,
    },
  ];

  const newTransactions = transactions.slice(0, 2);
  const oldTransactions = transactions.slice(1, transactions.length + 1);

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold">Transactions</h2>
        <div className="flex gap-2 text-sm font-bold text-textGreyCol justify-center items-center">
          <CgCalendar />
          <p>23 - 30 March</p>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="my-3 text-textGreyCol font-bold">NEWEST</h2>
        <div className="flex flex-col gap-4 ">
          {newTransactions.map(transaction => (
            <div key={transaction.name} className="flex justify-between">
            <div className="flex gap-3">
                <div style={transaction.amount < 0 ? {borderColor:"#C70D3A"} : {borderColor:"#59CE8F"}} className="h-8 w-8 flex justify-center items-center lg:h-10 lg:w-10 border rounded-full ">
                    <transaction.icon size={30} color={transaction.amount < 0 ? "#C70D3A" : "#59CE8F"}/>
                </div>
              <div>
                <h2 className="text-base font-semibold">{transaction.name}</h2>
                <p className="text-xs mt-0.5 font-semibold text-textGreyCol">{transaction.date}</p>
              </div>
            </div>
            <div  style={transaction.amount < 0 ? {color:"#C70D3A"} : {color:"#59CE8F"}} className="text-base font-semibold">${transaction.amount}</div>
          </div>
          ))}



        </div>
      </div>

      <div className="mt-4">
        <h2 className="my-3 text-textGreyCol font-bold">OLDER</h2>
        <div className="flex flex-col gap-4 ">
          {oldTransactions.map(transaction => (
            <div key={transaction.name} className="flex justify-between">
            <div className="flex gap-3">
                <div style={transaction.amount < 0 ? {borderColor:"#C70D3A"} : {borderColor:"#59CE8F"}} className="h-8 w-8 flex justify-center items-center lg:h-10 lg:w-10 border rounded-full ">
                    <transaction.icon size={30} color={transaction.amount < 0 ? "#C70D3A" : "#59CE8F"}/>
                </div>
              <div>
                <h2 className="text-base font-semibold">{transaction.name}</h2>
                <p className="text-xs mt-0.5 font-semibold text-textGreyCol">{transaction.date}</p>
              </div>
            </div>
            <div  style={transaction.amount < 0 ? {color:"#C70D3A"} : {color:"#59CE8F"}} className="text-base font-semibold">${transaction.amount}</div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TransactionInfo;
