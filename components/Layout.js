import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Footer from "./share/Footer";
import Navbar from "./share/Navbar";
import RequireAuth from "./share/RequireAuth";
import TopHeader from "./share/TopHeader";

const noAuthRequired = ["/", "/login", "/register", "/about", "/contact", "/products", "/products/[id]"];
const Layout = ({ title, children }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title ? title + "- Building Admixture" : "Building Admixture Limited"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Construction Chemical Company" />
      </Head>
      <div className=" flex flex-col min-h-screen justify-between">
        <TopHeader></TopHeader>
        <Navbar></Navbar>
        {noAuthRequired.includes(router.pathname) ? <div>{children}</div> : <RequireAuth>{children}</RequireAuth>}
        <Footer></Footer>
      </div>
    </>
  );
};

export default Layout;
