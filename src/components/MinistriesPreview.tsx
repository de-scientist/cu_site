// MinistriesSection.tsx
import React from "react";

const MinistriesPreview: React.FC = () => {
  return (
    <section className="ministries-section py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-center">Our Ministries</h2>
        <p className="text-center lead mb-5">
          Join a ministry to grow in faith and serve others.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-3 mb-4" data-aos="zoom-in" data-aos-delay={100}>
            <div className="card ministry-card h-100 shadow-sm">
              <img src="assets/images/music1.jpg" className="card-img-top" alt="Music Ministry" />
              <div className="card-body text-center">
                <i className="fas fa-music feature-icon mb-2"></i>
                <h4 className="card-title">Music Ministry</h4>
                <p className="card-text">
                  Leading and ministering worship through Choir, Band, Instrumentalism and Praise & Worship.
                </p>
                <a href="ministries.html" className="btn btn-primary btn-sm mt-2">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4" data-aos="zoom-in" data-aos-delay={200}>
            <div className="card ministry-card h-100 shadow-sm">
              <img src="assets/images/bs1.jpg" className="card-img-top" alt="Bible Study & Discipleship" />
              <div className="card-body text-center">
                <i className="fas fa-book-open feature-icon mb-2"></i>
                <h4 className="card-title">Bible Study & Discipleship</h4>
                <p className="card-text">
                  Deepening faith through small groups- Bible Study, nurturing classes for new believers, and resourcefull training programs.
                </p>
                <a href="ministries.html" className="btn btn-primary btn-sm mt-2">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4" data-aos="zoom-in" data-aos-delay={300}>
            <div className="card ministry-card h-100 shadow-sm">
              <img src="assets/images/mission1.jpg" className="card-img-top" alt="Missions & Evangelism" />
              <div className="card-body text-center">
                <i className="fas fa-globe feature-icon mb-2"></i>
                <h4 className="card-title">Missions & Evangelism</h4>
                <p className="card-text">
                  Sharing the Gospel through campus outreach, annual missions, and hope ministry visits to children homes, prisons and hospitals.
                </p>
                <a href="ministries.html" className="btn btn-primary btn-sm mt-2">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4" data-aos="zoom-in" data-aos-delay={400}>
            <div className="card ministry-card h-100 shadow-sm">
              <img src="assets/images/dance3.jpg" className="card-img-top" alt="Creative Ministry" />
              <div className="card-body text-center">
                <i className="fas fa-paint-brush feature-icon mb-2"></i>
                <h4 className="card-title">Creative Ministry</h4>
                <p className="card-text">
                  Expressing faith through drama, dance, spoken word,modelling and other artistic talents.
                </p>
                <a href="ministries.html" className="btn btn-primary btn-sm mt-2">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4" data-aos="zoom-in" data-aos-delay={500}>
          <a href="ministries.html" className="btn btn-secondary btn-lg">
            View All Ministries <i className="fas fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MinistriesPreview;
