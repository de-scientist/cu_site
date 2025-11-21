import React from "react";

const PageHero: React.FC = () => {
  return (
    <section
      className="page-hero-section d-flex align-items-center text-center text-white"
      style={{ backgroundImage: "url('/assets/images/music1.jpg')" }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-bg" style={{ backgroundImage: "url('/assets/images/church2.jpg')" }}></div>

      <div className="container position-relative" data-aos="fade-up" data-aos-duration="1000">
        <h1 className="display-3 mb-3">MUTCU Music Ministry</h1>
        <p className="lead">Leading Worship and Glorifying God Through Song</p>
      </div>
    </section>
  );
};

export default PageHero;
