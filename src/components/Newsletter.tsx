// NewsletterSection.tsx
import React from "react";

const Newsletter: React.FC = () => {
  return (
    <section className="newsletter-section py-5 bg-gradient" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-center">Stay Connected</h2>
        <p className="text-center lead mb-5 text-50">
          Subscribe to our newsletter for updates on events, devotionals, and ministry opportunities.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6" data-aos="fade-up" data-aos-delay={100}>
            <form id="newsletterForm" className="p-4 rounded-3 shadow-lg">
              <div className="mb-4">
                <label htmlFor="newsletterEmail" className="form-label">
                  Email Address <span className="text-warning">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="newsletterEmail"
                  placeholder="your.email@example.com"
                  required
                  aria-describedby="newsletterEmailError"
                />
                <div id="newsletterEmailError" className="invalid-feedback">
                  Please enter a valid email address.
                </div>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-lg">
                  Subscribe <i className="fas fa-envelope-open-text ms-2"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
