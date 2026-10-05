import { MdDashboard } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { MdSupport } from "react-icons/md";

export const sidebarItems = [
  {
    id: 1,
    title: "Dashboard",
    path: "/",
    icon: <MdDashboard />,
  },
  {
    id: 2,
    title: "Order",
    path: "/order",
    icon: <FaShoppingCart />,
  },
  {
    id: 3,
    title: "Product",
    path: "/product",
    icon: <MdFastfood />,
  },
  {
    id: 4,
    title: "Support",
    path: "/support",
    icon: <MdSupport />,
  },
];