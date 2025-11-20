import React from "react";

const aims = [
  { icon: "fa-book-bible", title: "Biblical Discipleship", delay: 100 },
  { icon: "fa-user-plus", title: "Evangelism & Outreach", delay: 200 },
  { icon: "fa-users-line", title: "Fellowship & Unity", delay: 300 },
  { icon: "fa-handshake", title: "Leadership Development", delay: 400 },
  { icon: "fa-graduation-cap", title: "Academic Excellence", delay: 500 },
  { icon: "fa-hands-holding-circle", title: "Social Responsibility", delay: 600 },
];

const Aims: React.FC = () => {
  return (
    <section className="py-5 aims-section">
      <div className="container">
        <h2 className="section-title text-center">Aims of The Union</h2>
        <p className="text-center lead mb-5">MUTCU operates with clear objectives...</p>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row">

              {aims.map((item, i) => (
                <div key={i} className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay={item.delay}>
                  <div className="aim-item d-flex align-items-start p-3 rounded-3 shadow-sm h-100">
                    <i className={`fas ${item.icon} aim-icon me-3`}></i>
                    <div>
                      <h4>{item.title}</h4>
                      <p>...</p>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aims;
