"use client";

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  FiSearch,
  FiFilter,
  FiEye,
  FiShoppingBag,
  FiClock,
  FiTruck,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

// Register GSAP plugin
gsap.registerPlugin(useGSAP);

interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  companyName: string;
  totalAmount: string;
  itemsCount: number;
  paymentStatus: "Paid" | "Pending" | "Failed";
  deliveryStatus: "Delivered" | "Processing" | "Cancelled";
  orderDate: string;
}

// Demo data - Replace with your API data
const initialOrders: Order[] = [
  {
    id: "1",
    orderNumber: "#ORD-9081",
    customerName: "Rahim Uddin",
    companyName: "Uddin Enterprise",
    totalAmount: "৳ 1,25,000",
    itemsCount: 5,
    paymentStatus: "Paid",
    deliveryStatus: "Delivered",
    orderDate: "10 Mar 2026",
  },
  {
    id: "2",
    orderNumber: "#ORD-9082",
    customerName: "Karim Ahmed",
    companyName: "Ahmed Traders",
    totalAmount: "৳ 85,400",
    itemsCount: 3,
    paymentStatus: "Pending",
    deliveryStatus: "Processing",
    orderDate: "11 Mar 2026",
  },
  {
    id: "3",
    orderNumber: "#ORD-9083",
    customerName: "Tanvir Hossain",
    companyName: "Hossain Builders & Co.",
    totalAmount: "৳ 3,10,000",
    itemsCount: 12,
    paymentStatus: "Paid",
    deliveryStatus: "Processing",
    orderDate: "12 Mar 2026",
  },
  {
    id: "4",
    orderNumber: "#ORD-9084",
    customerName: "Nazmul Islam",
    companyName: "Islam Hardware",
    totalAmount: "৳ 45,000",
    itemsCount: 2,
    paymentStatus: "Failed",
    deliveryStatus: "Cancelled",
    orderDate: "09 Mar 2026",
  },

  // আরও order data এখানে যোগ করতে পারবেন
];

