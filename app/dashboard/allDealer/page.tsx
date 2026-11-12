

"use client";
import React from "react";

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { 
  FiSearch, 
  FiFilter, 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiEye, 
  FiTrash2, 
  FiUsers, 
  FiCheckCircle, 
  FiClock 
} from "react-icons/fi";

// Register GSAP plugin
gsap.registerPlugin(useGSAP);

// ডিলার ডাটার ইন্টারফেস
interface Dealer {
  id: string;
  name: string;
  companyName: string;
  email: string;
  phone: string;
  area: string;
  status: "Active" | "Pending" | "Suspended";
  joinedDate: string;
}

// ডেমো বা ডামি ডাটা (আপনার ব্যাকএন্ড API বা ডাটাবেস থেকে ডাটা এখানে ফেচ করবেন)
const initialDealers: Dealer[] = [
  {
    id: "1",
    name: "Rahim Uddin",
    companyName: "Uddin Enterprise",
    email: "rahim@enterprise.com",
    phone: "01711223344",
    area: "Gulshan, Dhaka",
    status: "Active",
    joinedDate: "12 Jan 2026",
  },
  {
    id: "2",
    name: "Karim Ahmed",
    companyName: "Ahmed Traders",
    email: "karim@traders.com",
    phone: "01822334455",
    area: "Agrabad, Chattogram",
    status: "Active",
    joinedDate: "18 Feb 2026",
  },
  {
    id: "3",
    name: "Tanvir Hossain",
    companyName: "Hossain Builders & Co.",
    email: "tanvir@builders.com",
    phone: "01933445566",
    area: "Zindabazar, Sylhet",
    status: "Pending",
    joinedDate: "02 Mar 2026",
  },
  {
    id: "4",
    name: "Nazmul Islam",
    companyName: "Islam Hardware",
    email: "nazmul@hardware.com",
    phone: "01644556677",
    area: "Shaheb Bazar, Rajshahi",
    status: "Active",
    joinedDate: "20 Jan 2026",
  },
];

const page : React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [dealers, setDealers] = useState<Dealer[]>(initialDealers);

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

  // ডিলার রিমুভ করার ফাংশন (প্রয়োজন অনুযায়ী ব্যাকএন্ড কল করতে পারেন)
  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this dealer?")) {
      setDealers(dealers.filter((dealer) => dealer.id !== id));
    }
  };

  // সার্চ এবং ফিল্টার লজিক
  const filteredDealers = dealers.filter((dealer) => {
    const matchesSearch =
      dealer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dealer.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dealer.area.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "All" || dealer.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#F0FDF9]/60 py-10 px-4 sm:px-6 lg:px-8 overflow-x-hidden"
    >
      <div className=" mx-auto space-y-8">
        
        {/* Page Header */}
        <div className="gsap-header flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-800">
              All Authorized Dealers
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Manage, monitor, and view all registered dealers and their regional operations.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold bg-teal-100 text-teal-800 px-3 py-1.5 rounded-full">
              Total Dealers: {dealers.length}
            </span>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="gsap-stat-card bg-white p-5 rounded-2xl border border-teal-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-teal-50 text-[#00D2B8] rounded-xl">
              <FiUsers className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Total Registered</p>
              <h3 className="text-2xl font-bold text-slate-800">{dealers.length}</h3>
            </div>
          </div>

          <div className="gsap-stat-card bg-white p-5 rounded-2xl border border-teal-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <FiCheckCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Active Dealers</p>
              <h3 className="text-2xl font-bold text-slate-800">
                {dealers.filter(d => d.status === "Active").length}
              </h3>
            </div>
          </div>

          <div className="gsap-stat-card bg-white p-5 rounded-2xl border border-teal-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
              <FiClock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Pending Requests</p>
              <h3 className="text-2xl font-bold text-slate-800">
                {dealers.filter(d => d.status === "Pending").length}
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
              placeholder="Search by name, company, or area..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input input-bordered w-full pl-10 border-slate-300 focus:border-[#00D2B8] focus:outline-none text-sm"
            />
          </div>

          {/* Status Filter Buttons */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <FiFilter className="text-slate-400 w-4 h-4 shrink-0 mr-1" />
            {["All", "Active", "Pending"].map((status) => (
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

        {/* Dealers Table Container */}
        <div className="gsap-table-container bg-white rounded-2xl border border-teal-100 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full text-left border-collapse">
              <thead>
                <tr className="bg-teal-50/50 text-slate-700 text-xs uppercase tracking-wider border-b border-teal-100">
                  <th className="py-4 px-6">Dealer / Company</th>
                  <th className="py-4 px-6">Contact Info</th>
                  <th className="py-4 px-6">Interested Area</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6">Joined Date</th>
                  <th className="py-4 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {filteredDealers.length > 0 ? (
                  filteredDealers.map((dealer) => (
                    <tr key={dealer.id} className="hover:bg-teal-50/20 transition-colors">
                      {/* Name & Company */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-teal-100 text-[#00D2B8] font-bold flex items-center justify-center shrink-0">
                            {dealer.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-semibold text-slate-800">{dealer.name}</div>
                            <div className="text-xs text-slate-400">{dealer.companyName}</div>
                          </div>
                        </div>
                      </td>

                      {/* Contact Info */}
                      <td className="py-4 px-6">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 text-xs text-slate-600">
                            <FiPhone className="w-3.5 h-3.5 text-[#00D2B8]" />
                            {dealer.phone}
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-slate-400">
                            <FiMail className="w-3.5 h-3.5 text-slate-400" />
                            {dealer.email}
                          </div>
                        </div>
                      </td>

                      {/* Area */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-1.5 text-slate-600 text-xs">
                          <FiMapPin className="w-3.5 h-3.5 text-[#00D2B8] shrink-0" />
                          <span className="truncate max-w-[160px]">{dealer.area}</span>
                        </div>
                      </td>

                      {/* Status */}
                      <td className="py-4 px-6">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[11px] font-semibold inline-flex items-center gap-1 ${
                            dealer.status === "Active"
                              ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                              : dealer.status === "Pending"
                              ? "bg-amber-50 text-amber-600 border border-amber-200"
                              : "bg-rose-50 text-rose-600 border border-rose-200"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              dealer.status === "Active"
                                ? "bg-emerald-500"
                                : dealer.status === "Pending"
                                ? "bg-amber-500"
                                : "bg-rose-500"
                            }`}
                          ></span>
                          {dealer.status}
                        </span>
                      </td>

                      {/* Joined Date */}
                      <td className="py-4 px-6 text-xs text-slate-500">
                        {dealer.joinedDate}
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            title="View Details"
                            className="btn btn-square btn-sm btn-ghost hover:bg-teal-50 text-slate-600 hover:text-[#00D2B8]"
                            onClick={() => alert(`Viewing details for ${dealer.name}`)}
                          >
                            <FiEye className="w-4 h-4" />
                          </button>
                          <button
                            title="Delete Dealer"
                            className="btn btn-square btn-sm btn-ghost hover:bg-rose-50 text-slate-400 hover:text-rose-500"
                            onClick={() => handleDelete(dealer.id)}
                          >
                            <FiTrash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center py-12 text-slate-400">
                      No dealers found matching your search criteria.
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
