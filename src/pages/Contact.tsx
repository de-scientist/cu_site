import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-center">Contact</h2>
        <p className="text-center lead mb-5">Reach out to us for info, partnerships or prayer support.</p>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card p-4 shadow-sm">
              <h5>Office</h5>
              <p><i className="fas fa-map-marker-alt me-2"></i> Murang’a University of Technology, Murang’a, Kenya</p>
              <p><i className="fas fa-phone me-2"></i> +254 712 345 678</p>
              <p><i className="fas fa-envelope me-2"></i> info@mutcu.ac.ke</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
