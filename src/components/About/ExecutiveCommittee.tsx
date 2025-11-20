// ExecutiveCommittee.tsx
import React from "react";

interface ExecutiveMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  profileLink: string;
  borderColorClass: string;
  aosDelay: number;
}

const ExecutiveMemberCard: React.FC<ExecutiveMemberProps> = ({
  name,
  role,
  imageUrl,
  profileLink,
  borderColorClass,
  aosDelay,
}) => {
  return (
    <div className="col-6 col-md-4 col-lg-3 mb-4" data-aos="zoom-in" data-aos-delay={aosDelay}>
      <a
        href={profileLink}
        className="executive-member-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100"
      >
        <img
          src={imageUrl}
          alt={name}
          className={`img-fluid rounded-circle mb-3 border border-3 ${borderColorClass}`}
        />
        <h4 className="member-name">{name}</h4>
        <p className="member-role">{role}</p>
      </a>
    </div>
  );
};

const ExecutiveCommittee: React.FC = () => {
  const members: ExecutiveMemberProps[] = [
    {
      name: "Ezekiel Thaara",
      role: "Chairman",
      imageUrl: "assets/images/EZEKIEL.jpg",
      profileLink: "committees/chairman.html",
      borderColorClass: "border-orange",
      aosDelay: 100,
    },
    {
      name: "Jesca Kinya",
      role: "1st Vice Chair",
      imageUrl: "assets/images/JES.jpg",
      profileLink: "committees/vice-chair1.html",
      borderColorClass: "border-navy",
      aosDelay: 200,
    },
    {
      name: "Martin Gitau",
      role: "2nd Vice Chair",
      imageUrl: "assets/images/MARTIN.jpg",
      profileLink: "committees/vice-chair2.html",
      borderColorClass: "border-orange",
      aosDelay: 300,
    },
    {
      name: "Grace Kanyiri",
      role: "Secretary",
      imageUrl: "assets/images/GRACE.jpg",
      profileLink: "committees/secretary.html",
      borderColorClass: "border-navy",
      aosDelay: 400,
    },
    {
      name: "Daisy Mutheu",
      role: "Vice Secretary",
      imageUrl: "assets/images/DAISY.jpg",
      profileLink: "committees/vice-secretary.html",
      borderColorClass: "border-orange",
      aosDelay: 500,
    },
    {
      name: "Joy Karimi",
      role: "Treasurer",
      imageUrl: "assets/images/JOY.jpg",
      profileLink: "committees/treasurer.html",
      borderColorClass: "border-navy",
      aosDelay: 600,
    },
    {
      name: "Purity Njeri",
      role: "Bible Study & Discipleship  Coordinator",
      imageUrl: "assets/images/PURITY.jpg",
      profileLink: "committees/bible-study.html",
      borderColorClass: "border-orange",
      aosDelay: 700,
    },
    {
      name: "Roy Ndege",
      role: "Prayer Coordinator",
      imageUrl: "assets/images/PRAYER.jpg",
      profileLink: "committees/prayer.html",
      borderColorClass: "border-navy",
      aosDelay: 800,
    },
    {
      name: "Yusuf Muchiri",
      role: "Missions & Evangelism Coordinator",
      imageUrl: "assets/images/YUSUF.jpg",
      profileLink: "committees/missions.html",
      borderColorClass: "border-orange",
      aosDelay: 900,
    },
    {
      name: "Jabez Ayugu",
      role: "Music Coordinator",
      imageUrl: "assets/images/JABEZ.jpg",
      profileLink: "committees/music.html",
      borderColorClass: "border-navy",
      aosDelay: 1000,
    },
    {
      name: "Joseph Mbogo",
      role: "Technical Coordinator",
      imageUrl: "assets/images/JOSEPH.jpg",
      profileLink: "committees/technical.html",
      borderColorClass: "border-orange",
      aosDelay: 1100,
    },
    {
      name: "Brian Ingwee",
      role: "Creative Ministry Coordinator",
      imageUrl: "assets/images/Ingwee.JPG",
      profileLink: "committees/creative.html",
      borderColorClass: "border-navy",
      aosDelay: 1200,
    },
  ];

  return (
    <section className="py-5 executive-committee-section">
      <div className="container">
        <h2 className="section-title text-center">Meet Our Executive Committee</h2>
        <p className="text-center lead mb-5">
          Leading MUTCU with dedication and vision for the 2024/2025 Spiritual Year.
        </p>

        <div className="row justify-content-center">
          {members.map((member, index) => (
            <ExecutiveMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveCommittee;
