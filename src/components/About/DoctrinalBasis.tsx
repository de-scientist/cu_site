// DoctrinalBasis.tsx
import React from "react";

interface DoctrinalItemProps {
  text: string;
  aosDelay: number;
}

const DoctrinalItem: React.FC<DoctrinalItemProps> = ({ text, aosDelay }) => {
  return (
    <li data-aos="fade-right" data-aos-delay={aosDelay}>
      <i className="fas fa-check-circle me-2"></i> {text}
    </li>
  );
};

const DoctrinalBasis: React.FC = () => {
  const doctrinalPoints = [
    "The unity of the Father, the Son and the Holy Spirit in the Godhead.",
    "The sovereignty of God in creation, revelation, redemption and final judgment.",
    "The divine inspiration and infallibility of the Holy Scripture as originally given, and its supreme authority in all matters of faith and conduct.",
    "The universal sinfulness and guilt of all men since the fall, rendering them subject to God’s wrath and condemnation.",
    "Redemption from the guilt, penalty, dominion and pollution of sin, solely through the sacrificial death (as our representative and substitute) of the Lord Jesus Christ, the incarnate Son of God.",
    "The bodily resurrection of the Lord Jesus Christ from the dead and His ascension to the right hand of God the Father.",
    "The presence and power of the Holy Spirit in the work of regeneration.",
    "The justification of the sinner by grace alone through faith alone.",
    "The indwelling and work of the Holy Spirit in the believer.",
    "The one Holy Universal Church which is the Body of Christ and to which all true believers belong.",
    "The expectation of the personal, visible return of the Lord Jesus Christ."
  ];

  return (
    <section className="py-5 doctrinal-section text-white">
      <div className="container">
        <h2 className="section-title text-center text-white">Our Doctrinal Basis</h2>
        <p className="text-center lead mb-5 text-white-50">
          Our beliefs are founded on the fundamental truths of the Holy Scripture, guiding all our activities and teachings.
        </p>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="doctrinal-content p-4 rounded-3 shadow-lg" data-aos="fade-up" data-aos-delay={100}>
              <p>
                The Murang'a University of Technology Christian Union believes in and holds to the following fundamental truths:
              </p>
              <ul className="list-unstyled doctrinal-list">
                {doctrinalPoints.map((point, index) => (
                  <DoctrinalItem key={index} text={point} aosDelay={200 + index * 100} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctrinalBasis;
