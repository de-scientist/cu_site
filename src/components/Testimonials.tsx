import React from "react";

interface Testimonial {
  name: string;
  role: string;
  message: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John Mwangi",
    role: "Worship Team • Tenor",
    message:
      "MUTCU gave me a family when campus felt overwhelming. The worship team helped me discover my purpose and grow spiritually.",
    image: "/assets/images/music1.jpg",
  },
  {
    name: "Grace Njeri",
    role: "Bible Study Leader",
    message:
      "Through Bible study and fellowship, I found direction, healing, and a deeper understanding of God's voice.",
    image: "/assets/images/bs1.jpg",
  },
  {
    name: "Daniel Kiragu",
    role: "Missions & Evangelism",
    message:
      "Going for missions transformed how I see service. I encountered God through people, stories, and community outreach.",
    image: "/assets/images/mission1.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-center">What Members Say</h2>
        <p className="text-center lead mb-5">
          Stories of growth, transformation, and grace within the MUTCU family.
        </p>

        <div className="row justify-content-center">
          {testimonials.map((t, index) => (
            <div
              className="col-md-6 col-lg-4 mb-4"
              key={index}
              data-aos="zoom-in"
            >
              <div className="card testimonial-card shadow-sm h-100 p-4 text-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="rounded-circle shadow-sm mb-4"
                  width={110}
                  height={110}
                  style={{ objectFit: "cover" }}
                />

                <p className="testimonial-message fst-italic mb-4">
                  “{t.message}”
                </p>

                <h5 className="testimonial-name">{t.name}</h5>
                <p className="testimonial-role text-muted">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
