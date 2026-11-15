"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  FiX,
  FiDownload,
  FiMinus,
  FiPlus,
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiPackage,
  FiCheck,
  FiShoppingBag,
  FiTruck,
  FiCreditCard,
} from "react-icons/fi";

// ================= TYPES =================

export interface Product {
  id: string;
  name: string;
  size: string;
  quantity: number;
  unitPrice: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  companyName: string;
  email: string;
  phone: string;
  address: string;
  paymentStatus: "Paid" | "Pending" | "Failed";
  deliveryStatus: "Processing" | "Delivered" | "Cancelled";
  orderDate: string;
  products: Product[];
}

interface OrderModalProps {
  order: Order;
  onClose: () => void;
  onUpdateOrder: (updatedOrder: Order) => void;
}

// ================= HELPERS =================

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    minimumFractionDigits: 2,
  }).format(amount);
};

const numberToWords = (num: number): string => {
  if (num === 0) return "Zero Taka Only";

  const ones = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];

  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  const belowHundred = (number: number) => {
    if (number < 20) return ones[number];

    return `${tens[Math.floor(number / 10)]}${
      number % 10 ? ` ${ones[number % 10]}` : ""
    }`;
  };

  const belowThousand = (number: number) => {
    if (number < 100) return belowHundred(number);

    return `${ones[Math.floor(number / 100)]} Hundred${
      number % 100 ? ` ${belowHundred(number % 100)}` : ""
    }`;
  };

  let remaining = Math.floor(num);
  let result = "";

  if (remaining >= 10000000) {
    result += `${belowThousand(
      Math.floor(remaining / 10000000),
    )} Crore `;
    remaining %= 10000000;
  }

  if (remaining >= 100000) {
    result += `${belowThousand(
      Math.floor(remaining / 100000),
    )} Lakh `;
    remaining %= 100000;
  }

  if (remaining >= 1000) {
    result += `${belowThousand(
      Math.floor(remaining / 1000),
    )} Thousand `;
    remaining %= 1000;
  }

  if (remaining > 0) {
    result += belowThousand(remaining);
  }

  return `${result.trim()} Taka Only`;
};

// ================= COMPONENT =================

