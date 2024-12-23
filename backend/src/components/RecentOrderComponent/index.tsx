import { IOrder } from "@/types/modes";
import { FaRegUserCircle } from "react-icons/fa";

const RecentOrderComponent = ({ data }: { data?: IOrder[] }) => {
  return (
    <div className="border-2 p-4 w-[1190px] rounded-xl mt-10">
      <div className="font-semibold text-lg pl-5">Recent Order</div>
      <table className="w-full mt-5">
        <thead className="border-b-2">
          <tr className="flex justify-between">
            <th className=" flex w-[230px] font-semibold">Order Number</th>
            <th className=" flex font-semibold w-[80px]">Date</th>
            <th className=" flex w-[100px] font-semibold">Product</th>
            <th className=" flex font-semibold w-[130px]">Customer</th>
            <th className=" flex font-semibold w-[150px]">Total Amount</th>
            <th className=" flex font-semibold w-[150px]">Shipping Date</th>
            <th className=" flex font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data?.slice(0, 8)?.map((items: IOrder) => (
              <tr className="flex justify-between" key={items.id}>
                <td className="flex w-[230px]">{items.id}</td>
                <td className="flex justify-center w-[80px]">
                  {new Date(items.order_date).toLocaleDateString()}
                </td>
                <td className="flex justify-center w-[100px]">
                  {items.order_items && items.order_items.length > 1
                    ? items.order_items[0].product_name + ",..."
                    : items.order_items && items.order_items[0].product_name}
                </td>
                <td className=" flex items-center gap-2 justify-center w-[130px]">
                  <FaRegUserCircle />
                  {items.customer}
                </td>
                <td className="flex justify-center w-[150px]">
                  ${items.totalAmount}
                </td>
                <td className="flex justify-center w-[150px]">
                  {new Date(items.order_date).toLocaleDateString()}
                </td>
                <td className="flex">Action</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrderComponent;
