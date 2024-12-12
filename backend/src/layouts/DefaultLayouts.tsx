import { Outlet } from "react-router-dom";

const DefaultLayouts = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayouts;
