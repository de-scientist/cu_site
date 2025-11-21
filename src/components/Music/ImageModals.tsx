import React from "react";

const ImageModals: React.FC = () => {
  return (
    <>
      {/* Choir Modal */}
      <div className="modal fade" id="imageModal1" tabIndex={-1} aria-labelledby="imageModal1Label" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="imageModal1Label">MUTCU Choir</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
              <img src="https://placehold.co/1600x900/ff9700/ffffff?text=Choir+Singing" alt="MUTCU Choir" className="img-fluid rounded-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Praise and Worship Modal */}
      <div className="modal fade" id="imageModal2" tabIndex={-1} aria-labelledby="imageModal2Label" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="imageModal2Label">MUTCU Praise and Worship</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
              <img src="https://placehold.co/1600x900/30d5c8/ffffff?text=Praise+and+Worship" alt="MUTCU Praise and Worship Team" className="img-fluid rounded-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Band Modal */}
      <div className="modal fade" id="imageModal3" tabIndex={-1} aria-labelledby="imageModal3Label" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="imageModal3Label">MUTCU Band</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
              <img src="https://placehold.co/1600x900/ff1229/ffffff?text=Band+Playing" alt="MUTCU Band" className="img-fluid rounded-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Instrumentalists Modal */}
      <div className="modal fade" id="imageModal4" tabIndex={-1} aria-labelledby="imageModal4Label" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="imageModal4Label">MUTCU Instrumentalists</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
              <img src="https://placehold.co/1600x900/04003d/ffffff?text=Instrumentalists" alt="MUTCU Instrumentalists" className="img-fluid rounded-3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageModals;
