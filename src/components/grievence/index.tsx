import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";
// import MarqueeOne from "../../common/MarqueeOne";
import Preloader from "../../common/Preloader";
import HeaderTwo from "../../layouts/headers/HeaderTwo";
import ScrollTop from "../../common/ScrollTop";
// import FooterOne from "../../layouts/footers/FooterOne";
// import HeaderOne from "../../layouts/headers/HeaderOne";
// import ContactArea from "./ContactArea";
import ContactForm from "./ContactForm";
// import MapArea from "./MapArea";
import FooterThree from "../../layouts/footers/FooterThree";
 

const Contact = () => {
	return (
		<>
		<Preloader />
			{/* <HeaderOne /> */}
			<HeaderTwo />
			<BreadcrumbEvent title="Grievance" subtitle="Grievance" />
			{/* <ContactArea /> */}
      		{/* <MapArea /> */}
     	 	<ContactForm />
			{/* <MarqueeOne style_2={true} /> */}
			<FooterThree />
			{/* <FooterOne /> */}
			<ScrollTop />
		</>
	);
};

export default Contact;
