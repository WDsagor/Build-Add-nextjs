import AboutFixit from "./AboutFixit";
import Benifit from "./Benifit";
import Certified from "./Certified";
import DealerNeed from "./DealerNeed";
import HomeProducts from "./HomeProducts";
import Slider from "./Slider";
import WhyChoose from "./WhyChoose";

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
    </div>
  );
};

export default page;
