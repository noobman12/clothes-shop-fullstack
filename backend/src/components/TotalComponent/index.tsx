import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

import LineChartComponent from "../LineChartComponent";
import PieChartComponent from "../PieChartComponent";

const TotalComponent = ({
  title = "Total Sales",
  lastMonthStatusUp = true,
  widthClass = "w-[300px]",
  heightClass = "h-[300px]",
  chartType = "line chart"
}: {
  title?: string;
  lastMonthStatusUp?: boolean;
  widthClass?: string;
  heightClass?: string;
  chartType?: string;
}) => {
  return (
    <div className={`rounded-xl border-2 p-4 ${widthClass} ${heightClass}`}>
      <div className="title font-bold text-lg">{title}</div>
      {lastMonthStatusUp ? (
        <div className="text-green-600 w-full h-[210px] flex flex-col gap-0.5">
          <div className="calculated-total">
            <span className="font-bold">$30,412</span>
          </div>
          <div className="calculated-percent-last-month flex items-center">
            <FaArrowUp className="mr-2" /> <span>1.5% vs last Month</span>
          </div>
          {chartType === "line chart" && <LineChartComponent></LineChartComponent>}
          {chartType === "pie chart" && <PieChartComponent></PieChartComponent>}
        </div>
      ) : (
        <div className="text-red-600">
          <div className="calculated-total">
            <span className="font-bold">$30,412</span>
          </div>
          <div className="calculated-percent-last-month flex items-center">
            <FaArrowDown className="mr-2" /> <span>1.5% vs last Month</span>
          </div>
          <LineChartComponent></LineChartComponent>
        </div>
      )}
    </div>
  );
};

export default TotalComponent;
