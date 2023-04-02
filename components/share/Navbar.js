import React, { useState } from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../config/firebase.init";
import { FaShoppingCart } from "react-icons/fa";
import Loading from "./Loading";
import useNav from "../../hooks/useNav";

const Navbar = () => {
  const { navbar, navbarLogo } = useNav();
  const [user, loading] = useAuthState(auth);
  const [menuShow, setMenuShoe] = useState(false);

  const router = useRouter();
  const index = 0;

  const menuItems = (
    <>
      <li onClick={() => setMenuShoe(!menuShow)} className="mx-1">
        <Link href="/">
          <a
            className={
              router.pathname == "/"
                ? "active bg-[#046307]"
                : "hover:bg-[#046307]"
            }>
            Home
          </a>
        </Link>
      </li>
      <li onClick={() => setMenuShoe(!menuShow)} className="mx-1">
        <Link href="/products">
          <a
            className={
              router.pathname == "/products"
                ? "active bg-[#046307]"
                : "hover:bg-[#046307]"
            }>
            Products
          </a>
        </Link>
      </li>
      <li onClick={() => setMenuShoe(!menuShow)} className="mx-1">
        <Link href="/about">
          <a
            className={
              router.pathname == "/about"
                ? "active bg-[#046307]"
                : "hover:bg-[#046307]"
            }>
            About Us
          </a>
        </Link>
      </li>
      <li onClick={() => setMenuShoe(!menuShow)} className="mx-1">
        <Link href="/contact">
          <a
            className={
              router.pathname == "/contact"
                ? "active bg-[#046307]"
                : "hover:bg-[#046307]"
            }>
            Contact
          </a>
        </Link>
      </li>
      {user?.emailVerified && (
        <li onClick={() => setMenuShoe(!menuShow)} className="mx-1">
          <Link href="/dashboard">
            <a
              className={
                router.pathname == "/dashboard"
                  ? "active bg-[#046307]"
                  : "hover:bg-[#046307]"
              }>
              Dashboard
            </a>
          </Link>
        </li>
      )}
      <li className="mx-1 group relative">
        <label>
          <div className="indicator">
            <FaShoppingCart size={25} className="" />
            <span className="badge badge-sm indicator-item">8</span>
          </div>
        </label>
        <div className="p-2 w-52 shadow-lg bg-slate-800 hidden group-hover:block absolute right-44 lg:right-5 top-0 lg:top-12 z-10">
          <div className="card-body p-2">
            <span className="font-bold text-lg">8 Items</span>
            <span className="text-info">Subtotal: $999</span>
            <div className="card-actions">
              <button className="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </li>
      <li onClick={() => setMenuShoe(!menuShow)} className="mx-1 p-0">
        {!user?.emailVerified && (
          <Link href="/login">
            <a
              className={
                router.pathname == "/login"
                  ? "active bg-[#046307]"
                  : "hover:bg-[#046307]"
              }>
              Login
            </a>
          </Link>
        )}
      </li>
    </>
  );
  if (loading) {
    return <Loading />;
  }

  return (
    <nav
      className={`border-gray-200 px-2 sm:px-8 sticky w-full top-0 z-[999] transition-all ${
        navbar ? "bg-white shadow-lg text-primary" : "text-white bg-primary"
      }`}>
      <div className="navbar  max-w-screen-2xl w-full mx-auto">
        <div className="navbar-start  xs:py-2">
          <Link href="/">
            <a className=" flex items-center">
              {navbarLogo}{" "}
              <span className="ml-2 font-semibold text-xs sm:text-md md:text-xl xl:text-2xl uppercase">
                Building Admixture Limited
              </span>
            </a>
          </Link>
        </div>

        <div className="navbar-end hidden lg:text-sm lg:flex w-auto ml-auto">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end lg:hidden">
          <div className=" dropdown dropdown-end">
            <label
              onClick={() => setMenuShoe(!menuShow)}
              tabIndex="1"
              className="btn btn-ghost lg:h
              idden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
            <ul
              tabIndex="1"
              className={
                menuShow
                  ? `menu menu-compact dropdown-content gap-2 p-2 shadow rounded-box ${
                      navbar
                        ? "bg-white shadow-lg text-primary"
                        : "text-white bg-primary"
                    } rounded-box w-52`
                  : "hidden"
              }>
              {menuItems}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
