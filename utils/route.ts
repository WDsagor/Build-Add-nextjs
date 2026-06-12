"use client";
import { usePathname, useRouter } from "next/navigation";

import { useState } from "react";
import { FaShoppingCart, FaTelegramPlane, FaUserCircle } from "react-icons/fa";
import { HiUserGroup, HiViewGridAdd } from "react-icons/hi";

// Create a custom hook or move this logic into a component
export const useSidebarItems = () => {
  const pathname = usePathname();
  const [admin, setAdmin] = useState<boolean>(true);
  const router = useRouter();

  const isActiveRoute = (href: string) => {
    if (href === "/dashboard") {
      // All Orders page - active ONLY when exactly on /dashboard
      return pathname === "/dashboard";
    }
    // For other routes, exact match
    return pathname === href;
  };
  const logout = async () => {
    // await signOut(auth);
    router.push("/login");
  };
  const sidebarItems = [
    {
      href: "/dashboard/profile",
      label: "Profile",
      icon: FaUserCircle,
      show: true,
    },
    {
      href: "/dashboard",
      label: admin ? "All Orders" : "My Order",
      icon: FaShoppingCart,
      show: true,
    },
    {
      href: "/dashboard/addProduct",
      label: "Add Products",
      icon: HiViewGridAdd,
      show: true,
    },
    {
      href: "/dashboard/addDealer",
      label: "Apply Dealer",
      icon: FaTelegramPlane,
      show: true,
    },
    {
      href: "/dashboard/allDealer",
      label: "All Dealer",
      icon: HiUserGroup,
      show: true,
    },
  ];

  return { sidebarItems, isActiveRoute, admin, setAdmin, logout };
};
