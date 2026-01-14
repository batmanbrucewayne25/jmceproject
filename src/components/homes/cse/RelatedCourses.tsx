 
// import { Link } from 'react-router-dom';
// import { Autoplay } from 'swiper/modules';

 

const RelatedCourses = () => {
  return (
    <>
      <section className="popular-courses-section fix section-padding pt-4">
            <div className="container">
                {/* <div className="section-title text-center">
                    <h2 className="wow fadeInUp">About Jamal Mohamed College of Engineering</h2>
                </div> */}
                <div className="description-content">
                                                {/* <h3>Description</h3> */}
                                                <div className="container">
                <div className="section-title text-center pt-4">
                    <h2 className="wow fadeInUp">Key Highlights</h2>
                </div>
                <div className="description-content">
                                               
                <ul style={{ color: "#000", margin: 0, paddingLeft: "20px", listStyleType: "disc" }}>
  <li style={{ marginBottom: "8px" }}>
  Modern labs for cloud computing, cybersecurity, full-stack, and DevOps.
  </li>

  <li style={{ marginBottom: "8px" }}>
  Innovation-driven learning: mini projects every semester, hackathons, coding clubs.</li>

  <li style={{ marginBottom: "8px" }}>
  Placement-oriented training: aptitude, coding tests, interview preparation, mock HR rounds.</li>

  <li style={{ marginBottom: "8px" }}>
  Industry tie-ups, company visits, and internship programs for real-world exposure.</li>

  <li style={{ marginBottom: "8px" }}>
  Opportunities to publish papers, participate in startup programs, and build capstone projects.</li>

  
</ul>

                                               
                                            </div>
                                           
            </div>
                                                
                                            </div>
                
            </div>
        </section>
    </>
  );
};

export default RelatedCourses;