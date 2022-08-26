import Head from 'next/head';
import React from 'react';
import Footer from './share/Footer';
import Navbar from './share/Navbar';
import TopHeader from './share/TopHeader';

const Layout = ({title, children}) => {
    return (
        <>
          <Head>
          <title>{title ? title + '- Building Admixture' : "Building Admixture Limited"}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Construction Chemical Company" />
        
          </Head>
          <div className=' flex flex-col min-h-screen justify-between'>
          <TopHeader></TopHeader>
          <Navbar></Navbar>
          <div>{children}</div>
          <Footer></Footer>
          </div>
        </>
    );
};

export default Layout;