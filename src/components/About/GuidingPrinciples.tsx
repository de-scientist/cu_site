// GuidingPrinciples.tsx
import React from "react";

interface PrincipleCardProps {
  iconClass: string;
  title: string;
  leadText: string;
  description: string;
  aosDelay: number;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({ iconClass, title, leadText, description, aosDelay }) => {
  return (
    <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay={aosDelay}>
      <div className="principle-card p-4 rounded-3 shadow-sm h-100">
        <i className={iconClass + " feature-icon mb-3"}></i>
        <h3 className="card-title">{title}</h3>
        <p className="lead-sm">{leadText}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

const GuidingPrinciples: React.FC = () => {
  return (
    <section className="py-5 bg-light principles-section">
      <div className="container">
        <h2 className="section-title text-center">Our Guiding Principles</h2>
        <p className="text-center lead mb-5">
          Our motto, vision, and mission are interconnected, forming the bedrock of our existence.
        </p>

        <div className="row text-center">
          <PrincipleCard
            iconClass="fas fa-bullhorn"
            title="Our Motto"
            leadText='"To Inspire Love, Hope, and Godliness."'
            description="This motto serves as our daily call to action, reminding us of our core purpose in every interaction and activity."
            aosDelay={100}
          />
          <PrincipleCard
            iconClass="fas fa-eye"
            title="Our Vision"
            leadText='"To be a model Christian Union cultivating Christ-centeredness among members in impacting the society."'
            description="Our long-term aspiration is to be an exemplary union that develops deep spiritual growth and positive societal influence."
            aosDelay={200}
          />
          <PrincipleCard
            iconClass="fas fa-hands-helping"
            title="Our Mission"
            leadText='"To raise a family well-equipped in all aspects of life, exemplary to Jesus Christ, by encouraging the existence of members as one body of Christ and reaching out to non-believers within and beyond."'
            description="Our mission focuses on equipping members holistically and extending our reach to non-believers, embodying unity in Christ."
            aosDelay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default GuidingPrinciples;
