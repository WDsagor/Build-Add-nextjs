// components/Navbar.tsx
"use client";

import useNav from "@/hooks/useNav";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState, ReactNode } from "react";
import { FaShoppingCart } from "react-icons/fa";

interface NavItem {
  href: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/dashboard", label: "Dashboard" },
];

const Navbar = () => {
  const { navbar, navbarLogo } = useNav();
  const [menuShow, setMenuShow] = useState<boolean>(false);

  const pathname = usePathname();
  const isActiveRoute = (path: string): boolean => pathname === path;

  const getLinkClassName = (path: string): string => {
    return isActiveRoute(path) ? "active border " : "hover:border]";
  };

  const handleMenuItemClick = (): void => {
    setMenuShow(!menuShow);
  };

  const menuItems: ReactNode = (
    <>
      {NAV_ITEMS.map((item) => (
        <li key={item.href} onClick={handleMenuItemClick} className="mx-1">
          <Link href={item.href} className={getLinkClassName(item.href)}>
            {item.label}
          </Link>
        </li>
      ))}

      {/* Cart Item */}
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

      {/* Login Item */}
      <li onClick={handleMenuItemClick} className="mx-1 p-0">
        <Link href="/login" className={getLinkClassName("/login")}>
          Login
        </Link>
      </li>
    </>
  );

  return (
    <nav
      className={`border-gray-200 px-2 sm:px-8 sticky w-full top-0 z-50 transition-all ${
        navbar
          ? "text-white bg-linear-to-r from-blue-400 to-green-500  shadow-lg"
          : "text-white bg-linear-to-r from-green-400 to-blue-500"
      }`}
    >
      <div className="navbar max-w-screen-2xl w-full mx-auto">
        <div className="navbar-start xs:py-2">
          <Link href="/" className="flex items-center">
            {navbarLogo}
          </Link>
        </div>

        <div className="navbar-end hidden lg:text-sm lg:flex w-auto ml-auto">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>

        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <label
              onClick={() => setMenuShow(!menuShow)}
              tabIndex={0}
              className="btn btn-ghost"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-compact dropdown-content gap-2 p-2 shadow rounded-box ${
                navbar
                  ? "bg-white shadow-lg text-primary"
                  : "text-white bg-linear-to-r from-green-400 to-blue-300"
              } rounded-box w-52`}
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
