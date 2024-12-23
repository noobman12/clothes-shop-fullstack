import React from "react";

import { Link } from "react-router-dom";
import { menuItems } from "../../routes";

const LeftSideBar = () => {
  return (
    <div className="bg-black text-white w-[200px] h-screen flex flex-col gap-3 fixed">
      <div className="w-full h-[200px] items-center justify-center flex">
        Logo
      </div>
      {menuItems.map((item, index) => (
        <div key={index}>
          <div className="flex justify-start text-white items-center pl-5">
            {item.image}
            <Link to={item.link} className="p-2 text-lg">
              {item.title}
            </Link>
          </div>
          <ul className="pl-10">
            {item.submenu &&
              item.submenu.map((submenu, index) => (
                <li key={index}>
                  <Link to={submenu.link} className="p-2 text-lg">
                    {submenu.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default LeftSideBar;
