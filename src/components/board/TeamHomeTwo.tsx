import { Link } from "react-router-dom";

const TeamHomeTwo = () => {
  return (
    <>
      <section className="team-section fix section-padding pt-5">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Meet our Board of Governance
            </h2>
          </div>

          {/* ===== Chairman (Single Center Card) ===== */}
          <div className="row justify-content-center mb-5">
            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
              <div className="team-box-items style-2 text-center">
                <div className="team-image">
                  <img src="assets/img/own/chairman.jpg" alt="Chairman" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link to="#">Dr. K.N. Abdul Kader Nihal</Link>
                  </h4>
                  <p>Chairman</p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Other Board Members ===== */}
          <div className="row justify-content-center mb-5">
           

            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
              <div className="team-box-items style-2">
                <div className="team-image">
                  <img src="assets/img/own/8.jpeg" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link to="#">Hajee Dr. A.K. Khaja Nazeemudeen</Link>
                  </h4>
                  <p>Secretary</p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
              <div className="team-box-items style-2">
                <div className="team-image">
                  <img src="assets/img/own/9.jpeg" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link to="#">Hajee M. J. Jamal Mohamed</Link>
                  </h4>
                  <p>Treasurer</p>
                </div>
              </div>
            </div>

           
          </div>
          <div className="row justify-content-center mb-5">
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
              <div className="team-box-items style-2">
                <div className="team-image">
                  <img src="assets/img/own/tariq.svg" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link to="#">Mr. R.K. Mehul tariq</Link>
                  </h4>
                  <p>Executive Director</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
              <div className="team-box-items style-2">
                <div className="team-image">
                  <img src="assets/img/own/7.jpeg" alt="img" />
                </div>
                <div className="team-content">
                  <h4>
                    <Link to="#">Hajee Dr. K.N. Mohamed Fazil</Link>
                  </h4>
                  <p>Executive Director</p>
                </div>
              </div>
            </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default TeamHomeTwo;
