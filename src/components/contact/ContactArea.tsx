 
const ContactArea = () => {
  return (
    <>
      <section className="contact-section section-padding pt-0 fix">
            <div className="container">
                <div className="section-title text-center">
                    {/* <h6 className="wow fadeInUp">Get In Touch</h6> */}
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Need More Information?
                    </h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="contact-box-items">
                            <div className="icon">
                                <i className="flaticon-map" style={{ color: "#07756E" }}></i>
                            </div>
                            <h5>
                                Academic Location
                            </h5>
                            {/* <div className="image">
                                <img src="assets/img/small-line.png" alt="img" />
                            </div> */}
                            <h4>
                            NH 45, Trichy Road, Morepatti,Vadamadurai, <br />
                             Dindigul - 624802,  <br />
                            Tamil Nadu, India.
                            </h4>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="contact-box-items">
                            <div className="icon">
                                <i className="flaticon-send-data "style={{ color: "#07756E" }}></i>
                            </div>
                            <h5>
                                Email Address
                            </h5>
                            {/* <div className="image">
                                <img src="assets/img/small-line.png" alt="img" />
                            </div> */}
                            <h4>
                                <a href="mailto:supportedus@gmail.com">director.jmce@gmail.com</a> <br />
                                <a href="mailto:www.eduspace.com">www.jmce.edu.in/</a>
                            </h4>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="contact-box-items">
                            <div className="icon">
                                <img src="assets/img/call.svg" alt="img" />
                            </div>
                            <h5>
                                Phone Number
                            </h5>
                            {/* <div className="image">
                                <img src="assets/img/small-line.png" alt="img" />
                            </div> */}
                            <h4>
                                <a href="tel:++00012345688">+91 74183 44480</a> <br />
                                {/* <a href="tel:+4325688899">+432 568 88 99</a> */}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default ContactArea;