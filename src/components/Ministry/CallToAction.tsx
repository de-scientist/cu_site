import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="py-5 cta-section text-white">
      <div className="container text-center" data-aos="zoom-in">
        <h2 className="section-title text-white">Find Your Place to Serve!</h2>
        <p className="lead mb-4 text-white-50">
          There's a ministry for every passion and gift. Join us in making a difference.
        </p>
        <a href="contact.html" className="btn btn-primary btn-lg me-3">
          Get Involved <i className="fas fa-hand-fist ms-2"></i>
        </a>
        <a href="about.html" className="btn btn-secondary btn-lg">
          Learn About Leadership <i className="fas fa-users-gear ms-2"></i>
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
