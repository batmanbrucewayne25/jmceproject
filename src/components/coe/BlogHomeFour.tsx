// import { Link } from "react-router-dom";

 

const BlogHomeFour = () => {
  return (
    <>
       <section className="news-section fix section-padding pt-5">
            <div className="container">
                <div className="section-title text-center color-pink">
                    <h6 className="wow fadeInUp">
                        COE
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Latest COE
                    </h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="news-box-items-2">
                            <div className="news-image">
                                <img src="assets/img/news/12.jpg" alt="img" />
                            </div>
                            <div className="news-content">
                                <ul className="post-date">
                                    <li><i className="far fa-user"></i> Roy R. Coward</li>
                                    <li><i className="far fa-calendar-alt"></i> 20 Sep 2024</li>
                                </ul>
                                <h3>
                                   Importance Play-Based Learning in Early Childhood Education
                                </h3>
                                {/* <Link to="/news-details" className="theme-btn">Read More</Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="news-box-items-2">
                            <div className="news-image">
                                <img src="assets/img/news/13.jpg" alt="img" />
                            </div>
                            <div className="news-content">
                                <ul className="post-date">
                                    <li><i className="far fa-user"></i> Roy R. Coward</li>
                                    <li><i className="far fa-calendar-alt"></i> 20 Sep 2024</li>
                                </ul>
                                <h3>
                                    Nurturing Creativity Activities to Boost Your Child’s Imagination
                                </h3>
                                {/* <Link to="/news-details" className="theme-btn">Read More</Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="news-box-items-2">
                            <div className="news-image">
                                <img src="assets/img/news/14.jpg" alt="img" />
                            </div>
                            <div className="news-content">
                                <ul className="post-date">
                                    <li><i className="far fa-user"></i> Roy R. Coward</li>
                                    <li><i className="far fa-calendar-alt"></i> 20 Sep 2024</li>
                                </ul>
                                <h3>
                                    Building Social Skills The Role of Activities in Kindergarten
                                </h3>
                                {/* <Link to="/news-details" className="theme-btn">Read More</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default BlogHomeFour;