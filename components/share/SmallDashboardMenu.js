import Link from "next/link";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  FaArrowLeft,
  FaShoppingCart,
  FaSignOutAlt,
  FaTelegramPlane,
  FaUserCircle,
} from "react-icons/fa";
import { HiUserGroup, HiViewGridAdd } from "react-icons/hi";
import auth from "../../config/firebase.init";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";

const SmallDashboardMenu = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, setAdmin] = useState(true);
  const router = useRouter();
  const logout = () => {
    signOut(auth);
    router.push("/login");
  };
  return (
    <div>
      <div
        className={` bg-primary/80 fixed w-full justify-evenly left-0 bottom-0 flex lg:hidden rounded-b-lg transition-all duration-500 z-50`}>
        <ul
          className={`menu menu-horizontal gap-1 text-white text-sm md:text-xl p-1 md:p-2 md:gap-3`}>
          <li className="my-1 ">
            <Link href="/dashboard/profile">
              <a
                className={` flex flex-col gap-0 p-1 md:p-2 ${
                  router.pathname == "/dashboard/profile"
                    ? "active bg-[#1a6304]"
                    : "hover:bg-[#1a6304]"
                }`}>
                <span>
                  <FaUserCircle />
                </span>
                <span>Profile</span>
              </a>
            </Link>
          </li>
          <li className="my-1">
            <Link href="/dashboard">
              <a
                className={`flex flex-col gap-0 p-1 md:p-2 ${
                  router.pathname == "/dashboard"
                    ? "active bg-[#1a6304]"
                    : "hover:bg-[#1a6304]"
                }`}>
                <span>
                  <FaShoppingCart />
                </span>
                <span>{admin ? "All Oders" : " My Order"}</span>
              </a>
            </Link>
          </li>
          <li className="my-1">
            <Link href="/dashboard/addProduct">
              <a
                className={` flex flex-col gap-0 p-1 md:p-2 ${
                  router.pathname == "/dashboard/addProduct"
                    ? "active bg-[#1a6304]"
                    : "hover:bg-[#1a6304]"
                }`}>
                <span>
                  <HiViewGridAdd />
                </span>
                <span> Add Products</span>
              </a>
            </Link>
          </li>
          {!admin && (
            <li className="my-1">
              <Link href="/dashboard/addDealer">
                <a
                  className={`flex flex-col gap-0 p-1 md:p-2 ${
                    router.pathname == "/dashboard/addDealer"
                      ? "active bg-[#1a6304]"
                      : "hover:bg-[#1a6304]"
                  }`}>
                  <span>
                    <FaTelegramPlane />
                  </span>
                  <span>Apply Dealer</span>
                </a>
              </Link>
            </li>
          )}
          <li className="my-1">
            <Link href="/dashboard/allDealer">
              <a
                className={`flex flex-col gap-0 p-1 md:p-2 ${
                  router.pathname == "/dashboard/allDealer"
                    ? "active bg-[#1a6304] "
                    : "hover:bg-[#1a6304]"
                }`}>
                <span>
                  <HiUserGroup />
                </span>
                <span>All Dealr</span>
              </a>
            </Link>
          </li>
          {user?.emailVerified && (
            <li onClick={() => logout()} className="my-1 ">
              <button className="hover:bg-[#1a6304] flex flex-col gap-0 p-1 md:p-2">
                <span>
                  <FaSignOutAlt />
                </span>
                <span>LogOut</span>
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SmallDashboardMenu;
