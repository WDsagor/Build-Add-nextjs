import React, { useEffect, useState } from "react";
import Link from "next/link";
// import Image from "next/image";
import useNav from "../../hooks/useNav";

const Navbar = () => {
  const [menuShow, setMenuShoe] = useState(false);
  const { navbar, navbarLogo } = useNav();

  const menuItems = (
    <>
      <li onClick={() => setMenuShoe(!menuShow)} className="mx-1">
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li onClick={() => setMenuShoe(!menuShow)} className="mx-1">
        <Link href="/products">
          <a>Products</a>
        </Link>
      </li>
      <li onClick={() => setMenuShoe(!menuShow)} className="mx-1">
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li onClick={() => setMenuShoe(!menuShow)} className="mx-1">
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
      <li onClick={() => setMenuShoe(!menuShow)} className="mx-1">
        <Link href="/login">
          <a>Login</a>
        </Link>
      </li>
    </>
  );

  return (
    <nav
      className={`border-gray-200 px-2 sm:px-8 fixed w-full top-0 z-50 transition-all  ${
        navbar ? "bg-white shadow-lg text-primary" : "text-white bg-primary md:mt-8 mt-[50px]"
      }`}
    >
      <div className="navbar  max-w-screen-2xl mx-auto">
        <div className="navbar-start xs:py-2">
          <Link href="/">
            <a className=" flex items-center ">
              {navbarLogo}{" "}
              <span className="ml-2 font-semibold text-xs sm:text-md md:text-xl lg:text-2xl uppercase">
                Building Admixture Limited
              </span>
            </a>
          </Link>
        </div>
        {/* <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><a>Item 1</a></li>
      <li><a>Item 3</a></li>
    </ul>
  </div> */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0 ">{menuItems}</ul>
        </div>
        <div className="navbar-end flex lg:hidden">
          <div className=" dropdown dropdown-end">
            <label onClick={() => setMenuShoe(!menuShow)} tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
            <ul
              tabIndex="0"
              className={
                menuShow
                  ? `menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box ${
                      navbar ? "bg-white shadow-lg text-primary" : "text-white bg-primary"
                    } rounded-box w-52`
                  : "hidden"
              }
            >
              {menuItems}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;