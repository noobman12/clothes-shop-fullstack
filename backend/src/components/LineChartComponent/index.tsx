import React from "react";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";
const data = [
  { name: "Jan", value: 100 },
  { name: "Feb", value: 120 },
  { name: "Mar", value: 80 },
  { name: "Apr", value: 140 },
  { name: "May", value: 100 },
  { name: "Jun", value: 130 },
];

const LineChartComponent = () => {
  return (
    <div className="mt-5">
      <div
        style={{
          width: "250px",
          padding: "16px",
        }}
      >
        <ResponsiveContainer width="100%" height={80} className="bg-green-200">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="green"
              strokeWidth={2}
              fill="green"
            />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartComponent;
