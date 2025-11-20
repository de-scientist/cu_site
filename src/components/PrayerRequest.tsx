import React from "react";

const PrayerRequest: React.FC = () => {
  return (
    <section className="prayer-request-section py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-center mb-4">Submit Your Prayer Request</h2>
        <p className="text-center lead mb-5">
          We would be honored to stand with you in prayer. Share your request below.
        </p>

        <div className="row justify-content-center">
          <div className="col-lg-8">

            <form className="p-4 shadow rounded bg-white">
              <div className="mb-3">
                <label className="form-label fw-bold">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" required />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" required />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Prayer Request</label>
                <textarea className="form-control" rows={5} placeholder="Write your prayer request here..." required />
              </div>

              <div className="text-center">
                <button className="btn btn-primary btn-lg" type="submit">
                  Submit Request <i className="fas fa-paper-plane ms-2" />
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
