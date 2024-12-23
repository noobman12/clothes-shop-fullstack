import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

import LineChartComponent from "../LineChartComponent";
import PieChartComponent from "../PieChartComponent";
import { IOrder } from "@/types/modes";

const TotalComponent = ({
  title = "Total Sales",
  widthClass = "w-[300px]",
  heightClass = "h-[300px]",
  // chartType = "line chart",
  data,
}: {
  title?: string;
  widthClass?: string;
  heightClass?: string;
  chartType?: string;
  data?: IOrder[];
}) => {
  const now = new Date();
  const currentMonth = now.getMonth(); // Tháng hiện tại (0-11)
  const currentYear = now.getFullYear();
  const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1; // Tháng 11 nếu tháng hiện tại là 0
  const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;

  // Ensure data exists and is valid
  const dataLastMonth =
    data?.filter((item) => {
      const date = new Date(item.order_date);
      return (
        date.getMonth() === previousMonth && date.getFullYear() === previousYear
      );
    }) || [];
  const dataThisMonth =
    data?.filter((item) => {
      const date = new Date(item.order_date);
      return (
        date.getMonth() === currentMonth && date.getFullYear() === currentYear
      );
    }) || [];
  // Calculate total sales
  const totalSaleLastMonth = dataLastMonth.reduce((total, item) => {
    const amount = item?.totalAmount || 0; // Fallback to 0 if totalAmount is undefined or null
    return total + amount;
  }, 0);
  const totalSaleThisMonth = dataThisMonth.reduce((total, item) => {
    const amount = item?.totalAmount || 0; // Fallback to 0 if totalAmount is undefined or null
    return total + amount;
  }, 0);
  // Get the count of orders
  const ordersCountLastMonth = dataLastMonth.length;
  const ordersCountThisMonth = dataThisMonth.length;
  const uniqueCustomersThisMonth = dataThisMonth.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.customer === item.customer)
  );
  const totalCustomersThisMonth = uniqueCustomersThisMonth.length;
  console.log("dataLastMonth", dataLastMonth);
  const renderContent = () => {
    if (title === "Total Sales" && totalSaleThisMonth > totalSaleLastMonth) {
      return (
        <div className="text-green-600 w-full h-[210px] flex flex-col gap-0.5">
          <div className="calculated-total">
            <span className="font-bold text-xl">
              {title === "Total Sales" && `$${totalSaleThisMonth.toFixed(2)}`}
            </span>
          </div>
          <div className="calculated-percent-last-month flex items-center">
            <FaArrowUp className="mr-2" />
            <span>
              {((totalSaleThisMonth / totalSaleLastMonth) * 100).toFixed(2) +
                "%"}
              vs last Month
            </span>
          </div>
          <LineChartComponent
            data={data}
            title={title}
            color={"green"}
          ></LineChartComponent>
        </div>
      );
    } else if (
      title === "Total Sales" &&
      totalSaleThisMonth < totalSaleLastMonth
    ) {
      return (
        <div className="text-red-600  w-full h-[210px] flex flex-col gap-0.5">
          <div className="calculated-total">
            <span className="font-bold text-xl">
              {" "}
              {title === "Total Sales" && `$${totalSaleThisMonth.toFixed(2)}`}
            </span>
          </div>
          <div className="calculated-percent-last-month flex items-center">
            <FaArrowDown className="mr-2" />
            <span>
              {((totalSaleThisMonth / totalSaleLastMonth) * 100).toFixed(2) +
                "%"}
              vs last Month
            </span>
          </div>
          <LineChartComponent
            data={data}
            title={title}
            color={"red"}
          ></LineChartComponent>
        </div>
      );
    } else if (
      title === "Total Orders" &&
      ordersCountThisMonth > ordersCountLastMonth
    ) {
      return (
        <div className="text-green-600 w-full h-[210px] flex flex-col gap-0.5">
          <div className="calculated-total">
            <span className="font-bold text-xl">{ordersCountThisMonth}</span>
          </div>
          <div className="calculated-percent-last-month flex items-center">
            <FaArrowUp className="mr-2" />
            <span>
              {((ordersCountThisMonth / ordersCountLastMonth) * 100).toFixed(
                2
              ) + "%"}
              vs last Month
            </span>
          </div>
          <LineChartComponent
            data={data}
            title={title}
            color={"green"}
          ></LineChartComponent>
        </div>
      );
    } else if (
      title === "Total Orders" &&
      ordersCountThisMonth < ordersCountLastMonth
    ) {
      return (
        <div className="text-red-600  w-full h-[210px] flex flex-col gap-0.5">
          <div className="calculated-total">
            <span className="font-bold text-xl">{ordersCountThisMonth}</span>
          </div>
          <div className="calculated-percent-last-month flex items-center">
            <FaArrowDown className="mr-2" />
            <span>
              {((ordersCountThisMonth / ordersCountThisMonth) * 100).toFixed(
                2
              ) + "%"}
              vs last Month
            </span>
          </div>
          <LineChartComponent
            data={data}
            title={title}
            color={"red"}
          ></LineChartComponent>
        </div>
      );
    } else if (title === "Total Customers") {
      return (
        <div className="text-green-600 w-full h-[210px] flex flex-col gap-0.5">
          <div className="calculated-total">
            <span className="font-bold text-xl">{totalCustomersThisMonth}</span>
          </div>
          <div className="calculated-percent-last-month flex items-center"></div>
          <PieChartComponent></PieChartComponent>
        </div>
      );
    }
  };
  return (
    <div className={`rounded-xl border-2 p-4 ${widthClass} ${heightClass}`}>
      <div className="title font-bold text-lg">{title}</div>
      {renderContent()}
    </div>
  );
};

export default React.memo(TotalComponent);
