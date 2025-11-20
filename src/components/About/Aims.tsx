// AimsSection.tsx
import React from "react";

interface AimItemProps {
  iconClass: string;
  title: string;
  description: string;
  aosDelay: number;
}

const AimItem: React.FC<AimItemProps> = ({ iconClass, title, description, aosDelay }) => {
  return (
    <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay={aosDelay}>
      <div className="aim-item d-flex align-items-start p-3 rounded-3 shadow-sm h-100">
        <i className={iconClass + " aim-icon me-3 flex-shrink-0"}></i>
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Aims: React.FC = () => {
  return (
    <section className="py-5 aims-section">
      <div className="container">
        <h2 className="section-title text-center">Aims of The Union</h2>
        <p className="text-center lead mb-5">
          MUTCU operates with clear objectives to fulfill its mission and vision.
        </p>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row">
              <AimItem
                iconClass="fas fa-book-bible"
                title="Biblical Discipleship"
                description="To deepen members' understanding of the Bible and encourage practical application of its teachings in their daily lives."
                aosDelay={100}
              />
              <AimItem
                iconClass="fas fa-user-plus"
                title="Evangelism & Outreach"
                description="To reach out to non-believers within the university and beyond, sharing the Gospel through various initiatives."
                aosDelay={200}
              />
              <AimItem
                iconClass="fas fa-users-line"
                title="Fellowship & Unity"
                description="To foster a strong sense of community, encouraging members to live as one body of Christ, supporting each other."
                aosDelay={300}
              />
              <AimItem
                iconClass="fas fa-handshake"
                title="Leadership Development"
                description="To identify, train, and equip student leaders with spiritual and practical skills for effective service within and outside the Union."
                aosDelay={400}
              />
              <AimItem
                iconClass="fas fa-graduation-cap"
                title="Academic Excellence"
                description="To encourage members to excel in their academic pursuits as a testimony to God's glory and a means of impacting society."
                aosDelay={500}
              />
              <AimItem
                iconClass="fas fa-hands-holding-circle"
                title="Social Responsibility"
                description="To engage in community service and social justice initiatives, reflecting Christ's love and compassion."
                aosDelay={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aims;
