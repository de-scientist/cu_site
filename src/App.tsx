import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';

import SiteNavbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Ministries from './pages/Ministries';
import MusicMinistryPage from './pages/MusicMinistryPage';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import './index.css';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <SiteNavbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path='/music' element={<MusicMinistryPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>

      <Footer />
      {/* Global confirmation modal (Bootstrap markup - will be controlled programmatically) */}
      <div className="modal fade" id="confirmationModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-3 shadow-lg">
            <div className="modal-header bg-primary-dark text-white border-0 rounded-top-3">
              <h5 className="modal-title">Thank You!</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 text-center">
              <i className="fas fa-check-circle text-success fa-4x mb-3 animate-pop-in"></i>
              <div id="modalMessage" className="lead">Your submission has been received. We’ll get back to you soon! Have a blessed time ahead.</div>
            </div>
            <div className="modal-footer border-0 rounded-bottom-3">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
