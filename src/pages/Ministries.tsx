// MinistriesPage.tsx
import React, { useEffect } from "react";
import Navbar from "@/components/Ministry/Navbar";
import HeroSection from "@/components/Ministry/HeroSection";
import MinistriesOverview from "@/components/Ministry/MinistriesOverview";
import CallToAction from "@/components/Ministry/CallToAction";
import MinistryCard from "@/components/Ministry/MinistryCard";
import Footer from "@/components/Ministry/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Ministries: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, mirror: false });

    const navbar = document.querySelector(".navbar");
    const handleScroll = () => {
      if (navbar) {
        if (window.scrollY > 50) navbar.classList.add("scrolled");
        else navbar.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <MinistriesOverview />
      <CallToAction />
      <MinistryCard {...({} as any)} />
      <Footer />
    </>
  );
};

export default Ministries;
