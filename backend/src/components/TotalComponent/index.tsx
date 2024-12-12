import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

import LineChartComponent from "../LineChartComponent";

const TotalComponent = ({
  title = "Sales",
  lastMonthStatusUp = false,
  widthClass = "w-[300px]",
  heightClass = "h-[250px]",
}: {
  title?: string;
  lastMonthStatusUp?: boolean;
  widthClass?: string;
  heightClass?: string;
}) => {
  return (
    <div className={`border-2 p-4 ${widthClass} ${heightClass}`}>
      <div className="title font-bold text-lg">Total {title}</div>
      {lastMonthStatusUp ? (
        <div className="text-green-600">
          <div className="calculated-total">
            <span className="font-bold">$30,412</span>
          </div>
          <div className="calculated-percent-last-month flex items-center">
            <FaArrowUp className="mr-2" /> <span>1.5% vs last Month</span>
          </div>
          <LineChartComponent></LineChartComponent>
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
