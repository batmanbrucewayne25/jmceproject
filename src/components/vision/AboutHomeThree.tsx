const AboutHomeThree = () => {
    return (
      <>
        <div
          className="about-section-3 section-padding"
          style={{ backgroundColor: "#ffffff" }}   // ✅ White background
        >
          <div className="container">
            <div className="about-wrapper-2">
              <div className="row g-4 justify-content-between">
                
                <div className="col-xl-6 col-lg-6">
                  <div className="about-content">
                    
                    <div className="section-title">
                      <h6
                        className="wow fadeInUp"
                        style={{ color: "#000000" }}   // ✅ Black text
                      >
                        Mission
                      </h6>
  
                      <h2
                        className="wow fadeInUp"
                        data-wow-delay=".3s"
                        style={{ color: "#000000" }}   // ✅ Black text
                      >
                        Mission
                      </h2>
                    </div>
  
                    <p
                      className="mt-3 mt-md-0 wow fadeInUp"
                      data-wow-delay=".5s"
                      style={{ color: "#000000" }}   // ✅ Black text
                    >
                      MCE is a rapidly growing engineering college in Dindigul, Tamil Nadu, established under the prestigious Jamal Mohamed Group of Institutions, Tiruchirappalli. With over seven decades of educational excellence behind it, the college provides affordable, 
                      industry-focused engineering and management programs. JMCE is committed to shaping skilled, ethical and socially responsible professionals ready to meet modern industry demands.
                    </p>
  
                  </div>
                </div>
  
                <div className="col-xl-5 col-lg-6">
                  <div className="about-image">
                    <img
                      src="assets/img/own/mision.png"
                      alt="img"
                      className="wow img-custom-anim-left"
                    />
                    <div className="bg-shape">
                      <img src="assets/img/about/bg-shape.png" alt="img" />
                    </div>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default AboutHomeThree;
  