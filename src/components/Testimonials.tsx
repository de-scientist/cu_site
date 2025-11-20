import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-center mb-4">What Members Say</h2>
        <p className="text-center lead mb-5">
          Hear from students who have experienced transformation through MUTCU.
        </p>

        <div className="row g-4">

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="testimonial-card p-4 text-center shadow-sm bg-white rounded">
              <img
                src="/assets/images/member1.jpg"
                className="rounded-circle mb-3"
                width="100"
                height="100"
                alt="Member 1"
              />
              <h5 className="fw-bold">Samuel – Class Rep</h5>
              <p className="text-muted">
                “MUTCU helped me grow spiritually and become a confident leader.”
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="testimonial-card p-4 text-center shadow-sm bg-white rounded">
              <img
                src="/assets/images/member2.jpg"
                className="rounded-circle mb-3"
                width="100"
                height="100"
                alt="Member 2"
              />
              <h5 className="fw-bold">Grace – Worship Leader</h5>
              <p className="text-muted">
                “The worship team has been a family, helping me use my gifts for God.”
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="testimonial-card p-4 text-center shadow-sm bg-white rounded">
              <img
                src="/assets/images/member3.jpg"
                className="rounded-circle mb-3"
                width="100"
                height="100"
                alt="Member 3"
              />
              <h5 className="fw-bold">Daniel – Evangelist</h5>
              <p className="text-muted">
                “Outreach missions changed my life—God moves powerfully in MUTCU.”
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
