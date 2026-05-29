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
// import Loading from "./share/Loading";

const Sidebar = () => {
  //   const [user, loading] = useAuthState(auth);
  const [admin, setAdmin] = useState(true);
  const [sideMenu, setSideMenu] = useState(false);
  const pathname = usePathname(); // Replaces useRouter().pathname
  const router = useRouter();

  // Load sideMenu state from localStorage on mount
  useEffect(() => {
    const data = localStorage.getItem("MY_APP_STATE");
    if (data !== null) setSideMenu(JSON.parse(data));
  }, []);

  // Save sideMenu state to localStorage
  useEffect(() => {
    if (sideMenu) {
      localStorage.setItem("MY_APP_STATE", JSON.stringify(sideMenu));
    } else {
      localStorage.removeItem("MY_APP_STATE");
    }
  }, [sideMenu]);

  const logout = async () => {
    // await signOut(auth);
    router.push("/login");
  };

  //   if (loading) {
  //     // return <Loading />;
  //   }

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
    <aside className="flex  md:min-h-lvh">
      <div className=" w-full md:w-40 bg-linear-to-l from-white to-accent flex flex-row md:flex-col transition-all">
        <div className="p-4 hidden md:flex">
          <h2 className="text-xl font-bold text-center">Dashboard</h2>
        </div>

        <div className="flex-1 p-1">
          <div className=" flex flex-row md:flex-col">
            {sidebarItems.map((item, i) => {
              return (
                <Link
                  key={i}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-2  hover:bg-accent transition-colors"
                >
                  <item.icon size={20} />
                  <span className="text-sm hidden md:flex">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Logout Button */}
        <div className="">
          <button className="flex items-center gap-3 px-4 py-2 text-sm w-full hover:bg-accent transition-colors">
            <FaSignOutAlt size={22} />
            <span className="hidden md:flex">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
