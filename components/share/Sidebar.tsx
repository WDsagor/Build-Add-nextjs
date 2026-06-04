"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaSignOutAlt,
  FaShoppingCart,
  FaUserCircle,
  FaTelegramPlane,
} from "react-icons/fa";
import { HiViewGridAdd, HiUserGroup } from "react-icons/hi";
import { signOut } from "firebase/auth";
// import auth from "../config/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { MdDashboard } from "react-icons/md";
// import Loading from "./share/Loading";

const Sidebar = () => {
  //   const [user, loading] = useAuthState(auth);
  const [admin, setAdmin] = useState(true);
  const [sideMenu, setSideMenu] = useState(false);
  const pathname = usePathname(); // Replaces useRouter().pathname
  const router = useRouter();

  const logout = async () => {
    // await signOut(auth);
    router.push("/login");
  };

  //   if (loading) {
  //     // return <Loading />;
  //   }

  // Function to check if a route is active
  const isActiveRoute = (href: string) => {
    if (href === "/dashboard") {
      // All Orders page - active ONLY when exactly on /dashboard
      return pathname === "/dashboard";
    }
    // For other routes, exact match
    return pathname === href;
  };

  // Navigation items for better maintainability
  const sidebarItems = [
    {
      href: "/dashboard/profile",
      label: "Profile",
      icon: FaUserCircle,
      show: true,
    },
    {
      href: "/dashboard",
      label: admin ? "All Orders" : "My Order",
      icon: FaShoppingCart,
      show: true,
    },
    {
      href: "/dashboard/addProduct",
      label: "Add Products",
      icon: HiViewGridAdd,
      show: true,
    },
    {
      href: "/dashboard/addDealer",
      label: "Apply Dealer",
      icon: FaTelegramPlane,
      show: true,
    },
    {
      href: "/dashboard/allDealer",
      label: "All Dealer",
      icon: HiUserGroup,
      show: true,
    },
  ];

  return (
    <>
      <ul className="menu w-full gap-2 grow">
        <li>
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className=" is-drawer-close:tooltip is-drawer-close:tooltip-right text-emerald-700"
            data-tip="Dashboard"
          >
            {/* Sidebar toggle icon */}
            <MdDashboard size={25} />
            <span className="is-drawer-close:hidden font-bold uppercase">
              Dashboard
            </span>
          </label>
        </li>
        {/* List item */}
        {sidebarItems.map((item, i) => {
          const isActive = isActiveRoute(item.href);
          return (
            <li key={i}>
              <Link
                href={item.href}
                className={`is-drawer-close:tooltip is-drawer-close:tooltip-right ${
                  isActive
                    ? "bg-linear-to-r from-purple-600 to-pink-600 text-white"
                    : "hover:bg-linear-to-r from-purple-600 to-pink-600 hover:text-white"
                }`}
                data-tip={item.label}
              >
                <item.icon size={20} />
                <span className="is-drawer-close:hidden">{item.label}</span>
              </Link>
            </li>
          );
        })}
        <li className="pt-80 pb-2">
          <button
            onClick={logout}
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right hover:bg-linear-to-r from-purple-600 to-pink-600 hover:text-white"
            data-tip="Logout"
          >
            <FaSignOutAlt size={20} />
            <span className="is-drawer-close:hidden">Logout</span>
          </button>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
