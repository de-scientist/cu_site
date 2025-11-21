import React from "react";

const FeaturedEvents: React.FC = () => {
  return (
    <section className="py-5 key-events-section text-white">
      <div className="container">
        <h2 className="section-title text-center text-white">Featured Events</h2>
        <p className="text-center lead mb-5 text-white-50">The Music Ministry plays a vital role in some of MUTCU's most anticipated events.</p>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-right" data-aos-delay="100">
            <div className="event-highlight-card p-4 rounded-3 shadow-sm h-100">
              <i className="fas fa-star event-icon mb-3"></i>
              <h4 className="card-title">Praise Fest</h4>
              <p>A special service dedicated to high-energy praise and worship, featuring ministrations from all Music Ministry teams. It's a powerful time of corporate worship.</p>
              <p className="mb-0 text-muted"><i className="fas fa-calendar-alt me-2"></i> Next Date: 7th November (as per program)</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="event-highlight-card p-4 rounded-3 shadow-sm h-100">
              <i className="fas fa-holly-berry event-icon mb-3"></i>
              <h4 className="card-title">Christmas Cantata</h4>
              <p>A collaborative worship experience, often with the Creative Arts Ministry, celebrating the birth of Jesus through a blend of music, drama, and other creative expressions. A highlight of the spiritual year.</p>
              <p className="mb-0 text-muted"><i className="fas fa-calendar-alt me-2"></i> Next Date: 12th December (as per program)</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-left" data-aos-delay="300">
            <div className="event-highlight-card p-4 rounded-3 shadow-sm h-100">
              <i className="fas fa-hand-holding-heart event-icon mb-3"></i>
              <h4 className="card-title">Worship Experiences</h4>
              <p>Special worship services held throughout the semester, providing opportunities for members to engage in deep spiritual worship and connect with God through music.</p>
              <p className="mb-0 text-muted"><i className="fas fa-calendar-alt me-2"></i> Frequency: Weekly (Friday Services)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
