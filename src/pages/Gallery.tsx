import React from 'react';

const Gallery: React.FC = () => {
  return (
    <section className="gallery-section py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-center">Our Gallery</h2>
        <p className="text-center lead mb-5">Moments from our fellowship, events, and outreach activities.</p>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-3 mb-4">
            <a href="#" className="gallery-item d-block rounded shadow-sm overflow-hidden">
              <img src="/assets/images/music1.jpg" className="img-fluid" alt="Worship Service" />
              <div className="gallery-overlay"><span className="gallery-text"><i className="fas fa-search-plus"></i> Worship Service</span></div>
            </a>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <a href="#" className="gallery-item d-block rounded shadow-sm overflow-hidden">
              <img src="/assets/images/mission1.jpg" className="img-fluid" alt="Mission" />
              <div className="gallery-overlay"><span className="gallery-text"><i className="fas fa-search-plus"></i> Evangelism</span></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
