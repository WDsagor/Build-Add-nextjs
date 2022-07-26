import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopHeader from "../components/TopHeader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopHeader></TopHeader>
      <Navbar></Navbar>;
      <Component {...pageProps} />;<Footer></Footer>
    </>
  );
}

export default MyApp;
