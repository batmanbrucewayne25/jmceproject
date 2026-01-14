import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import HeaderTwo from "../../layouts/headers/HeaderTwo";
import FooterThree from "../../layouts/footers/FooterThree";
import AboutHome from "./AboutHomeThree"
import RelatedCourses from "./RelatedCourses";

const About = () => {
	return (
		<>
		<Preloader />
			{/* <HeaderOne /> */}
		<HeaderTwo />
		<AboutHome/>
		<RelatedCourses/>
			<FooterThree />
			<ScrollTop />
		</>
	);
};

export default About;
