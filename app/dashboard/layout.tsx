// app/dashboard/layout.tsx
"use client";
import Sidebar from "@/components/share/Sidebar";
import { useSidebarItems } from "@/utils/route";
import Link from "next/link";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { sidebarItems, isActiveRoute } = useSidebarItems();
  

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-800">
      <title>Dashboard | Super FIXIT Ltd</title>

      {/* Main Drawer Container with Flex to keep sidebar locked */}
      <div className="drawer lg:drawer-open min-h-[calc(100vh-80px)] relative">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        {/* Main Content Area */}
        <div className="drawer-content flex flex-col min-h-[calc(100vh-80px)] pb-20 lg:pb-6 overflow-x-hidden">
          

          {/* Page Content */}
          <main className="p-4 sm:p-6 lg:p-8 max-w-screen-2xl w-full mx-auto flex-grow">
            {children}
          </main>
        </div>

        {/* Sidebar Drawer Side - Fixed/Sticky on Desktop */}
        <div className="drawer-side z-40  lg:sticky lg:top-[80px] lg:h-[calc(100vh-80px)] self-start">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay hidden lg:flex"
          ></label>
          <div className="is-drawer-close:w-18 hidden lg:flex is-drawer-open:w-64 bg-white border-r border-slate-200 h-full overflow-y-auto transition-all duration-300 shadow-sm">
            <Sidebar />
          </div>
        </div>
      </div>

      {/* Mobile Bottom Dock Navigation */}
      <div className="dock h-16 dock-sm max-w-lg mx-auto lg:hidden bg-slate-900/95 backdrop-blur-md rounded-t-2xl gap-2 text-slate-300 border-t border-slate-800 shadow-2xl py-2 px-1 z-50">
        {sidebarItems?.map((item, i) => {
          const isActive = isActiveRoute(item.href);
          return (
            <Link
              key={i}
              href={item.href}
              className={`flex flex-col items-center justify-center rounded-xl transition-all duration-300 px-3 py-1.5 ${
                isActive
                  ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg shadow-teal-500/20"
                  : "hover:bg-white/10 hover:text-white"
              }`}
              data-tip={item.label}
            >
              <item.icon size={18} />
              <span className="dock-label text-[10px] mt-1 font-medium truncate max-w-[64px]">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardLayout;