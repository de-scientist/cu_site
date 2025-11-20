import React from "react";

const doctrines = [
  "The unity of the Father, Son, and Holy Spirit...",
  "The sovereignty of God in creation...",
  "The divine inspiration and infallibility of Scripture...",
  "The universal sinfulness of man...",
  "Redemption through the death of Jesus Christ...",
  "The bodily resurrection of Christ...",
  "The presence and power of the Holy Spirit...",
  "Justification by grace through faith...",
  "The indwelling of the Holy Spirit...",
  "The one Holy Universal Church...",
  "The visible return of Jesus Christ..."
];

const DoctrinalBasis: React.FC = () => {
  return (
    <section className="py-5 doctrinal-section text-white">
      <div className="container">
        <h2 className="section-title text-center text-white">Our Doctrinal Basis</h2>
        <p className="text-center lead mb-5 text-white-50">
          Our beliefs are founded on the fundamental truths...
        </p>

        <div className="row justify-content-center">
          <div className="col-lg-10">

            <div className="doctrinal-content p-4 rounded-3 shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <ul className="list-unstyled doctrinal-list">
                {doctrines.map((item, i) => (
                  <li key={i} data-aos="fade-right" data-aos-delay={200 + i * 100}>
                    <i className="fas fa-check-circle me-2"></i> {item}
                  </li>
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
