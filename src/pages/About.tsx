import React from "react";
import { Link } from "react-router-dom";
import { usePageEffects } from "../hooks/usePageEffects";

const About: React.FC = () => {
  usePageEffects();

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" aria-label="Main navigation">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/assets/images/best logo.png" alt="MUTCU Logo" height="60" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/ministries">Ministries</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/events">Events</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/resources">Resources</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/gallery">Gallery</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="page-hero-section d-flex align-items-center text-center text-white"
        style={{ backgroundImage: "url('/assets/images/church2.jpg')" }}
      >
        <div className="hero-overlay"></div>
        <div className="container position-relative" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="display-3 mb-3">About MUTCU</h1>
          <p className="lead">Inspiring Love, Hope & Godliness</p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-5 introduction-section">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-7 mb-4 mb-lg-0"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h2 className="section-title">Who We Are</h2>
              <p className="lead">
                The Murang'a University of Technology Christian Union (MUTCU)
                is a lively, student-led religious organization...
              </p>

              <p>
                As a proud member of{" "}
                <a
                  href="https://focuskenya.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none mutcu-link-orange"
                >
                  FOCUS-KENYA
                </a>
                , MUTCU benefits from a national network of support...
              </p>
            </div>

            <div
              className="col-lg-5 text-center"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <img
                src="/assets/images/Full Logo.png"
                alt="MUTCU Community"
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GUIDING PRINCIPLES */}
      <section className="py-5 bg-light principles-section">
        <div className="container">
          <h2 className="section-title text-center">Our Guiding Principles</h2>
          <p className="text-center lead mb-5">
            Our motto, vision, and mission are interconnected...
          </p>

          <div className="row text-center">
            {/* Motto */}
            <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="principle-card p-4 rounded-3 shadow-sm h-100">
                <i className="fas fa-bullhorn feature-icon mb-3"></i>
                <h3 className="card-title">Our Motto</h3>
                <p className="lead-sm">"To Inspire Love, Hope, and Godliness."</p>
                <p>This motto serves as our daily call to action...</p>
              </div>
            </div>

            {/* Vision */}
            <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="principle-card p-4 rounded-3 shadow-sm h-100">
                <i className="fas fa-eye feature-icon mb-3"></i>
                <h3 className="card-title">Our Vision</h3>
                <p className="lead-sm">
                  "To be a model Christian Union cultivating Christ-centeredness..."
                </p>
                <p>Our long-term aspiration is to be an exemplary union...</p>
              </div>
            </div>

            {/* Mission */}
            <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="300">
              <div className="principle-card p-4 rounded-3 shadow-sm h-100">
                <i className="fas fa-hands-helping feature-icon mb-3"></i>
                <h3 className="card-title">Our Mission</h3>
                <p className="lead-sm">
                  "To raise a family well-equipped in all aspects..."
                </p>
                <p>Our mission focuses on equipping members holistically...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AIMS */}
      <section className="py-5 aims-section">
        <div className="container">
          <h2 className="section-title text-center">Aims of The Union</h2>
          <p className="text-center lead mb-5">
            MUTCU operates with clear objectives...
          </p>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row">

                {/* Repeatable Pattern */}
                {[
                  { icon: "fa-book-bible", title: "Biblical Discipleship", delay: 100 },
                  { icon: "fa-user-plus", title: "Evangelism & Outreach", delay: 200 },
                  { icon: "fa-users-line", title: "Fellowship & Unity", delay: 300 },
                  { icon: "fa-handshake", title: "Leadership Development", delay: 400 },
                  { icon: "fa-graduation-cap", title: "Academic Excellence", delay: 500 },
                  { icon: "fa-hands-holding-circle", title: "Social Responsibility", delay: 600 },
                ].map((item, idx) => (
                  <div
                    className="col-md-6 mb-4"
                    key={idx}
                    data-aos="fade-up"
                    data-aos-delay={item.delay}
                  >
                    <div className="aim-item d-flex align-items-start p-3 rounded-3 shadow-sm h-100">
                      <i className={`fas ${item.icon} aim-icon me-3 flex-shrink-0`}></i>
                      <div>
                        <h4>{item.title}</h4>
                        <p>...</p>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTRINAL BASIS */}
      <section className="py-5 doctrinal-section text-white">
        <div className="container">
          <h2 className="section-title text-center text-white">
            Our Doctrinal Basis
          </h2>
          <p className="text-center lead mb-5 text-white-50">
            Our beliefs are founded on the fundamental truths...
          </p>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div
                className="doctrinal-content p-4 rounded-3 shadow-lg"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p>We believe in and hold the following truths:</p>

                <ul className="list-unstyled doctrinal-list">
                  {[
                    "The unity of the Father, Son, and Holy Spirit...",
                    "The sovereignty of God in creation...",
                    "The divine inspiration and infallibility of Scripture...",
                    "The universal sinfulness of man...",
                    "Redemption through the death of Jesus Christ...",
                    "The bodily resurrection of Christ...",
                    "The presence and power of the Holy Spirit...",
                    "Justification by grace through faith...",
                    "The indwelling of the Holy Spirit...",
                    "The one Holy Universal Church...",
                    "The visible return of Jesus Christ..."
                  ].map((text, i) => (
                    <li
                      key={i}
                      data-aos="fade-right"
                      data-aos-delay={200 + i * 100}
                    >
                      <i className="fas fa-check-circle me-2"></i> {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRUCTURE & LEADERSHIP */}
      <section className="py-5 structure-section bg-light">
        <div className="container">
          <h2 className="section-title text-center">
            Organizational Structure & Leadership
          </h2>
          <p className="text-center lead mb-5">
            MUTCU is a student-led organization...
          </p>

          <div className="row justify-content-center">
            <div className="col-lg-8" data-aos="fade-up">
              <div className="structure-overview p-4 rounded-3 shadow-lg mb-4">
                <h3 className="section-subtitle text-center mb-4">
                  Executive Council
                </h3>
                <p>...</p>
                <p>...</p>
              </div>
            </div>
          </div>

          {/* Committee Cards */}
          <div className="row mt-4">
            {[
              {
                icon: "fa-sitemap",
                title: "Committees",
                delay: 100,
              },
              {
                icon: "fa-users-gear",
                title: "Operational Policies",
                delay: 200,
              },
            ].map((item, idx) => (
              <div
                className="col-md-6 mb-4"
                key={idx}
                data-aos="fade-right"
                data-aos-delay={item.delay}
              >
                <div className="structure-card p-4 rounded-3 shadow-sm h-100">
                  <i className={`fas ${item.icon} feature-icon mb-3`}></i>
                  <h4 className="card-title">{item.title}</h4>
                  <p>...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXECUTIVE COMMITTEE */}
      <section className="py-5 executive-committee-section">
        <div className="container">
          <h2 className="section-title text-center">Meet Our Executive Committee</h2>
          <p className="text-center lead mb-5">
            Leading MUTCU for the 2024/2025 Spiritual Year.
          </p>

          <div className="row justify-content-center">
            {[
              { name: "Ezekiel Thaara", role: "Chairman", img: "EZEKIEL.jpg", delay: 100 },
              { name: "Jesca Kinya", role: "1st Vice Chair", img: "JES.jpg", delay: 200 },
              { name: "Martin Gitau", role: "2nd Vice Chair", img: "MARTIN.jpg", delay: 300 },
              { name: "Grace Kanyiri", role: "Secretary", img: "GRACE.jpg", delay: 400 },
              { name: "Daisy Mutheu", role: "Vice Secretary", img: "DAISY.jpg", delay: 500 },
              { name: "Joy Karimi", role: "Treasurer", img: "JOY.jpg", delay: 600 },
              { name: "Purity Njeri", role: "Bible Study & Discipleship Coordinator", img: "PURITY.jpg", delay: 700 },
              { name: "Roy Ndege", role: "Prayer Coordinator", img: "PRAYER.jpg", delay: 800 },
              { name: "Yusuf Muchiri", role: "Missions & Evangelism Coordinator", img: "YUSUF.jpg", delay: 900 },
              { name: "Jabez Ayugu", role: "Music Coordinator", img: "JABEZ.jpg", delay: 1000 },
              { name: "Joseph Mbogo", role: "Technical Coordinator", img: "JOSEPH.jpg", delay: 1100 },
              { name: "Brian Ingwee", role: "Creative Ministry Coordinator", img: "Ingwee.JPG", delay: 1200 },
            ].map((member, i) => (
              <div
                className="col-6 col-md-4 col-lg-3 mb-4"
                key={i}
                data-aos="zoom-in"
                data-aos-delay={member.delay}
              >
                <Link
                  to={`/committee/${member.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="executive-member-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100"
                >
                  <img
                    src={`/assets/images/${member.img}`}
                    alt={member.name}
                    className="img-fluid rounded-circle mb-3 border border-3 border-orange"
                  />
                  <h4 className="member-name">{member.name}</h4>
                  <p className="member-role">{member.role}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="py-5 join-section text-white">
        <div className="container">
          <h2 className="section-title text-center text-white">Why Join MUTCU?</h2>
          <p className="text-center lead mb-5 text-white-50">
            Become part of a thriving community...
          </p>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row">
                {[
                  { icon: "fa-hands-clapping", title: "Lively Fellowship", delay: 100 },
                  { icon: "fa-brain", title: "Spiritual Growth", delay: 200 },
                  { icon: "fa-person-digging", title: "Service Opportunities", delay: 300 },
                  { icon: "fa-user-graduate", title: "Leadership Development", delay: 400 },
                  { icon: "fa-hand-holding-dollar", title: "Welfare Support", delay: 500 },
                  { icon: "fa-lightbulb", title: "Impactful Presence", delay: 600 },
                ].map((benefit, i) => (
                  <div
                    className="col-md-4 mb-4"
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={benefit.delay}
                  >
                    <div className="join-benefit-card text-center p-4 rounded-3 shadow-sm h-100">
                      <i className={`fas ${benefit.icon} feature-icon mb-3`}></i>
                      <h4 className="card-title">{benefit.title}</h4>
                      <p>...</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-5" data-aos="zoom-in" data-aos-delay="700">
            <Link to="/contact" className="btn btn-primary btn-lg me-3">
              Join MUTCU Today! <i className="fas fa-user-plus ms-2"></i>
            </Link>
            <Link to="/ministries" className="btn btn-secondary btn-lg">
              Explore Ministries <i className="fas fa-users-cog ms-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer py-5">
        <div className="container">
          <div className="row">
            {/* About */}
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="footer-title">About MUTCU</h5>
              <p className="footer-text">
                Murang’a University of Technology Christian Union is a
                non-denominational community...
              </p>
            </div>

            {/* Links */}
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="footer-title">Quick Links</h5>
              <ul className="list-unstyled footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/ministries">Ministries</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-md-4">
              <h5 className="footer-title">Connect With Us</h5>
              <p className="footer-contact">
                <i className="fas fa-map-marker-alt me-2"></i>
                Murang’a University of Technology, Kenya
              </p>
              <p className="footer-contact">
                <i className="fas fa-phone me-2"></i> +254 712 345 678
              </p>
              <p className="footer-contact">
                <i className="fas fa-envelope me-2"></i> info@mutcu.ac.ke
              </p>
              <p className="footer-contact">
                <i className="fas fa-clock me-2"></i> Mon–Fri, 8:00 AM – 5:00 PM
              </p>

              <div className="social-icons mt-3">
                <a href="#" className="me-3"><i className="fab fa-facebook-f fa-lg"></i></a>
                <a href="#" className="me-3"><i className="fab fa-instagram fa-lg"></i></a>
                <a href="#"><i className="fab fa-twitter fa-lg"></i></a>
              </div>
            </div>
          </div>

          <div className="text-center mt-5 border-top pt-4">
            <p className="footer-text mb-1">
              &copy; 2025 Murang’a University of Technology Christian Union.
            </p>
            <p className="footer-text">Designed by MUTCU Tech Team</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
