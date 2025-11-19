import React from 'react';

const About: React.FC = () => {
  return (
    <section className="about-section py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-center">About MUTCU</h2>
        <p className="text-center lead mb-5">Murang’a University of Technology Christian Union (MUTCU) is a lively, student-led society in MUT. We are affiliated with FOCUS-Kenya, dedicated to inspiring love, hope, and godliness through discipleship, evangelism, mission work, and leadership development.</p>

        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h3 className="section-subtitle">Our Mission</h3>
            <p>To raise a family well-equipped in all aspects of life, exemplary to Jesus Christ, by encouraging unity as one body of Christ and reaching out to non-believers within and beyond.</p>
            <h3 className="section-subtitle mt-4">Our Vision</h3>
            <p>To be a model Christian Union cultivating Christ-centeredness among members to impact society.</p>
          </div>
          <div className="col-lg-6 text-center">
            <img src="/assets/images/prayer1.jpg" className="img-fluid rounded-3 shadow-lg" alt="About MUTCU" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
