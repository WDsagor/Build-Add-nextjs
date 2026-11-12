// components/Navbar.tsx
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const navbarRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const isActiveRoute = (path: string): boolean => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname?.startsWith(`${path}/`);
  };

  // Initial Entrance Animation (Only runs once on mount)
  useGSAP(() => {
    if (navbarRef.current) {
      gsap.fromTo(
        navbarRef.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }
  }, []);

  // Scroll listener for glass/shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={navbarRef}
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2"
          : "bg-white/85 backdrop-blur-sm border-b border-slate-100 py-3"
      }`}
    >
      <div className="max-w-screen-2xl w-full mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            loading="eager"
            width={160}
            height={45}
            src="/images/Logo.png"
            alt="Super FIXIT Logo"
            className="h-10 sm:h-11 w-auto object-contain"
          />
        </Link>

        {/* Center/Right: Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {NAV_ITEMS.map((item) => {
              const active = isActiveRoute(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative py-2 text-sm font-semibold transition-colors duration-200 ${
                      active
                        ? "text-teal-600"
                        : "text-slate-700 hover:text-teal-600"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Actions: Cart & Login */}
          <div className="flex items-center gap-5 pl-4 border-l border-slate-200">
            {/* Cart Dropdown */}
            <div className="relative group py-2">
              <button
                aria-label="Shopping Cart"
                className="relative p-2 rounded-xl text-slate-700 hover:bg-teal-50 hover:text-teal-600 transition-colors cursor-pointer"
              >
                <FaShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-teal-600 text-white text-[11px] font-bold flex items-center justify-center shadow-sm">
                  0
                </span>
              </button>

              {/* Hover Cart Preview */}
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute right-0 top-full mt-1 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 z-50">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="font-bold text-slate-900 text-sm">
                    0 Items in Cart
                  </span>
                  <span className="text-xs font-semibold text-teal-600">
                    ৳0
                  </span>
                </div>
                <p className="text-xs text-slate-500 py-3">
                  Your cart is currently empty.
                </p>
                <Link
                  href="/products"
                  className="block w-full text-center py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-colors"
                >
                  Browse Products
                </Link>
              </div>
            </div>

            {/* Login CTA Button */}
            <Link
              href="/login"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 text-white text-sm font-bold shadow-md shadow-teal-600/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Login
            </Link>
          </div>
        </nav>

        {/* Mobile Right Controls: Cart + Hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/products"
            className="relative p-2 rounded-xl text-slate-700 hover:bg-slate-100"
          >
            <FaShoppingCart size={20} />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-teal-600 text-white text-[10px] font-bold flex items-center justify-center">
              0
            </span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="p-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-teal-50 hover:text-teal-600 transition-colors"
          >
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 shadow-xl space-y-2">
          {NAV_ITEMS.map((item) => {
            const active = isActiveRoute(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  active
                    ? "bg-teal-50 text-teal-700"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-bold text-sm shadow-md"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;