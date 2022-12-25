import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Layout from "./Layout";

const DashboardLayout = ({ title, children }) => {
  const [menuShow, setMenuShoe] = useState(false);
  const router = useRouter();
  return (
    <Layout title="Dashboard">
      <div className="drawer drawer-mobile mt-28 md:mt-24">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <div className="w-full navbar m-0 p-0  bg-slate-800 text-white">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 text-center justify-center  text-3xl">
              {title}
            </div>
          </div>
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60  bg-slate-800 text-white">
            <li onClick={() => setMenuShoe(!menuShow)} className="my-1">
              <Link href="/dashboard">
                <a
                  className={
                    router.pathname == "/dashboard"
                      ? "active bg-[#1a6304]"
                      : "hover:bg-[#1a6304]"
                  }>
                  My Order
                </a>
              </Link>
            </li>
            <li onClick={() => setMenuShoe(!menuShow)} className="my-1">
              <Link href="/dashboard/addProduct">
                <a
                  className={
                    router.pathname == "/dashboard/addProduct"
                      ? "active bg-[#1a6304]"
                      : "hover:bg-[#1a6304]"
                  }>
                  Add Products
                </a>
              </Link>
            </li>
            <li onClick={() => setMenuShoe(!menuShow)} className="my-1">
              <Link href="/dashboard/addDealer">
                <a
                  className={
                    router.pathname == "/dashboard/addDealer"
                      ? "active bg-[#1a6304]"
                      : "hover:bg-[#1a6304]"
                  }>
                  Add Dealr
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardLayout;
