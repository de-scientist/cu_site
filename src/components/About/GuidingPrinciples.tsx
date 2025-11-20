import React from "react";

const GuidingPrinciples: React.FC = () => {
  return (
    <section className="py-5 bg-light principles-section">
      <div className="container">
        <h2 className="section-title text-center">Our Guiding Principles</h2>
        <p className="text-center lead mb-5">
          Our motto, vision, and mission are interconnected...
        </p>

        <div className="row text-center">

          {[
            { icon: "fa-bullhorn", title: "Our Motto", text: `"To Inspire Love, Hope, and Godliness."`, delay: 100 },
            { icon: "fa-eye", title: "Our Vision", text: `"To be a model Christian Union cultivating Christ-centeredness..."`, delay: 200 },
            { icon: "fa-hands-helping", title: "Our Mission", text: `"To raise a family well-equipped in all aspects..."`, delay: 300 },
          ].map((item, i) => (
            <div key={i} className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay={item.delay}>
              <div className="principle-card p-4 rounded-3 shadow-sm h-100">
                <i className={`fas ${item.icon} feature-icon mb-3`}></i>
                <h3 className="card-title">{item.title}</h3>
                <p className="lead-sm">{item.text}</p>
                <p>...</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default GuidingPrinciples;
