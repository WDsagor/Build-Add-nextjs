import Footer from "../components/share/Footer";
import Navbar from "../components/share/Navbar";
import TopHeader from "../components/share/TopHeader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
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
