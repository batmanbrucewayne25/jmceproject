import { Link } from "react-router-dom";
import MobileMenu from "../layouts/headers/MobileMenu";

 

const OffCanvas = ({setOpenCanvas, openCanvas} : any) => {
  return (
    <>
      <div className="fix-area">
            <div className={`offcanvas__info ${openCanvas ? "info-open" : ""}`}>
                <div className="offcanvas__wrapper">
                    <div className="offcanvas__content">
                        <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                            <div className="offcanvas__logo">
                                <Link to="/">
                                    <img src="assets/img/logo/clglogo.svg" alt="logo-img" />
                                </Link>
                            </div>
                            <div className="offcanvas__close" onClick={() => setOpenCanvas(false)}>
                                <button>
                                <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <h3 className="offcanvas-title">Jamal Mohamed College of Engineering</h3>
                        <p>Education the foundation personal and societal growth,  <br /> empowering individuals with knowledge.</p>
                        <div className="social-icon d-flex align-items-center">
                            <a href="https://www.facebook.com/profile.php?id=61575906584165"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/jamal_mohamed_engineering_clg/"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.youtube.com/@JMCE-786"><i className="fab fa-youtube"></i></a>
                            <a href="https://www.linkedin.com/company/jamal-mohamed-college-of-engineering/"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <div className="mobile-menu fix mb-3 mean-container">
                          <MobileMenu />
                        </div>
                        <div className="offcanvas__contact">
                            <h3>Information</h3>
                            <ul className="contact-list">
                                <li>
                                    <span>
                                        Address:
                                    </span>
                                    NH 45, Trichy Road, Morepatti, Vadamadurai, Dindigul - 624802, 
                                    Tamil Nadu, India.
                                </li>
                                <li>
                                    <span>
                                        Call Us:
                                    </span>
                                    <a href="tel:+917418344480">+91 74183 44480</a>
                                </li>
                                <li>
                                    <span>
                                        Email:
                                    </span>
                                    <a href="mailto:director.jmce@gmail.com">director.jmce@gmail.com</a>
                                </li>
                            </ul>
                            <div className="offcanvas-button">
                                <Link to="/sign-in" className="theme-btn style-2"><i className="far fa-user"></i> Admin</Link>
                                <Link to="/register" className="theme-btn yellow-btn">Enroll Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`offcanvas__overlay ${openCanvas? "overlay-open" : ""}`} onClick={() => setOpenCanvas(false)}></div>
    </>
  );
};

export default OffCanvas;