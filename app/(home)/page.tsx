import AboutFixit from "./AboutFixit";
import ApplicationAreas from "./ApplicationAreas";
import Benifit from "./Benifit";
import Certified from "./Certified";
import DealerNeed from "./DealerNeed";
import HomeProducts from "./HomeProducts";
import Reviews from "./Reviews";
import Slider from "./Slider";
import WhyChoose from "./WhyChoose";

export const metadata = {
  title: "Home | Super FIXIT Ltd",
};
const page = () => {
  return (
    <>
      <DealerNeed></DealerNeed>
      <Slider></Slider>
      <AboutFixit></AboutFixit>
      <WhyChoose></WhyChoose>
      <Certified></Certified>
      <ApplicationAreas></ApplicationAreas>
      <HomeProducts></HomeProducts>
      <Benifit></Benifit>
      <Reviews></Reviews>
    </>
  );
};

export default page;
