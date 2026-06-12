"use client";

import { useSidebarItems } from "@/utils/route";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { FaSignOutAlt } from "react-icons/fa";

import { MdDashboard } from "react-icons/md";

// import Loading from "./share/Loading";

const Sidebar = () => {
  const { sidebarItems, isActiveRoute, logout } = useSidebarItems();

  //   if (loading) {
  //     // return <Loading />;
  //   }

  // Function to check if a route is active

  // Navigation items for better maintainability

  return (
    <div className="flex flex-col justify-between h-10/12 flex-2">
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
      </ul>
      <ul className="menu w-full">
        <li className="pb-2">
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
    </div>
  );
};

export default Sidebar;
