import Dashboard from "../pages/Dashboard";
import StaffsPage from "../pages/StaffsPage";
import { LuHouse, LuTruck } from "react-icons/lu";
import { FaInbox } from "react-icons/fa";
import { PiSuitcase } from "react-icons/pi";
import { MdCreditCard } from "react-icons/md";
import { SlGraph } from "react-icons/sl";
import { RiUserSettingsLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
const routesPage = [
  { path: "/", element: <Dashboard />, exact: true },
  { path: "/staffs", element: <StaffsPage /> },
  {
    path: "/products",
    element: <div>Products</div>,
    subPath: [
      {
        path: "/products/add",
        element: <div>Add Product</div>,
      },
      {
        path: "/products/category",
        element: <div>Add category</div>,
      },
      {
        path: "/products/brand",
        element: <div>Add brand</div>,
      },
    ],
  },
  { path: "/orders", element: <div>Orders</div> },
  { path: "/payments", element: <div>Payments</div> },
  { path: "/statistics", element: <div>Statistics</div> },
  { path: "/shippings", element: <div>Shippings</div> },
  { path: "/customers", element: <div>Customers</div> },
  { path: "/setting", element: <div>Setting</div> },
  { path: "/logout", element: <div>Logout</div> },
];

const menuItems = [
  {
    title: "Dashboard",
    link: "/",
    image: <LuHouse />,
  },
  {
    title: "Product",
    link: "/products",
    image: <FaInbox className="text-lg" />,
    submenu: [
      { title: "All Product", link: "/products" },
      { title: "Add Product", link: "/products/add" },
      { title: "Category", link: "/products/category" },
      { title: "Brand", link: "/products/brand" },
    ],
  },
  {
    title: "Order",
    link: "/orders",
    image: <PiSuitcase className="text-xl" />,
  },
  {
    title: "Payment",
    link: "/payments",
    image: <MdCreditCard className="text-white text-xl" />,
  },
  {
    title: "Statistics",
    link: "/statistics",
    image: <SlGraph className="text-lg" />,
  },
  {
    title: "Shipping",
    link: "/shippings",
    image: <LuTruck className="text-lg" />,
  },
  {
    title: "Customer",
    link: "/customers",
  },
  {
    title: "Mange User",
    link: "/staffs",
    image: <RiUserSettingsLine className="text-lg" />,
  },
  {
    title: "Setting",
    link: "/setting",
    image: <CiSettings className="text-lg" />,
  },
  {
    title: "Log out",
    link: "/logout",
    image: <IoIosLogOut className="text-lg" />,
  },
];

export { routesPage, menuItems };
