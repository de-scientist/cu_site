import React, { useState } from 'react';

const PrayerForm: React.FC = () => {
  const [name, setName] = useState('');
  const [request, setRequest] = useState('');
  const [error, setError] = useState('');

  const showModal = (message: string) => {
    const modalMsg = document.getElementById('modalMessage');
    if (modalMsg) modalMsg.innerHTML = message;
    const el = document.getElementById('confirmationModal');
    if (el && (window as any).bootstrap) {
      const modal = new (window as any).bootstrap.Modal(el);
      modal.show();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (request.trim() === '') {
      setError('Please enter your prayer request.');
      return;
    }
    setError('');
    console.log('Prayer Request Submitted:', { name, request });
    showModal('<p>Thank you for your prayer request! Our Prayer Ministry will intercede for you.</p>');
    setName('');
    setRequest('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 rounded-3 shadow-lg" aria-label="Prayer request form">
      <div className="mb-4">
        <label htmlFor="prayerName" className="form-label">Your Name (Optional)</label>
        <input id="prayerName" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
        <div className="form-text">You may submit anonymously if preferred.</div>
      </div>

      <div className="mb-4">
        <label htmlFor="prayerRequest" className="form-label">Prayer Request <span className="text-danger">*</span></label>
        <textarea id="prayerRequest" className={`form-control ${error ? 'is-invalid' : ''}`} rows={6} value={request} onChange={(e) => setRequest(e.target.value)} placeholder="Share your prayer request here..." />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>

      <div className="d-grid">
        <button className="btn btn-primary btn-lg" type="submit">Submit Request <i className="fas fa-paper-plane ms-2"></i></button>
      </div>
    </form>
  );
};

export default PrayerForm;
