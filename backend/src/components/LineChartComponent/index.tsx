import { IOrder } from "@/types/modes";
import React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  YAxis,
} from "recharts";

// Sample data type
type DataOnChart = {
  name: string;
  uv: number;
  pv?: number;
  amt?: number;
};

const LineChartComponent = ({
  data,
  title,
  color,
}: {
  data?: IOrder[];
  title?: string;
  color: string;
}) => {
  data?.sort((a, b) => {
    const dateA = new Date(a.order_date);
    const dateB = new Date(b.order_date);
    return dateA.getTime() - dateB.getTime();
  });
  const calculateMonthlyTotalSales = (data: IOrder[]) => {
    const monthlyTotals: { [key: string]: number } = {};

    data.forEach((item) => {
      const date = new Date(item.order_date);
      const yearMonth = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}`;

      if (!monthlyTotals[yearMonth]) {
        monthlyTotals[yearMonth] = 0;
      }

      monthlyTotals[yearMonth] += item.totalAmount || 0;
    });

    return monthlyTotals;
  };

  const calculateMonthlyOrders = (orders: IOrder[]) => {
    const monthlyOrders: { [key: string]: number } = {};

    orders.forEach((order) => {
      const date = new Date(order.order_date);
      const yearMonth = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}`;

      if (!monthlyOrders[yearMonth]) {
        monthlyOrders[yearMonth] = 0;
      }

      monthlyOrders[yearMonth] += 1;
    });

    return monthlyOrders;
  };

  const monthlyTotalSales =
    title === "Total Sales" ? calculateMonthlyTotalSales(data || []) : {};
  const monthlyTotalOrders =
    title === "Total Orders" ? calculateMonthlyOrders(data || []) : {};
  const OverallSales =
    title === "Overall Sales" ? calculateMonthlyTotalSales(data || []) : {};

  function formatToMonth(yearMonth: string) {
    // Split the input to extract year and month
    const [year, month] = yearMonth.split("-");

    // Create a Date object with the given year and month
    const date = new Date(Number(year), Number(month) - 1); // Month index starts at 0

    // Get the month name using toLocaleString
    return date.toLocaleString("en-US", { month: "short" });
  }
  // Declare `dataOnChart` once and update it conditionally
  let dataOnChart: DataOnChart[] = [];
  if (title === "Total Sales") {
    dataOnChart = Object.entries(monthlyTotalSales).map(
      ([month, totalAmount]) => ({
        name: formatToMonth(month),
        uv: totalAmount,
      })
    );
  } else if (title === "Total Orders") {
    dataOnChart = Object.entries(monthlyTotalOrders).map(
      ([month, totalOrders]) => ({
        name: formatToMonth(month),
        uv: totalOrders,
      })
    );
  } else if (title === "Overall Sales") {
    dataOnChart = Object.entries(OverallSales).map(([month, totalAmount]) => ({
      name: formatToMonth(month),
      uv: totalAmount,
    }));
  }
  return (
    <ResponsiveContainer width="100%" height="100%" className="mt-3">
      <AreaChart
        width={100}
        height={60}
        data={dataOnChart}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="name" />
        {title === "Overall Sales" && <YAxis dataKey="uv" />}
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke={color} fill={color} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
