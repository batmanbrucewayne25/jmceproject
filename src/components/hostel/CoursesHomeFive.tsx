 
// import { Link } from 'react-router-dom';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

 
const CoursesHomeFive = () => {
  return (
    <>
      <section className="business-courses-section pt-5 section-padding section-bg-2">
            <div className="container">
                <div className="section-title color-blue text-center">
                    <h6 className="wow fadeInUp">
                        Hostel
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Explore Our Hostel Images
                    </h2>
                    <p>Demo Text</p>
                </div>
                <Swiper 
                    spaceBetween={30}
                    speed={1500}
                    loop={true}
                    autoplay={{
                      delay: 1500,
                      disableOnInteraction: false
                    }}
                    pagination={{
                      el: '.dot',
                      clickable: true
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                      1199: {
                          slidesPerView: 4,
                      },
                      991: {
                          slidesPerView: 3,
                      },
                      767: {
                          slidesPerView: 2,
                      },
                      575: {
                          slidesPerView: 1,
                      },
                      0: {
                          slidesPerView: 1,
                      },
                  }}
                className="swiper courses-slider-2">
                    <SwiperSlide>
        <div className="single-slide-image">
          <img src="assets/img/courses/18.jpg" alt="course-image" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="single-slide-image">
          <img src="assets/img/courses/19.jpg" alt="course-image" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="single-slide-image">
          <img src="assets/img/courses/20.jpg" alt="course-image" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="single-slide-image">
          <img src="assets/img/courses/18.jpg" alt="course-image" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="single-slide-image">
          <img src="assets/img/courses/19.jpg" alt="course-image" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="single-slide-image">
          <img src="assets/img/courses/20.jpg" alt="course-image" />
        </div>
      </SwiperSlide>
                </Swiper>

            </div>
        </section>
    </>
  );
};

export default CoursesHomeFive;