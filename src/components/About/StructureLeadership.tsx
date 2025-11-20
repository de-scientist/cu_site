// OrganizationalStructure.tsx
import React from "react";

interface StructureCardProps {
  iconClass: string;
  title: string;
  description: string;
  aosDirection: "fade-right" | "fade-left";
  aosDelay: number;
}

const StructureCard: React.FC<StructureCardProps> = ({ iconClass, title, description, aosDirection, aosDelay }) => {
  return (
    <div className="col-md-6 mb-4" data-aos={aosDirection} data-aos-delay={aosDelay}>
      <div className="structure-card p-4 rounded-3 shadow-sm h-100">
        <i className={iconClass + " feature-icon mb-3"}></i>
        <h4 className="card-title">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

const StructureLeadership: React.FC = () => {
  return (
    <section className="py-5 structure-section bg-light">
      <div className="container">
        <h2 className="section-title text-center">Organizational Structure & Leadership</h2>
        <p className="text-center lead mb-5">
          MUTCU is a student-led organization with a robust structure ensuring effective governance and ministry.
        </p>

        <div className="row justify-content-center">
          <div className="col-lg-8" data-aos="fade-up">
            <div className="structure-overview p-4 rounded-3 shadow-lg mb-4">
              <h3 className="section-subtitle text-center mb-4">Executive Council</h3>
              <p>
                The Executive Council is the highest governing leadership body of MUTCU, responsible for overseeing all Union activities and ensuring adherence to the constitution and policies. It comprises appointed student leaders who serve diligently to guide the Union's spiritual and administrative affairs.
              </p>
              <p>
                New leaders are nominated annually through a democratic and spiritually led process managed by an Electoral Commission of final-year students, involving recommendations from the general membership. A formal orientation and handing-over process ensures a smooth transition of responsibilities, fostering mentorship and continuity of institutional knowledge.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <StructureCard
            iconClass="fas fa-sitemap"
            title="Committees"
            description="The Executive Council delegates responsibilities to various committees , each focusing on specific areas of ministry such as Prayer, Music, Missions & Evangelism, Creative Arts, Technical, and Welfare. Each ministry is managed by its respective committee Coordinator, ensuring focused and efficient operations."
            aosDirection="fade-right"
            aosDelay={100}
          />
          <StructureCard
            iconClass="fas fa-users-gear"
            title="Operational Policies"
            description="All Union functions are meticulously guided by detailed operational policies for each ministry. These policies ensure accountability, transparency, and consistency in all activities, from financial procedures managed by the Treasury to asset management and event organization."
            aosDirection="fade-left"
            aosDelay={200}
          />
        </div>
      </div>
    </section>
  );
};

export default StructureLeadership;
