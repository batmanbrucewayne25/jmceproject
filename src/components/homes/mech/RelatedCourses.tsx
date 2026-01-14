 
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
  Hands-on training in Python, R, SQL, Hadoop, Spark, Power BI, Tableau.
  </li>

  <li style={{ marginBottom: "8px" }}>
  Big Data & Analytics Lab with cloud integration (AWS / Azure).</li>

  <li style={{ marginBottom: "8px" }}>
  Industry-oriented case studies and collaborative projects with companies.</li>

  <li style={{ marginBottom: "8px" }}>
  Career training: data analytics assessments, coding practice, mock interviews.</li>

  <li style={{ marginBottom: "8px" }}>
  Opportunities for internships, research publications, and analytics competitions.</li>

  
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