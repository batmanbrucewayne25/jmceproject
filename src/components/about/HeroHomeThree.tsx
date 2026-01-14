 
// import { Link } from 'react-router-dom';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

 

const HeroHomeThree = () => {
  return (
    <>
      <section className="hero-section-3 hero-3">
            <Swiper 
                    loop={true}
                    slidesPerView={1}
                    effect="fade"
                    speed={3000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: ".array-prev",
                        prevEl: ".array-next",
                    }}
                    pagination={{
                        el: ".dot",
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation, EffectFade, Autoplay]}
                    className="swiper hero-slider"> 
                    <SwiperSlide className="swiper-slide">
                        <div className="slider-bg bg-cover" style={{background: `url(/assets/img/own/banner1.svg)`}}>
                            <div className="overlay-bg bg-cover" style={{background: `url(/assets/img/hero/ovelay-bg.png)`}}></div>
                        </div>
                        <div className="container">
                            <div className="row g-4 align-items-center justify-content-center">
                                <div className="col-lg-12">
                                    <div className="hero-content">
                                        {/* <h6 data-animation="fadeInUp" data-delay="1.3s">Welcome to Jamal Mohamed College Of Engineering</h6> */}
                                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                                        About Us
                                        </h1>
                                        {/* <p data-animation="fadeInUp" data-delay="1.7s">
                                        (Approved by AICTE and Affiliated to Anna University, Chennai) 
                                        NH 45, Trichy Road, Morepatti, Vadamadurai, Dindigul – 624802, Tamilnadu, India
                                        </p>
                                        <div className="hero-button">
                                            <Link to="/courses" data-animation="fadeInUp" data-delay="1.9s" className="theme-btn red-btn">Find Your Best Courses</Link>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide className="swiper-slide">
                        <div className="slider-bg bg-cover" style={{background: `url(/assets/img/own/banner2.svg)`}}>
                            <div className="overlay-bg bg-cover" style={{background: `url(/assets/img/hero/ovelay-bg.png)`}}></div>
                        </div>
                        <div className="container">
                            <div className="row g-4 align-items-center justify-content-center">
                                <div className="col-lg-12">
                                    <div className="hero-content">
                                        <h6 data-animation="fadeInUp" data-delay="1.3s">Welcome to Jamal Mohamed College Of Engineering</h6>
                                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                                        Unlock Your Potential with 
                                        Jamal Mohamed College Of Engineering
                                        </h1>
                                        <p data-animation="fadeInUp" data-delay="1.7s">
                                        (Approved by AICTE and Affiliated to Anna University, Chennai) 
                                        NH 45, Trichy Road, Morepatti, Vadamadurai, Dindigul – 624802, Tamilnadu, India
                                        </p>
                                        <div className="hero-button">
                                            <Link to="/courses" data-animation="fadeInUp" data-delay="1.9s" className="theme-btn red-btn">Find Your Best Courses</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> */}
                    {/* <SwiperSlide className="swiper-slide">
                        <div className="slider-bg bg-cover" style={{background: `url(/assets/img/own/banner3.svg)`}}>
                            <div className="overlay-bg bg-cover" style={{background: `url(/assets/img/hero/ovelay-bg.png)`}}></div>
                        </div>
                        <div className="container">
                            <div className="row g-4 align-items-center justify-content-center">
                                <div className="col-lg-12">
                                    <div className="hero-content">
                                        <h6 data-animation="fadeInUp" data-delay="1.3s">Welcome to Jamal Mohamed College Of Engineering</h6>
                                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                                        Unlock Your Potential with 
                                        Jamal Mohamed College Of Engineering
                                        </h1>
                                        <p data-animation="fadeInUp" data-delay="1.7s">
                                        (Approved by AICTE and Affiliated to Anna University, Chennai) 
                                        NH 45, Trichy Road, Morepatti, Vadamadurai, Dindigul – 624802, Tamilnadu, India
                                        </p>
                                        <div className="hero-button">
                                            <Link to="/courses" data-animation="fadeInUp" data-delay="1.9s" className="theme-btn red-btn">Find Your Best Courses</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>                  */}
                {/* <div className="array-button">
                    <button className="array-prev"><i className="far fa-chevron-left"></i></button>
                    <button className="array-next"><i className="far fa-chevron-right"></i></button>
                </div> */}
            </Swiper>
            <div className="feature-section-3 style-margin-top section-padding pb-0">
                <div className="container">
                    <div className="feature-wrapper-3">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="feature-card-items">
                                    <div className="icon">
                                        <i className="flaticon-graduation"></i>
                                    </div>
                                    <div className="content">
                                        <h5>State-of-the-Art Laboratories</h5>
                                        <p>
                                        Modern labs with industry-standard 
                                        equipment for hands-on learning.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="feature-card-items">
                                    <div className="icon">
                                        <i className="flaticon-instructor"></i>
                                    </div>
                                    <div className="content">
                                        <h5>Renowned Faculty</h5>
                                        <p>
                                        Experienced professors and researchers 
                                        guiding students through real projects
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                <div className="feature-card-items">
                                    <div className="icon">
                                        <i className="flaticon-certficate"></i>
                                    </div>
                                    <div className="content">
                                        <h5>Industry Collaborations & Internships</h5>
                                        <p>
                                        Strong ties with companies — internships, 
                                        live projects, and guest lectures.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                <div className="feature-card-items">
                                    <div className="icon">
                                        <i className="flaticon-school"></i>
                                    </div>
                                    <div className="content">
                                        <h5>Placement & Career Services</h5>
                                        <p>
                                        Dedicated placement cell offering training, 
                                        interview prep, and recruiter connections.
                                        </p>
                                    </div>
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

export default HeroHomeThree;