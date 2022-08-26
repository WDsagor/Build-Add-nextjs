import React from 'react';
import Footer from './share/Footer';
import Navbar from './share/Navbar';
import TopHeader from './share/TopHeader';

const Layout = (childern) => {
    return (
        <>
        <TopHeader></TopHeader>
          <Navbar></Navbar>
          <main>{childern}</main>
          <Footer></Footer>
        </>
    );
};

export default Layout;