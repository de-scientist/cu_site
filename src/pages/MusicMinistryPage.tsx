import React, { useEffect } from "react";
import PageHero from "@/components/Music/PageHero";
import MinistryIntro from "@/components/Music/MinistryIntro";
import SubMinistries from "@/components/Music/SubMinistries";
import FeaturedEvents from "@/components/Music/FeaturedEvents";
import LeadershipSpotlight from "@/components/Music/LeadershipSpotlight";
import JoinMinistryCTA from "@/components/Music/JoinMinistryCTA";
import JoinMinistryModal from "@/components/Music/JoinMinistryModal";
import ImageModals from "@/components/Music/ImageModals";
import Footer from "@/components/Music/Footer";
import Navbar from "../components/Navbar";


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
