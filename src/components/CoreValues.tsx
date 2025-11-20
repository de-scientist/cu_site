import React from "react";

const CoreValues: React.FC = () => {
  return (
    <section className="core-values-section py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-center text-white">Our Core Values</h2>
        <p className="text-center lead mb-5 text-white-50">
          Rooted in faith and community, our values guide everything we do.
        </p>

        <div className="row justify-content-center">

          <div
            className="col-md-6 col-lg-4 mb-4"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="value-card text-center p-4 rounded-3 shadow-sm">
              <i className="fas fa-cross feature-icon mb-3"></i>
              <h4 className="value-title">Faith</h4>
              <p>
                Rooted in the Bible and a personal relationship with Jesus
                Christ, expressed through prayer, worship, and in-depth Bible
                study.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-4 mb-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="value-card text-center p-4 rounded-3 shadow-sm">
              <i className="fas fa-heart feature-icon mb-3"></i>
              <h4 className="value-title">Love</h4>
              <p>
                Demonstrating God’s unconditional love through genuine
                fellowship and a welcoming heart for all, as we are a &quot;home
                away from home&quot;.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-4 mb-4"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="value-card text-center p-4 rounded-3 shadow-sm">
              <i className="fas fa-lightbulb feature-icon mb-3"></i>
              <h4 className="value-title">Hope</h4>
              <p>
                Inspiring our community through positive words, encouraging
                actions, and unwavering faith in a world crambling with
                uncertainities.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-4 mb-4"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="value-card text-center p-4 rounded-3 shadow-sm">
              <i className="fas fa-church feature-icon mb-3"></i>
              <h4 className="value-title">Godliness</h4>
              <p>
                A commitment to striving for lives that honor and glorify God in
                all things, reflected in both personal conduct and collective
                activities.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-4 mb-4"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="value-card text-center p-4 rounded-3 shadow-sm">
              <i className="fas fa-users feature-icon mb-3"></i>
              <h4 className="value-title">Community</h4>
              <p>
                Dedicated to building a strong sense of belonging and mutual
                support among members, where everyone feels valued and
                connected.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-4 mb-4"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <div className="value-card text-center p-4 rounded-3 shadow-sm">
              <i className="fas fa-hand-holding-heart feature-icon mb-3"></i>
              <h4 className="value-title">Service</h4>
              <p>
                A core belief in putting faith into action by actively reaching
                out to serve the practical and spiritual needs of others.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreValues;
