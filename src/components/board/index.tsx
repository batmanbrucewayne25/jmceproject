import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterTwo from "../../layouts/footers/FooterThree";
import HeaderTwo from "../../layouts/headers/HeaderTwo";
import TeamHomeTwo from "./TeamHomeTwo";

const HomeTwo = () => {
	return (
		<>
		<Preloader />
			<HeaderTwo />
			<TeamHomeTwo />
			<FooterTwo />
			<ScrollTop />
		</>
	);
};

export default HomeTwo;
