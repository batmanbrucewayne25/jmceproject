import BreadcrumbCoursesDetails from "../../common/breadcrumb/BreadcrumbCoursesDetails";
import MarqueeOne from "../../common/MarqueeOne";
import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import CoursesDetailsArea from "./CoursesDetailsArea";
import HeaderTwo from "../../layouts/headers/HeaderTwo";
import FooterThree from "../../layouts/footers/FooterThree";
import RelatedCourses from "./RelatedCourses";

 

const CoursesDetails = () => {
  return (
    <>
    <Preloader />
    <HeaderTwo />
    <BreadcrumbCoursesDetails />
    <CoursesDetailsArea />
    <RelatedCourses />
    <MarqueeOne style_2={true} />
		<FooterThree />
    <ScrollTop />     
    </>
  );
};

export default CoursesDetails;