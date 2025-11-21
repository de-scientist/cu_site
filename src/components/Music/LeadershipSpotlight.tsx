import React from "react";

const LeadershipSpotlight: React.FC = () => {
  return (
    <section className="py-5 leadership-spotlight-section text-white">
      <div className="container text-center" data-aos="zoom-in">
        <h2 className="section-title text-white">Ministry Leadership</h2>
        <p className="lead mb-4 text-white-50">Guided by dedicated leadership, our Music Ministry thrives.</p>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <a href="/committees/music" className="executive-member-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100 p-4">
              <img src="/assets/images/JABEZ.jpg" alt="Jabez Ayugu" className="img-fluid rounded-circle mb-3 border border-3 border-navy" />
              <h4 className="member-name">Jabez Ayugu</h4>
              <p className="member-role">Coordinator, Music Ministry</p>
              <span className="btn btn-sm btn-outline-light mt-2">View Profile <i className="fas fa-user-circle ms-2"></i></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSpotlight;
