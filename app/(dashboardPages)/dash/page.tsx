"use client";
import AreaChartComponent from "@/app/components/charts/AreaCharts";
import Barcharts from "@/app/components/charts/Barcharts";
import Card from "@/app/components/general/Card";
import OrdersOverview from "@/app/components/home/Orders";
import AlignedImage from "@/app/components/table/AlignedImage";
import people, { activeUsersData, dashHead } from "@/utils/datas";
import { useEffect } from "react";
import { BarChart } from "recharts";

export default function Home() {
  useEffect(() => {
    const getSavedTheme: string | null = localStorage.getItem("theme");
    if (getSavedTheme) {
      document.documentElement.classList.add(getSavedTheme);
    }
  }, []);
  const tableHeader = Object.keys(people[0]).slice(0,people.length);

  return (
    <div className="p-4 bg-pry ">
      <section className="grid gap-4 md:grid-cols-2 grid-cols-1 py-6 lg:grid-cols-4">
        {dashHead.map((dashHead) => (
          <Card key={dashHead.percentage}>
            <div className="flex justify-between gap-1">
              <div className="flex flex-col">
                <h2>{dashHead.title}</h2>
                <h2 className="text-lg font-semibold">
                  {dashHead.value}{" "}
                  <span className="text-sm text-sec">
                    {dashHead.percentage}
                  </span>
                </h2>
              </div>
              <div className="bg-sec flex justify-center items-center rounded-lg p-[10px] h-10 w-10">
                <dashHead.icon className="h-full text-white w-full" />
              </div>
            </div>
          </Card>
        ))}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10  justify-start items-start">
        <Card>
          <Barcharts />
          <div>
            <h2 className="mt-4 font-bold text-xl">Active Users</h2>
            <p className="mt-2  font-medium text-base text-textGreyCol">
              <span className="text-sec">+23%</span> than last week
            </p>
          </div>
          <div className="w-full mt-6 grid gap-2 grid-cols-2 lg:grid-cols-4 ">
            {activeUsersData.map((user) => {
              return (
                <div key={user.title} className=" flex flex-col">
                  <div className="flex justify-start gap-2 items-center">
                    <div
                      className={`h-8 w-8 p-2 bg-sec text-white  rounded-xl`}
                    >
                      <user.icon className="" />
                    </div>
                    <span className={`text-base text-tetCol font-bold" `}>
                      {user.title}
                    </span>
                  </div>
                  <div className="mt-3">
                    <h2 className="text-base font-semibold">{user.value}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
        <Card>
          <AreaChartComponent />
        </Card>
      </section>

      <section className="grid grid-cols-1  md:grid-cols-[1.3fr_1fr] gap-10 mt-10">
        <Card>
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Projects</h2>
            <p className=" text-base text-textGreyCol">
              {" "}
              <span className="font-semibold">30 done</span> this month.
            </p>
            <div className=" ">
              <table className="py-3 mt-10  ">
                <thead>
                  <tr className="min-w-[120px]  p-3 text-left">
                    {tableHeader.map((header) => (
                      <th key={header} className="uppercase pb-3">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>

                  <tbody>

                {people.map((person) => (
                  <tr key={person.address} className="p-2 text-left">
                    <td className="p-2  min-w-[120px]">
                      {person.name}
                    </td>
                    <td className="p-2  min-w-[100px]">
                      {person.age}
                    </td>
                    <td className="p-2   min-w-[120px]">
                      {person.sex}
                    </td>
                    <td className="p-2 min-w-[200px] ">
                      {person.school}
                    </td>
                    <td className="  min-w-[150px]">
                      <AlignedImage total={person.totalImg} />
                    </td>
                    <td className="p-2 min-w-[200px]  ">
                      {person.address}
                    </td>
                    <td className="p-2  min-w-[120px]">
                      {person.mail}
                    </td>
                    <td className="p-2 min-w-[150px] ">
                      {person.phone}
                    </td>
                  </tr>
                ))}
                  </tbody>
              </table>
            </div>
          </div>
        </Card>
        <Card>
          <OrdersOverview />
        </Card>
      </section>
    </div>
  );
}