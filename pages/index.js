import Head from "next/head";
import AboutBuildadd from "../components/home/AboutBuildadd";
import Benifit from "../components/home/Benifit";
import Carousel from "../components/home/Carosol";
import Certifide from "../components/home/Certifide";
import DelarNeed from "../components/home/DelarNeed";
import HomeProducts from "../components/home/HomeProducts";
import Reviews from "../components/home/Reviews";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - Building Admixture Limited</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DelarNeed></DelarNeed>
      <Carousel></Carousel>
      <AboutBuildadd></AboutBuildadd>
      <Certifide></Certifide>
      <HomeProducts></HomeProducts>
      <Benifit></Benifit>
      <Reviews></Reviews>
    </div>
  );
}
