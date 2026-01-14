import { Link } from "react-router-dom";

 
const EventsHomeFive = () => {
  return (
    <>
    <section className="event-section fix section-padding">
            <div className="container">
                <div className="section-title color-blue text-center">
                    <h6 className="wow fadeInUp">
                        Our Publications
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Publications
                    </h2>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="event-box-items-2">
                            <div className="event-content">
                                <div className="content">
                                    <div className="date">
                                        <h2>1</h2>
                                        <span>2214-7853</span>
                                    </div>
                                    <div className="title-text">
                                        <h4><Link to="/event-details">“Bacillus Subtilis”</Link></h4>
                                        <ul className="post-time">
                                            <li><i className="far fa-solid fa-user"></i> P.V. Premalatha</li>
                                            <li><i className="far fa-building"></i>Civil</li>
                                        </ul>
                                    </div>
                                
                                </div>
                            </div>

                            <div className="event-thumb">
                                <img src="assets/img/event/07.jpg" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="event-box-items-2">
                            <div className="event-content">
                                <div className="content">
                                <div className="date">
                                        <h2>1</h2>
                                        <span>2214-7853</span>
                                    </div>
                                    <div className="title-text">
                                        <h4><Link to="/event-details">“Bacillus Subtilis”</Link></h4>
                                        <ul className="post-time">
                                            <li><i className="far fa-solid fa-user"></i> P.V. Premalatha</li>
                                            <li><i className="far fa-building"></i>Civil</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="event-thumb">
                                <img src="assets/img/event/08.jpg" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="event-box-items-2">
                            <div className="event-content">
                                <div className="content">
                                <div className="date">
                                        <h2>1</h2>
                                        <span>2214-7853</span>
                                    </div>
                                    <div className="title-text">
                                        <h4><Link to="/event-details">“Bacillus Subtilis”</Link></h4>
                                        <ul className="post-time">
                                            <li><i className="far fa-solid fa-user"></i> P.V. Premalatha</li>
                                            <li><i className="far fa-building"></i>Civil</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="event-thumb">
                                <img src="assets/img/event/09.jpg" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="event-box-items-2">
                            <div className="event-content">
                                <div className="content">
                                <div className="date">
                                        <h2>1</h2>
                                        <span>2214-7853</span>
                                    </div>
                                    <div className="title-text">
                                        <h4><Link to="/event-details">“Bacillus Subtilis”</Link></h4>
                                        <ul className="post-time">
                                            <li><i className="far fa-solid fa-user"></i> P.V. Premalatha</li>
                                            <li><i className="far fa-building"></i>Civil</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="event-thumb">
                                <img src="assets/img/event/10.jpg" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="event-button text-center pt-5 wow fadeInUp" data-wow-delay=".3s">
                    <Link to="/event" className="theme-btn theme-blue-2">View All Events</Link>
                </div> */}
            </div>
        </section>
      
    </>
  );
};

export default EventsHomeFive;