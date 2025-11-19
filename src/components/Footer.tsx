import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer py-5" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="footer-title">About MUTCU</h5>
            <p className="footer-text">Murang’a University of Technology Christian Union is a non-denominational community dedicated to inspiring love, hope, and godliness through faith, unity, and service.</p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/ministries">Ministries</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="footer-title">Connect With Us</h5>
            <p className="footer-contact"><i className="fas fa-map-marker-alt me-2"></i> Murang’a University of Technology, Murang’a, Kenya</p>
            <p className="footer-contact"><i className="fas fa-phone me-2"></i> +254 712 345 678</p>
            <p className="footer-contact"><i className="fas fa-envelope me-2"></i> info@mutcu.ac.ke</p>
            <div className="social-icons mt-3">
              <a href="#" className="me-3" aria-label="Facebook"><i className="fab fa-facebook-f fa-lg"></i></a>
              <a href="#" className="me-3" aria-label="Instagram"><i className="fab fa-instagram fa-lg"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter fa-lg"></i></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-5 border-top pt-4">
          <p className="footer-text mb-1">&copy; {new Date().getFullYear()} Murang’a University of Technology Christian Union. All rights reserved.</p>
          <p className="footer-text">Designed by MUTCU Tech Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
