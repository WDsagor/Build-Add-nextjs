"use client";

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { 
  FiSearch, 
  FiFilter, 
  FiEye, 
  FiShoppingBag, 
  FiCheckCircle, 
  FiClock, 
  FiDollarSign, 
  FiTruck 
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

// ডেমো বা ডামি ডাটা (আপনার ব্যাকএন্ড API থেকে ডাটা এখানে ফেচ করবেন)
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
];

const page: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [orders] = useState<Order[]>(initialOrders);

  // GSAP Animation
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
    { scope: containerRef }
  );

  // সার্চ এবং ফিল্টার লজিক
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.companyName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "All" || order.deliveryStatus === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#F0FDF9]/60 py-10 px-4 sm:px-6 lg:px-8 overflow-x-hidden"
    >
      <div className="mx-auto space-y-8">
        
        {/* Page Header */}
        <div className="gsap-header flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-800">
              All Dealer Orders
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Track, review, and manage all incoming orders and deliveries from authorized dealers.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold bg-teal-100 text-teal-800 px-3 py-1.5 rounded-full">
              Total Orders: {orders.length}
            </span>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="gsap-stat-card bg-white p-5 rounded-2xl border border-teal-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-teal-50 text-[#00D2B8] rounded-xl">
              <FiShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Total Orders</p>
              <h3 className="text-2xl font-bold text-slate-800">{orders.length}</h3>
            </div>
          </div>

          <div className="gsap-stat-card bg-white p-5 rounded-2xl border border-teal-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <FiTruck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Delivered</p>
              <h3 className="text-2xl font-bold text-slate-800">
                {orders.filter(o => o.deliveryStatus === "Delivered").length}
              </h3>
            </div>
          </div>

          <div className="gsap-stat-card bg-white p-5 rounded-2xl border border-teal-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
              <FiClock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Processing</p>
              <h3 className="text-2xl font-bold text-slate-800">
                {orders.filter(o => o.deliveryStatus === "Processing").length}
              </h3>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-teal-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by order ID, dealer name, or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input input-bordered w-full pl-10 border-slate-300 focus:border-[#00D2B8] focus:outline-none text-sm"
            />
          </div>

          {/* Status Filter Buttons */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <FiFilter className="text-slate-400 w-4 h-4 shrink-0 mr-1" />
            {["All", "Processing", "Delivered", "Cancelled"].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  statusFilter === status
                    ? "bg-[#00D2B8] text-slate-900 shadow-sm font-semibold"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Orders Table Container */}
        <div className="gsap-table-container bg-white rounded-2xl border border-teal-100 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full text-left border-collapse">
              <thead>
                <tr className="bg-teal-50/50 text-slate-700 text-xs uppercase tracking-wider border-b border-teal-100">
                  <th className="py-4 px-6">Order ID</th>
                  <th className="py-4 px-6">Dealer / Company</th>
                  <th className="py-4 px-6">Items & Amount</th>
                  <th className="py-4 px-6">Payment</th>
                  <th className="py-4 px-6">Delivery Status</th>
                  <th className="py-4 px-6">Date</th>
                  <th className="py-4 px-6 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-teal-50/20 transition-colors">
                      {/* Order Number */}
                      <td className="py-4 px-6 font-semibold text-[#00D2B8]">
                        {order.orderNumber}
                      </td>

                      {/* Dealer & Company */}
                      <td className="py-4 px-6">
                        <div className="font-semibold text-slate-800">{order.customerName}</div>
                        <div className="text-xs text-slate-400">{order.companyName}</div>
                      </td>

                      {/* Amount & Items */}
                      <td className="py-4 px-6">
                        <div className="font-semibold text-slate-800">{order.totalAmount}</div>
                        <div className="text-xs text-slate-400">{order.itemsCount} items</div>
                      </td>

                      {/* Payment Status */}
                      <td className="py-4 px-6">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[11px] font-semibold inline-flex items-center gap-1 ${
                            order.paymentStatus === "Paid"
                              ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                              : order.paymentStatus === "Pending"
                              ? "bg-amber-50 text-amber-600 border border-amber-200"
                              : "bg-rose-50 text-rose-600 border border-rose-200"
                          }`}
                        >
                          {order.paymentStatus}
                        </span>
                      </td>

                      {/* Delivery Status */}
                      <td className="py-4 px-6">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[11px] font-semibold inline-flex items-center gap-1 ${
                            order.deliveryStatus === "Delivered"
                              ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                              : order.deliveryStatus === "Processing"
                              ? "bg-teal-50 text-teal-700 border border-teal-200"
                              : "bg-rose-50 text-rose-600 border border-rose-200"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              order.deliveryStatus === "Delivered"
                                ? "bg-emerald-500"
                                : order.deliveryStatus === "Processing"
                                ? "bg-[#00D2B8]"
                                : "bg-rose-500"
                            }`}
                          ></span>
                          {order.deliveryStatus}
                        </span>
                      </td>

                      {/* Date */}
                      <td className="py-4 px-6 text-xs text-slate-500">
                        {order.orderDate}
                      </td>

                      {/* Action */}
                      <td className="py-4 px-6 text-center">
                        <button
                          title="View Order Details"
                          className="btn btn-square btn-sm btn-ghost hover:bg-teal-50 text-slate-600 hover:text-[#00D2B8]"
                          onClick={() => alert(`Viewing details for order ${order.orderNumber}`)}
                        >
                          <FiEye className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-slate-400">
                      No orders found matching your search criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default page;