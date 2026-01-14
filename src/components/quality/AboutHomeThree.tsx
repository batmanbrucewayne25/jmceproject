// import { Link } from "react-router-dom";
// import Count from "../../common/Count";

const AboutHomeThree = () => {
  return (
    <>
      <div className="about-section-3 section-padding">
            <div className="container">
                <div className="about-wrapper-2">
                    <div className="row g-4 justify-content-between">
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <h6 className="text-white wow fadeInUp">
                                        Mission
                                    </h6>
                                    <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                        Mission
                                    </h2>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                MCE is a rapidly growing engineering college in Dindigul, Tamil Nadu, established under the prestigious Jamal Mohamed Group of Institutions, Tiruchirappalli. With over seven decades of educational excellence behind it, the college provides affordable, 
                                industry-focused engineering and management programs. JMCE is committed to shaping skilled, ethical and socially responsible professionals ready to meet modern industry demands.
                                </p>
                                {/* <Link to="/about" className="theme-btn yellow-btn wow fadeInUp" data-wow-delay=".3s">Read More</Link> */}
                                {/* <div className="about-counter-items">
                                    <div className="counter-content wow fadeInUp" data-wow-delay=".3s">
                                        <h3><span className="odometer" data-count="23">
                                          <Count number={23} text='+'  />
                                          </span></h3>
                                        <p>2+ Years Of Experience</p>
                                    </div>
                                    <div className="counter-content wow fadeInUp" data-wow-delay=".5s">
                                        <h3><span className="odometer" data-count="99">
                                          <Count number={99} text='%' />
                                          </span></h3>
                                        <p>99% Happy Students</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="about-image">
                                <img src="assets/img/own/clgaboutus.svg" alt="img" className="wow img-custom-anim-left" />
                                <div className="bg-shape">
                                    <img src="assets/img/about/bg-shape.png" alt="img" />
                                </div>
                                {/* <div className="counter-box">
                                    <p>More then</p>
                                    <h2><span className="odometer" data-count="2800">
                                      <Count number={2800} text='+' />
                                      </span></h2>
                                    <p>Quality Courses</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default AboutHomeThree;