import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import HeaderTwo from "../../layouts/headers/HeaderTwo";
import FooterThree from "../../layouts/footers/FooterThree";
import EventsHomeFive from "./EventsHomeFive";

const About = () => {
	return (
		<>
		<Preloader />
		<HeaderTwo />
		<EventsHomeFive/>
			<FooterThree />
			<ScrollTop />
		</>
	);
};

export default About;
