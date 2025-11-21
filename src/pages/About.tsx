import React, {useEffect} from "react";
import { usePageEffects } from "../hooks/usePageEffects";
import "../styles/about.css";
import AOS from "aos";
import "aos/dist/aos.css";


// Import sections
import Navbar from "@/components/About/Navbar";
import HeroSection from "../components/About/HeroSection";
import Introduction from "../components/About/Introduction";
import GuidingPrinciples from "../components/About/GuidingPrinciples";
import Aims from "../components/About/Aims";
import DoctrinalBasis from "../components/About/DoctrinalBasis";
import StructureLeadership from "../components/About/StructureLeadership";
import ExecutiveCommittee from "../components/About/ExecutiveCommittee";
import WhyJoin from "../components/About/WhyJoin";


const About: React.FC = () => {
  usePageEffects();

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
      <Introduction />
      <GuidingPrinciples />
      <Aims />
      <DoctrinalBasis />
      <StructureLeadership />
      <ExecutiveCommittee />
      <WhyJoin />
    </>
  );
};

export default About;
