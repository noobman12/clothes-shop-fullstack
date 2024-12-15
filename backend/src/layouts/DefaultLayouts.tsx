import LeftSideBar from "@/components/LeftSideBar";
import { Outlet } from "react-router-dom";

const DefaultLayouts = () => {
  return (
    <div>
      <div className="flex">
        <LeftSideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayouts;
