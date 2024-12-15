import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 },
];

const PieChartComponent = () => {
  return (
    <div className='flex gap-0'>
        <div className="w-[200px] h-[200px]">
      <ResponsiveContainer className="mt-5">
        <PieChart width={100} height={100}>
          <Pie
            dataKey="value"
            data={data02}
            cx={100}
            cy={60}
            innerRadius={30}
            outerRadius={60}
            fill="#82ca9d"
          />
        </PieChart>
      </ResponsiveContainer>
      </div>
      <div className="information-bar mt-5">
        <div className="information-bar-item">
            <ol>
                <li>Group A: 2400</li>
                <li>Group B: 4567</li>
            </ol>
        </div>
      </div>
    </div>
  );
};

export default PieChartComponent;
