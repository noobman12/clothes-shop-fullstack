import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data
const data = [
  { name: 'Page A', uv: 1000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 590, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 500, pv: 4300, amt: 2100 },
];

const LineChartComponent = () => {
  return ( 
      <ResponsiveContainer width="100%" height="100%" className="mt-3">
        <AreaChart
          width={100}
          height={60}
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="green" fill="green" />
        </AreaChart>
      </ResponsiveContainer>
  );
};

export default LineChartComponent;
