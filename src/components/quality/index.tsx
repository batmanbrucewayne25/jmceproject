import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import HeaderTwo from "../../layouts/headers/HeaderTwo";
import FooterThree from "../../layouts/footers/FooterThree";
import Quality from "./ChooseHomeFive"

const About = () => {
	return (
		<>
		<Preloader />
		<HeaderTwo />
		<Quality/>
		<FooterThree />
		<ScrollTop />
		</>
	);
};

export default About;
