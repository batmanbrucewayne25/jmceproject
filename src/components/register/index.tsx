import BreadcrumbCourses from "../../common/breadcrumb/BreadcrumbCourses";
// import MarqueeOne from "../../common/MarqueeOne";
import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterThree from "../../layouts/footers/FooterThree";
import RegisterForm from "./RegisterForm";
import HeaderTwo from "../../layouts/headers/HeaderTwo";

 

const Register = () => {
	return (
		<>
		<Preloader />
			<HeaderTwo />
			<BreadcrumbCourses title="Apply Now" subtitle="Register" />
			<RegisterForm />       
			{/* <MarqueeOne style_2={true} /> */}
			<FooterThree />
			<ScrollTop />
		</>
	);
};

export default Register;
