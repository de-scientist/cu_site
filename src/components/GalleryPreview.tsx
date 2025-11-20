// GallerySection.tsx
import React from "react";

const GalleryPreview: React.FC = () => {
  return (
    <section className="gallery-section py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-center">Our Gallery</h2>
        <p className="text-center lead mb-5">
          Moments from our fellowship, events, and outreach activities.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-3 mb-4" data-aos="zoom-in" data-aos-delay={100}>
            <a href="gallery.html" className="gallery-item d-block rounded shadow-sm overflow-hidden">
              <img src="assets/images/music1.jpg" className="img-fluid" alt="Worship Service" />
              <div className="gallery-overlay">
                <span className="gallery-text">
                  <i className="fas fa-search-plus"></i> Worship Service
                </span>
              </div>
            </a>
          </div>

          <div className="col-md-6 col-lg-3 mb-4" data-aos="zoom-in" data-aos-delay={200}>
            <a href="gallery.html" className="gallery-item d-block rounded shadow-sm overflow-hidden">
              <img src="assets/images/mission1.jpg" className="img-fluid" alt="Prison Outreach" />
              <div className="gallery-overlay">
                <span className="gallery-text">
                  <i className="fas fa-search-plus"></i> Evangelism
                </span>
              </div>
            </a>
          </div>

          <div className="col-md-6 col-lg-3 mb-4" data-aos="zoom-in" data-aos-delay={300}>
            <a href="gallery.html" className="gallery-item d-block rounded shadow-sm overflow-hidden">
              <img src="assets/images/film1.jpg" className="img-fluid" alt="Creative Night" />
              <div className="gallery-overlay">
                <span className="gallery-text">
                  <i className="fas fa-search-plus"></i> Creative Night
                </span>
              </div>
            </a>
          </div>

          <div className="col-md-6 col-lg-3 mb-4" data-aos="zoom-in" data-aos-delay={400}>
            <a href="gallery.html" className="gallery-item d-block rounded shadow-sm overflow-hidden">
              <img src="assets/images/bs1.jpg" className="img-fluid" alt="Bible Study" />
              <div className="gallery-overlay">
                <span className="gallery-text">
                  <i className="fas fa-search-plus"></i> Bible Study
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className="text-center mt-4" data-aos="zoom-in" data-aos-delay={500}>
          <a href="gallery.html" className="btn btn-secondary btn-lg">
            View Full Gallery <i className="fas fa-images ms-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
