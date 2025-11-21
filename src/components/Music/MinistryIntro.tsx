import React from "react";

const MinistryIntro: React.FC = () => {
  return (
    <section className="py-5 ministry-intro-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-4 mb-lg-0" data-aos="fade-right" data-aos-delay="100">
            <h2 className="section-title text-start">About the Music Ministry</h2>
            <p className="lead">
              The Music Ministry of MUTCU is dedicated to leading the Union in vibrant and spiritually uplifting worship experiences. Comprising various teams including the choir, band, instrumentalists, and praise and worship leaders, this ministry plays a crucial role in creating an atmosphere where members can connect with God through music and song.
            </p>
            <p>
              Our goal is to foster a heart of worship and praise among the MUTCU family, ensuring that all musical presentations are excellent and align with the Union's spiritual goals. We believe that music is a powerful tool for evangelism, edification, and glorifying God.
            </p>
          </div>

          <div className="col-lg-5 text-center" data-aos="fade-left" data-aos-delay="200">
            <img src="/assets/images/music1.jpg" alt="Music Ministry Performance" className="img-fluid rounded-3 shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinistryIntro;
