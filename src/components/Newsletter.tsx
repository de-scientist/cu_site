import React from "react";

const Newsletter: React.FC = () => {
  return (
    <section className="newsletter-section py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-center mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-center lead mb-4">
          Stay updated with MUTCU events, devotionals, and ministry news.
        </p>

        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form className="d-flex shadow-sm p-2 bg-white rounded">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
                required
              />
              <button className="btn btn-primary ms-2">
                Subscribe <i className="fas fa-envelope-open ms-1" />
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;
