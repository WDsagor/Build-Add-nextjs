// import Footer from "../components/share/Footer";
// import Navbar from "../components/share/Navbar";
// import TopHeader from "../components/share/TopHeader";
import "../styles/globals.css";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      
      <Component {...pageProps} />
     <ToastContainer/>
    </>
  );
}

export default MyApp;
