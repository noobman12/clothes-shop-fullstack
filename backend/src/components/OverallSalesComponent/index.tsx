import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import LineChartComponent from "../LineChartComponent";
import { IOrder } from "@/types/modes";

const OverallSalesComponent = ({
  lastYearStatusUp = true,
  data,
}: {
  lastYearStatusUp?: boolean;
  data?: IOrder[];
}) => {
  return (
    <div className={`border-2 p-4 w-[720px] h-[300px] flex rounded-xl`}>
      {lastYearStatusUp ? (
        <div className="w-full h-[225px]">
          <div className="flex items-center gap-1">
            <div className="title font-bold text-lg">Overall Sales</div>
            <div className="text-green-600">
              <div className="calculated-percent-last-month flex items-center">
                <FaArrowUp className="" />
                <span className="pr-2">1.5%</span>
                <span className="text-black"> vs last Year</span>
              </div>
            </div>
          </div>
          <LineChartComponent
            data={data}
            title={"Overall Sales"}
            color={"green"}
          />
        </div>
      ) : (
        <>
          <div className="title font-bold text-lg">Overall Sales</div>
          <div className="text-red-600">
            <div className="calculated-percent-last-month flex items-center">
              <FaArrowDown className="mr-2" /> <span>1.5% vs last Year</span>
            </div>
            <LineChartComponent
              data={data}
              title={"Overall Sales"}
              color={"red"}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default OverallSalesComponent;
