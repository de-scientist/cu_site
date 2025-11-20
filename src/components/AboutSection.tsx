// AboutSection.tsx
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="about-section py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-center">About MUTCU</h2>
        <p className="text-center lead mb-5">
          Murang’a University of Technology Christian Union (MUTCU) is a lively, student-led society in MUT. We are affiliated with FOCUS-Kenya, dedicated to inspiring love, hope, and godliness through discipleship, evangelism, mission work, and leadership development.
        </p>
        <div className="row align-items-center">
          <div
            className="col-lg-6 mb-4 mb-lg-0 order-lg-1 order-2"
            data-aos="fade-right"
            data-aos-delay={100}
          >
            <h3 className="section-subtitle">Our Mission</h3>
            <p>
              To raise a family well-equipped in all aspects of life, exemplary to Jesus Christ, by encouraging unity as one body of Christ and reaching out to non-believers within and beyond.
            </p>
            <h3 className="section-subtitle mt-4">Our Vision</h3>
            <p>
              To be a model Christian Union cultivating Christ-centeredness among members to impact society.
            </p>
            <a
              href="about.html"
              className="btn btn-primary mt-3"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              Learn More About Us <i className="fas fa-info-circle ms-2"></i>
            </a>
          </div>
          <div
            className="col-lg-6 order-lg-2 order-1 text-center"
            data-aos="fade-left"
            data-aos-delay={200}
          >
            <img
              src="assets/images/prayer1.jpg"
              alt="MUTCU Community"
              className="img-fluid rounded-3 shadow-lg"
            />
          </div>
        </div>
        <div className="row mt-5">
          <div
            className="col-12 text-center"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <h3 className="section-subtitle">Doctrinal Basis</h3>
            <p className="text-muted">
              The Union's beliefs are based on the fundamental truths of Christianity as outlined in its constitution. This includes the unity of the Trinity, the sovereignty of God in creation and redemption, the divine inspiration and supreme authority of the Holy Scripture, the universal sinfulness of man, redemption solely through the sacrificial death of Jesus Christ, His bodily resurrection and ascension, and the sanctifying work of the Holy Spirit in every believer. This shared doctrinal foundation ensures unity in belief and purpose across all of MUTCU's diverse activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
