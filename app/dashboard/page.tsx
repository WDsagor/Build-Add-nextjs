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
import OrderDetailsModal, { Order } from "@/components/allOrders/OrderDetailsModal";


gsap.registerPlugin(useGSAP);

// ================= DEMO DATA =================
// API data এলে এই data replace করতে পারবেন

const initialOrders: Order[] = [
  {
    id: "1",
    orderNumber: "#ORD-9081",
    customerName: "Rahim Uddin",
    companyName: "Uddin Enterprise",
    email: "rahim@uddinenterprise.com",
    phone: "01711223344",
    address: "House 12, Road 5, Gulshan, Dhaka, Bangladesh",
    paymentStatus: "Paid",
    deliveryStatus: "Delivered",
    orderDate: "10 Mar 2026",
    products: [
      {
        id: "p1",
        name: "RUST RLD",
        size: "4L",
        quantity: 2,
        unitPrice: 800,
      },
      {
        id: "p2",
        name: "RUST RLD",
        size: "2L",
        quantity: 5,
        unitPrice: 200,
      },
      {
        id: "p3",
        name: "RUST RLD",
        size: "104L",
        quantity: 5,
        unitPrice: 1800,
      },
    ],
  },
  {
    id: "2",
    orderNumber: "#ORD-9082",
    customerName: "Karim Ahmed",
    companyName: "Ahmed Traders",
    email: "karim@ahmedtraders.com",
    phone: "01822334455",
    address: "Agrabad Commercial Area, Chattogram, Bangladesh",
    paymentStatus: "Pending",
    deliveryStatus: "Processing",
    orderDate: "11 Mar 2026",
    products: [
      {
        id: "p4",
        name: "Super Paint",
        size: "4L",
        quantity: 3,
        unitPrice: 1200,
      },
      {
        id: "p5",
        name: "Wall Primer",
        size: "1L",
        quantity: 2,
        unitPrice: 450,
      },
    ],
  },
  {
    id: "3",
    orderNumber: "#ORD-9083",
    customerName: "Tanvir Hossain",
    companyName: "Hossain Builders & Co.",
    email: "tanvir@hossainbuilders.com",
    phone: "01933445566",
    address: "Zindabazar, Sylhet, Bangladesh",
    paymentStatus: "Paid",
    deliveryStatus: "Processing",
    orderDate: "12 Mar 2026",
    products: [
      {
        id: "p6",
        name: "Wall Paint Premium",
        size: "20L",
        quantity: 4,
        unitPrice: 3500,
      },
      {
        id: "p7",
        name: "RUST RLD",
        size: "4L",
        quantity: 2,
        unitPrice: 800,
      },
    ],
  },
  {
    id: "4",
    orderNumber: "#ORD-9084",
    customerName: "Nazmul Islam",
    companyName: "Islam Hardware",
    email: "nazmul@islamhardware.com",
    phone: "01644556677",
    address: "Shaheb Bazar, Rajshahi, Bangladesh",
    paymentStatus: "Failed",
    deliveryStatus: "Cancelled",
    orderDate: "09 Mar 2026",
    products: [
      {
        id: "p8",
        name: "RUST RLD",
        size: "4L",
        quantity: 1,
        unitPrice: 800,
      },
      {
        id: "p9",
        name: "Metal Primer",
        size: "2L",
        quantity: 3,
        unitPrice: 650,
      },
    ],
  },
];

// ================= HELPER FUNCTION =================


const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    minimumFractionDigits: 2,
  }).format(amount);
};

// ================= PAGE COMPONENT =================

