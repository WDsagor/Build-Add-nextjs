import Head from "next/head";
import AboutBuildadd from "../components/home/AboutBuildadd";
import Benifit from "../components/home/Benifit";
import Buildad from "../components/home/Buildad";
import Carousel from "../components/home/Carosol";
import Certifide from "../components/home/Certifide";
import DelarNeed from "../components/home/DelarNeed";
import HomeProducts from "../components/home/HomeProducts";
import Reviews from "../components/home/Reviews";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <DelarNeed></DelarNeed>
      <Carousel></Carousel>
      <Buildad />
      <AboutBuildadd></AboutBuildadd>
      <Certifide></Certifide>
      <HomeProducts></HomeProducts>
      <Benifit></Benifit>
      <Reviews></Reviews>
    </Layout>
  );
}
