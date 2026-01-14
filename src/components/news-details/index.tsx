import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";
// import MarqueeOne from "../../common/MarqueeOne";
import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
// import FooterOne from "../../layouts/footers/FooterOne";
// import HeaderOne from "../../layouts/headers/HeaderOne";
import HeaderTwo from "../../layouts/headers/HeaderTwo";
import FooterThree from "../../layouts/footers/FooterThree";
import NewsDetailsArea from "./NewsDetailsArea";

 

const NewsDetails = () => {
	return (
		<>
		<Preloader />
			<HeaderTwo />
			<BreadcrumbEvent title="Blog Details" subtitle="Blog Details" />
			<NewsDetailsArea />
			{/* <MarqueeOne style_2={true} /> */}
			<FooterThree />
			<ScrollTop />
		</>
	);
};

export default NewsDetails;
