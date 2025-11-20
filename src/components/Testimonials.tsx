// TestimonialsSection.tsx
import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-center">What Our Members Say</h2>
        <p className="text-center lead mb-5 text-50">
          Hear from our Members about their MUTCU experience.
        </p>
        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval={7000}
        >
          <div className="carousel-inner">
            {/* Testimonial 1 */}
            <div className="carousel-item active">
              <div
                className="testimonial-card mx-auto text-center p-4 rounded-3 shadow-sm"
                data-aos="zoom-in"
              >
                <img
                  src="assets/images/prudence.jpg"
                  alt="Prudence Chepkurui"
                  className="rounded-circle mb-3"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <i className="fas fa-quote-left fa-2x mb-3 text-orange"></i>
                <p className="lead">
                  “MUTCU has been my family away from home. The fellowship and discipleship have deepened my faith and helped me navigate university life.”
                </p>
                <p className="mt-4">
                  <strong>– Prudence Chepkurui, Computer Science, 4th Year</strong>
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="carousel-item">
              <div
                className="testimonial-card mx-auto text-center p-4 rounded-3 shadow-sm"
                data-aos="zoom-in"
              >
                <img
                  src="assets/images/joseph.jpg"
                  alt="Joseph Mbogo"
                  className="rounded-circle mb-3"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <i className="fas fa-quote-left fa-2x mb-3 text-orange"></i>
                <p className="lead">
                  “The Music Ministry has transformed my worship, teaching me to serve with excellence and passion. It's truly inspiring.”
                </p>
                <p className="mt-4">
                  <strong>– Joseph Mbogo, Electrical Engineering, 2nd Year</strong>
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="carousel-item">
              <div
                className="testimonial-card mx-auto text-center p-4 rounded-3 shadow-sm"
                data-aos="zoom-in"
              >
                <img
                  src="assets/images/grace.jpg"
                  alt="Grace Akinyi"
                  className="rounded-circle mb-3"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <i className="fas fa-quote-left fa-2x mb-3 text-orange"></i>
                <p className="lead">
                  “The Missions and Evangelism docket showed me how God uses ordinary students to bring hope and transformation to communities. It was a life-changing experience.”
                </p>
                <p className="mt-4">
                  <strong>– Grace Akinyi, Medical Lab, 2nd Year</strong>
                </p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
            aria-label="Previous testimonial"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
            aria-label="Next testimonial"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
