import type { Metadata } from "next";

import "./globals.css";
import Head from "next/head";
import TopHeader from "@/components/share/TopHeader";
import Navbar from "@/components/share/Navbar";

export const metadata: Metadata = {
  title: "Super FIXIT Ltd",
  description: "Construction chemical company in Bangladesh",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className="h-full antialiased">
      <Head>
        <title>{"Super FIXIT"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Construction Chemical Company" />
      </Head>
      <body className="min-h-full flex flex-col">
        <TopHeader></TopHeader>
        <Navbar></Navbar>
        <main className="text-gray-700">{children}</main>
      </body>
    </html>
  );
};
export default RootLayout;