const Page: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Orders state
  const [orders, setOrders] =
    useState<Order[]>(initialOrders);

  // Selected order for modal
  const [selectedOrder, setSelectedOrder] =
    useState<Order | null>(null);

  // ================= PAGINATION =================

  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 20;

  // ================= GSAP PAGE ANIMATION =================

  useGSAP(
    () => {
      const timeline = gsap.timeline();

      timeline
        .from(".gsap-header", {
          y: -20,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        })
        .from(
          ".gsap-stat-card",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.2",
        )
        .from(
          ".gsap-filter",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          ".gsap-table-container",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.2",
        );
    },
    { scope: containerRef },
  );

  // ================= ORDER TOTAL =================

  const getOrderTotal = (order: Order) => {
    return order.products.reduce(
      (total, product) =>
        total + product.quantity * product.unitPrice,
      0,
    );
  };

  // ================= TOTAL ITEMS =================

  const getItemsCount = (order: Order) => {
    return order.products.reduce(
      (total, product) => total + product.quantity,
      0,
    );
  };

  // ================= SEARCH & FILTER =================

  const filteredOrders = orders.filter((order) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      order.orderNumber.toLowerCase().includes(search) ||
      order.customerName.toLowerCase().includes(search) ||
      order.companyName.toLowerCase().includes(search);

    const matchesStatus =
      statusFilter === "All" ||
      order.deliveryStatus === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // ================= PAGINATION LOGIC =================

  const totalPages = Math.max(
    1,
    Math.ceil(filteredOrders.length / ordersPerPage),
  );

  const startIndex =
    (currentPage - 1) * ordersPerPage;

  const endIndex = startIndex + ordersPerPage;

  const paginatedOrders = filteredOrders.slice(
    startIndex,
    endIndex,
  );

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  // ================= UPDATE ORDER FROM MODAL =================

  const handleUpdateOrder = (
    updatedOrder: Order,
  ) => {
    setOrders((previousOrders) =>
      previousOrders.map((order) =>
        order.id === updatedOrder.id
          ? updatedOrder
          : order,
      ),
    );

    setSelectedOrder(null);
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen overflow-x-hidden"
    >
      <div className="mx-auto space-y-8">
        {/* ================= PAGE HEADER ================= */}

        <div className="gsap-header flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-800">
              All Dealer Orders
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Track, review, and manage all incoming orders and
              deliveries from authorized dealers.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-full bg-teal-100 px-3 py-1.5 text-xs font-semibold text-teal-800">
              Total Orders: {orders.length}
            </span>
          </div>
        </div>

        {/* ================= STATISTICS CARDS ================= */}

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
                      order.deliveryStatus ===
                      "Delivered",
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
                      order.deliveryStatus ===
                      "Processing",
                  ).length
                }
              </h3>
            </div>
          </div>
        </div>

        {/* ================= SEARCH & FILTER ================= */}

        <div className="gsap-filter flex flex-col items-center justify-between gap-4 rounded-2xl border border-teal-100 bg-white p-4 shadow-sm sm:p-5 md:flex-row">
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

        {/* ================= ORDERS TABLE ================= */}

        <div className="gsap-table-container overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-xl">
          <div className="overflow-x-auto">
            <table className="table w-full border-collapse text-left">
              {/* TABLE HEAD */}

              <thead>
                <tr className="border-b border-teal-100 bg-teal-50/50 text-xs uppercase tracking-wider text-slate-700">
                  <th className="px-6 py-4">Order ID</th>

                  <th className="px-6 py-4">
                    Dealer / Company
                  </th>

                  <th className="px-6 py-4">
                    Items & Amount
                  </th>

                  <th className="px-6 py-4">
                    Payment
                  </th>

                  <th className="px-6 py-4">
                    Delivery Status
                  </th>

                  <th className="px-6 py-4">
                    Date
                  </th>

                  <th className="px-6 py-4 text-center">
                    Action
                  </th>
                </tr>
              </thead>

              {/* TABLE BODY */}

              <tbody className="divide-y divide-slate-100 text-sm">
                {paginatedOrders.length > 0 ? (
                  paginatedOrders.map((order) => {
                    const total =
                      getOrderTotal(order);

                    const itemsCount =
                      getItemsCount(order);

                    return (
                      <tr
                        key={order.id}
                        className="transition-colors hover:bg-teal-50/20"
                      >
                        {/* Order Number */}

                        <td className="px-6 py-4 font-semibold text-[#00D2B8]">
                          {order.orderNumber}
                        </td>

                        {/* Dealer */}

                        <td className="px-6 py-4">
                          <div className="font-semibold text-slate-800">
                            {order.customerName}
                          </div>

                          <div className="text-xs text-slate-400">
                            {order.companyName}
                          </div>
                        </td>

                        {/* Amount */}

                        <td className="px-6 py-4">
                          <div className="font-semibold text-slate-800">
                            {formatCurrency(total)}
                          </div>

                          <div className="text-xs text-slate-400">
                            {itemsCount} items
                          </div>
                        </td>

                        {/* Payment */}

                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                              order.paymentStatus ===
                              "Paid"
                                ? "border border-emerald-200 bg-emerald-50 text-emerald-600"
                                : order.paymentStatus ===
                                    "Pending"
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
                              order.deliveryStatus ===
                              "Delivered"
                                ? "border border-emerald-200 bg-emerald-50 text-emerald-600"
                                : order.deliveryStatus ===
                                    "Processing"
                                  ? "border border-teal-200 bg-teal-50 text-teal-700"
                                  : "border border-rose-200 bg-rose-50 text-rose-600"
                            }`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                order.deliveryStatus ===
                                "Delivered"
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

                        {/* ACTION - OPEN MODAL */}

                        <td className="px-6 py-4 text-center">
                          <button
                            title="View Order Details"
                            className="btn btn-square btn-sm btn-ghost text-slate-600 hover:bg-teal-50 hover:text-[#00D2B8]"
                            onClick={() =>
                              setSelectedOrder(order)
                            }
                          >
                            <FiEye className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })
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

          {/* ================= PAGINATION ================= */}

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
                      handlePageChange(
                        currentPage - 1,
                      )
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
                      onClick={() =>
                        handlePageChange(page)
                      }
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
                      handlePageChange(
                        currentPage + 1,
                      )
                    }
                    disabled={
                      currentPage === totalPages
                    }
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

      {/* ================= ORDER DETAILS MODAL ================= */}

      {selectedOrder && (
        <OrderDetailsModal
          order={selectedOrder}
          onClose={() =>
            setSelectedOrder(null)
          }
          onUpdateOrder={handleUpdateOrder}
        />
      )}
    </div>
  );
};

export default Page;