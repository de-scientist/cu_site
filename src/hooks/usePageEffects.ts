// src/hooks/usePageEffects.ts
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Declare bootstrap (from window) so TS doesn't complain
declare global {
  interface Window {
    bootstrap?: any;
  }
}

export const usePageEffects = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });

    // NAVBAR SCROLL BEHAVIOUR
    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar?.classList.add("scrolled");
      } else {
        navbar?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // ensure correct on page load

    // SMOOTH SCROLL
    const anchors = document.querySelectorAll(
      'a.nav-link[href^="#"], .btn[href^="#"]'
    );

    const handleAnchorClick = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const href = target.getAttribute("href") || "";
      if (!href.startsWith("#")) return;

      e.preventDefault();
      const element = document.querySelector(href);
      const navbarHeight =
        document.querySelector(".navbar")?.clientHeight || 0;

      if (element) {
        window.scrollTo({
          top: (element as HTMLElement).offsetTop - navbarHeight,
          behavior: "smooth",
        });

        // Close mobile menu
        const menu = document.getElementById("navbarNav");
        if (menu?.classList.contains("show") && window.bootstrap) {
          const collapse = new window.bootstrap.Collapse(menu, {
            toggle: false,
          });
          collapse.hide();
        }
      }
    };

    anchors.forEach((anchor) =>
      anchor.addEventListener("click", handleAnchorClick)
    );

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      anchors.forEach((anchor) =>
        anchor.removeEventListener("click", handleAnchorClick)
      );
    };
  }, []);
};
