import React from "react";
import { Link } from "react-router-dom";

const benefits = [
  { icon: "fa-hands-clapping", title: "Lively Fellowship", delay: 100 },
  { icon: "fa-brain", title: "Spiritual Growth", delay: 200 },
  { icon: "fa-person-digging", title: "Service Opportunities", delay: 300 },
  { icon: "fa-user-graduate", title: "Leadership Development", delay: 400 },
  { icon: "fa-hand-holding-dollar", title: "Welfare Support", delay: 500 },
  { icon: "fa-lightbulb", title: "Impactful Presence", delay: 600 },
];

const WhyJoin: React.FC = () => {
  return (
    <section className="py-5 join-section text-white">
      <div className="container">
        <h2 className="section-title text-center text-white">Why Join MUTCU?</h2>
        <p className="text-center lead mb-5 text-white-50">
          Become part of a thriving community...
        </p>

        <div className="row justify-content-center">
          <div className="col-lg-10">

            <div className="row">
              {benefits.map((item, i) => (
                <div key={i} className="col-md-4 mb-4"
                  data-aos="fade-up" data-aos-delay={item.delay}>
                  
                  <div className="join-benefit-card text-center p-4 rounded-3 shadow-sm h-100">
                    <i className={`fas ${item.icon} feature-icon mb-3`}></i>
                    <h4>{item.title}</h4>
                    <p>...</p>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>

        <div className="text-center mt-5" data-aos="zoom-in" data-aos-delay="700">
          <Link to="/contact" className="btn btn-primary btn-lg me-3">
            Join MUTCU Today! <i className="fas fa-user-plus ms-2"></i>
          </Link>
          <Link to="/ministries" className="btn btn-secondary btn-lg">
            Explore Ministries <i className="fas fa-users-cog ms-2"></i>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default WhyJoin;
