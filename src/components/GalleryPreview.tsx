import React from "react";

const GalleryPreview: React.FC = () => {
  return (
    <section className="gallery-preview-section py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-center mb-4">Gallery</h2>
        <p className="text-center lead mb-5">
          A glimpse of our worship, fellowship, and ministry moments.
        </p>

        <div className="row g-3">

          <div className="col-md-4">
            <img src="/assets/images/gallery1.jpg" className="img-fluid rounded shadow-sm" alt="Gallery 1" />
          </div>

          <div className="col-md-4">
            <img src="/assets/images/gallery2.jpg" className="img-fluid rounded shadow-sm" alt="Gallery 2" />
          </div>

          <div className="col-md-4">
            <img src="/assets/images/gallery3.jpg" className="img-fluid rounded shadow-sm" alt="Gallery 3" />
          </div>

        </div>

        <div className="text-center mt-4">
          <a href="/gallery" className="btn btn-primary btn-lg">
            View Full Gallery <i className="fas fa-images ms-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
