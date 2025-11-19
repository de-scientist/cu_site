import React, { useState } from "react";

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const showModal = (message: string) => {
    const modalMsg = document.getElementById("modalMessage");
    if (modalMsg) modalMsg.innerHTML = message;

    const el = document.getElementById("confirmationModal");
    if (el && (window as any).bootstrap) {
      const modal = new (window as any).bootstrap.Modal(el);
      modal.show();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    console.log("Newsletter Email Submitted:", email);

    showModal(
      "<p>Thank you for subscribing to our newsletter! You will now receive updates, devotionals, and event alerts.</p>"
    );

    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 rounded-3 shadow-lg"
      aria-label="Newsletter signup"
    >
      <div className="mb-4">
        <label htmlFor="newsletterEmail" className="form-label">
          Email Address <span className="text-warning">*</span>
        </label>

        <input
          id="newsletterEmail"
          type="email"
          className={`form-control ${error ? "is-invalid" : ""}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@example.com"
        />

        {error && <div className="invalid-feedback">{error}</div>}
      </div>

      <div className="d-grid">
        <button className="btn btn-primary btn-lg" type="submit">
          Subscribe <i className="fas fa-envelope-open-text ms-2"></i>
        </button>
      </div>
    </form>
  );
};

export default NewsletterForm;
