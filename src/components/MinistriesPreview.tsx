import React from "react";

const MinistriesPreview: React.FC = () => {
  return (
    <section className="ministries-preview-section py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-center mb-4">Our Ministries</h2>
        <p className="text-center lead mb-5">
          MUTCU is structured into various ministries to help students grow spiritually and serve effectively.
        </p>

        <div className="row g-4">
          {/* Prayer Ministry */}
          <div className="col-md-4" data-aos="fade-right">
            <div className="ministry-card p-4 text-center shadow-sm h-100">
              <img
                src="/assets/images/prayer2.jpg"
                alt="Prayer Ministry"
                className="img-fluid rounded mb-3"
              />
              <h4>Prayer Ministry</h4>
              <p>
                Intercedes for the union, students, and nation while nurturing a culture of deep fellowship with God.
              </p>
            </div>
          </div>

          {/* Worship Ministry */}
          <div className="col-md-4" data-aos="fade-up">
            <div className="ministry-card p-4 text-center shadow-sm h-100">
              <img
                src="/assets/images/worship1.jpg"
                alt="Worship Ministry"
                className="img-fluid rounded mb-3"
              />
              <h4>Worship Ministry</h4>
              <p>
                Leads the congregation in praise and worship by cultivating musical gifts and spiritual devotion.
              </p>
            </div>
          </div>

          {/* Evangelism Ministry */}
          <div className="col-md-4" data-aos="fade-left">
            <div className="ministry-card p-4 text-center shadow-sm h-100">
              <img
                src="/assets/images/outreach1.jpg"
                alt="Evangelism Ministry"
                className="img-fluid rounded mb-3"
              />
              <h4>Evangelism Ministry</h4>
              <p>
                Reaches out with the Gospel through missions, campus evangelism, and community outreach.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <a href="/ministries" className="btn btn-primary btn-lg" data-aos="zoom-in">
            See All Ministries <i className="fas fa-arrow-right ms-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MinistriesPreview;
