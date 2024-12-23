import OverallSalesComponent from "@/components/OverallSalesComponent";
import TotalComponent from "../components/TotalComponent";
import RecentOrderComponent from "@/components/RecentOrderComponent";
import { useEffect, useState } from "react";
import { SETTINGS } from "@/constants/settings";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${SETTINGS.URL_API}/v1/orders`);
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <main className="mx-auto w-[80vw] ml-[230px]">
      <div className="welcome">
        <span className="font-semibold text-xl">Welcome, Jack</span>
        <br />
        <span className="font-normal text-slate-500">1 April 2023</span>
      </div>
      <div className="total info flex gap-5 mt-5">
        <TotalComponent
          title="Total Sales"
          widthClass="w-[300px]"
          data={data}
        />
        <TotalComponent
          title="Total Orders"
          widthClass="w-[450px]"
          data={data}
        />
        <TotalComponent
          title="Total Customers"
          widthClass="w-[400px]"
          chartType="pie chart"
          data={data}
        />
      </div>
      <div className="flex mt-5 gap-5">
        <OverallSalesComponent data={data} />
        <TotalComponent
          title="Order Report"
          widthClass="w-[450px]"
          chartType="pie chart"
          data={data}
        />
      </div>
      <div>
        <RecentOrderComponent data={data} />
      </div>
    </main>
  );
};

export default Dashboard;
