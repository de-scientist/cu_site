import React from 'react';

const Events: React.FC = () => {
  return (
    <section className="events-section py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-center">Upcoming Events</h2>
        <p className="text-center lead mb-5">Join us for worship, fellowship, and outreach!</p>
        <div className="row justify-content-center">
          {/* Event cards (copy content from static HTML or make dynamic later) */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card event-card h-100 shadow-sm">
              <img src="/assets/images/church1.jpg" className="card-img-top" alt="Event" />
              <div className="card-body">
                <h4 className="card-title">Prayer Kesha</h4>
                <p className="card-text"><strong>Date:</strong> September 26, 2025</p>
                <p className="card-text"><strong>Time:</strong> 7:00 PM - 9:30 PM</p>
                <p className="card-text">Join us for a night of intercession and spiritual revival.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
