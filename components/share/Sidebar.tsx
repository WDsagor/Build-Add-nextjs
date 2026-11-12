// components/share/Sidebar.tsx
"use client";
import { useSidebarItems } from "@/utils/route";
import Link from "next/link";
import { FaSignOutAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  const { sidebarItems, isActiveRoute, logout } = useSidebarItems();

  return (
    <aside className="h-full flex flex-col justify-between py-4 px-2.5 bg-white text-slate-700 select-none overflow-hidden">
      {/* Top Section: Brand Header & Navigation (Hidden scrollbar) */}
      <div className="space-y-4 overflow-y-auto overflow-x-hidden pr-0.5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* Drawer Collapse/Expand Toggle Header */}
        <div className="px-1">
          <label
            htmlFor="my-drawer-4"
            aria-label="toggle sidebar"
            className="flex items-center gap-3 p-2 rounded-xl text-teal-600 hover:bg-teal-50 transition-colors cursor-pointer is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="Toggle Sidebar"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-teal-600/20">
              <MdDashboard size={20} />
            </div>
            <span className="is-drawer-close:hidden font-extrabold text-base text-slate-900 tracking-tight truncate">
              Super <span className="text-teal-600">FIXIT</span>
            </span>
          </label>
        </div>

        <div className="border-t border-slate-100 my-2" />

        {/* Navigation Links */}
        <ul className="menu w-full gap-1.5 p-0">
          {sidebarItems.map((item, i) => {
            const isActive = isActiveRoute(item.href);
            return (
              <li key={i}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-all duration-200 is-drawer-close:tooltip is-drawer-close:tooltip-right ${
                    isActive
                      ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md shadow-teal-500/20 font-semibold"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                  data-tip={item.label}
                >
                  <item.icon
                    size={20}
                    className={`shrink-0 ${
                      isActive ? "text-white" : "text-slate-500"
                    }`}
                  />
                  <span className="is-drawer-close:hidden text-sm truncate">
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Bottom Section: Logout Button */}
      <div className="pt-3 mt-2 border-t border-slate-100 px-1 shrink-0">
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-rose-600 hover:bg-rose-50 transition-all duration-200 is-drawer-close:tooltip is-drawer-close:tooltip-right cursor-pointer"
          data-tip="Logout"
        >
          <FaSignOutAlt size={18} className="shrink-0" />
          <span className="is-drawer-close:hidden text-sm font-semibold">
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;