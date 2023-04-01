import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import {
  FaArrowLeft,
  FaSignOutAlt,
  FaShoppingCart,
  FaUserCircle,
  FaTelegramPlane,
} from "react-icons/fa";
import { HiViewGridAdd, HiUserGroup } from "react-icons/hi";
import { signOut } from "firebase/auth";
import auth from "../config/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./share/Loading";
import useNav from "../hooks/useNav";

const DashboardLayout = ({ title, children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, setAdmin] = useState(true);
  const { navbar } = useNav();
  const [sideMenu, setsideMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const data = window.localStorage.getItem("MY_APP_STATE");
    if (data !== null) setsideMenu(JSON.parse(data));
  }, []);
  useEffect(() => {
    if (sideMenu == true) {
      window.localStorage.setItem("MY_APP_STATE", JSON.stringify(sideMenu));
    }
    if (sideMenu == false) {
      window.localStorage.removeItem("MY_APP_STATE");
    }
  }, [sideMenu]);

  const logout = () => {
    signOut(auth);
  };

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <Layout title="Dashboard">
      <div className="mt-28 md:mt-24 flex flex-row-reverse w-auto">
        <div className="flex flex-col w-full max-w-screen-2xl mx-auto overflow-y-auto">
          <div className=" text-primary navbar rounded-xl mt-2">
            <div className="flex-1 text-center justify-center text-3xl">
              {title}
            </div>
          </div>
          {children}
        </div>
        <div
          className={`lg:h-[70vh] bg-primary/80 h-fit sm:fixed md:fixed  bottom-0 ${
            sideMenu ? "w-24 shrink-0" : "lg:w-60 w-screen"
          } ${
            navbar ? " lg:sticky xl:sticky lg:top-14" : ""
          } flex lg:flex-col lg:left-0 lg:top-16 lg:justify-between rounded-b-lg transition-all lg:duration-500 z-50`}>
          <ul
            className={`menu p-4 lg:menu-vertical menu-horizontal ${
              sideMenu ? "w-24" : " w-screen lg:w-60"
            } text-white relative transition-all duration-500 delay-100`}>
            <div
              onClick={() => setsideMenu(!sideMenu)}
              className={` absolute hidden lg:flex top-[50%]  h-8 w-8 bg-white rounded-full border border-primary cursor-pointer z-20 ${
                sideMenu
                  ? "hover:right-[-20%] right-[-15%] rotate-180"
                  : "hover:right-[-2%] right-[-6%]"
              } transition-all shadow-md shadow-black duration-700`}>
              <FaArrowLeft className="text-primary text-3xl p-1" />
            </div>
            <li className="my-1 flex flex-col">
              <Link href="/dashboard/profile">
                <a
                  className={
                    router.pathname == "/dashboard/profile"
                      ? "active bg-[#1a6304]"
                      : "hover:bg-[#1a6304]"
                  }>
                  <span>
                    <FaUserCircle size={25} />
                  </span>
                  <span
                    className={` ${
                      sideMenu ? "hidden " : "flex delay-700"
                    } shrink-0`}>
                    {" "}
                    Profile
                  </span>
                </a>
              </Link>
            </li>
            <li className="my-1">
              <Link href="/dashboard">
                <a
                  className={
                    router.pathname == "/dashboard"
                      ? "active bg-[#1a6304]"
                      : "hover:bg-[#1a6304]"
                  }>
                  <span>
                    <FaShoppingCart size={25} />
                  </span>
                  <span
                    className={` ${
                      sideMenu ? "hidden " : "flex  delay-700"
                    } shrink-0`}>
                    {admin ? "All Oders" : " My Order"}
                  </span>
                </a>
              </Link>
            </li>
            <li className="my-1">
              <Link href="/dashboard/addProduct">
                <a
                  className={
                    router.pathname == "/dashboard/addProduct"
                      ? "active bg-[#1a6304]"
                      : "hover:bg-[#1a6304]"
                  }>
                  <span>
                    <HiViewGridAdd size={25} />
                  </span>
                  <span
                    className={` ${
                      sideMenu ? "hidden " : "flex delay-700"
                    } shrink-0 `}>
                    {" "}
                    Add Products
                  </span>
                </a>
              </Link>
            </li>
            <li className="my-1">
              <Link href="/dashboard/addDealer">
                <a
                  className={
                    router.pathname == "/dashboard/addDealer"
                      ? "active bg-[#1a6304] flex flex-col"
                      : "hover:bg-[#1a6304] flex flex-col"
                  }>
                  <span>
                    <FaTelegramPlane size={25} />
                  </span>
                  <span
                    className={` ${
                      sideMenu ? "hidden " : "flex delay-700"
                    } shrink-0 `}>
                    Apply Dealer
                  </span>
                </a>
              </Link>
            </li>
            <li className="my-1">
              <Link href="/dashboard/allDealer">
                <a
                  className={
                    router.pathname == "/dashboard/allDealer"
                      ? "active bg-[#1a6304] flex flex-col"
                      : "hover:bg-[#1a6304] flex flex-col"
                  }>
                  <span>
                    <HiUserGroup size={25} />
                  </span>
                  <span
                    className={` ${
                      sideMenu ? "hidden " : "flex delay-700"
                    } shrink-0 `}>
                    All Dealr
                  </span>
                </a>
              </Link>
            </li>
          </ul>
          <ul
            className={`menu p-4 ${
              sideMenu ? "w-24" : "w-60"
            } text-white transition-all duration-500 delay-100`}>
            {user?.emailVerified ? (
              <li onClick={() => logout()} className="my-1 ">
                <button className="hover:bg-[#1a6304]">
                  <span>
                    <FaSignOutAlt size={25} />
                  </span>
                  <span
                    className={` ${
                      sideMenu ? "hidden " : "flex delay-700"
                    } shrink-0`}>
                    LogOut
                  </span>
                </button>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardLayout;
