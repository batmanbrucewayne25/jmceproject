import Count from "../../common/Count";

const AboutArea = () => {
  return (
    <>
    <section className="about-section fix">
            <div className="about-wrapper-5">
                <div className="container">
                    <div className="row g-4 justify-content-between">
                        <div className="col-lg-6">
                            <div className="section-title mb-0">
                                <h6 className="wow fadeInUp">About Us</h6>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                About Jamal Mohamed College of Engineering
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <p className="wow fadeInUp" data-wow-delay=".3s">
                                Jamal Mohamed College of Engineering (JMCE), located near Vadamadurai in Dindigul, is an institution promoted by the Agni Knowledge Foundation was established in 2012. 
                                The college operates under the leadership of its respected Board of managing Trustee and Chairman Dr. K.N. Abdul Kader Nihal, along with Trustees Hajee Dr. A.K. Khaja Nazeemudeen, D.Litt. (USA) and Hajee M.J. Jamal Mohamed. 
                                The Board is further strengthened by a distinguished Governing Council that includes renowned experts from both academia and industry
                                </p>
                                <p style={{ marginTop: "15px" }} className="wow fadeInUp" data-wow-delay=".3s">JMCE caters to the evolving needs of the rapidly advancing global engineering and technology sectors, offering a dynamic learning environment supported by highly qualified and dedicated faculty. 
                                    The institution not only imparts strong engineering knowledge but also instils confidence, discipline and problem-solving abilities in its students, enabling them to face real-world technical challenges with determination and excellence.</p>
                                    <p style={{ marginTop: "15px" }} className="wow fadeInUp" data-wow-delay=".3s"> 
                                    As a progressive engineering institution, JMCE lays a strong foundation for aspiring engineers through innovative teaching practices, hands-on laboratory training, industry-focused projects, and research-driven activities. 
                                    The college equips students with exposure to cutting-edge technologies and offers opportunities to engage with experts from diverse engineering and industrial fields.
                                    </p>
                                    <p style={{ marginTop: "15px" }} className="wow fadeInUp" data-wow-delay=".3s"> 
                                        
                                    </p>
                                <div className="counter-box-items">
                                    <div className="counter-content wow fadeInUp" data-wow-delay=".3s">
                                        <h2><span className="odometer" data-count="23">
                                          <Count number={2} text='+' />
                                          </span></h2>
                                        <p>Years Of Experience</p>
                                    </div>
                                    <p className="text wow fadeInUp" data-wow-delay=".5s">
                                        Education not only empowers people pursue their career goals
                                        also encourages responsible.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
    </>
  );
};

export default AboutArea;