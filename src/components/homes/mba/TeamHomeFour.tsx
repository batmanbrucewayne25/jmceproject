// import React from 'react';

interface DataType {
  id: number;
  name: string;
}

const team_data: DataType[] = [
  { id: 1, name: "Dedicated Training & Placement Cell (TPO)" },
  { id: 2, name: "Continuous aptitude & coding training from 2nd year onward" },
  { id: 3, name: "Internship opportunities through MoUs with leading industries" },
  { id: 4, name: "Resume building, LinkedIn profile development, and portfolio guidance" },
  { id: 5, name: "Industry visits, guest lectures, and HR interaction sessions" },
  { id: 6, name: "100+ company drives every year (customizable based on your college data)" },
];

const TeamHomeFour = () => {
  return (
    <section className="team-section section-padding pt-5">
      <div className="container">
        <div className="section-title text-center color-pink">
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Placement & Career Support
          </h2>
        </div>

        <div className="team-wrapper">
          {team_data.map((item, i) => (
            <div key={i} className="team-list-items">
              <div className="team-content">
                <div className="content">
                  <span>0{item.id}</span>
                  <h3>{item.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamHomeFour;
