import { Link } from "react-router-dom";
import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";
// import HeaderOne from "../../layouts/headers/HeaderOne";
// import MarqueeOne from "../../common/MarqueeOne";
// import FooterOne from "../../layouts/footers/FooterOne";
import ScrollTop from "../../common/ScrollTop";
import Preloader from "../../common/Preloader";
import HeaderTwo from "../../layouts/headers/HeaderTwo";
import FooterThree from "../../layouts/footers/FooterThree";
 
const NotFound = () => {
  return (
    <>
    <Preloader />
      <HeaderTwo />
      <BreadcrumbEvent title="Error 404" subtitle="Error 404" />

      <div className="error-section fix section-padding pt-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="error-items text-center pt-0">
                            {/* <div className="error-image wow fadeInUp" data-wow-delay=".3s">
                                <img src="assets/img/404.png" alt="img" />
                            </div> */}
                            <Link to="/" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
                                Back To Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <MarqueeOne style_2={true} /> */}
        <FooterThree />
        <ScrollTop />
    </>
  );
};

export default NotFound;