import React from "react";

const JoinMinistryCTA: React.FC = () => {
  return (
    <section className="py-5 cta-section text-white">
      <div className="container text-center" data-aos="zoom-in">
        <h2 className="section-title text-white">Join Our Music Ministry!</h2>
        <p className="lead mb-4 text-white-50">If you have a passion for worship through music, we invite you to join the Music Ministry. Click below to express your interest!</p>
        <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#joinMinistryModal">
          Join This Ministry <i className="fas fa-hand-fist ms-2"></i>
        </button>
      </div>
    </section>
  );
};

export default JoinMinistryCTA;
