// EventsSection.tsx
import React from "react";

const EventsSection: React.FC = () => {
  return (
    <section className="events-section py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-center">Upcoming Events</h2>
        <p className="text-center lead mb-5">
          Join us for worship, fellowship, and outreach!
        </p>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-4" data-aos="zoom-in" data-aos-delay={100}>
            <div className="card event-card h-100 shadow-sm">
              <img src="assets/images/church1.jpg" className="card-img-top" alt="Prayer Kesha" />
              <div className="card-body">
                <h4 className="card-title">Prayer Kesha</h4>
                <p className="card-text">
                  <i className="far fa-calendar-alt me-2"></i><strong>Date:</strong> September 26, 2025
                </p>
                <p className="card-text">
                  <i className="far fa-clock me-2"></i><strong>Time:</strong> 7:00 PM - 9:30 PM
                </p>
                <p className="card-text">
                  Join us for a night of intercession and spiritual revival.
                </p>
                <a href="events.html" className="btn btn-primary btn-sm mt-2">
                  Details & RSVP
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4" data-aos="zoom-in" data-aos-delay={200}>
            <div className="card event-card h-100 shadow-sm">
              <img src="assets/images/Dance1.jpg" className="card-img-top" alt="Praise Fest" />
              <div className="card-body">
                <h4 className="card-title">Praise Fest</h4>
                <p className="card-text">
                  <i className="far fa-calendar-alt me-2"></i><strong>Date:</strong> November 7, 2025
                </p>
                <p className="card-text">
                  <i className="far fa-clock me-2"></i><strong>Time:</strong> 7:00 PM - 9:30 PM
                </p>
                <p className="card-text">
                  Celebrate our God through our Music Ministry in a lively evening of praise and worship.
                </p>
                <a href="events.html" className="btn btn-primary btn-sm mt-2">
                  Details & RSVP
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4" data-aos="zoom-in" data-aos-delay={300}>
            <div className="card event-card h-100 shadow-sm">
              <img src="assets/images/final poster.png" className="card-img-top" alt="Christmas Cantata" />
              <div className="card-body">
                <h4 className="card-title">Creative Night </h4>
                <p className="card-text">
                  <i className="far fa-calendar-alt me-2"></i><strong>Date:</strong> October 10, 2025
                </p>
                <p className="card-text">
                  <i className="far fa-clock me-2"></i><strong>Time:</strong> 8:00 PM - 5:30 AM
                </p>
                <p className="card-text">
                  Experience a night full of creativity on the theme Ashes to Beauty though special ministrations and performance by our Creative Arts Ministry (CREAM).
                </p>
                <a href="events.html" className="btn btn-primary btn-sm mt-2">
                  Details & RSVP
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4" data-aos="zoom-in" data-aos-delay={400}>
          <a href="events.html" className="btn btn-secondary btn-lg">
            View All Events <i className="fas fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
