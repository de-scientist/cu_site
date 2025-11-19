import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import PrayerForm from '../components/PrayerRequest';
import NewsletterForm from '../components/NewsletterForm';

const Home: React.FC = () => {
  return (
    <>
      <HeroCarousel />

      <section className="about-section py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title text-center">About MUTCU</h2>
          <p className="text-center lead mb-5">Murang’a University of Technology Christian Union (MUTCU) is a lively, student-led society in MUT. We are affiliated with FOCUS-Kenya, dedicated to inspiring love, hope, and godliness through discipleship, evangelism, mission work, and leadership development.</p>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 order-lg-1 order-2" data-aos="fade-right">
              <h3 className="section-subtitle">Our Mission</h3>
              <p>To raise a family well-equipped in all aspects of life, exemplary to Jesus Christ, by encouraging unity as one body of Christ and reaching out to non-believers within and beyond.</p>
              <h3 className="section-subtitle mt-4">Our Vision</h3>
              <p>To be a model Christian Union cultivating Christ-centeredness among members to impact society.</p>
            </div>
            <div className="col-lg-6 order-lg-2 order-1 text-center" data-aos="fade-left">
              <img src="/assets/images/prayer1.jpg" alt="MUTCU Community" className="img-fluid rounded-3 shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Core values, ministries preview, events preview, testimonials, gallery previews can be split like this */}
      <section className="core-values-section py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title text-center text-white">Our Core Values</h2>
          <p className="text-center lead mb-5 text-white-50">Rooted in faith and community, our values guide everything we do.</p>
          <div className="row justify-content-center">
            {/* value cards (copy from static html) */}
            <div className="col-md-6 col-lg-4 mb-4" data-aos="zoom-in">
              <div className="value-card text-center p-4 rounded-3 shadow-sm">
                <i className="fas fa-cross feature-icon mb-3"></i>
                <h4 className="value-title">Faith</h4>
                <p>Rooted in the Bible and a personal relationship with Jesus Christ, expressed through prayer, worship, and in-depth Bible study.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4" data-aos="zoom-in">
              <div className="value-card text-center p-4 rounded-3 shadow-sm">
                <i className="fas fa-heart feature-icon mb-3"></i>
                <h4 className="value-title">Love</h4>
                <p>Demonstrating God’s unconditional love through genuine fellowship and a welcoming heart for all, as we are a "home away from home".</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4" data-aos="zoom-in">
              <div className="value-card text-center p-4 rounded-3 shadow-sm">
                <i className="fas fa-lightbulb feature-icon mb-3"></i>
                <h4 className="value-title">Hope</h4>
                <p>Inspiring our community through positive words, encouraging actions, and unwavering faith in a world crambling with uncertainities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ministries-section py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title text-center">Our Ministries</h2>
          <p className="text-center lead mb-5">Join a ministry to grow in faith and serve others.</p>
          <div className="row justify-content-center">
            {/* 4 ministry cards */}
            <div className="col-md-6 col-lg-3 mb-4" data-aos="zoom-in">
              <div className="card ministry-card h-100 shadow-sm">
                <img src="/assets/images/music1.jpg" className="card-img-top" alt="Music Ministry" />
                <div className="card-body text-center">
                  <i className="fas fa-music feature-icon mb-2"></i>
                  <h4 className="card-title">Music Ministry</h4>
                  <p className="card-text">Leading and ministering worship through Choir, Band, Instrumentalism and Praise & Worship.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4" data-aos="zoom-in">
              <div className="card ministry-card h-100 shadow-sm">
                <img src="/assets/images/bs1.jpg" className="card-img-top" alt="Bible Study" />
                <div className="card-body text-center">
                  <i className="fas fa-book-open feature-icon mb-2"></i>
                  <h4 className="card-title">Bible Study & Discipleship</h4>
                  <p className="card-text">Deepening faith through small groups and resourceful training programs.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4" data-aos="zoom-in">
              <div className="card ministry-card h-100 shadow-sm">
                <img src="/assets/images/mission1.jpg" className="card-img-top" alt="Missions" />
                <div className="card-body text-center">
                  <i className="fas fa-globe feature-icon mb-2"></i>
                  <h4 className="card-title">Missions & Evangelism</h4>
                  <p className="card-text">Sharing the Gospel through campus outreach and mission visits.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4" data-aos="zoom-in">
              <div className="card ministry-card h-100 shadow-sm">
                <img src="/assets/images/dance3.jpg" className="card-img-top" alt="Creative" />
                <div className="card-body text-center">
                  <i className="fas fa-paint-brush feature-icon mb-2"></i>
                  <h4 className="card-title">Creative Ministry</h4>
                  <p className="card-text">Drama, dance, spoken word and arts — worship through creativity.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <a href="/ministries" className="btn btn-secondary btn-lg">View All Ministries <i className="fas fa-arrow-right ms-2"></i></a>
          </div>
        </div>
      </section>

      <section className="events-section py-5 bg-light" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title text-center">Upcoming Events</h2>
          <p className="text-center lead mb-5">Join us for worship, fellowship, and outreach!</p>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-4" data-aos="zoom-in">
              <div className="card event-card h-100 shadow-sm">
                <img src="/assets/images/church1.jpg" className="card-img-top" alt="Prayer Kesha" />
                <div className="card-body">
                  <h4 className="card-title">Prayer Kesha</h4>
                  <p className="card-text"><i className="far fa-calendar-alt me-2"></i><strong>Date:</strong> September 26, 2025</p>
                  <p className="card-text"><i className="far fa-clock me-2"></i><strong>Time:</strong> 7:00 PM - 9:30 PM</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4" data-aos="zoom-in">
              <div className="card event-card h-100 shadow-sm">
                <img src="/assets/images/Dance1.jpg" className="card-img-top" alt="Praise Fest" />
                <div className="card-body">
                  <h4 className="card-title">Praise Fest</h4>
                  <p className="card-text"><i className="far fa-calendar-alt me-2"></i><strong>Date:</strong> November 7, 2025</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <a href="/events" className="btn btn-secondary btn-lg">View All Events <i className="fas fa-arrow-right ms-2"></i></a>
          </div>
        </div>
      </section>

      <section className="prayer-section py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title text-center">Need Prayers?</h2>
          <p className="text-center lead mb-5">Our Prayer Ministry is here to support you in faith and intercession. Submit your requests confidentially.</p>
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <PrayerForm />
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter-section py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title text-center">Stay Connected</h2>
          <p className="text-center lead mb-5">Subscribe to our newsletter for updates on events, devotionals, and ministry opportunities.</p>
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
