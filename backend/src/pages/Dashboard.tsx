import TotalComponent from "../components/TotalComponent";

const Dashboard = () => {
  return (
    <>
      <main>
        <div className="welcome">
          <span>Welcom ,Jack</span>
          <br />
          <span>1 April 2023</span>
        </div>
        <div className="total info flex gap-5">
          <TotalComponent title="Sales" widthClass="w-[300px]"></TotalComponent>
          <TotalComponent title="Order" widthClass="w-[450px]"></TotalComponent>
          <TotalComponent
            title="Customer"
            widthClass="w-[400px]"
          ></TotalComponent>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
