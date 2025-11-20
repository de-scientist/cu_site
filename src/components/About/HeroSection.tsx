import React from "react";

const HeroSection: React.FC = () => {
  return (
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
  );
};

export default HeroSection;
