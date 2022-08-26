import Footer from "../components/share/Footer";
import Navbar from "../components/share/Navbar";
import TopHeader from "../components/share/TopHeader";
import "../styles/globals.css";
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import "../scss/style.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <>
      <TopHeader></TopHeader>
      <Navbar></Navbar>;
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default MyApp;
