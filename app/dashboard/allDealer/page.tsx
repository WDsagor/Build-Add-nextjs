"use client";

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
  FiClock,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

gsap.registerPlugin(useGSAP);

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

// Demo data - Replace with your API data
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

const Page: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [dealers, setDealers] =
    useState<Dealer[]>(initialDealers);

  // ================= Pagination =================
  const [currentPage, setCurrentPage] = useState(1);
  const dealersPerPage = 20;

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

  // ================= Delete Dealer =================
  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this dealer?")) {
      setDealers((prevDealers) =>
        prevDealers.filter((dealer) => dealer.id !== id),
      );

      // যদি last item delete করার পরে current page empty হয়ে যায়
      const remainingDealers = dealers.filter(
        (dealer) => dealer.id !== id,
      );

      const remainingFilteredDealers = remainingDealers.filter(
        (dealer) => {
          const matchesSearch =
            dealer.name
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            dealer.companyName
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            dealer.area
              .toLowerCase()
              .includes(searchTerm.toLowerCase());

          const matchesStatus =
            statusFilter === "All" ||
            dealer.status === statusFilter;

          return matchesSearch && matchesStatus;
        },
      );

      const newTotalPages = Math.max(
        1,
        Math.ceil(
          remainingFilteredDealers.length / dealersPerPage,
        ),
      );

      if (currentPage > newTotalPages) {
        setCurrentPage(newTotalPages);
      }
    }
  };

  // ================= Search & Filter =================
  const filteredDealers = dealers.filter((dealer) => {
    const matchesSearch =
      dealer.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      dealer.companyName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      dealer.area
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      dealer.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // ================= Pagination Logic =================
  const totalPages = Math.max(
    1,
    Math.ceil(filteredDealers.length / dealersPerPage),
  );

  const startIndex = (currentPage - 1) * dealersPerPage;
  const endIndex = startIndex + dealersPerPage;

  const paginatedDealers = filteredDealers.slice(
    startIndex,
    endIndex,
  );

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    // Table-এর উপরে smooth scroll
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <div
      ref={containerRef}
      className="min-h-screen overflow-x-hidden py-10"
    >
      <div className="mx-auto space-y-8">
        {/* ================= Page Header ================= */}
        <div className="gsap-header flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-800">
              All Authorized Dealers
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage, monitor, and view all registered dealers and their
              regional operations.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-full bg-teal-100 px-3 py-1.5 text-xs font-semibold text-teal-800">
              Total Dealers: {dealers.length}
            </span>
          </div>
        </div>

        {/* ================= Statistics Cards ================= */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {/* Total */}
          <div className="gsap-stat-card flex items-center gap-4 rounded-2xl border border-teal-100 bg-white p-5 shadow-sm">
            <div className="rounded-xl bg-teal-50 p-3 text-[#00D2B8]">
              <FiUsers className="h-6 w-6" />
            </div>

            <div>
              <p className="text-xs font-medium text-slate-400">
                Total Registered
              </p>
              <h3 className="text-2xl font-bold text-slate-800">
                {dealers.length}
              </h3>
            </div>
          </div>

          {/* Active */}
          <div className="gsap-stat-card flex items-center gap-4 rounded-2xl border border-teal-100 bg-white p-5 shadow-sm">
            <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
              <FiCheckCircle className="h-6 w-6" />
            </div>

            <div>
              <p className="text-xs font-medium text-slate-400">
                Active Dealers
              </p>
              <h3 className="text-2xl font-bold text-slate-800">
                {
                  dealers.filter(
                    (dealer) => dealer.status === "Active",
                  ).length
                }
              </h3>
            </div>
          </div>

          {/* Pending */}
          <div className="gsap-stat-card flex items-center gap-4 rounded-2xl border border-teal-100 bg-white p-5 shadow-sm">
            <div className="rounded-xl bg-amber-50 p-3 text-amber-600">
              <FiClock className="h-6 w-6" />
            </div>

            <div>
              <p className="text-xs font-medium text-slate-400">
                Pending Requests
              </p>
              <h3 className="text-2xl font-bold text-slate-800">
                {
                  dealers.filter(
                    (dealer) => dealer.status === "Pending",
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
              placeholder="Search by name, company, or area..."
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

            {["All", "Active", "Pending", "Suspended"].map(
              (status) => (
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
              ),
            )}
          </div>
        </div>

        {/* ================= Dealers Table ================= */}
        <div className="gsap-table-container overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-xl">
          <div className="overflow-x-auto">
            <table className="table w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-teal-100 bg-teal-50/50 text-xs uppercase tracking-wider text-slate-700">
                  <th className="px-6 py-4">
                    Dealer / Company
                  </th>
                  <th className="px-6 py-4">
                    Contact Info
                  </th>
                  <th className="px-6 py-4">
                    Interested Area
                  </th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">
                    Joined Date
                  </th>
                  <th className="px-6 py-4 text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-sm">
                {paginatedDealers.length > 0 ? (
                  paginatedDealers.map((dealer) => (
                    <tr
                      key={dealer.id}
                      className="transition-colors hover:bg-teal-50/20"
                    >
                      {/* Name & Company */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100 font-bold text-[#00D2B8]">
                            {dealer.name.charAt(0)}
                          </div>

                          <div>
                            <div className="font-semibold text-slate-800">
                              {dealer.name}
                            </div>
                            <div className="text-xs text-slate-400">
                              {dealer.companyName}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Contact */}
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 text-xs text-slate-600">
                            <FiPhone className="h-3.5 w-3.5 text-[#00D2B8]" />
                            {dealer.phone}
                          </div>

                          <div className="flex items-center gap-1.5 text-xs text-slate-400">
                            <FiMail className="h-3.5 w-3.5 text-slate-400" />
                            {dealer.email}
                          </div>
                        </div>
                      </td>

                      {/* Area */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5 text-xs text-slate-600">
                          <FiMapPin className="h-3.5 w-3.5 shrink-0 text-[#00D2B8]" />
                          <span className="max-w-[160px] truncate">
                            {dealer.area}
                          </span>
                        </div>
                      </td>

                      {/* Status */}
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                            dealer.status === "Active"
                              ? "border border-emerald-200 bg-emerald-50 text-emerald-600"
                              : dealer.status === "Pending"
                                ? "border border-amber-200 bg-amber-50 text-amber-600"
                                : "border border-rose-200 bg-rose-50 text-rose-600"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              dealer.status === "Active"
                                ? "bg-emerald-500"
                                : dealer.status === "Pending"
                                  ? "bg-amber-500"
                                  : "bg-rose-500"
                            }`}
                          />

                          {dealer.status}
                        </span>
                      </td>

                      {/* Joined Date */}
                      <td className="px-6 py-4 text-xs text-slate-500">
                        {dealer.joinedDate}
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            title="View Details"
                            className="btn btn-square btn-sm btn-ghost text-slate-600 hover:bg-teal-50 hover:text-[#00D2B8]"
                            onClick={() =>
                              alert(
                                `Viewing details for ${dealer.name}`,
                              )
                            }
                          >
                            <FiEye className="h-4 w-4" />
                          </button>

                          <button
                            title="Delete Dealer"
                            className="btn btn-square btn-sm btn-ghost text-slate-400 hover:bg-rose-50 hover:text-rose-500"
                            onClick={() =>
                              handleDelete(dealer.id)
                            }
                          >
                            <FiTrash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className="py-12 text-center text-slate-400"
                    >
                      No dealers found matching your search criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* ================= Pagination ================= */}
          {filteredDealers.length > 0 && (
            <div className="flex flex-col gap-4 border-t border-teal-100 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Showing Info */}
              <p className="text-center text-sm text-slate-500 sm:text-left">
                Showing{" "}
                <span className="font-semibold text-slate-700">
                  {startIndex + 1}
                </span>{" "}
                to{" "}
                <span className="font-semibold text-slate-700">
                  {Math.min(
                    endIndex,
                    filteredDealers.length,
                  )}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-slate-700">
                  {filteredDealers.length}
                </span>{" "}
                dealers
              </p>

              {/* Pagination Controls */}
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