const Page: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [orders] = useState<Order[]>(initialOrders);

  // ================= Pagination States =================
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 20;

  // ================= GSAP Animation =================
  useGSAP(
    () => {
      gsap.from(".gsap-header", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.from(".gsap-stat-card", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".gsap-table-container", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        delay: 0.4,
        ease: "power3.out",
      });
    },
    { scope: containerRef },
  );

  // ================= Search & Filter =================
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.orderNumber
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      order.customerName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      order.companyName
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      order.deliveryStatus === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // ================= Pagination Logic =================
  const totalPages = Math.max(
    1,
    Math.ceil(filteredOrders.length / ordersPerPage),
  );

  const startIndex = (currentPage - 1) * ordersPerPage;
  const endIndex = startIndex + ordersPerPage;

  const paginatedOrders = filteredOrders.slice(
    startIndex,
    endIndex,
  );

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    // Smooth scroll to table
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Generate page numbers
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <div
      ref={containerRef}
      className="min-h-screen overflow-x-hidden"
    >
      <div className="mx-auto space-y-8">
        {/* ================= Page Header ================= */}
        <div className="gsap-header flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-800">
              All Dealer Orders
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Track, review, and manage all incoming orders and deliveries
              from authorized dealers.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-full bg-teal-100 px-3 py-1.5 text-xs font-semibold text-teal-800">
              Total Orders: {orders.length}
            </span>
          </div>
        </div>

        {/* ================= Statistics Cards ================= */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {/* Total Orders */}
          <div className="gsap-stat-card flex items-center gap-4 rounded-2xl border border-teal-100 bg-white p-5 shadow-sm">
            <div className="rounded-xl bg-teal-50 p-3 text-[#00D2B8]">
              <FiShoppingBag className="h-6 w-6" />
            </div>

            <div>
              <p className="text-xs font-medium text-slate-400">
                Total Orders
              </p>
              <h3 className="text-2xl font-bold text-slate-800">
                {orders.length}
              </h3>
            </div>
          </div>

          {/* Delivered */}
          <div className="gsap-stat-card flex items-center gap-4 rounded-2xl border border-teal-100 bg-white p-5 shadow-sm">
            <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
              <FiTruck className="h-6 w-6" />
            </div>

            <div>
              <p className="text-xs font-medium text-slate-400">
                Delivered
              </p>

              <h3 className="text-2xl font-bold text-slate-800">
                {
                  orders.filter(
                    (order) =>
                      order.deliveryStatus === "Delivered",
                  ).length
                }
              </h3>
            </div>
          </div>

          {/* Processing */}
          <div className="gsap-stat-card flex items-center gap-4 rounded-2xl border border-teal-100 bg-white p-5 shadow-sm">
            <div className="rounded-xl bg-amber-50 p-3 text-amber-600">
              <FiClock className="h-6 w-6" />
            </div>

            <div>
              <p className="text-xs font-medium text-slate-400">
                Processing
              </p>

              <h3 className="text-2xl font-bold text-slate-800">
                {
                  orders.filter(
                    (order) =>
                      order.deliveryStatus === "Processing",
                  ).length
                }
              </h3>
            </div>
          </div>
        </div>

        {/* ================= Search & Filter ================= */}
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-teal-100 bg-white p-4 shadow-sm sm:p-5 md:flex-row">
          {/* Search */}
          <div className="relative w-full md:w-96">
            <FiSearch className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Search by order ID, dealer name, or company..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="input input-bordered w-full border-slate-300 pl-10 text-sm focus:border-[#00D2B8] focus:outline-none"
            />
          </div>

          {/* Status Filter */}
          <div className="flex w-full items-center gap-2 overflow-x-auto pb-2 md:w-auto md:pb-0">
            <FiFilter className="mr-1 h-4 w-4 shrink-0 text-slate-400" />

            {[
              "All",
              "Processing",
              "Delivered",
              "Cancelled",
            ].map((status) => (
              <button
                key={status}
                onClick={() => {
                  setStatusFilter(status);
                  setCurrentPage(1);
                }}
                className={`rounded-lg px-4 py-1.5 text-xs font-medium transition-all ${
                  statusFilter === status
                    ? "bg-[#00D2B8] font-semibold text-slate-900 shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* ================= Orders Table ================= */}
        <div className="gsap-table-container overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-xl">
          <div className="overflow-x-auto">
            <table className="table w-full border-collapse text-left">
              {/* Table Head */}
              <thead>
                <tr className="border-b border-teal-100 bg-teal-50/50 text-xs uppercase tracking-wider text-slate-700">
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">
                    Dealer / Company
                  </th>
                  <th className="px-6 py-4">
                    Items & Amount
                  </th>
                  <th className="px-6 py-4">Payment</th>
                  <th className="px-6 py-4">
                    Delivery Status
                  </th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4 text-center">
                    Action
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-100 text-sm">
                {paginatedOrders.length > 0 ? (
                  paginatedOrders.map((order) => (
                    <tr
                      key={order.id}
                      className="transition-colors hover:bg-teal-50/20"
                    >
                      {/* Order Number */}
                      <td className="px-6 py-4 font-semibold text-[#00D2B8]">
                        {order.orderNumber}
                      </td>

                      {/* Dealer & Company */}
                      <td className="px-6 py-4">
                        <div className="font-semibold text-slate-800">
                          {order.customerName}
                        </div>
                        <div className="text-xs text-slate-400">
                          {order.companyName}
                        </div>
                      </td>

                      {/* Amount & Items */}
                      <td className="px-6 py-4">
                        <div className="font-semibold text-slate-800">
                          {order.totalAmount}
                        </div>
                        <div className="text-xs text-slate-400">
                          {order.itemsCount} items
                        </div>
                      </td>

                      {/* Payment */}
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                            order.paymentStatus === "Paid"
                              ? "border border-emerald-200 bg-emerald-50 text-emerald-600"
                              : order.paymentStatus === "Pending"
                                ? "border border-amber-200 bg-amber-50 text-amber-600"
                                : "border border-rose-200 bg-rose-50 text-rose-600"
                          }`}
                        >
                          {order.paymentStatus}
                        </span>
                      </td>

                      {/* Delivery Status */}
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                            order.deliveryStatus === "Delivered"
                              ? "border border-emerald-200 bg-emerald-50 text-emerald-600"
                              : order.deliveryStatus === "Processing"
                                ? "border border-teal-200 bg-teal-50 text-teal-700"
                                : "border border-rose-200 bg-rose-50 text-rose-600"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              order.deliveryStatus === "Delivered"
                                ? "bg-emerald-500"
                                : order.deliveryStatus ===
                                    "Processing"
                                  ? "bg-[#00D2B8]"
                                  : "bg-rose-500"
                            }`}
                          />

                          {order.deliveryStatus}
                        </span>
                      </td>

                      {/* Date */}
                      <td className="px-6 py-4 text-xs text-slate-500">
                        {order.orderDate}
                      </td>

                      {/* Action */}
                      <td className="px-6 py-4 text-center">
                        <button
                          title="View Order Details"
                          className="btn btn-square btn-sm btn-ghost text-slate-600 hover:bg-teal-50 hover:text-[#00D2B8]"
                          onClick={() =>
                            alert(
                              `Viewing details for order ${order.orderNumber}`,
                            )
                          }
                        >
                          <FiEye className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={7}
                      className="py-12 text-center text-slate-400"
                    >
                      No orders found matching your search criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* ================= Pagination ================= */}
          {filteredOrders.length > 0 && (
            <div className="flex flex-col gap-4 border-t border-teal-100 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              
              {/* Showing Results */}
              <p className="text-center text-sm text-slate-500 sm:text-left">
                Showing{" "}
                <span className="font-semibold text-slate-700">
                  {startIndex + 1}
                </span>{" "}
                to{" "}
                <span className="font-semibold text-slate-700">
                  {Math.min(
                    endIndex,
                    filteredOrders.length,
                  )}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-slate-700">
                  {filteredOrders.length}
                </span>{" "}
                orders
              </p>

              {/* Pagination Buttons */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-1.5">
                  {/* Previous */}
                  <button
                    onClick={() =>
                      handlePageChange(currentPage - 1)
                    }
                    disabled={currentPage === 1}
                    className="flex h-9 items-center gap-1 rounded-lg border border-teal-100 bg-white px-3 text-sm font-medium text-slate-600 transition hover:bg-teal-50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <FiChevronLeft />
                    <span className="hidden sm:inline">
                      Previous
                    </span>
                  </button>

                  {/* Page Numbers */}
                  {pageNumbers.map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`flex h-9 min-w-9 items-center justify-center rounded-lg px-3 text-sm font-medium transition ${
                        currentPage === page
                          ? "bg-[#00D2B8] text-slate-900 shadow-sm"
                          : "border border-teal-100 bg-white text-slate-600 hover:bg-teal-50"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  {/* Next */}
                  <button
                    onClick={() =>
                      handlePageChange(currentPage + 1)
                    }
                    disabled={currentPage === totalPages}
                    className="flex h-9 items-center gap-1 rounded-lg border border-teal-100 bg-white px-3 text-sm font-medium text-slate-600 transition hover:bg-teal-50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <span className="hidden sm:inline">
                      Next
                    </span>
                    <FiChevronRight />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;