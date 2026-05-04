// components/Navbar.tsx
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
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
  const [menuShow, setMenuShow] = useState<boolean>(false);
  const navbarRef = useRef<HTMLElement>(null);

  const pathname = usePathname();
  const isActiveRoute = (path: string): boolean => pathname === path;

  const getLinkClassName = (path: string): string => {
    return isActiveRoute(path) ? "active-link" : "nav-link ";
  };
  const handleMenuItemClick = (): void => {
    setMenuShow(!menuShow);
  };

  useGSAP(() => {
    if (navbarRef.current) {
      gsap.fromTo(
        navbarRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      );
    }
    const handleScroll = () => {
      if (window.scrollY <= 50) {
        navbarRef.current?.classList.add("navbar-gradient");
        gsap.fromTo(
          navbarRef.current,
          { y: -100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        );
      } else {
        navbarRef.current?.classList.remove("navbar-gradient");
      }
    };
    window.addEventListener("scroll", handleScroll);

    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems: ReactNode = (
    <>
      {NAV_ITEMS.map((item) => (
        <li key={item.href} onClick={handleMenuItemClick} className="mx-1">
          <Link href={item.href} className={`${getLinkClassName(item.href)}`}>
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
      ref={navbarRef}
      className="sticky top-0 left-0 right-0 z-50 backdrop-blur-md shadow-sm"
    >
      <div className="navbar container-custom max-w-screen-2xl w-full mx-auto">
        <div className="navbar-start xs:py-2">
          <Link href="/" className="flex items-center">
            <Image
              loading="eager"
              width={80}
              height={33}
              src="/images/Logo.png"
              alt="Logo"
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw"
              className="h-auto w-auto"
            />
          </Link>
        </div>

        <div className="navbar-end hidden lg:text-sm lg:flex w-full ml-auto">
          <ul className="menu menu-horizontal space-x-8">{menuItems}</ul>
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
              className={`menu text-black menu-compact dropdown-content bg-linear-to-r from-purple-100 to-red-100 gap-2 p-2 shadow  rounded-box w-52`}
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
