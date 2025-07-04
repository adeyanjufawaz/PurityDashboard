import React from "react";
// import { FaFile } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa";

function Invoice() {
  const invoices = [
    {
      date: "March 01, 2020",
      invoiceNumber: "MS-415646",
      amount: 180,
      format: "PDF",
    },
    {
      date: "February 10, 2020",
      invoiceNumber: "RV-126749",
      amount: 250,
      format: "PDF",
    },
    {
      date: "April 05, 2020",
      invoiceNumber: "FB-212562",
      amount: 560,
      format: "PDF",
    },
    {
      date: "June 25, 2019",
      invoiceNumber: "QW-103578",
      amount: 120,
      format: "PDF",
    },
    {
      date: "March 01, 2019",
      invoiceNumber: "AR-803481",
      amount: 300,
      format: "PDF",
    },
  ];

  return (
    <>
    <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Invoice</h2>
        <button className="border text-sec uppercase text-xs font-semibold rounded-2xl border-sec py-3 px-10">View All</button>
    </div>
      <section className="flex mt-8 flex-col gap-3">
        {invoices.map((invoice) => (
          <div
            key={invoice.invoiceNumber}
            className="flex justify-between items-start sm:items-center rounded-xl  w-full max-w-md"
          >
            <div className="flex flex-col">
              <span className="text-base font-semibold">{invoice.date}</span>
              <span className="text-tet text-sm ">{invoice.invoiceNumber}</span>
            </div>

            <div className="flex items-center gap-6 text-tet mt-2 sm:mt-0">
              <span className=" font-semibold">${invoice.amount}</span>
              <div className="flex items-center gap-1 text-sm ">
                <FaFileContract size={18} />
                <span>PDF</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Invoice;
