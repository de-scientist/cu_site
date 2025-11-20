import React from "react";

const StructureLeadership: React.FC = () => {
  return (
    <section className="py-5 structure-section bg-light">
      <div className="container">
        <h2 className="section-title text-center">Organizational Structure & Leadership</h2>
        <p className="text-center lead mb-5">
          MUTCU is a student-led organization...
        </p>

        <div className="row justify-content-center">
          <div className="col-lg-8" data-aos="fade-up">
            <div className="structure-overview p-4 rounded-3 shadow-lg mb-4">
              <h3 className="section-subtitle text-center mb-4">Executive Council</h3>
              <p>...</p>
              <p>...</p>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          {[
            { icon: "fa-sitemap", title: "Committees", delay: 100 },
            { icon: "fa-users-gear", title: "Operational Policies", delay: 200 },
          ].map((item, i) => (
            <div key={i} className="col-md-6 mb-4" data-aos="fade-right" data-aos-delay={item.delay}>
              <div className="structure-card p-4 rounded-3 shadow-sm h-100">
                <i className={`fas ${item.icon} feature-icon mb-3`}></i>
                <h4>{item.title}</h4>
                <p>...</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StructureLeadership;
