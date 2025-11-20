// HeroSection.tsx
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="page-hero-section d-flex align-items-center text-center text-white"
      style={{ backgroundImage: "url('assets/images/mbbc1.jpg')" }}
    >
      <div className="hero-overlay"></div>
      <div className="container position-relative" data-aos="fade-up" data-aos-duration={1000}>
        <h1 className="display-3 mb-3">Our Ministries</h1>
        <p className="lead">Where Faith Becomes Action: Serve, Grow, Impact</p>
      </div>
    </section>
  );
};

export default HeroSection;
