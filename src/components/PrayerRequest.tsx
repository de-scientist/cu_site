// PrayerSection.tsx
import React from "react";

const PrayerRequest: React.FC = () => {
  return (
    <section className="prayer-section py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-center">Need Prayers?</h2>
        <p className="text-center lead mb-5">
          Our Prayer Ministry is here to support you in faith and intercession. Submit your requests confidentially.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6" data-aos="fade-up" data-aos-delay={100}>
            <form id="prayerForm" className="p-4 rounded-3 shadow-lg">
              <div className="mb-4">
                <label htmlFor="prayerName" className="form-label">Your Name (Optional)</label>
                <input
                  type="text"
                  className="form-control"
                  id="prayerName"
                  placeholder="Enter your name"
                  aria-describedby="prayerNameHelp"
                />
                <div id="prayerNameHelp" className="form-text">
                  You may submit anonymously if preferred.
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="prayerRequest" className="form-label">
                  Prayer Request <span className="text-danger">*</span>
                </label>
                <textarea
                  className="form-control"
                  id="prayerRequest"
                  rows={6}
                  placeholder="Share your prayer request here..."
                  required
                  aria-describedby="prayerRequestError"
                ></textarea>
                <div id="prayerRequestError" className="invalid-feedback">
                  Please enter your prayer request.
                </div>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-lg">
                  Submit Request <i className="fas fa-paper-plane ms-2"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerRequest;
