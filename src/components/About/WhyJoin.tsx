// WhyJoinMUTCU.tsx
import React from "react";

interface JoinBenefitProps {
  iconClass: string;
  title: string;
  description: string;
  aosDelay: number;
}

const JoinBenefitCard: React.FC<JoinBenefitProps> = ({ iconClass, title, description, aosDelay }) => {
  return (
    <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay={aosDelay}>
      <div className="join-benefit-card text-center p-4 rounded-3 shadow-sm h-100">
        <i className={iconClass + " feature-icon mb-3"}></i>
        <h4 className="card-title">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

const WhyJoin: React.FC = () => {
  const benefits: JoinBenefitProps[] = [
    {
      iconClass: "fas fa-hands-clapping",
      title: "lively Fellowship",
      description:
        "Experience genuine Christian fellowship and build lasting friendships in a supportive environment.",
      aosDelay: 100,
    },
    {
      iconClass: "fas fa-brain",
      title: "Spiritual Growth",
      description:
        "Deepen your faith through Bible studies, discipleship programs, and powerful worship experiences.",
      aosDelay: 200,
    },
    {
      iconClass: "fas fa-person-digging",
      title: "Service Opportunities",
      description:
        "Engage in meaningful ministry and outreach, making a tangible difference in the university and beyond.",
      aosDelay: 300,
    },
    {
      iconClass: "fas fa-user-graduate",
      title: "Leadership Development",
      description:
        "Develop essential leadership skills through various roles and mentorship opportunities.",
      aosDelay: 400,
    },
    {
      iconClass: "fas fa-hand-holding-dollar",
      title: "Welfare Support",
      description:
        "Receive and offer support through our Welfare Committee, a tangible expression of community care.",
      aosDelay: 500,
    },
    {
      iconClass: "fas fa-lightbulb",
      title: "Impactful Presence",
      description:
        "Contribute to a Christ-centered environment that impacts the entire university and wider society.",
      aosDelay: 600,
    },
  ];

  return (
    <section className="py-5 join-section text-white">
      <div className="container">
        <h2 className="section-title text-center text-white">Why Join MUTCU?</h2>
        <p className="text-center lead mb-5 text-white-50">
          Become part of a thriving community dedicated to spiritual growth and impactful service.
        </p>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row">
              {benefits.map((benefit, index) => (
                <JoinBenefitCard key={index} {...benefit} />
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-5" data-aos="zoom-in" data-aos-delay={700}>
          <a href="contact.html" className="btn btn-primary btn-lg me-3">
            Join MUTCU Today! <i className="fas fa-user-plus ms-2"></i>
          </a>
          <a href="ministries.html" className="btn btn-secondary btn-lg">
            Explore Ministries <i className="fas fa-users-cog ms-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
