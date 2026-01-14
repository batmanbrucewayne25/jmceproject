// import MarqueeTwo from "../../../common/MarqueeFour";
import Preloader from "../../../common/Preloader";
import ScrollTop from "../../../common/ScrollTop";
import FooterThree from "../../../layouts/footers/FooterThree";
// import HeaderThree from "../../../layouts/headers/HeaderThree";
import HeaderTwo from "../../../layouts/headers/HeaderTwo";
import AboutHomeThree from "./AboutHomeThree";
// import BlogHomeThree from "./BlogHomeThree";
import ChooseHomeThree from "./ChooseHomeThree";
import CoursesHomeThree from "./CoursesHomeThree";
// import CtaHomeThree from "./CtaHomeThree";
// import EventHomeThree from "./EventHomeThree";
// import FaqHomeThree from "./FaqHomeThree";
import HeroHomeThree from "./HeroHomeThree";
// import PartnarsHomeThree from "./PartnarsHomeThree";
import TestimonialHomeThree from "./TestimonialHomeThree";
import BlogHomeFour from "./BlogHomeFour";

 

const HomeThree = () => {
  return (
    <>
    <Preloader />
      <HeaderTwo />
      <HeroHomeThree />
      {/* <MarqueeTwo /> */}
      <CoursesHomeThree />

      <AboutHomeThree />
      <ChooseHomeThree />
      {/* <EventHomeThree /> */}

      <TestimonialHomeThree />
      <BlogHomeFour />

      {/* <MarqueeTwo /> */}
      {/* <PartnarsHomeThree /> */}
      {/* <BlogHomeThree /> */}
      {/* <FaqHomeThree /> */}
      {/* <InstagramHomeThree /> */}
      {/* <CtaHomeThree/> */}
      {/* <MarqueeTwo /> */}
      <FooterThree />
      <ScrollTop />
    </>
  );
};

export default HomeThree;