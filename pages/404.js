import Link from "next/link";
import React from "react";

const custom404 = () => {
  return (
    <div className="bg-[#2B3856]">
      <div className="hero min-h-screen text-slate-400">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">404 &#124; Page Not Found</h1>
            <p className="py-6">This page doesn&lsquo;t exist. Please return to the previous page</p>
            <Link href="/">
              <a className=" cursor-pointer text-primary hover:underline">Go to Home page</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default custom404;