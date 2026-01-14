import { Link } from "react-router-dom";

 

const AboutHomeFour = () => {
  return (
    <>
      <section className="about-section fix section-padding">
            <div className="container">
                <div className="about-wrapper-3">
                    <div className="row g-4 align-items-center">
                        <div className="col-xl-8 col-lg-7">
                            <div className="about-content">
                                <div className="section-title mb-0 color-pink">
                                    <h6 className="wow fadeInUp">
                                        Principal's Message
                                    </h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Dr. Jamal Mohamed
                                        Principal
                                    </h2>
                                </div>
                                <div className="about-items">
                                    {/* <div className="circle-text">
                                        <img src="assets/img/circle-text.png" alt="img" className="circle-animation" />
                                        <div className="icon">
                                            <img src="assets/img/flower.png" alt="img" />
                                        </div>
                                    </div> */}
                                    <div className="content">
                                        <p className="wow fadeInUp" data-wow-delay=".3s">
                                            kindergarten school plays a crucial role in shaping the early development of young children, providing nurture environment where they can explore, learn, and grow balanced discovery.
                                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </p>
                                        <Link to="/courses" className="theme-btn pink-btn wow fadeInUp" data-wow-delay=".5s">Learn More Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="hero-image float-bob-y">
                                <img src="assets/img/about/05.png" alt="img" className="img-custom-anim-left" />
                                <div className="bg-shape">
                                    <img src="assets/img/about/circle-bg.png" alt="img" />
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

export default AboutHomeFour;