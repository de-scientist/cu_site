import React from "react";

const CoreValues: React.FC = () => {
  return (
    <section className="core-values-section py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-center mb-5">Our Core Values</h2>

        <div className="row g-4 justify-content-center">

          {/* Love */}
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="value-card p-4 text-center shadow-sm">
              <i className="fas fa-heart fa-3x mb-3 text-primary"></i>
              <h4>Love</h4>
              <p>We express Christ-like love in all we do, creating a community that cares deeply for one another.</p>
            </div>
          </div>

          {/* Hope */}
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="value-card p-4 text-center shadow-sm">
              <i className="fas fa-dove fa-3x mb-3 text-primary"></i>
              <h4>Hope</h4>
              <p>We encourage one another to remain anchored in the hope of Christ, regardless of life’s challenges.</p>
            </div>
          </div>

          {/* Godliness */}
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="value-card p-4 text-center shadow-sm">
              <i className="fas fa-cross fa-3x mb-3 text-primary"></i>
              <h4>Godliness</h4>
              <p>We strive to cultivate Christ-centered living through spiritual disciplines and personal transformation.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreValues;