const OrderDetailsModal = ({
  order,
  onClose,
  onUpdateOrder,
}: OrderModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [products, setProducts] = useState<Product[]>(order.products);
  const [status, setStatus] = useState(order.deliveryStatus);

  // ================= GSAP ANIMATION =================

  useGSAP(
    () => {
      const timeline = gsap.timeline();

      timeline
        .fromTo(
          modalRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.25,
            ease: "power2.out",
          },
        )
        .fromTo(
          contentRef.current,
          {
            opacity: 0,
            y: 35,
            scale: 0.98,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.1",
        )
        .from(
          ".modal-section",
          {
            opacity: 0,
            y: 15,
            duration: 0.35,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.2",
        );
    },
    { scope: modalRef },
  );

  // ================= CALCULATIONS =================

  const grandTotal = products.reduce(
    (total, product) => total + product.quantity * product.unitPrice,
    0,
  );

  const totalItems = products.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  // ================= QUANTITY =================

  const updateQuantity = (
    productId: string,
    action: "increase" | "decrease",
  ) => {
    setProducts((previousProducts) =>
      previousProducts.map((product) => {
        if (product.id !== productId) return product;

        return {
          ...product,
          quantity:
            action === "increase"
              ? product.quantity + 1
              : Math.max(1, product.quantity - 1),
        };
      }),
    );
  };

  // ================= CLOSE =================

  const handleClose = () => {
    const timeline = gsap.timeline({
      onComplete: onClose,
    });

    timeline
      .to(contentRef.current, {
        opacity: 0,
        y: 20,
        scale: 0.985,
        duration: 0.2,
        ease: "power2.in",
      })
      .to(
        modalRef.current,
        {
          opacity: 0,
          duration: 0.15,
        },
        "-=0.05",
      );
  };

  // ================= SAVE =================

  const handleSave = () => {
    onUpdateOrder({
      ...order,
      products,
      deliveryStatus: status,
    });

    handleClose();
  };

  return (
    <div
      ref={modalRef}
      onClick={handleClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-3 backdrop-blur-sm sm:p-5"
    >
      <div
        ref={contentRef}
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-5xl overflow-hidden rounded-2xl border border-teal-100 bg-slate-50 shadow-2xl"
      >
        {/* ================= HEADER ================= */}

        <div className="flex items-center justify-between border-b border-teal-100 bg-white px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-[#00BFA5]">
              <FiShoppingBag className="h-4 w-4" />
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-800 sm:text-lg">
                Order Details
              </h2>

              <p className="mt-0.5 text-[11px] text-slate-400">
                {order.orderNumber}
                <span className="mx-1.5">•</span>
                {order.orderDate}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              title="Download or Print Order"
              className="flex h-9 items-center gap-2 rounded-lg bg-teal-50 px-3 text-xs font-semibold text-[#009E89] transition hover:bg-[#00D2B8] hover:text-slate-900"
            >
              <FiDownload className="h-4 w-4" />
              <span className="hidden sm:inline">Download</span>
            </button>

            <button
              onClick={handleClose}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition hover:bg-rose-50 hover:text-rose-500"
            >
              <FiX className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ================= BODY ================= */}

        <div className="max-h-[calc(92vh-125px)] overflow-y-auto p-3 sm:p-5">
          {/* ================= TOP INFO ================= */}

          <div className="grid gap-4 lg:grid-cols-3">
            {/* CUSTOMER */}

            <div className="modal-section rounded-xl border border-slate-200 bg-white p-4 lg:col-span-2">
              <div className="mb-4 flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-[#00BFA5]">
                  <FiUser className="h-4 w-4" />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-700">
                    Dealer Information
                  </h3>
                  <p className="text-[10px] text-slate-400">
                    Customer and contact details
                  </p>
                </div>
              </div>

              <div className="grid gap-x-6 gap-y-4 text-xs sm:grid-cols-2">
                <div>
                  <p className="text-[10px] text-slate-400">Customer</p>
                  <p className="mt-1 font-semibold text-slate-700">
                    {order.customerName}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] text-slate-400">Company</p>
                  <p className="mt-1 font-semibold text-slate-700">
                    {order.companyName}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <FiMail className="h-3.5 w-3.5 shrink-0 text-[#00BFA5]" />
                  <span className="truncate text-xs text-slate-600">
                    {order.email}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <FiPhone className="h-3.5 w-3.5 shrink-0 text-[#00BFA5]" />
                  <span className="text-xs text-slate-600">
                    {order.phone}
                  </span>
                </div>

                <div className="flex items-start gap-2 sm:col-span-2">
                  <FiMapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#00BFA5]" />
                  <span className="text-xs leading-relaxed text-slate-600">
                    {order.address}
                  </span>
                </div>
              </div>
            </div>

            {/* STATUS */}

            <div className="modal-section rounded-xl border border-teal-100 bg-white p-4">
              <div className="mb-4 flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-[#00BFA5]">
                  <FiTruck className="h-4 w-4" />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-700">
                    Order Status
                  </h3>
                  <p className="text-[10px] text-slate-400">
                    Manage delivery status
                  </p>
                </div>
              </div>

              <label className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                Delivery Status
              </label>

              <select
                value={status}
                onChange={(event) =>
                  setStatus(
                    event.target.value as Order["deliveryStatus"],
                  )
                }
                className="select select-sm mt-1.5 w-full border-slate-200 bg-slate-50 text-xs focus:border-[#00D2B8] focus:outline-none"
              >
                <option value="Processing">Processing</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>

              <div className="mt-4 space-y-2.5 border-t border-slate-100 pt-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <FiCreditCard className="h-3.5 w-3.5" />
                    Payment
                  </span>

                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      order.paymentStatus === "Paid"
                        ? "bg-emerald-50 text-emerald-600"
                        : order.paymentStatus === "Pending"
                          ? "bg-amber-50 text-amber-600"
                          : "bg-rose-50 text-rose-600"
                    }`}
                  >
                    {order.paymentStatus}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Total Items</span>
                  <span className="font-bold text-slate-700">
                    {totalItems} pcs
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= PRODUCTS ================= */}

          <div className="modal-section mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-[#00BFA5]">
                  <FiPackage className="h-4 w-4" />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-700">
                    Ordered Products
                  </h3>
                  <p className="text-[10px] text-slate-400">
                    Manage product quantities
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-bold text-[#009E89]">
                {products.length} Products
              </span>
            </div>

            {/* DESKTOP TABLE */}

            <div className="hidden overflow-x-auto md:block">
              <table className="w-full text-xs">
                <thead className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-400">
                  <tr>
                    <th className="px-5 py-3 text-left font-semibold">
                      Product
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Size
                    </th>
                    <th className="px-4 py-3 text-center font-semibold">
                      Quantity
                    </th>
                    <th className="px-5 py-3 text-right font-semibold">
                      Unit Price
                    </th>
                    <th className="px-5 py-3 text-right font-semibold">
                      Total
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className="transition hover:bg-teal-50/30"
                    >
                      <td className="px-5 py-3.5 font-semibold text-slate-700">
                        {product.name}
                      </td>

                      <td className="px-4 py-3.5">
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-600">
                          {product.size}
                        </span>
                      </td>

                      <td className="px-4 py-3.5">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            disabled={product.quantity <= 1}
                            onClick={() =>
                              updateQuantity(product.id, "decrease")
                            }
                            className="flex h-7 w-7 items-center justify-center rounded-md border border-slate-200 text-slate-500 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500 disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            <FiMinus className="h-3 w-3" />
                          </button>

                          <span className="min-w-6 text-center text-xs font-bold text-slate-700">
                            {product.quantity}
                          </span>

                          <button
                            onClick={() =>
                              updateQuantity(product.id, "increase")
                            }
                            className="flex h-7 w-7 items-center justify-center rounded-md bg-teal-50 text-[#009E89] transition hover:bg-[#00D2B8] hover:text-slate-900"
                          >
                            <FiPlus className="h-3 w-3" />
                          </button>
                        </div>
                      </td>

                      <td className="px-5 py-3.5 text-right text-slate-600">
                        {formatCurrency(product.unitPrice)}
                      </td>

                      <td className="px-5 py-3.5 text-right font-bold text-slate-800">
                        {formatCurrency(
                          product.quantity * product.unitPrice,
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* MOBILE PRODUCTS */}

            <div className="divide-y divide-slate-100 md:hidden">
              {products.map((product) => (
                <div key={product.id} className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-xs font-bold text-slate-700">
                        {product.name}
                      </h4>
                      <p className="mt-1 text-[10px] text-slate-400">
                        Size: {product.size} • Unit:{" "}
                        {formatCurrency(product.unitPrice)}
                      </p>
                    </div>

                    <p className="text-xs font-bold text-slate-800">
                      {formatCurrency(
                        product.quantity * product.unitPrice,
                      )}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400">
                      Quantity
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        disabled={product.quantity <= 1}
                        onClick={() =>
                          updateQuantity(product.id, "decrease")
                        }
                        className="flex h-7 w-7 items-center justify-center rounded-md border border-slate-200 disabled:opacity-40"
                      >
                        <FiMinus className="h-3 w-3" />
                      </button>

                      <span className="min-w-5 text-center text-xs font-bold">
                        {product.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(product.id, "increase")
                        }
                        className="flex h-7 w-7 items-center justify-center rounded-md bg-teal-50 text-[#009E89]"
                      >
                        <FiPlus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= TOTAL ================= */}

          <div className="modal-section mt-4 grid gap-4 rounded-xl border border-teal-100 bg-teal-50/50 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[#009E89]">
                Grand Total
              </p>

              <h2 className="mt-1 text-2xl font-bold text-slate-800">
                {formatCurrency(grandTotal)}
              </h2>

              <p className="mt-2 max-w-2xl text-[10px] leading-relaxed text-slate-500">
                <span className="font-semibold text-slate-600">
                  In Words:
                </span>{" "}
                {numberToWords(grandTotal)}
              </p>
            </div>

            <div className="rounded-lg border border-teal-100 bg-white px-5 py-3 text-center">
              <p className="text-[10px] uppercase text-slate-400">
                Total Quantity
              </p>

              <p className="mt-1 text-xl font-bold text-[#009E89]">
                {totalItems}
              </p>

              <p className="text-[10px] text-slate-400">Items</p>
            </div>
          </div>
        </div>

        {/* ================= FOOTER ================= */}

        <div className="flex items-center justify-between gap-3 border-t border-slate-200 bg-white px-4 py-3 sm:px-6">
          <p className="hidden text-[10px] text-slate-400 sm:block">
            Review the order and save your changes.
          </p>

          <div className="ml-auto flex gap-2">
            <button
              onClick={handleClose}
              className="btn btn-sm border-slate-200 bg-white text-xs text-slate-500 hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="btn btn-sm border-none bg-[#00D2B8] px-4 text-xs font-bold text-slate-900 hover:bg-[#00BFA5]"
            >
              <FiCheck className="h-3.5 w-3.5" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;