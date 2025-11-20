import React from "react";

const Introduction: React.FC = () => {
  return (
    <section className="py-5 introduction-section">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-7 mb-4 mb-lg-0" data-aos="fade-right" data-aos-delay="100">
            <h2 className="section-title">Who We Are</h2>
            <p className="lead">
             The Murang'a University of Technology Christian Union (MUTCU) is a lively, student-led religious organization operating within the university.
                         We are a non-denominational, non-political and non-profit making society committed to building in spiritual growth, nurturing leadership, and impacting society with the Gospel of Jesus Christ.
            </p>

            <p>
              As a proud member of{" "}
                <a href="https://focuskenya.org/" target="_blank" rel="noreferrer noopener"
                  className="text-decoration-none mutcu-link-orange">
                Fellowship of Christian Unions - Kenya (FOCUS-KENYA)
              </a>, MUTCU benefits from a national network of support and accountability. This affiliation ensures our activities are theologically sound, well-guided,
                         and contribute to broader Christian initiatives. Our identity and all functions are meticulously guided by a comprehensive constitution and detailed operational policies for each ministry.
            </p>
          </div>

          <div className="col-lg-5 text-center" data-aos="fade-left" data-aos-delay="200">
            <img
              src="/assets/images/Full Logo.png"
              className="img-fluid rounded-3 shadow-lg"
              alt="MUTCU Community"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Introduction;
