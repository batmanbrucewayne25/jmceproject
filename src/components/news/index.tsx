import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";
import MarqueeOne from "../../common/MarqueeOne";
import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
// import FooterOne from "../../layouts/footers/FooterOne";
// import HeaderOne from "../../layouts/headers/HeaderOne";
import NewsArea from "./NewsArea";
import FooterThree from "../../layouts/footers/FooterThree";
import HeaderTwo from "../../layouts/headers/HeaderTwo";

 ;

const News = () => {
	return (
		<>
		<Preloader />
			<HeaderTwo />
			<BreadcrumbEvent title="Blog" subtitle="Blog" />
			<NewsArea />       
			<MarqueeOne style_2={true} />
			<FooterThree />
			<ScrollTop />
		</>
	);
};

export default News;
