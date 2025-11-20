// MinistriesOverview.tsx
import React from "react";
import MinistryCard from "./MinistryCard";

const MinistriesOverview: React.FC = () => {
  const ministries = [
    {
      imgSrc: "assets/images/music1.jpg",
      altText: "Music Ministry",
      iconClass: "fas fa-music",
      title: "Music Ministry",
      description: "Leading and ministering worship through Choir, Band, Instrumentalism and Praise & Wowrship.",
      link: "ministries/music-ministry.html",
      aosDelay: 100,
    },
    {
      imgSrc: "assets/images/bs1.jpg",
      altText: "Bible Study & Discipleship",
      iconClass: "fas fa-book-open",
      title: "Bible Study & Discipleship",
      description: "Deepening faith through small groups, nurturing classes for new believers, and intensive training programs.",
      link: "ministries/bible-study-discipleship.html",
      aosDelay: 200,
    },
    {
      imgSrc: "assets/images/mission1.jpg",
      altText: "Missions & Evangelism",
      iconClass: "fas fa-globe",
      title: "Missions & Evangelism",
      description: "Sharing the Gospel through campus outreach, annual missions, and hope ministry visits to prisons and hospitals.",
      link: "ministries/missions-evangelism.html",
      aosDelay: 300,
    },
    {
      imgSrc: "assets/images/dance3.jpg",
      altText: "Creative Arts Ministry",
      iconClass: "fas fa-paint-brush",
      title: "Creative Arts Ministry (CREAM)",
      description: "Expressing faith through drama, dance, spoken word, and other artistic talents.",
      link: "ministries/creative-arts.html",
      aosDelay: 400,
    },
    {
      imgSrc: "assets/images/church2.jpg",
      altText: "Prayer Ministry",
      iconClass: "fas fa-pray",
      title: "Prayer Ministry",
      description: "Cultivating a deep culture of prayer and intercession for the Union, university, and wider community.",
      link: "ministries/prayer-ministry.html",
      aosDelay: 500,
    },
    {
      imgSrc: "assets/images/prayer1.jpg",
      altText: "Welfare Committee",
      iconClass: "fas fa-hand-holding-heart",
      title: "Welfare Committee",
      description: "Actively raising funds and providing support to members facing financial and personal difficulties.",
      link: "ministries/welfare-committee.html",
      aosDelay: 600,
    },
    {
      imgSrc: "assets/images/tlp.jpg",
      altText: "Hospitality Ministry",
      iconClass: "fas fa-handshake-angle",
      title: "Hospitality Ministry",
      description: "Ensuring a welcoming environment for all members and visitors, managing amenities and visitor care.",
      link: "ministries/hospitality-ministry.html",
      aosDelay: 700,
    },
    {
      imgSrc: "assets/images/mbbc1.jpg",
      altText: "Technical Department",
      iconClass: "fas fa-laptop-code",
      title: "Technical Department",
      description: "Providing essential technical support for all Union activities, including sound, Publicity, Ushering and live streaming.",
      link: "ministries/technical-department.html",
      aosDelay: 800,
    },
    {
      imgSrc: "assets/images/prayer1.jpg",
      altText: "Resource Mobilisation Committee",
      iconClass: "fas fa-lightbulb",
      title: "Resource Mobilisation Commitee (RMC)",
      description: "Working in conjunction with all other ministries to enhance the transformative gospel through creative and innovative ways of acquiring resources.",
      link: "ministries/RMC.html",
      aosDelay: 900,
    },
  ];

  return (
    <section className="py-5 ministries-overview-section">
      <div className="container">
        <h2 className="section-title text-center">Explore Our Diverse Ministries</h2>
        <p className="text-center lead mb-5">
          MUTCU's ministries are the heartbeat of our Union, providing avenues for spiritual growth, service, and community impact. Each ministry operates under a dedicated committee, ensuring focused and effective work in alignment with our motto, vision, and mission.
        </p>
        <div className="row justify-content-center">
          {ministries.map((ministry, index) => (
            <MinistryCard key={index} {...ministry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinistriesOverview;
