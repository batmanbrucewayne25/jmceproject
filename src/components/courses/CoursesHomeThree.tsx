import { Link } from "react-router-dom";

 
const CoursesHomeThree = () => {
  return (
    <>
      <section className="popular-courses-section-33 fix section-padding">
            <div className="container">
                <div className="section-title color-red text-center">
                    {/* <h6 className="wow fadeInUp">
                        Courses Offered
                    </h6> */}
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Academic Programs
                    </h2>
                    <p className="courses-sub-text mt-3 wow fadeInUp" data-wow-delay=".5s">Get Best Quality Education From <b>Jamal Mohamed College of Engineering
                    </b></p>
                </div>
                <ul className="nav mt-3 mt-md-0">
                    
                    <li className="nav-item wow fadeInUp" data-wow-delay=".2s">
                        <a href="#Under" data-bs-toggle="tab" className="nav-link active">
                            Under Graduate 
                        </a>
                    </li>
                    {/* <li className="nav-item wow fadeInUp" data-wow-delay=".4s">
                        <a href="#Graduate" data-bs-toggle="tab" className="nav-link">
                            Graduate Program
                        </a>
                    </li>
                    <li className="nav-item wow fadeInUp" data-wow-delay=".6s">
                        <a href="#Online" data-bs-toggle="tab" className="nav-link">
                            Online Program
                        </a>
                    </li> */}
                </ul>
                <div className="tab-content">
                    <div id="Under" className="tab-pane fade show active">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="popular-courses-items">
                                    <div className="popular-thumb">
                                        <div className="post-box">
                                            <Link to="/cse" className="post-cat">
                                               CSE
                                            </Link>
                                        </div>
                                        <div className="thumb">
                                            <img src="assets/img/courses/cse.svg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <Link to="/cse">
                                            Computer Science and Engineering
                                            </Link>
                                        </h4>
                                        <div className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            {/* <span>(4.8/5 Reviews)</span> */}
                                        </div>
                                        <Link to="/cse" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="popular-courses-items bg-2">
                                    <div className="popular-thumb">
                                        <div className="post-box">
                                            <Link to="/cse" className="post-cat">
                                                CSE
                                            </Link>
                                        </div>
                                        <div className="thumb">
                                            <img src="assets/img/courses/ml.svg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <Link to="/cseai">
                                            Computer Science and Engineering (AI & Machine Learning)
                                            </Link>
                                        </h4>
                                        <div className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            {/* <span>(4.8/5 Reviews)</span> */}
                                        </div>
                                        <Link to="/cseai" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="popular-courses-items bg-3">
                                    <div className="popular-thumb">
                                        <div className="post-box">
                                            <Link to="/cseds" className="post-cat">
                                                CSE
                                            </Link>
                                        </div>
                                        <div className="thumb">
                                            <img src="assets/img/courses/ai.svg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <Link to="/cseds">
                                                Computer Science and Engineering (Data Science)
                                            </Link>
                                        </h4>
                                        <div className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <Link to="/cseds" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="popular-courses-items bg-2">
                                    <div className="popular-thumb">
                                        <div className="post-box">
                                            <Link to="/mech" className="post-cat">
                                                ME
                                            </Link>
                                        </div>
                                        <div className="thumb">
                                            <img src="assets/img/courses/me.svg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <Link to="/mech">
                                            Mechanical Engineering
                                            </Link>
                                        </h4>
                                        <div className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            {/* <span>(4.8/5 Reviews)</span> */}
                                        </div>
                                        <Link to="/mech" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Graduate" className="tab-pane fade">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="popular-courses-items">
                                    <div className="popular-thumb">
                                        <div className="post-box">
                                            <Link to="/courses-details" className="post-cat">
                                               2. Business
                                            </Link>
                                        </div>
                                        <div className="thumb">
                                            <img src="assets/img/courses/15.jpg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <Link to="/courses-details">
                                                Mastering Business Strategy
                                                From Theory to Practice
                                            </Link>
                                        </h4>
                                        <div className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>(4.8/5 Reviews)</span>
                                        </div>
                                        <Link to="/courses-details" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="popular-courses-items bg-2">
                                    <div className="popular-thumb">
                                        <div className="post-box">
                                            <Link to="/courses-details" className="post-cat">
                                                History
                                            </Link>
                                        </div>
                                        <div className="thumb">
                                            <img src="assets/img/courses/16.jpg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <Link to="/courses-details">
                                                Revolution and Reform Key Turning Points in History
                                            </Link>
                                        </h4>
                                        <div className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>(4.8/5 Reviews)</span>
                                        </div>
                                        <Link to="/courses-details" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="popular-courses-items bg-3">
                                    <div className="popular-thumb">
                                        <div className="post-box">
                                            <Link to="/courses-details" className="post-cat">
                                                Leadership
                                            </Link>
                                        </div>
                                        <div className="thumb">
                                            <img src="assets/img/courses/17.jpg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <Link to="/courses-details">
                                                Transformational Leadership Inspiring Organizations
                                            </Link>
                                        </h4>
                                        <div className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>(4.8/5 Reviews)</span>
                                        </div>
                                        <Link to="/courses-details" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Online" className="tab-pane fade">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="popular-courses-items">
                                    <div className="popular-thumb">
                                        <div className="post-box">
                                            <Link to="/courses-details" className="post-cat">
                                               3. Business
                                            </Link>
                                        </div>
                                        <div className="thumb">
                                            <img src="assets/img/courses/15.jpg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <Link to="/courses-details">
                                                Mastering Business Strategy
                                                From Theory to Practice
                                            </Link>
                                        </h4>
                                        <div className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>(4.8/5 Reviews)</span>
                                        </div>
                                        <Link to="/courses-details" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="popular-courses-items bg-2">
                                    <div className="popular-thumb">
                                        <div className="post-box">
                                            <Link to="/courses-details" className="post-cat">
                                                History
                                            </Link>
                                        </div>
                                        <div className="thumb">
                                            <img src="assets/img/courses/16.jpg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <Link to="/courses-details">
                                                Revolution and Reform Key Turning Points in History
                                            </Link>
                                        </h4>
                                        <div className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>(4.8/5 Reviews)</span>
                                        </div>
                                        <Link to="/courses-details" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="popular-courses-items bg-3">
                                    <div className="popular-thumb">
                                        <div className="post-box">
                                            <Link to="/courses-details" className="post-cat">
                                                Leadership
                                            </Link>
                                        </div>
                                        <div className="thumb">
                                            <img src="assets/img/courses/17.jpg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <Link to="/courses-details">
                                                Transformational Leadership Inspiring Organizations
                                            </Link>
                                        </h4>
                                        <div className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>(4.8/5 Reviews)</span>
                                        </div>
                                        <Link to="/courses-details" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
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

export default CoursesHomeThree;