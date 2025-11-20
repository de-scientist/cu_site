// usePageEffects.ts
import { useEffect } from "react";
import AOS from "aos";

declare const bootstrap: any; // bootstrap modal/collapse typing workaround

export const usePageEffects = () => {
  useEffect(() => {
    // ----------------------------
    // AOS Initialization
    // ----------------------------
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });

    // ----------------------------
    // Navbar Scrolled Shadow Effect
    // ----------------------------
    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // ----------------------------
    // Smooth Scroll for anchor links (#section)
    // ----------------------------
    const smoothLinks = document.querySelectorAll(
      'a.nav-link[href^="#"], .btn[href^="#"]'
    );

    const smoothScrollHandler = (e: Event) => {
      const anchor = e.currentTarget as HTMLAnchorElement;
      const targetId = anchor.getAttribute("href") || "";

      if (targetId.startsWith("#")) {
        e.preventDefault();

        const targetElement = document.querySelector(targetId);
        const navbarHeight = navbar?.clientHeight || 0;

        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight,
            behavior: "smooth",
          });

          // close mobile navbar after click
          const navbarCollapse = document.getElementById("navbarNav");
          if (
            navbarCollapse &&
            navbarCollapse.classList.contains("show") &&
            typeof bootstrap !== "undefined"
          ) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
              toggle: false,
            });
            bsCollapse.hide();
          }
        }
      }
    };

    smoothLinks.forEach((anchor) => {
      anchor.addEventListener("click", smoothScrollHandler);
    });

    // ----------------------------
    // Prayer Request Form Logic
    // ----------------------------
    const prayerForm = document.getElementById("prayerForm") as HTMLFormElement | null;
    if (prayerForm) {
      prayerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const prayerRequestInput = document.getElementById("prayerRequest") as HTMLInputElement;
        const modalMessage = document.getElementById("modalMessage");
        const confirmationModal = new bootstrap.Modal(
          document.getElementById("confirmationModal")
        );

        if (prayerRequestInput.value.trim() === "") {
          prayerRequestInput.classList.add("is-invalid");
          return;
        } else {
          prayerRequestInput.classList.remove("is-invalid");
        }

        console.log("Prayer Request Submitted:", {
          name: (document.getElementById("prayerName") as HTMLInputElement)?.value,
          request: prayerRequestInput.value,
        });

        if (modalMessage) {
          modalMessage.innerHTML =
            "<p>Thank you for your prayer request! Our Prayer Ministry will intercede for you.</p>";
        }

        confirmationModal.show();
        prayerForm.reset();
      });
    }

    // ----------------------------
    // Newsletter Form Logic
    // ----------------------------
    const newsletterForm = document.getElementById("newsletterForm") as HTMLFormElement | null;

    if (newsletterForm) {
      newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const newsletterEmailInput = document.getElementById(
          "newsletterEmail"
        ) as HTMLInputElement;

        const modalMessage = document.getElementById("modalMessage");
        const confirmationModal = new bootstrap.Modal(
          document.getElementById("confirmationModal")
        );

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(newsletterEmailInput.value.trim())) {
          newsletterEmailInput.classList.add("is-invalid");
          return;
        } else {
          newsletterEmailInput.classList.remove("is-invalid");
        }

        console.log("Newsletter Signup Email:", newsletterEmailInput.value);

        if (modalMessage) {
          modalMessage.innerHTML =
            "<p>Thank you for subscribing to our newsletter! You'll receive our latest updates directly in your inbox.</p>";
        }

        confirmationModal.show();
        newsletterForm.reset();
      });
    }

    // Cleanup all listeners on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      smoothLinks.forEach((anchor) =>
        anchor.removeEventListener("click", smoothScrollHandler)
      );
    };
  }, []);
};
