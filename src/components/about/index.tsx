import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";
import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import HeaderTwo from "../../layouts/headers/HeaderTwo";
import FooterThree from "../../layouts/footers/FooterThree";
import RelatedCourses from "./RelatedCourses";


const About = () => {
	return (
		<>
		<Preloader />
		<HeaderTwo />
			<BreadcrumbEvent title="About Us" subtitle="About" />
			<RelatedCourses/>
			<FooterThree />
			<ScrollTop />
		</>
	);
};

export default About;
