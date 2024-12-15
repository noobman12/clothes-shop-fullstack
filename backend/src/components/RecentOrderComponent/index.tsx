import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const RecentOrderComponent = () => {
  return (
    <div className="border-2 p-4 w-[1190px] h-[300px] rounded-xl mt-10">
      <div className="font-semibold text-lg pl-5">Recent Order</div>
      <table className="w-full mt-5">
        <tr className="flex justify-between">
          <th className=" justify-center flex w-[150px] font-semibold">
            Order Number
          </th>
          <th className=" justify-center flex w-[150px] font-semibold">Date</th>
          <th className=" justify-center flex w-[150px] font-semibold">
            Product
          </th>
          <th className=" justify-center flex w-[150px] font-semibold">
            Customer
          </th>
          <th className=" justify-center flex w-[150px] font-semibold">
            Total Amount
          </th>
          <th className=" justify-center flex w-[150px] font-semibold">
            Status
          </th>
          <th className=" justify-center flex w-[150px] font-semibold">
            Action
          </th>
        </tr>
        <hr />
        <tr className="flex justify-between">
          <td className="flex justify-center w-[150px]">
            <span>123456</span>
          </td>
          <td className="flex justify-center w-[150px]">
            <span>01/01/2023</span>
          </td>
          <td className="flex justify-center w-[150px]">Dolan watch</td>
          <td className=" flex justify-center items-center gap-2 w-[150px]">
            <FaRegUserCircle />
            Allan wood
          </td>
          <td className="flex justify-center w-[150px]">$1,349</td>
          <td className="flex justify-center w-[150px]">on progress</td>
          <td className="flex justify-center w-[150px]">Action</td>
        </tr>
      </table>
    </div>
  );
};

export default RecentOrderComponent;
