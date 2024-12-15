import React from "react";
import { LuHouse, LuTruck } from "react-icons/lu";
import { FaInbox } from "react-icons/fa";
import { PiSuitcase } from "react-icons/pi";
import { MdCreditCard } from "react-icons/md";
import { SlGraph } from "react-icons/sl";
import { RiUserSettingsLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";

const LeftSideBar = () => {
  return (
    <div className="bg-black text-white w-[200px] h-screen flex flex-col gap-3">
      <div className="w-full h-[200px] items-center justify-center flex">
        Logo
      </div>
      <div className="flex justify-start text-white items-center pl-5">
        <LuHouse />
        <span className="p-2 text-lg">Home</span>
      </div>
      <div className="flex justify-start text-white items-center pl-5">
        <FaInbox className="text-lg" />
        <span className="p-2 text-lg">Product</span>
      </div>
      <div className="flex justify-start text-white items-center pl-5">
        <PiSuitcase className="text-xl" />
        <span className="p-2 text-lg">Order</span>
      </div>
      <div className="flex justify-start text-white items-center pl-5">
        <MdCreditCard className="text-white text-xl" />
        <span className="p-2 text-lg">Payment</span>
      </div>
      <div className="flex justify-start text-white items-center pl-5">
        <SlGraph className="text-lg" />
        <span className="p-2 text-lg">Statistics</span>
      </div>
      <div className="flex justify-start text-white items-center pl-5">
        <LuTruck className="text-lg" />
        <span className="p-2 text-lg">Shipping</span>
      </div>
      <div className="flex justify-start text-white items-center pl-5">
        <RiUserSettingsLine className="text-lg" />
        <span className="p-2 text-lg">Manage User</span>
      </div>
      <div className="flex justify-start text-white items-center pl-5">
        <CiSettings className="text-lg" />
        <span className="p-2 text-lg">Setting</span>
      </div>
      <div className="flex justify-start text-white items-center pl-5">
        <IoIosLogOut className="text-lg" />
        <span className="p-2 text-lg">Log out</span>
      </div>
    </div>
  );
};

export default LeftSideBar;
