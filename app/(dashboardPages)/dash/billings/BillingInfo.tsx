import React from "react";
const clients = [
  {
    name: "Oliver Liam",
    company: "Viking Burrito",
    email: "oliver@burrito.com",
    vat: "FRB1235476",
  },
  {
    name: "Lucas Harper",
    company: "Stone Tech Zone",
    email: "lucas@stonezone.com",
    vat: "FRB8593021",
  },
  {
    name: "Ethan James",
    company: "Fiber Notion",
    email: "ethan@fibernotion.com",
    vat: "FRB4389120",
  },
];
import { MdDelete,MdEdit } from "react-icons/md";

function BillingInfo() {
  return (
    <div className="mt-6">
      {clients.map((client) => (
        <div
          key={client.vat}
          className="rounded-2xl grid gap-5 grid-cols-1 md:grid-cols-[1.5fr_1fr] my-6 p-4 bg-darkCrad "
        >
          <div>
            <h2 className="text-lg font-semibold">{client.name}</h2>
            <p className="text-sm mt-5"><span className="font-semibold">Company Name:</span> {client.company}</p>
            <p className="text-sm mt-1 "><span className="font-semibold">Email Address:</span> {client.email}</p>
            <p className="text-sm mt-1 "><span className="font-semibold">VAT Number:</span> {client.vat}</p>
          </div>
          <div className="flex gap-6 justify-center items-end">
            <button className="flex justify-center uppercase text-sm text-red-500 cursor-pointer items-center gap-2"><MdDelete/> Delete</button>
            <button className="flex justify-center uppercase text-sm items-center cursor-pointer gap-2"><MdEdit/> Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BillingInfo;
