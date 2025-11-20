// Navbar.tsx
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" aria-label="Main navigation">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img src="assets/images/best logo.png" alt="MUTCU Logo" height={60} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
            <li className="nav-item"><a className="nav-link active" href="ministries.html" aria-current="page">Ministries</a></li>
            <li className="nav-item"><a className="nav-link" href="events.html">Events</a></li>
            <li className="nav-item"><a className="nav-link" href="resources.html">Resources</a></li>
            <li className="nav-item"><a className="nav-link" href="gallery.html">Gallery</a></li>
            <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
