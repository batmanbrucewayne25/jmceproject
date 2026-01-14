import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import HeaderTwo from "../../layouts/headers/HeaderTwo";
import FooterThree from "../../layouts/footers/FooterThree";
import AboutHome from "./AboutHomeThree"
import AboutHome5 from "./AboutHomeThreec"
const About = () => {
	return (
		<>
		<Preloader />
		<HeaderTwo />
		<AboutHome5/>

		<AboutHome/>
			<FooterThree />
			<ScrollTop />
		</>
	);
};

export default About;
