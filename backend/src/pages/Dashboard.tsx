import OverallSalesComponent from "@/components/OverallSalesComponent";
import TotalComponent from "../components/TotalComponent";
import RecentOrderComponent from "@/components/RecentOrderComponent";

const Dashboard = () => {
  return (
    <>
      <main className="mx-auto w-[80vw]">
        <div className="welcome">
          <span className="font-semibold text-xl">Welcom ,Jack</span>
          <br />
          <span className="font-normal text-slate-500">1 April 2023</span>
        </div>
        <div className="total info flex gap-5 mt-5">
          <TotalComponent
            title="Total Sales"
            widthClass="w-[300px]"
          ></TotalComponent>
          <TotalComponent
            title="Total Order"
            widthClass="w-[450px]"
          ></TotalComponent>
          <TotalComponent
            title="Total Customer"
            widthClass="w-[400px]"
            chartType="pie chart"
          ></TotalComponent>
        </div>
        <div className="flex mt-5 gap-5">
          <OverallSalesComponent></OverallSalesComponent>
          <TotalComponent
            title="Order Report"
            widthClass="w-[450px]"
            chartType="pie chart"
          ></TotalComponent>
        </div>
        <div className="">
          <RecentOrderComponent></RecentOrderComponent>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
