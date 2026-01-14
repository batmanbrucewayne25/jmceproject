// import BreadcrumbCourses from "../../common/breadcrumb/BreadcrumbCourses";
// import MarqueeOne from "../../common/MarqueeOne";
// import MarqueeTwo from "../../common/MarqueeFour";
import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterThree from "../../layouts/footers/FooterThree";
// import HeaderOne from "../../layouts/headers/HeaderOne";
import HeaderTwo from "../../layouts/headers/HeaderTwo";
// import CoursesArea from "./CoursesArea";
import CoursesHomeThree from "./CoursesHomeThree";


 
const Courses = () => {
  return (
		<>
		<Preloader />
		<HeaderTwo />
			{/* <BreadcrumbCourses title="All Courses" subtitle="Courses" /> */}
			{/* <CoursesArea /> */}
			<CoursesHomeThree />
			{/* <MarqueeTwo/> */}
			<FooterThree />
			<ScrollTop />
			
		</>
	);
};

export default Courses;