"use client";
import { barChatData } from "@/utils/datas";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import CustomTooltip from "../general/CustomToolTip";
import { cubicTriangleShape } from "@/utils/svgShape";
import { useProvider } from "../general/NavOpenAndThemeProvider";

export default function Barcharts() {
  const {isDark} = useProvider()
  const TriangleBar = (props: any) => {
    const { fill, x, y, width, height } = props;

    return (
      <path
        d={cubicTriangleShape(x, y, width, height)}
        stroke="none"
        fill={fill}
      />
    );
  };
  return (
    <div className="h-full w-full rounded-2xl p-4 shadow-7xl max-h-[200px]  bg-gradient-to-r from-[#1d1d4b]/90 to-[#0d0d2c]">
      <ResponsiveContainer width="100%" height={`100%`}>
        <BarChart
          width={250}
          height={150}
          data={barChatData}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <XAxis dataKey="name" axisLine={{ stroke: "white" }} tick={{ fill: "white" }} includeHidden />
          <YAxis domain={[0, 500]} axisLine={{ stroke: "white" }} tick={{ fill: "white" }} />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            shape={<TriangleBar />}
            dataKey="sales"
            fill="white"
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
