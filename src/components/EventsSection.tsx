import React from "react";

const EventsSection: React.FC = () => {
  return (
    <section className="events-section py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-center mb-4">Upcoming Events</h2>
        <p className="text-center lead mb-5">
          Stay connected with what’s happening around MUTCU and engage in impactful Christian fellowship.
        </p>

        <div className="row g-4">

          {/* Event 1 */}
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="event-card shadow-sm h-100">
              <img
                src="/assets/images/event1.jpg"
                alt="Event 1"
                className="img-fluid rounded-top"
              />
              <div className="p-3">
                <h4>Weekly Worship Service</h4>
                <p>Join us every Sunday for worship, prayer, and powerful teachings.</p>
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="event-card shadow-sm h-100">
              <img
                src="/assets/images/event2.jpg"
                alt="Event 2"
                className="img-fluid rounded-top"
              />
              <div className="p-3">
                <h4>Campus Evangelism</h4>
                <p>Sharing the Gospel across the campus through outreach missions.</p>
              </div>
            </div>
          </div>

          {/* Event 3 */}
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="event-card shadow-sm h-100">
              <img
                src="/assets/images/event3.jpg"
                alt="Event 3"
                className="img-fluid rounded-top"
              />
              <div className="p-3">
                <h4>Life Groups</h4>
                <p>Interactive fellowship meetings for spiritual growth and mentorship.</p>
              </div>
            </div>
          </div>

        </div>

        <div className="text-center mt-4">
          <a href="/events" className="btn btn-secondary btn-lg" data-aos="zoom-in">
            View All Events <i className="fas fa-calendar-alt ms-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
