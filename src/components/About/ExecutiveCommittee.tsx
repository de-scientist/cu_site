import React from "react";
import { Link } from "react-router-dom";

const members = [
  { name: "Ezekiel Thaara", role: "Chairman", img: "EZEKIEL.jpg", delay: 100 },
  { name: "Jesca Kinya", role: "1st Vice Chair", img: "JES.jpg", delay: 200 },
  { name: "Martin Gitau", role: "2nd Vice Chair", img: "MARTIN.jpg", delay: 300 },
  { name: "Grace Kanyiri", role: "Secretary", img: "GRACE.jpg", delay: 400 },
  { name: "Daisy Mutheu", role: "Vice Secretary", img: "DAISY.jpg", delay: 500 },
  { name: "Joy Karimi", role: "Treasurer", img: "JOY.jpg", delay: 600 },
  { name: "Purity Njeri", role: "Bible Study & Discipleship Coordinator", img: "PURITY.jpg", delay: 700 },
  { name: "Roy Ndege", role: "Prayer Coordinator", img: "PRAYER.jpg", delay: 800 },
  { name: "Yusuf Muchiri", role: "Missions & Evangelism Coordinator", img: "YUSUF.jpg", delay: 900 },
  { name: "Jabez Ayugu", role: "Music Coordinator", img: "JABEZ.jpg", delay: 1000 },
  { name: "Joseph Mbogo", role: "Technical Coordinator", img: "JOSEPH.jpg", delay: 1100 },
  { name: "Brian Ingwee", role: "Creative Ministry Coordinator", img: "Ingwee.JPG", delay: 1200 },
];

const ExecutiveCommittee: React.FC = () => {
  return (
    <section className="py-5 executive-committee-section">
      <div className="container">
        <h2 className="section-title text-center">Meet Our Executive Committee</h2>
        <p className="text-center lead mb-5">
          Leading MUTCU for the 2024/2025 Spiritual Year.
        </p>

        <div className="row justify-content-center">

          {members.map((member, i) => (
            <div key={i} className="col-6 col-md-4 col-lg-3 mb-4"
              data-aos="zoom-in" data-aos-delay={member.delay}>

              <Link
                to={`/committee/${member.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="executive-member-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100"
              >
                <img
                  src={`/assets/images/${member.img}`}
                  alt={member.name}
                  className="img-fluid rounded-circle mb-3 border border-3 border-orange"
                />
                <h4 className="member-name">{member.name}</h4>
                <p className="member-role">{member.role}</p>
              </Link>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ExecutiveCommittee;
