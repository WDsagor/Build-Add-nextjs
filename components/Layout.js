import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../config/firebase.init";
import Footer from "./share/Footer";
import Navbar from "./share/Navbar";
import RequireAuth from "./share/RequireAuth";
import TopHeader from "./share/TopHeader";
const noAuthRequired = ["/", "/login", "/register", "/about", "/contact"];
const Layout = ({ title, children }) => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!user?.emailVerified) {
      router.push("/login", router.asPath);
    }
    router.push(router.asPath);
  }, [router, user, loading]);

  return (
    <>
      <Head>
        <title>
          {title
            ? title + "- Building Admixture"
            : "Building Admixture Limited"}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Construction Chemical Company" />
      </Head>
      <div className=" flex flex-col min-h-screen justify-between">
        <TopHeader></TopHeader>
        <Navbar></Navbar>
        {noAuthRequired.includes(router.pathname) ? (
          <div className="">{children}</div>
        ) : (
          <RequireAuth>{children}</RequireAuth>
        )}
        <Footer></Footer>
      </div>
    </>
  );
};

export default Layout;
