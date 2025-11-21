import React, { useEffect } from "react";
import PageHero from "@/components/Music/PageHero";
import MinistryIntro from "@/components/Music/MinistryIntro";
import SubMinistries from "@/components/Music/SubMinistries";
import FeaturedEvents from "../components/MusicMinistry/FeaturedEvents";
import LeadershipSpotlight from "../components/MusicMinistry/LeadershipSpotlight";
import JoinMinistryCTA from "../components/MusicMinistry/JoinMinistryCTA";
import JoinMinistryModal from "../components/MusicMinistry/JoinMinistryModal";
import ImageModals from "../components/MusicMinistry/ImageModals";
import Footer from "../components/MusicMinistry/Footer";
import Navbar from "../components/Navbar";

// NOTE: developer-provided uploaded file path (transform to URL in your build if needed)
import "/mnt/data/index.css";

const MusicMinistryPage: React.FC = () => {
  useEffect(() => {
    // Init AOS if available (script tag approach)
    const w = window as any;
    if (w && w.AOS && typeof w.AOS.init === "function") {
      w.AOS.init({ duration: 1000, once: true, mirror: false });
    }

    // Navbar scroll behaviour
    const navbar = document.querySelector(".navbar");
    const onScroll = () => {
      if (!navbar) return;
      if (window.scrollY > 50) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <PageHero />
        <MinistryIntro />
        <SubMinistries />
        <FeaturedEvents />
        <LeadershipSpotlight />
        <JoinMinistryCTA />
        <JoinMinistryModal />
        <ImageModals />
      </main>

      <Footer />
    </>
  );
};

export default MusicMinistryPage;
