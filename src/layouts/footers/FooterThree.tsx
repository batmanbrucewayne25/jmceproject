import { Link } from "react-router-dom";

 

const FooterThree = () => {
  return (
    <>
       <footer className="footer-section-3 fix">
            <div className="circle-shape">
                <img src="assets/img/footer/circle.png" alt="img" />
            </div>
            <div className="vector-shape">
                <img src="assets/img/footer/Vector.png" alt="img" />
            </div>
            <div className="container">
                <div className="footer-widget-wrapper style-2">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link to="/">
                                    {/* <img src="assets/img/Clgfooterlogo.svg" alt="img" /> */}
                                    <img src="assets/img/logo/jmce-logo.png" alt="img" style={{ width: "120px" }} />
                                    </Link>
                                </div>
                                <div className="footer-content">
                                     <h5>
                                        Jamal Mohamed College of Engineering
                                  </h5>
                                    <p>
                                        Education the foundation personal and societal growth, empowering individuals with knowledge.
                                    </p>
                                    <div className="social-icon">
                                        <a href="https://www.facebook.com/profile.php?id=61575906584165" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                                        <a href="https://www.instagram.com/jamal_mohamed_engineering_clg/"  target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                        <a href="https://www.youtube.com/@JMCE-786"><i className="fab fa-youtube"></i></a>
                                        {/* <a href="#"><i className="fab fa-behance"></i></a> */}
                                        <a href="https://www.linkedin.com/company/jamal-mohamed-college-of-engineering/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Online Platform</h3>
                                </div>
                                <ul className="list-area">
                                <li><a href="https://nptel.ac.in/" target="_blank" rel="noopener noreferrer"> NPTEL</a> </li>
                                <li><a href="https://swayam.gov.in/" target="_blank" rel="noopener noreferrer"> SWAYAM</a> </li>
                                <li><a href="https://www.mygreatlearning.com/" target="_blank" rel="noopener noreferrer"> Great Learning Academy</a> </li>
                                
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget style-left">
                                <div className="widget-head">
                                   <h3>Contact Us</h3>
                                </div>
                                <div className="footer-content">
                                    <ul className="contact-info">
                                        <li>
                                        NH 45, Trichy Road, Morepatti, Vadamadurai, Dindigul - 624802, 
                                        Tamil Nadu, India.
                                        </li>
                                        <li>
                                            <a href="mailto:director.jmce@gmail.com" className="link">director.jmce@gmail.com</a>
                                        </li>
                                        <li>
                                            <a href="tel:+9107418344480">+91 74183 44480</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>News letter</h3>
                                </div>
                                <div className="footer-content">
                                    <p>Get the latest news delivered to you mail</p>
                                    <div className="footer-input">
                                        <div className="icon">
                                            <i className="far fa-envelope"></i>
                                        </div>
                                        <input type="email" id="email2" placeholder="Email Address" />
                                        <button className="newsletter-btn" type="submit">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom style-3">
                <div className="container">
                    <div className="footer-bottom-wrapper">
                    <p>Copyright © <Link to="/">Jamal Mohamed College Of Engineering</Link>, all rights reserved.</p>
                    
                    <p>
  Powered by{" "}
  <a href="https://yesmedia.in/" target="_blank" rel="noopener noreferrer">
    YES MEDIA
  </a>
</p>
                        <ul className="footer-menu wow fadeInUp" data-wow-delay=".5s">
                            <li>
                                {/* <Link to="/about"> */}
                                    University 
                                {/* </Link> */}
                            </li>
                            <li>
                                {/* <Link to="/faq"> */}
                                    FAQs 
                                {/* </Link> */}
                            </li>
                            <li>
                                {/* <Link to="/contact"> */}
                                    Privacy Policy
                                {/* </Link> */}
                            </li>
                            <li>
                                {/* <Link to="/event"> */}
                                    Events
                                {/* </Link>s */}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
  );
};

export default FooterThree;