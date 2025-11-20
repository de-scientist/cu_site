import React from "react";
import "../styles/index.css";

// Import Components
import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import AboutSection from "../components/AboutSection";
import CoreValues from "../components/CoreValues";
import MinistriesPreview from "../components/MinistriesPreview";
import EventsSection from "../components/EventsSection";
import PrayerRequest from "../components/PrayerRequest";
import Testimonials from "../components/Testimonials";
import GalleryPreview from "../components/GalleryPreview";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


// Import Effects Hook (navbar scroll, AOS init, smooth scroll)
import { usePageEffects } from "../hooks/usePageEffects";

const Home: React.FC = () => {
  usePageEffects(); // enables AOS + navbar scroll behavior

  return (
    <>
      <Navbar />

      <main>
        <HeroCarousel />
        <AboutSection />
        <CoreValues />
        <MinistriesPreview />
        <EventsSection />
        <PrayerRequest />
        <Testimonials />
        <GalleryPreview />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
};

export default Home;
