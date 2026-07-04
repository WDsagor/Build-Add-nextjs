"use client";
import Sidebar from "@/components/share/Sidebar";
import { useSidebarItems } from "@/utils/route";
import Link from "next/link";
import { FaSignOutAlt } from "react-icons/fa";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { sidebarItems, isActiveRoute, logout } = useSidebarItems();
  return (
    <div className="">
      <title>Dashboard | Super FIXIT Ltd</title>

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="p-2 max-w-screen-2xl mx-auto">{children}</div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible pt-20 md:pt-0">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="is-drawer-close:w-14 is-drawer-open:w-52">
            {/* Sidebar content here */}
            <Sidebar />
          </div>
        </div>
      </div>
      <div className="dock dock-sm bg-accent text-white font-bold lg:hidden gap-2">
        {sidebarItems?.map((item, i) => {
          const isActive = isActiveRoute(item.href);
          return (
            <Link
              key={i}
              href={item.href}
              className={`is-drawer-close:tooltip is-drawer-close:tooltip-right ${
                isActive
                  ? "bg-linear-to-r from-purple-600 to-pink-600 text-white"
                  : "hover:bg-linear-to-r from-purple-600 to-pink-600 hover:text-white"
              }`}
              data-tip={item.label}
            >
              <item.icon size={20} />

              <span className="dock-label">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default layout;
