import React from 'react';

const Ministries: React.FC = () => {
  return (
    <section className="ministries-section py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-center">Our Ministries</h2>
        <p className="text-center lead mb-5">Join a ministry to grow in faith and serve others.</p>
        <div className="row justify-content-center">
          {/* Repeat full ministry cards */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card ministry-card h-100 shadow-sm">
              <img src="/assets/images/music1.jpg" className="card-img-top" alt="Music Ministry" />
              <div className="card-body text-center">
                <i className="fas fa-music feature-icon mb-2"></i>
                <h4 className="card-title">Music Ministry</h4>
                <p className="card-text">Leading and ministering worship through Choir, Band, Instrumentalism and Praise & Worship.</p>
              </div>
            </div>
          </div>

          {/* More ministry cards... */}
        </div>
      </div>
    </section>
  );
};

export default Ministries;
