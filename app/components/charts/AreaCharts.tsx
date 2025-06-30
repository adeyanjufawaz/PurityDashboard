"use client";

import { areaChartData } from "@/utils/datas";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import CustomTooltip from "../general/CustomToolTip";
import { useProvider } from "../general/NavOpenAndThemeProvider";

export default function AreaChartComponent() {
  const {isDark} = useProvider()
  return (
    <div className="w-full rounded-2xl bg-trasnparent shadow-7xl p-4 h-full min-h-[400px]  ">
      <ResponsiveContainer width={`100%`} height={`100%`}>
        <AreaChart
          data={areaChartData}
          margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
          width={250}
          height={250}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="gold" stopOpacity={0.8} />
              <stop offset="95%" stopColor="gold" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name"  />
          <YAxis domain={[0, 600]}  />
          <CartesianGrid
            vertical={false} 
            horizontal={true}
            strokeDasharray="5 9"
            stroke={isDark ? `#fff` : "#777"}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="mobile apps"
            strokeWidth={3}
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="website"
            stroke="gold"
            fillOpacity={1}
            fill="url(#colorAmt)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
