import React from 'react';

const slides = [
  {
    title: 'Inspire Love, Hope & Godliness',
    text: 'Join MUTCU to grow in faith, fellowship, and service at Murang’a University of Technology.',
    ctaPrimary: { href: '/contact', label: 'Join Us', icon: 'fa-hand-point-right' },
    ctaSecondary: { href: '/resources', label: 'Watch Live', icon: 'fa-play-circle' },
    image: '/assets/images/Lumii_20241023_192938507.jpg'
  },
  {
    title: 'We Are One, We Are MUTCU',
    text: 'A family united in Christ, reaching out to transform lives within and beyond.',
    ctaPrimary: { href: '/ministries', label: 'Explore Ministries', icon: 'fa-users-cog' },
    ctaSecondary: { href: '/events', label: 'Join an Event', icon: 'fa-calendar-alt' },
    image: '/assets/images/church2.jpg'
  },
  {
    title: 'Cultivating Christ-Centeredness',
    text: 'Our vision is to be a model Christian Union impacting society.',
    ctaPrimary: { href: '/about', label: 'Our Vision', icon: 'fa-eye' },
    ctaSecondary: { href: '/gallery', label: 'View Gallery', icon: 'fa-images' },
    image: '/assets/images/church3.jpg'
  }
];

const HeroCarousel: React.FC = () => {
  return (
    <section className="hero-section">
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
        <div className="carousel-inner">
          {slides.map((s, i) => (
            <div key={i} className={'carousel-item' + (i === 0 ? ' active' : '')}>
              <div className="hero-bg" style={{ backgroundImage: `url(${s.image})` }} />
              <div className="hero-overlay" />
              <div className="hero-content text-center text-white" data-aos="fade-up">
                <h1 className="display-3 mb-4" data-aos="zoom-in" data-aos-delay="200">{s.title}</h1>
                <p className="lead mb-5" data-aos="zoom-in" data-aos-delay="400">{s.text}</p>
                <div data-aos="zoom-in" data-aos-delay="600">
                  <a href={s.ctaPrimary.href} className="btn btn-primary btn-lg me-3">{s.ctaPrimary.label} <i className={`fas ${s.ctaPrimary.icon} ms-2`}></i></a>
                  <a href={s.ctaSecondary.href} className="btn btn-secondary btn-lg">{s.ctaSecondary.label} <i className={`fas ${s.ctaSecondary.icon} ms-2`}></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev" aria-label="Previous slide">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next" aria-label="Next slide">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;
