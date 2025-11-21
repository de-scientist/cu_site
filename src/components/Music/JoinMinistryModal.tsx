import React, { useState } from "react";

const JoinMinistryModal: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Keep original behaviour: show confirmation message in modal.
    setSubmitted(true);
    // optionally: clear fields, or you can keep them — original HTML showed a confirmation block
  };

  return (
    <div className="modal fade" id="joinMinistryModal" tabIndex={-1} aria-labelledby="joinMinistryModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-primary-dark text-white">
            <h5 className="modal-title" id="joinMinistryModalLabel">Join Music Ministry</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {!submitted ? (
              <>
                <p className="text-center mb-4">Fill out the form below to express your interest in joining the Music Ministry. We'll get in touch with you shortly!</p>
                <form id="musicMinistryJoinForm" className="needs-validation" noValidate onSubmit={onSubmit}>
                  <div className="mb-3">
                    <label htmlFor="joinName" className="form-label">Your Full Name</label>
                    <input type="text" className="form-control" id="joinName" required placeholder="Jabez Ayugu" />
                    <div className="invalid-feedback">Please enter your full name.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="joinEmail" className="form-label">Your Email</label>
                    <input type="email" className="form-control" id="joinEmail" required placeholder="jabezayugu@mut.ac.ke" />
                    <div className="invalid-feedback">Please enter a valid university email address.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="joinInterest" className="form-label">Area of Interest</label>
                    <select className="form-select" id="joinInterest" required>
                      <option value="" disabled selected>Select an area</option>
                      <option value="choir">Choir </option>
                      <option value="band">Band </option>
                      <option value="instrumentalist"> Instrumentalists</option>
                      <option value="praise-worship">Praise and Worship </option>
                      <option value="general">General Interest</option>
                    </select>
                    <div className="invalid-feedback">Please select your primary area of interest.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="joinMessage" className="form-label">Tell us about your musical experience or passion (Optional)</label>
                    <textarea className="form-control" id="joinMessage" rows={3} placeholder="e.g., I play guitar and have experience leading worship..."></textarea>
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">Submit Interest</button>
                  </div>
                </form>
              </>
            ) : (
              <div id="modalConfirmationMessage" className="mt-4 text-center">
                <i className="fas fa-check-circle fa-4x text-teal mb-3 animate-pop-in"></i>
                <p className="lead">Thank you for your interest in the Music Ministry! We've received your submission and will get in touch with you soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinMinistryModal;
