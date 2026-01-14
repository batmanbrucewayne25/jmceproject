import Preloader from "../../../common/Preloader";
import ScrollTop from "../../../common/ScrollTop";
import HeaderTwo from "../../../layouts/headers/HeaderTwo";
import FooterThree from "../../../layouts/footers/FooterThree";
// import HeroHomeTwo from "./HeroHomeTwo";
import RelatedCourses from "./RelatedCourses";
import AboutHomeThree from "./AboutHomeThree";
// import TeamHomeFour from "./TeamHomeFour";
import RelatedCoursestwo from "./RelatedCoursestwo";

const HomeTwo = () => {
	return (
		<>
		<Preloader />
			<HeaderTwo />
			<AboutHomeThree/>
			<RelatedCourses/>
			{/* <HeroHomeTwo /> */}
			<RelatedCoursestwo/>
      <FooterThree />
			<ScrollTop />
		</>
	);
};

export default HomeTwo;
