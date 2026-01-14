import Preloader from "../../../common/Preloader";
import ScrollTop from "../../../common/ScrollTop";
import FooterThree from "../../../layouts/footers/FooterThree";
import AboutHomeFour from "./AboutHomeFour";
import BlogHomeFour from "./BlogHomeFour";
import ChooseHomeFour from "./ChooseHomeFour";
import FunfactHomeFour from "./FunfactHomeFour";
import HeroHomeFour from "./HeroHomeFour";
import InstagramHomeFour from "./InstagramHomeFour";
import TeamHomeFour from "./TeamHomeFour";
import TestimonialHomeFour from "./TestimonialHomeFour";
import HeaderTwo from "../../../layouts/headers/HeaderTwo";

 
const HomeFour = () => {
  return (
    <>
    <Preloader />
    <HeaderTwo />
    <HeroHomeFour />
    <ChooseHomeFour />
    <AboutHomeFour />
    {/* <CoursesHomeFour /> */}
    <FunfactHomeFour />
    <TeamHomeFour />
    {/* <EventHomeThree /> */}
    <TestimonialHomeFour />
    <InstagramHomeFour />
    <BlogHomeFour />
    {/* <CtaHomeFour />   */}
      <FooterThree />
    <ScrollTop />   
    </>
  );
};

export default HomeFour;