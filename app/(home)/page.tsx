import AboutFixit from "./AboutFixit";
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
    <div>
      <DealerNeed></DealerNeed>
      <Slider></Slider>
      <AboutFixit></AboutFixit>
      <WhyChoose></WhyChoose>
      <Certified></Certified>
      <HomeProducts></HomeProducts>
      <Benifit></Benifit>
      <Reviews></Reviews>
    </div>
  );
};

export default page;
