import Preloader from "../../../common/Preloader";
import ScrollTop from "../../../common/ScrollTop";
import HeaderTwo from "../../../layouts/headers/HeaderTwo";
import FooterThree from "../../../layouts/footers/FooterThree";
// import HeroHomeTwo from "./HeroHomeTwo";
import RelatedCourses from "./RelatedCourses";
import RelatedCoursestwo from "./RelatedCoursestwo";
import AboutHomeThree from "./AboutHomeThree";
// import TeamHomeFour from "./TeamHomeFour";


const HomeTwo = () => {
	return (
		<>
		<Preloader />
			<HeaderTwo />
			<AboutHomeThree/>
			<RelatedCourses/>
			<RelatedCoursestwo/>
			{/* <HeroHomeTwo /> */}
			{/* <TeamHomeFour/> */}
      <FooterThree />
			<ScrollTop />
		</>
	);
};

export default HomeTwo;
