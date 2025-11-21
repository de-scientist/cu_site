import React from "react";
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
