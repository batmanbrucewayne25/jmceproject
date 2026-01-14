 
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Count from '../../../common/Count';

 


const TestimonialHomeThree = () => {
  return (
    <>
      <section className="testimonial-section-3 fix pt-5 section-padding bg-cover" style={{background: `url(/assets/img/own/background.svg)`, backgroundAttachment: "fixed"}}>
            {/* <div className="counter-section-2 section-padding pt-0">
                <div className="container custom-container">
                    <div className="counter-wrapper-2 bg-cover" style={{background: `url(/assets/img/counter-bg.jpg)`}}>
                        <div className="counter-items wow fadeInUp" data-wow-delay=".2s">
                            <div className="icon">
                                <i className="flaticon-success"></i>
                            </div>
                            <div className="content">
                                <h2><span className="odometer" data-count="48.5"> <Count number={48} text='.5k'  /> </span></h2>
                                <p>Student Enrolled</p>
                            </div>
                        </div>
                        <div className="counter-items wow fadeInUp" data-wow-delay=".4s">
                            <div className="icon">
                                <i className="flaticon-medal"></i>
                            </div>
                            <div className="content">
                                <h2><span className="odometer" data-count="100"> <Count number={100} text='+'  /> </span></h2>
                                <p>Awards Winning</p>
                            </div>
                        </div>
                        <div className="counter-items wow fadeInUp" data-wow-delay=".6s">
                            <div className="icon">
                                <i className="flaticon-satisfaction"></i>
                            </div>
                            <div className="content">
                                <h2><span className="odometer" data-count="99"> <Count number={99} text='%'  /> </span></h2>
                                <p>Satisfaction Rate</p>
                            </div>
                        </div>
                        <div className="counter-items wow fadeInUp" data-wow-delay=".8s">
                            <div className="icon">
                                <i className="flaticon-instructor"></i>
                            </div>
                            <div className="content">
                                <h2><span className="odometer" data-count="250"> <Count number={250} text='+'  /> </span></h2>
                                <p>Instructors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="text-white wow fadeInUp">
                        Students Reviews
                    </h6>
                    {/* <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                        258+ Students Say About <br />
                        Our University
                    </h2> */}
                </div>
                <Swiper
                    spaceBetween={30}
                    speed={2000}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,  
                    }}
                    pagination={{
                        el: ".dot",
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                      1199: {
                          slidesPerView: 3,
                      },
                      991: {
                          slidesPerView: 2,
                      },
                      767: {
                          slidesPerView: 1,
                      },
                      575: {
                          slidesPerView: 1,
                      },
                      0: {
                          slidesPerView: 1,
                      },
                  }}
                 className="swiper testimonial-slider-3">
               
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-items">
                                <div className="client-info">
                                    <h3>Mohamed Faisal</h3>
                                    {/* <span>Machine Learning</span> */}
                                </div>
                                <div className="client-img bg-cover" style={{background: `url(/assets/img/own/testimony.jpg)`}}></div>
                                <p>
                                    "Jamal Mohamed College's engineering programs provide a strong academic foundation with experienced faculty, 
                                    excellent infrastructure, and solid industry connections."
                                </p>
                                <div className="icon">
                                    <i className="flaticon-double-quotes"></i>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-items">
                                <div className="client-info">
                                    <h3>Nellai Nawaz</h3>
                                    {/* <span>AI</span> */}
                                </div>
                                <div className="client-img bg-cover" style={{background: `url(/assets/img/own/student1.svg)`}}></div>
                                <p>
                                    "The college has been established for the development of the society in the surrounding villages and there are mosques for prayers. 
                                    The quality of education is also excellent.                                    "
                                </p>
                                <div className="icon">
                                    <i className="flaticon-double-quotes"></i>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-items">
                                <div className="client-info">
                                    <h3>Rahamathu Nisha</h3>
                                    {/* <span>CSE</span> */}
                                </div>
                                <div className="client-img bg-cover" style={{background: `url(/assets/img/own/testimony.jpg)`}}></div>
                                <p>
                                    "From advanced smart classrooms to excellent placement opportunities –
                                    everything here makes it the perfect engineering college for shaping future engineers."
                                </p>
                                <div className="icon">
                                    <i className="flaticon-double-quotes"></i>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-items">
                                <div className="client-info">
                                    <h3>Vijay Venkatesh</h3>
                                    {/* <span>Mechanical</span> */}
                                </div>
                                <div className="client-img bg-cover" style={{background: `url(/assets/img/own/testimony.jpg)`}}></div>
                                <p>
                                    "Jamal Mohamed College of Engineering is the best 
                                    engineering college for future-ready education."
                                </p>
                                <div className="icon">
                                    <i className="flaticon-double-quotes"></i>
                                </div>
                            </div>
                        </SwiperSlide>
                   
                    <div className="swiper-dot white-color text-center mt-5">
                        <div className="dot"></div>
                    </div>
                </Swiper>
            </div>
        </section>
    </>
  );
};

export default TestimonialHomeThree;